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
import GIcon from 'react-native-vector-icons/FontAwesome'
import Dashboard from './Dashboard';





export default function App() {
const [userDetails,setUserDetails]=useState({})
const [modalToggle, setModalToggle]=useState(true)
const [dashboard, setDashboard]=useState(false)

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
        animated={true}
        >
          <View style={styles.modalView}>
            <Image 
            source={require('./assets/logo.png')}
            style={styles.logo}
            />
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
            <View style={styles.buttonGroup}>
              <TouchableOpacity 
              style={styles.loginButtonViewGroup}
              onPress={handleLogin}
              >
                <View style={styles.iconView}>
                  <GIcon
                name='google'
                size='32'
                color='white'
                />
                </View>
                
              </TouchableOpacity>
              <TouchableOpacity 
              style={styles.loginButtonViewGroup}
              onPress={handleLogin}
              >
                <View style={styles.iconView}>
                  <GIcon
                name='facebook-square'
                size='32'
                color='white'
                />
                </View>
              </TouchableOpacity>
            </View>
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
            <View style={styles.dashboardView}>
              <TouchableOpacity
              onPress={()=>setDashboard(true)}
              >
                <Text style={styles.dashboardText}>
                  Dashboard
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <ScrollView style={styles.mainView}>
            <Questions/>
            <Music/>
            <Game/>
            <Movie/>
            <Sport/>
            <Reading/>
            <Footer/>
            <Modal
            visible={dashboard}
            animationType='slide'
            >
            <View style={{...styles.modalView, 
              marginTop: '15%'
              }}>
                <View style={{alignSelf: 'flex-end', margin:20, borderColor: '#0003ff', borderWidth:1, borderRadius: 35}}>
                    <Button
                    title='close X'
                    onPress={()=>setDashboard(false)}
                    />
                </View>
              <Dashboard/>
              </View>
            </Modal>
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
    height: 220,
    marginBottom: -35
  },
  loginButtonView: {
    backgroundColor: '#000dff',
    borderWidth: 1,
    marginTop: 15,
    width: 230,
    borderRadius: 10,
    padding: 5

  },
  loginButton: {
    color: 'white',
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
    alignItems: 'center',
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
    justifyContent: 'space-between',
  },
  mainView: {
    marginTop: 95,
    width: Dimensions.get('window').width,
    
  },
  buttonGroup: {
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  loginButtonViewGroup: {
    backgroundColor: '#000dff',
    borderWidth: 1,
    marginTop: 15,
    width: 130,
    borderRadius: 10

  },
  iconView: {
    padding: 5,
    alignItems: 'center'
  },
  dashboardView: {
    borderColor: '#0003ff',
    borderWidth: 1,
    borderRadius: 35,
    padding: 5
     

  },
  dashboardText: {
    color: '#0003ff',
    padding: 5,
    fontSize: 18
  }

});



