import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  FlatList,
  Alert,
  ActivityIndicator,
  StyleSheet,
  ImageBackground,
} from 'react-native';

export default function RegistroLibrosScreen() {
  const [showSplash, setShowSplash] = useState(true);

  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [genero, setGenero] = useState('');

  const [libros, setLibros] = useState([]);
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const agregarLibro = () => {
    if (!titulo.trim() || !autor.trim() || !genero.trim()) {
      Alert.alert('Campos incompletos', 'Todos los campos son obligatorios.');
      return;
    }

    setCargando(true);

    setTimeout(() => {
      const nuevoLibro = {
        id: Date.now().toString(),
        titulo: titulo.trim(),
        autor: autor.trim(),
        genero: genero.trim(),
      };

      setLibros(prev => [nuevoLibro, ...prev]);

      setTitulo('');
      setAutor('');
      setGenero('');

      setCargando(false);

      Alert.alert('Éxito', 'Libro agregado correctamente.');
    }, 4000);
  };

  if (showSplash) {
    return (
      <View style={styles.splashContainer}>
        <Text style={styles.splashTitle}>Registro de Libros Leídos</Text>
        <ActivityIndicator size="large" color="#ffffff" style={{ marginTop: 20 }} />
        <Text style={styles.splashSubtitle}>Cargando...</Text>
      </View>
    );
  }

  return (
    <ImageBackground
      source={{ uri: 'https://picsum.photos/800/1200' }}
      style={styles.background}
      resizeMode="cover"
    >
      {}
      <View style={styles.overlay}>
        <FlatList
          data={libros}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={
            <View style={styles.formContainer}>
              <Text style={styles.formTitle}>Catálogo de Libros</Text>

              <TextInput
                style={styles.input}
                placeholder="Título del libro"
                placeholderTextColor="#ccc"
                value={titulo}
                onChangeText={setTitulo}
              />
              <TextInput
                style={styles.input}
                placeholder="Autor"
                placeholderTextColor="#ccc"
                value={autor}
                onChangeText={setAutor}
              />
              <TextInput
                style={styles.input}
                placeholder="Género"
                placeholderTextColor="#ccc"
                value={genero}
                onChangeText={setGenero}
              />

              {cargando ? (
                <View style={styles.loadingContainer}>
                  <ActivityIndicator size="small" color="#ffffff" />
                  <Text style={styles.loadingText}>Guardando libro...</Text>
                </View>
              ) : (
                <Pressable
                  style={({ pressed }) => [
                    styles.button,
                    pressed && styles.buttonPressed,
                  ]}
                  onPress={agregarLibro}
                >
                  <Text style={styles.buttonText}>Agregar libro</Text>
                </Pressable>
              )}

              {}
              <Text style={styles.listaTitulo}>Total de libros: {libros.length}</Text>
            </View>
          }
          renderItem={({ item }) => (
            <View style={styles.libroItem}>
              <Text style={styles.libroTitulo}>{item.titulo}</Text>
              <Text style={styles.libroAutor}>Autor: {item.autor}</Text>
              <Text style={styles.libroGenero}>Género: {item.genero}</Text>
            </View>
          )}
          ListEmptyComponent={
            <Text style={styles.emptyText}>No hay libros registrados aún.</Text>
          }
          contentContainerStyle={styles.listContent}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
  splashTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  splashSubtitle: {
    fontSize: 16,
    color: '#ecf0f1',
    marginTop: 10,
  },
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingTop: 50,
    paddingHorizontal: 15,
  },
  formContainer: {
    marginBottom: 20,
  },
  formTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    color: '#fff',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#27ae60',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonPressed: {
    backgroundColor: '#219150',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 8,
    marginTop: 10,
  },
  loadingText: {
    color: '#fff',
    marginLeft: 10,
    fontSize: 16,
  },
  listaTitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 20,
    marginBottom: 10,
  },
  listContent: {
    paddingBottom: 30,
  },
  libroItem: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  libroTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  libroAutor: {
    fontSize: 14,
    color: '#dcdde1',
  },
  libroGenero: {
    fontSize: 14,
    color: '#dcdde1',
  },
  emptyText: {
    color: '#ccc',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
});