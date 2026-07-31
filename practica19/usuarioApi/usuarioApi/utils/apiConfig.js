import Constants from 'expo-constants';
import { Platform } from 'react-native';

export function getApiBase() {
  if (Platform.OS === 'web') return 'http://localhost:5000';

  // Try to get the dev machine IP from Expo constants
  const manifest = Constants.manifest || Constants.expoConfig || {};
  const debuggerHost = manifest.debuggerHost || manifest.packagerOpts?.devClient?.host || '';
  if (debuggerHost) {
    const host = debuggerHost.split(':')[0];
    return `http://${host}:5000`;
  }

  // Fallbacks commonly used for emulators
  // Android emulator (emulator): 10.0.2.2
  // Android emulator (Genymotion): 10.0.3.2
  // iOS simulator: localhost
  if (Platform.OS === 'android') return 'http://10.0.2.2:5000';
  return 'http://localhost:5000';
}
