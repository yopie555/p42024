import { 
    View, 
    Text,
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity
 } from 'react-native'
import React from 'react'

import Logo from './assets/logo.png'

const App = () => {
  return (
    <View style={styles.container}>
        <Image 
            source={Logo} 
            style={styles.logo}
        />
        <Text
            style={styles.titleText}
        >
            MovReact
        </Text>
        <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#fff"
        />
        <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#fff"
        />
       <Text style={styles.forgetText}>
        Forgot Your password
        </Text>
        <TouchableOpacity
            style={styles.loginBtn}
        >
            <Text style={styles.loginText}>
                Login
            </Text>
        </TouchableOpacity>
        <Text style={styles.accountText}>
            Don't have an account? Sign Up
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#000",
        justifyContent: "center",
        alignItems: "center"
    },
    logo:{
        width: 200,
        height: 200,
        marginBottom: 5
    },
    titleText:{
        color: "#fff",
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 20
    },
    input:{
        height: 40,
        width: '90%',
        borderColor: 'white',
        borderBottomWidth: 1,
        color: "#fff"
    },
    forgetText:{
        color: '#fff',
        fontSize: 15,
        marginTop: 10,
        textAlign: 'right',
        width: '90%',
      },
    loginBtn:{
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 10,
        marginTop: 20,
        width: '50%',
        alignItems: "center"
    },
    loginText:{
        color: "#000",
        fontSize: 20,
        fontWeight: "bold"
    },
    accountText:{
        color: '#fff',
        fontSize: 15,
        marginTop: 10,
        textAlign: 'center',
        width: '90%',
      }
})

export default App