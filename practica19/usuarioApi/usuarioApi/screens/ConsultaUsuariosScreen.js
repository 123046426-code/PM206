import React, {useState, useCallback} from 'react';
import {View,Text,FlatList,StyleSheet,Pressable} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useFocusEffect } from '@react-navigation/native';

export default function ConsultaUsuariosScreen() {
  const router = useRouter();
  const [usuarios, setUsuarios] = useState([]);

  const obtenerUsuarios = async () => {
    try{
      const base = require('../utils/apiConfig').getApiBase();
      const respuseta= await fetch(`${base}/v1/usuarios`); // http incluido con puerto
      const datos= await respuseta.json();
      console.log("Respuesta API: ", datos);
      setUsuarios(datos.usuarios);
    }catch(error){
      console.log("Error API: ", error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      obtenerUsuarios();
    }, [])
  );

  const renderTarjeta = ({ item }) => (
    <View style={styles.card}>

      <Text style={styles.nombre}>{item.nombre}</Text>

      <View style={styles.linea}></View>

      <Text style={styles.info}>
        Edad: {item.edad} años
      </Text>

      <View style={styles.detalleRow}>
        <Pressable
          style={styles.botonDetalle}
          onPress={() => {
            const detallesRuta = `/detalles?nombre=${encodeURIComponent(item.nombre)}&edad=${encodeURIComponent(item.edad)}&id=${encodeURIComponent(item.id)}`;
            router.push(detallesRuta);
          }}
        >
          <Text style={styles.textoBotonDetalle}>Ver detalles</Text>
          <Text style={styles.flecha}>→</Text>
        </Pressable>
      </View>

    </View>
  );

  return (

    <SafeAreaView style={styles.container}>

      <Text style={styles.titulo}>
        Lista de Usuarios
      </Text>

      <FlatList
        data={usuarios}
        keyExtractor={(item) => item.id}
        renderItem={renderTarjeta}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      />

    </SafeAreaView>
  );
  
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
    padding: 20,
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1F2937',
    marginBottom: 20,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 18,
    marginBottom: 15,
    elevation: 4,

    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },

  nombre: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2563EB',
  },

  linea: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginVertical: 10,
  },

  info: {
    fontSize: 16,
    color: '#4B5563',
  },

  detalleRow: {
    marginTop: 12,
    alignItems: 'flex-end',
  },

  botonDetalle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2563EB',
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#1D4ED8',
    shadowColor: '#2563EB',
    shadowOpacity: 0.18,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },

  textoBotonDetalle: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },

  flecha: {
    color: '#BFDBFE',
    fontSize: 18,
    marginLeft: 8,
  },

});