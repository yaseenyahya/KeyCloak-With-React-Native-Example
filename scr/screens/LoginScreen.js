import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import Login from '../auth/authentication/Login';

const LoginScreen = () => {

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
      },
      text: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16,
      },
      button: {
        backgroundColor: "#007AFF", 
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
      },
      buttonText: {
        color: "#FFFFFF", 
        fontSize: 18,
        fontWeight: "bold",
      },
    });
  
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Login Screen</Text>
        <TouchableOpacity style={styles.button} onPress={Login}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  };

  export default LoginScreen;