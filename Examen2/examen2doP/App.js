import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TarjetaMascota} from './components/TarjetaMascota';

export default function App() {
  return (
    <View style={styles.container}>
      <TarjetaMascota nombre="Firulais" raza="Pastor Alemán" edad="3 años" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
