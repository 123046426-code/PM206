//Perfil utilizando Props - Componente funcional. shift + alt + a para comentar varias lineas
import {Text, View, Button} from 'react-native';
import React, {useState} from 'react';

// Perfirl utilizando destructuring - Componente funcional.

export const Perfil= ({nombre, carrera, materia, cuatri}) => {
    const [mostrar, setMostrar] = useState(false);
    return(
        <View>
            <Text>{nombre}</Text>

            {mostrar &&
            <>
            <Text>{carrera}</Text>
            <Text>{materia}</Text>
            <Text>{cuatri}</Text>
            </>
            }
            <Button title= "Mostrar Perfil"
            onPress={() => setMostrar(!mostrar)}>
            </Button>
        </View>
    )
}

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

