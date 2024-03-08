import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native'
import React from 'react'
import Logo from '../assets/logo.png'
import { useNavigation } from '@react-navigation/native'

const RegisterScreen = () => {
  const navigation = useNavigation();
  return (
      <View style={styles.container}>
          <Image source={Logo} style={styles.logo} />
          <View>
              <TextInput
                  style={styles.input}
                  placeholder="Name"
                  placeholderTextColor="#000"
              />
              <TextInput
                  style={styles.input}
                  placeholder="Username"
                  placeholderTextColor="#000"
              />
              <TextInput
                  style={styles.input}
                  placeholder="Email"
                  placeholderTextColor="#000"
              />
              <TextInput
                  style={styles.input}
                  placeholder="Password"
                  placeholderTextColor="#000"
              />
              <TouchableOpacity
                  style={styles.button}
                  onPress={() => navigation.navigate('LoginScreen')}
              >
                  <Text style={styles.textButton}>Register</Text>
              </TouchableOpacity>
              <Text style={styles.text}>Already have an account?
                  <Text
                      style={{ fontWeight: 'bold' }}
                      onPress={() => navigation.navigate('LoginScreen')}
                  > Sign in</Text>
              </Text>
          </View>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#000',
      justifyContent: 'center',
      alignItems: 'center',
  },
  logo: {
      width: 150,
      height: 150,
  },
  input: {
      width: 300,
      height: 50,
      backgroundColor: '#fff',
      borderRadius: 10,
      color: 'white',
      paddingHorizontal: 20,
      marginBottom: 20,
  },
  button: {
      width: 300,
      height: 50,
      backgroundColor: '#fff',
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
  },
  textButton: {
      color: '#000',
      fontSize: 20,
  },
  text: {
      color: 'white',
      marginTop: 20,
      textAlign: 'center',
      fontSize: 16,
  },
})

export default RegisterScreen