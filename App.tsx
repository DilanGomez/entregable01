

import React,{useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  Pressable,
} from 'react-native';
 import Formulario from './android/src/componets/Formulario';
 


 const App = ()=> {

  const [modalVisible, setModalVisible] = useState(false)
  
  const citaHandle = () =>{
    console.log("Se dio click en el boton");
  }
    return (
      <SafeAreaView style={style.contains}>
        <View>
          <Text style={style.title}>Administracion de citas{' '}
            <Text>Veterinaria</Text>
          </Text>
        </View>
        <View>
          <Pressable
            style ={style.btnNuevaCita}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text style={style.btnTextoNuevaCita}>Crear cita</Text>
            
          </Pressable>
          <Formulario
            modalVisible = {modalVisible}
            setModalVisible = {setModalVisible}
          />
        </View>
      </SafeAreaView>    
    );
  }
  
  const style = StyleSheet.create({
    contains:{
      backgroundColor: '#ED9E0A',
      flex: 1
    },
    title:{
      marginHorizontal: 20,
      marginVertical: 20,
      color: '#110D04',
      textAlign: 'center',
      fontSize: 30
    },
    btnNuevaCita: {
      backgroundColor: '#6D28D9',
      padding: 15,
      marginTop: 30,
      marginHorizontal: 20,
      borderRadius: 10
    },
    btnTextoNuevaCita: {
      textAlign: 'center',
      color: '#FFF',
      fontSize: 18,
      fontWeight: '900',
      textTransform: 'uppercase'
    },
  
  });
  
  export default App;
