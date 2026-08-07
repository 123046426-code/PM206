import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AltaUsuariosScreen from './screens/AltaUsuariosScreen';
import ConsultaUsuariosScreen from './screens/ConsultaUsuariosScreen';
import DetallesUsuarioScreen from './screens/DetallesUsuarioScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ConsultaUsuarios">
        <Stack.Screen name="ConsultaUsuarios" component={ConsultaUsuariosScreen} options={{ title: 'Usuarios' }} />
        <Stack.Screen name="AltaUsuarios" component={AltaUsuariosScreen} options={{ title: 'Registro' }} />
        <Stack.Screen name="DetallesUsuario" component={DetallesUsuarioScreen} options={{ title: 'Detalles' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

