# TODO - Arreglar APK que no abre (practica19/usuarioApi)

## Completado ✅

- [x] Corregir dependencias con expo install
  - [x] Instalar expo-font, expo-linking (peer deps faltantes)
  - [x] Instalar react-native-gesture-handler (versión ~2.28.0 compatible con SDK 54)
  - [x] Instalar expo-build-properties (para HTTP en claro)
  - [x] Alinear expo a ~54.0.36
  - [x] Alinear @react-navigation/native a ^7.1.8
- [x] Deduplicar dependencias (npm install limpia duplicados)
- [x] Verificar con expo-doctor (18/18 checks passed ✅)
- [x] Configurar EAS para generar APK en vez de AAB (eas.json)
- [x] Cambiar IP de conexión a API (10.16.72.153:5000)
- [x] Personalizar nombre a "Usuarios API"
- [x] Personalizar ícono, splash y adaptive icon con gear.jpg
- [x] Configurar usesCleartextTraffic via expo-build-properties

## Pendiente ⏳
- [ ] Reconstruir APK: `eas build --platform android --profile preview`
  - Asegúrate de que el backend (miAPI) esté corriendo en tu PC
  - Tu móvil debe estar en la misma red WiFi que tu PC
  - Para que funcione, el backend debe estar ejecutándose:
    ```bash
    cd practica19/miAPI/miAPI
    docker compose up -d
    ```

