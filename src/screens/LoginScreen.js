import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

import Logo from '../assets/logo.png'

const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        source={Logo}
        style={styles.logo}
      />
      <Text
        style={styles.logoText}
      >
        MovReact
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor={'#000'}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor={'#000'}
      />
      <Text style={styles.forgetText}>
        Forgot Your password
      </Text>
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => navigation.navigate('HomeScreen')}
      >
        <Text style={styles.loginText}>
          Login
        </Text>
      </TouchableOpacity>
      <Text style={styles.accountText}>
        Don't have an account? 
        <Text
          style={{fontWeight: 'bold'}}
          onPress={() => navigation.navigate('RegisterScreen')}
        >
          Sign Up
        </Text>
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 5,
  },
  logoText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20
  },
  input: {
    backgroundColor: '#fff',
    width: '90%',
    padding: 10,
    borderRadius: 5,
    marginBottom: 5
  },
  forgetText: {
    color: '#fff',
    fontSize: 15,
    marginTop: 10,
    textAlign: 'right',
    width: '90%',
  },
  loginBtn: {
    backgroundColor: '#fff',
    width: '50%',
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 10
  },
  loginText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 20
  },
  accountText: {
    color: '#fff',
    fontSize: 15,
    marginTop: 10,
    textAlign: 'center',
    width: '90%',
  }
})

export default LoginScreen