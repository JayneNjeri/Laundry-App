import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  SafeAreaView
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const AccountRecovery = () => {
  const [email, setEmail] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons name="local-laundry-service" size={40} color="#32AAFA" />
        <Text style={styles.headerText}>Laundromate</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          placeholderTextColor="#999"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Send Password Reset Link</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBF7FF',
    padding: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  headerText: {
    fontFamily: 'Poppins',
    color: '#32AAFA',
    fontSize: 40,
    fontWeight: '800',
    marginLeft: 10,
  },
  inputContainer: {
    marginBottom: 35,
  },
  input: {
    backgroundColor: '#E5EDF3',
    borderRadius: 20,
    height: 50,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  button: {
    backgroundColor: '#32AAFA',
    borderRadius: 15,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'Poppins',
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },
});

export default AccountRecovery;