import { useRouter, useLocalSearchParams } from 'expo-router';
import { Alert, Platform } from 'react-native';
import DetallesUsuarioScreen from '../screens/DetallesUsuarioScreen';

export default function DetallesPage() {
  const router = useRouter();
  const { nombre, edad, id } = useLocalSearchParams();

  const usuario = {
    nombre: nombre || '',
    edad: edad ? Number(edad) : '',
    id: id || '',
  };
  const editarRuta = `/editar?nombre=${encodeURIComponent(usuario.nombre)}&edad=${encodeURIComponent(usuario.edad)}&id=${encodeURIComponent(usuario.id)}`;

  const deleteUsuario = async (usuarioId) => {
    try {
      const base = require('../utils/apiConfig').getApiBase();
      const resp = await fetch(`${base}/v1/usuarios/${usuarioId}`, {
        method: 'DELETE',
        headers: {
          Authorization: 'Basic YWRtaW46MTIzNA==',
        },
      });
      const data = await resp.json();
      if (!resp.ok) {
        if (Platform.OS === 'web') {
          window.alert(data.detail || 'No fue posible eliminar');
        } else {
          Alert.alert('Error', data.detail || 'No fue posible eliminar');
        }
        return;
      }
      if (Platform.OS === 'web') {
        window.alert('Usuario eliminado correctamente');
      } else {
        Alert.alert('Éxito', 'Usuario eliminado correctamente');
      }
      // Navegar a la lista de usuarios; la pantalla de lista refresca en focus
      router.replace('/consulta');
    } catch (error) {
      console.log('Error al eliminar usuario', error);
      if (Platform.OS === 'web') {
        window.alert('No fue posible eliminar');
      } else {
        Alert.alert('Error', 'No fue posible eliminar');
      }
    }
  };

  return (
    <DetallesUsuarioScreen
      usuario={usuario}
      onBack={() => router.back()}
      onEdit={() => router.push(editarRuta)}
      onDelete={(id) => deleteUsuario(id)}
    />
  );
}
