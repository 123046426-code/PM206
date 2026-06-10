
import {Button, Text, Image, View} from 'react-native';

export const Saludo2= () => {
    return(
        <View>
            <Text>Hola 206</Text>
            <Image source={require('../assets/wave.png')} />
            <Button title="Hola 206"/>
        </View>
    );
}

