import { useLocalSearchParams, useRouter } from 'expo-router';
import EditarUsuarioScreen from '../screens/EditarUsuarioScreen';

export default function EditarPage() {
  const params = useLocalSearchParams();
  const router = useRouter();

  const usuario = {
    nombre: params.nombre || '',
    edad: params.edad || '',
    id: params.id || '',
  };

  return <EditarUsuarioScreen usuario={usuario} onBack={() => router.back()} />;
}
