/*Zona1: Importaciones de componentes y archivos*/
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import MenuScreen from './screens/MenuScreen';


//Zona2: Main - Hogar de los componentes
export default function App() {
  return (
    <View style={styles.container}>
      <MenuScreen/>

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
});
