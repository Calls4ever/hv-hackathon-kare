import { StatusBar } from 'expo-status-bar';
import {useState, useEffect} from 'react'
import React from 'react';
import { StyleSheet, Text, View, Modal, TextInput, Keyboard, Button, Image, CheckBox, TouchableOpacity, ScrollView, Dimensions} from 'react-native';
import Questions from './Questions';
import Music from './Music';
import Game from './Game';
import Movie from './Movie';
import Sport from './Sport';
import Reading from './Reading';
import {data} from './data'
import Footer from './Footer';




export default function App() {
const [userDetails,setUserDetails]=useState({})
const [modalToggle, setModalToggle]=useState(true)
const [agree, setAgree]=useState(false)

let user={username:'tsering', password: '123'}

const handleLogin=()=>{
  console.log(userDetails)
  if(userDetails.username===user.username && userDetails.password==user.password){
    setModalToggle(false)
  }
}
  return (
    <View style={styles.container}>
      <View style={styles.modalContainer}>
        <Modal
        visible={modalToggle}
        style={styles.modal}
        
        >
          <View style={styles.modalView}>
            <Image 
            source={require('./assets/logo.png')}
            style={styles.logo}
            />
            <Text style={styles.welcomeText}>
              Login
            </Text>
            <TextInput
            style={styles.usernameInput}
            value={userDetails.username}
            onChangeText={(text)=>setUserDetails({...userDetails,username: text})}
            placeholder={'username please.....'}
            textContentType='username'
            autoCapitalize='none'
            onBlur={()=>Keyboard.dismiss()}
            />
            <TextInput
            style={styles.usernameInput}
            value={userDetails.password}
            onChangeText={(text)=>setUserDetails({...userDetails,password: text})}
            placeholder={'password here.....'}
            textContentType='password'
            secureTextEntry={true}
            onBlur={()=>Keyboard.dismiss()}
            />
            <TouchableOpacity 
            style={styles.loginButtonView}
            onPress={handleLogin}
            >
              <Text style={styles.loginButton}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
            
        </Modal>
      </View>
        
          <View style={styles.navView}>
            <Image
            style={styles.navLogo}
            source={require('./assets/navLogo.png')}
            />
            <Image
            style={styles.navLogoH}
            source={require('./assets/navLogoH.png')}
            />
          </View>
          <ScrollView style={styles.mainView}>
            <Questions/>
            <Music/>
            <Game/>
            <Movie/>
            <Sport/>
            <Reading/>
            <Footer/>
        </ScrollView>
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
  modalView: {
    flex: 1,
    alignItems: "center",
    marginTop: '20%',
    marginHorizontal: '2%',
    backgroundColor: 'white',
    shadowColor: '#0003ff',
    textShadowOffset: {
      width: 3,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: .8,
    borderTopColor: '#0003ff',
    borderTopWidth: 2,
    borderTopRightRadius: 60,
    borderTopLeftRadius: 60,
    
    
  },
  modal: {
    backgroundColor: '#fff'
  },
  modalContainer:{
    position: 'absolute',
    top: 0,
    height: "100%",
    backgroundColor: 'red'
  },
  welcomeText: {
    color: '#0003ff',
    fontSize: 34,
  },
  usernameInput: {
    height: 40,
    width: 350,
    borderColor: '#0003ff',
    borderWidth: 1,
    marginTop: 15,
    padding: 5,
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 22,
    color: '#000dff'

  },
  logo: {
    maxWidth: 220,
    height: 220
  },
  loginButtonView: {
    borderColor: '#000dff',
    borderWidth: 1,
    marginTop: 15,
    width: 230,
    borderRadius: 10

  },
  loginButton: {
    color: '#000dff',
    fontSize: 23,
    textAlign: "center",
    padding: 4
  },
  navLogo: {
    width: 130,
    height: 60
  },
  navLogoH: {
    width: 180,
    height: 40
  },
  navView: {
    flexDirection: 'row',
    alignItems: 'baseline',
    position: 'absolute',
    top: 40,
    backgroundColor: 'white',
    width: '100%',
    paddingHorizontal: 3,
    shadowColor: '#0003ff',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 1.5,
    shadowOpacity: .7,
    zIndex: 2,
    justifyContent: 'space-around'
  },
  mainView: {
    marginTop: 95,
    width: Dimensions.get('window').width,
    
  }

});



