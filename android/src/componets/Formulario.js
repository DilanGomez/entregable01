import React, {useState} from 'react'
import DatePicker from 'react-native-date-picker'
import {  Modal, SafeAreaView, ScrollView, StyleSheet, View,Text, TextInput } from 'react-native'
const Formulario = ({modalVisible,setModalVisible}) => {

const [paciente, setPaciente] = useState('')
const [fecha,setFecha] = useState(new Date())
  return (
    <Modal
      animationType='slide' //fade
      visible = {modalVisible}
    >  
    <SafeAreaView>
      <ScrollView style={style.contenido}>
        <View>
          <Text> Asignacion de citas </Text>
        </View>
        <View>
          <Text>Nombre del Paciente</Text>
          <TextInput
            style={style.input}
            placeholder='Nombre del paciente'
            placeholderTextColor={'#EEE'}
            value={paciente}
            onChangeText={setPaciente}

          ></TextInput>
        </View>
        <View>
          <Text>Nombre Propietario</Text>
          <TextInput></TextInput>
        </View>
        <View>
          <Text>Telefono</Text>
          <TextInput></TextInput>
        </View>
        <View>
          <Text>Email</Text>
          <TextInput></TextInput>
        </View>
        <View>
          <Text>Fecha cita</Text>
          <DatePicker
            locale='es'
            mode='date'
            date={fecha}
            onDateChange={()=> setFecha(new Date())}
          />
        </View>
        <View>
          <Text>Sintomas</Text>
          <TextInput></TextInput>
        </View>

      </ScrollView>
    </SafeAreaView>    
    </Modal>
  );
}

const style = StyleSheet.create({
  contenido:{
    backgroundColor: '#6D28D9',
    flex: 1,
  },
  titulo:{},
  tituloBold:{},
  campo:{},
  fechaContenedor: {
    backgroundColor:'#150F0E',
    borderRadius: 10
  },
  label:{
    color: '#FFF',  
    marginBottom: 10,
    marginTop: 15,
    fontSize: 20,
    fontWeight: '600'
  },
  input:{
    backgroundColor:'#FFF',
    padding: 15,
    borderRadius: 10,
    color:'#0F0F01' 
  },
  inputSintomas:{
    fontWeight:'100'
  },
  btnGuardar:{
    backgroundColor: '#F59E0B',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: 'auto',
    marginHorizontal: 30,
    marginVertical: 30
  },
  btnTextoGuardar:{
    color:'#FFF',
    textAlign: 'center',
    fontWeight: '900',
    textTransform: 'uppercase',
    fontSize: 16
  },
  btnCancelar:{
    backgroundColor: '#5827A4',
    marginVertical: 30,
    marginHorizontal: 30,
    padding: 15,
    borderRadius: 10
  },
  btnTextoCancelar:{
    color:'#FFF',
    textAlign: 'center',
    fontWeight: '900',
    textTransform: 'uppercase',
    fontSize: 16
  },
});
export default Formulario;
