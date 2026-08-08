import Constants from 'expo-constants';
import { Platform } from 'react-native';

// IP fija de la máquina donde corre el backend (FastAPI)
const API_IP = '10.16.72.153';
const API_PORT = '5000';

export function getApiBase() {
  if (Platform.OS === 'web') return `http://localhost:${API_PORT}`;

  // En builds de producción (APK) no hay hostUri, así que usamos la IP fija.
  // En desarrollo (Expo Go) se intenta obtener la IP del servidor de desarrollo.
  const manifest = Constants.manifest || Constants.expoConfig || {};
  const hostUri = manifest.hostUri;

  if (hostUri) {
    const host = hostUri.split(':')[0];
    // Solo usa el host de desarrollo si coincide con el backend local
    return `http://${host}:${API_PORT}`;
  }

  // APK/producción: conectar a la IP fija del backend
  return `http://${API_IP}:${API_PORT}`;
}
