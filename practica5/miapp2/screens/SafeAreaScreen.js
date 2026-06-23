import { StyleSheet, View, Text, SafeAreaView, ScrollView, Switch } from 'react-native';
import { useState } from 'react';

export default function SafeAreaScreen() {
  const [activo, setActivo] = useState(false);
  const Contenedor = activo ? SafeAreaView : View;

  return (
    <Contenedor style={styles.fondo}>
      <Text style={styles.titulo}>SafeAreaScreen y ScrollView</Text>
      <Text style={styles.descripcion}>
        SafeAreaView evita que el contenido se tape con el notch del celular
      </Text>

      <View style={styles.fila}>
        <Text style={styles.etiqueta}> Activar SafeAreaView</Text>
        <Switch
          value={activo}
          onValueChange={(valor) => setActivo(valor)}
        />
      </View>

      <Text style={styles.descripcion}>
        ScrollView permite hacer scroll cuando hay mucho contenido
      </Text>

      <ScrollView style={styles.lista}>
        <View style={[styles.tarjeta, { backgroundColor: '#FF4F65' }]}>
          <Text style={styles.textoTarjeta}> Tarjeta 1</Text>
        </View>
        <View style={[styles.tarjeta, { backgroundColor: '#1FBFC8' }]}>
          <Text style={styles.textoTarjeta}> Tarjeta 2</Text>
        </View>
        <View style={[styles.tarjeta, { backgroundColor: '#5F2B9B' }]}>
          <Text style={styles.textoTarjeta}> Tarjeta 3</Text>
        </View>
        <View style={[styles.tarjeta, { backgroundColor: '#f4ee4e' }]}>
          <Text style={styles.textoTarjeta}> Tarjeta 4</Text>
        </View>
        <View style={[styles.tarjeta, { backgroundColor: '#ed90ed' }]}>
          <Text style={styles.textoTarjeta}> Tarjeta 5</Text>
        </View>
        <View style={[styles.tarjeta, { backgroundColor: '#e1b941' }]}>
          <Text style={styles.textoTarjeta}> Tarjeta 6</Text>
        </View>
        <View style={[styles.tarjeta, { backgroundColor: '#5050ee' }]}>
          <Text style={styles.textoTarjeta}> Tarjeta 7</Text>
        </View>
      </ScrollView>
    </Contenedor>
  );
}

const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: '#1a1a2e',
    padding: 20,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 10,
  },
  descripcion: {
    fontSize: 13,
    color: '#aaaaaa',
    textAlign: 'center',
    marginBottom: 12,
  },
  fila: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
  },
  etiqueta: {
    color: '#ffffff',
    fontSize: 14,
  },
  lista: {
    flex: 1,
  },
  tarjeta: {
    height: 80,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  textoTarjeta: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});