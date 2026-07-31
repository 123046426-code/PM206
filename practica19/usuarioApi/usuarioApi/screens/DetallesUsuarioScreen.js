import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function DetallesUsuarioScreen({ usuario, onBack, onEdit, onDelete }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Detalles del Usuario</Text>
      </View>

      <View style={styles.card}>
        <View style={styles.field}>
          <Text style={styles.label}>Nombre</Text>
          <Text style={styles.value}>{usuario?.nombre || '-'}</Text>
        </View>

        <View style={styles.separator} />

        <View style={styles.field}>
          <Text style={styles.label}>Edad</Text>
          <Text style={styles.value}>{usuario?.edad ? `${usuario.edad} años` : '-'}</Text>
        </View>

        <View style={styles.actions}>
          <Pressable
            style={[styles.button, styles.updateButton]}
            onPress={() => onEdit(usuario)}
          >
            <Text style={styles.buttonText}>Actualizar</Text>
          </Pressable>
          <Pressable style={[styles.button, styles.deleteButton]} onPress={() => onDelete?.(usuario?.id)}>
            <Text style={styles.buttonText}>Eliminar</Text>
          </Pressable>
        </View>

        <Pressable style={styles.backButton} onPress={onBack}>
          <Text style={styles.backButtonText}>Volver</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F4F8',
    alignItems: 'center',
    paddingTop: 30,
    paddingHorizontal: 16,
  },
  header: {
    width: '100%',
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 12,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111827',
  },
  card: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 24,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 8,
  },
  field: {
    marginBottom: 18,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6B7280',
    marginBottom: 6,
  },
  value: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
  },
  separator: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginVertical: 10,
  },
  actions: {
    marginTop: 12,
    alignItems: 'center',
  },
  button: {
    width: '80%',
    height: 46,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  updateButton: {
    backgroundColor: '#FBBF24',
  },
  deleteButton: {
    backgroundColor: '#EF4444',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
  },
  backButton: {
    marginTop: 14,
    alignItems: 'center',
  },
  backButtonText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#2563EB',
  },
});
