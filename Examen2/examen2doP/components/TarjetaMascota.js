//Perfil utilizando Props - Componente funcional. shift + alt + a para comentar varias lineas
import {Text, View, StyleSheet} from 'react-native';

// Perfirl utilizando destructuring - Componente funcional.

export const TarjetaMascota= ({nombre, raza, edad}) => {
    return(
        <View >
            <Text >{nombre}</Text>
            <Text >{raza}</Text>
            <Text >{edad}</Text>
        </View>
    )
}

const estilos = StyleSheet.create({
  nombre: {
    fontSize: 24,
    fontWeight: 700,
    textTransform: "uppercase"
  },
  carrera:{
    fontSize: 18,
    color: 'blue',
    fontFamily: 'Roboto'
  },
  otroTexto:{
    fontSize: 12,
    fontFamily: 'Courier',
    fontStyle: 'italic'
  },
  tarjeta:{
    borderWidth: 3,
    margin: 20,
    padding: 25,
  }
});

/* export const Perfil= (props) => {
    return(
        <View>
            <Text>{props.nombre}</Text>
            <Text>{props.carrera}</Text>
            <Text>{props.materia}</Text>
            <Text>{props.cuatri}</Text>
        </View>
    );
} */

/*Para utilizar este componente en App.js, se debe importar y luego usarlo dentro del return de la función App, pasando los props necesarios. Por ejemplo:
import { Perfil } from './components/Perfil';

export default function App() {
  return (
    <View>
      <Perfil nombre="Juan Pérez" 
      carrera="Ingeniería en Sistemas" 
      materia="Programación" 
      cuatri="Cuatrimestre 3" 
      estiloE={{backgroundColor: 'lightgray'}} />
    </View>
  );
}
*/