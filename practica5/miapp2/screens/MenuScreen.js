/*Zona1: Importaciones de componentes y archivos*/
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button, Text } from 'react-native';
import React, {useState} from 'react';
import TarjetasScreen from './TarjetasScreen';
import SafeAreaScreen from './SafeAreaScreen';
import PressableScreen from './PressableScreen';
import TextInputScreen from './TextInputScreen';
import FlatListScreen from './FlatListScreen';
import ImageBackgroundScreen from './ImageBackgroundScreen';
import ActivityIndicatorScreen from './ActivityIndicatorScreen';
import ModalScreen from './ModalScreen';



//Zona2: Main - Hogar de los componentes
export default function MenuScreen () {
    const [screen, setScreen] = useState('menu');

    switch(screen){
        case 'tarjetas':
            return <TarjetasScreen/>;
        case 'safeArea':
            return <SafeAreaScreen/>;
        case 'pressable':
            return <PressableScreen/>;
        case 'textInput':
            return <TextInputScreen/>;
        case 'flatList':
            return <FlatListScreen/>;
        case 'imageBackground':
            return <ImageBackgroundScreen/>;
        case 'activityIndicator':
            return <ActivityIndicatorScreen/>;
        case 'modal':
            return <ModalScreen/>;
        case 'menu':
            default:
            return (
                <View style={styles.container}>
                    <Text>Menu de Practicas</Text>
                    <Button title='Tarjetas' onPress={() => setScreen('tarjetas')}></Button>
                    <Button title='SafeAreaView' onPress={() => setScreen('safeArea')}></Button>
                    <Button title='Pressable' onPress={() => setScreen('pressable')}></Button>
                    <Button title='TextInput' onPress={() => setScreen('textInput')}></Button>
                    <Button title='FlatList' onPress={() => setScreen('flatList')}></Button>
                    <Button title='ImageBackground' onPress={() => setScreen('imageBackground')}></Button>
                    <Button title='ActivityIndicator' onPress={() => setScreen('activityIndicator')}></Button>
                    <Button title='Modal' onPress={() => setScreen('modal')}></Button>
                    <StatusBar style="auto"/>
                 </View>
            );   
    }
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
