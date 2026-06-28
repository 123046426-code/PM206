import React, { useState } from 'react';
import { View, TextInput, Text, Platform, Alert, Keyboard, StyleSheet, Switch, Pressable } from 'react-native';


//Zona2: Main - Hogar de los componentes
export default function RegistroScreen () {
  const [nombre, setNombre] = useState("");
  const [carrera, setCarrera] = useState("");
  const [semestre, setSemestre] = useState("");

  const procesarRegistro = () => {
    if (Platform.OS !== "web") Keyboard.dismiss();
    if (!nombre || !carrera || !semestre){
      alertasManager("Campos incompletos", "Todos los campos son obligatorios");
      return;
    }
    if (isNaN(semestre)) {
      alertasManager('Error', 'El semestre debe ser un número válido');
      return;
    }
    alertasManager("Registro enviado", `Nombre: ${nombre}\nCarrera: ${carrera}\nSemestre: ${semestre}` + `\n\nTaller: ${taller}\nConstancia: ${constancia}\nDeportes: ${deportes}`);
  };
  const alertasManager = (titulo, mensaje) => {
    if (Platform.OS === 'web'){
      alert(`${titulo}: ${mensaje}`);
    } else{
      Alert.alert(titulo, mensaje);
    }
  };

  const [taller, setTaller] = useState(false);
  const [constancia, setConstancia] = useState(false);
  const [deportes, setDeportes] = useState(false);
  return (
    <View style={styles.container}>
        <Text style={styles.label}>Registro Evento Universitario</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre Completo"
        value={nombre}
        onChangeText={setNombre}
      />

      <TextInput
        style={styles.input}
        placeholder="Carrera"
        value={carrera}
        onChangeText={setCarrera}
      />

      <TextInput
        style={styles.input}
        placeholder="Semestre"
        value={semestre}
        onChangeText={setSemestre}
        keyboardType="numeric"
        maxLength={2}
      />

      <Text style={styles.label}>Opciones</Text>

      <Text style={{taller: taller ? "si" : "no"}}>¿Asistirá al taller?</Text>
      <Switch
      value={taller}
      onValueChange={setTaller}
      trackColor={{false: "#767577", true: "lightblue"}}
      thumColor={"#f4f3f4"}
      />

      <Text style={{constancia: constancia ? "si" : "no"}}>¿Requiere constancia?</Text>
      <Switch
      value={constancia}
      onValueChange={setConstancia}
      trackColor={{false: "#767577", true: "lightblue"}}
      thumColor={"#f4f3f4"}
      />

      <Text style={{deportes: deportes ? "si" : "no"}}>¿Partcipará en deportes?</Text>
      <Switch
      value={deportes}
      onValueChange={setDeportes}
      trackColor={{false: "#767577", true: "lightblue"}}
      thumColor={"#f4f3f4"}
      />

      <Pressable style={styles.button} onPress={procesarRegistro}>
        <Text style={styles.buttonText}>
          Enviar Registro
        </Text>
      </Pressable>


    </View>
  );
}

//Zona3: Estilos y posicionamiento
const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent:'center', 
    padding: 20, 
    backgroundColor: '#f5f6fa' },
  input: { 
    borderWidth: 1, 
    borderColor: '#dcdde1',
    padding: 12, 
    borderRadius: 8, 
    marginBottom: 12, 
    backgroundColor: '#fff' },
    label: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
    color: '#2d3436',
  },
  button: {
    backgroundColor: '#0984e3',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  }
});
