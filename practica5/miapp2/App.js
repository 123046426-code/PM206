/*Zona1: Importaciones de componentes y archivos*/
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import { Perfil } from './components/Perfil';


//Zona2: Main - Hogar de los componentes
export default function App() {
  return (
    <View style={styles.container}>
      <Perfil estiloE={styles.tarjetaRoja} nombre="Andrés Martínez Badillo" 
      carrera="Sistemas Computacionales" 
      materia="Programación Móvil" 
      cuatri="Noveno Cuatrimestre">
      </Perfil>

      <Perfil estiloE={styles.tarjetaVerde} nombre="Martin Rivera Diaz" 
      carrera="Administración" 
      materia="Excel 2" 
      cuatri="Noveno Cuatrimestre" >
      </Perfil> 
      <StatusBar style="auto"/>

      <Perfil estiloE={styles.tarjetaRoja} nombre="Miguel Adrian Martínez Salinas" 
      carrera="Sistemas Computacionales" 
      materia="Programación Móvil" 
      cuatri="Noveno Cuatrimestre">
      </Perfil>
      
    </View>
  );
}

//Zona3: Estilos y posicionamiento
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row'
  },
  tarjetaRoja:{backgroundColor: '#FF6B6B'},
  tarjetaVerde:{backgroundColor: '#6BCB77'},
});
