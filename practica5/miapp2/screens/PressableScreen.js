import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Pressable, Switch } from 'react-native';
import { useState } from 'react';


export default function PressableScreen () {
  const [buttonText, setButtonText] = useState("Dame click");

  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <View 
    style = {[styles.container, {backgroundColor: isDarkMode ? "black" : "white"}]}
    >
      <StatusBar style={isDarkMode ? "light" : "dark"}/>
      <Pressable style={styles.button}
      onPress={() =>{
        console.log("Se presionó el botón");
        setButtonText("Botón presionado")
      }}

      onPressIn={() =>{
        console.log("Se acaba de presionar el botón");
      }}

      onPressOut={() =>{
        console.log("Se acaba de soltar el botón");
      }}

      onLongPress={() =>{
        console.log("Presión prolongada");
        setButtonText("Presion prolongada detectada");
      }}
      >
        <Text style={styles.buttonText}>{buttonText}</Text>
      </Pressable>

      <Text style={{color: isDarkMode ? "white" : "black"}}>Modo oscuro</Text>

      <Switch
      
      value={isDarkMode}
      onValueChange={(previousState) => setIsDarkMode((previousState) =>
        !previousState)}
      trackColor={{false: "#767577", true: "lightblue"}}
      thumColor={"#f4f3f4"}

      />
    </View>
  );
}

//Zona3: Estilos y posicionamiento
const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    },
    button: {
        backgroundColor: "blue",
        padding: 20,
        borderRadius: 10,
        marginBottom: 50 
    },
    buttonText: {
        fontSize: 20,
        color: "white",
        textAlign: "center"
    },
    switchContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "80%", 
        paddingHorizontal: 10
    },
    text: {
        fontSize: 18,
        fontWeight: "bold"
    }
});
