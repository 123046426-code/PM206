/*Zona1: Importaciones de componentes y archivos*/
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';


//Zona2: Main - Hogar de los componentes
export default function FlatListScreen () {
  return (
    <View style={styles.container}>
      <Text>Aqui va la práctica de Tung tung tung Saúl</Text>
      <StatusBar style="auto"/>
      
    </View>
  );
}

//Zona3: Estilos y posicionamiento
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  tarjetaRoja:{backgroundColor: '#FF6B6B'},
  tarjetaVerde:{backgroundColor: '#6BCB77'},
});
