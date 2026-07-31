import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, Alert, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function EditarUsuarioScreen() {
  const params = useLocalSearchParams();
  const router = useRouter();
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    if (params.nombre) setNombre(params.nombre);
    if (params.edad) setEdad(params.edad.toString());
  }, [params.nombre, params.edad]);

  const mostrarMensaje = (titulo, mensaje) => {
    if (Platform.OS === 'web') {
      window.alert(`${titulo}\n${mensaje}`);
    } else {
      Alert.alert(titulo, mensaje);
    }
  };

  const guardarCambios = async () => {
    if (nombre.trim() === '' || edad.trim() === '') {
      mostrarMensaje('Vacios', 'Debes completar el formulario');
      return;
    }

    try {
      setCargando(true);
      const base = require('../utils/apiConfig').getApiBase();
      const respuesta = await fetch(`${base}/v1/usuarios/${params.id}`, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
          Authorization: 'Basic YWRtaW46MTIzNA==',
        },
        body: JSON.stringify({ nombre, edad: Number(edad) }),
      });

      const datos = await respuesta.json();
      console.log('Respuesta API', datos);

      if (!respuesta.ok) {
        mostrarMensaje('Error', datos.detail || 'No fue posible actualizar');
        return;
      }

      mostrarMensaje('Éxito', 'Usuario actualizado correctamente');
      const detallesRuta = `/detalles?nombre=${encodeURIComponent(nombre)}&edad=${encodeURIComponent(edad)}&id=${encodeURIComponent(params.id)}`;
      router.replace(detallesRuta);
    } catch (error) {
      console.log('Error al actualizar usuario', error);
      mostrarMensaje('Error', 'No fue posible actualizar');
    } finally {
      setCargando(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.titulo}>Actualizar Usuario</Text>

        <Text style={styles.label}>Nombre</Text>
        <TextInput
          style={styles.input}
          value={nombre}
          onChangeText={setNombre}
          placeholder="Nombre"
        />

        <Text style={styles.label}>Edad</Text>
        <TextInput
          style={styles.input}
          value={edad}
          onChangeText={setEdad}
          keyboardType="numeric"
          placeholder="Edad"
        />

        <Pressable style={styles.boton} onPress={guardarCambios} disabled={cargando}>
          <Text style={styles.textoBoton}>{cargando ? 'Guardando...' : 'Guardar cambios'}</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F4F8',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 24,
    elevation: 6,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
  },
  titulo: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 24,
    textAlign: 'center',
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6B7280',
    marginBottom: 8,
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    paddingHorizontal: 16,
    backgroundColor: '#F9FAFB',
    marginBottom: 18,
    fontSize: 16,
  },
  boton: {
    backgroundColor: '#FBBF24',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  textoBoton: {
    color: '#111827',
    fontSize: 16,
    fontWeight: '700',
  },
});