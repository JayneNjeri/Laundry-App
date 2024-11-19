import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../index';

type LogInScreenProps = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'Login'>;
  };
  
  const LogIn: React.FC<LogInScreenProps> = ({ navigation }) => {
    const [obscureText, setObscureText] = useState(true);
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.content}>
      {/* Header */}
      <View style={styles.header}>
        <Icon name="local-laundry-service" size={35} color="#32AAFA" />
        <Text style={styles.headerText}>Laundromate</Text>
      </View>

      {/* Email Input */}
      <Text style={styles.label}>E-Mail</Text>
      <View style={styles.inputContainer}>
        <Icon name="email" size={24} color="#666" style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          placeholderTextColor="#666"
        />
      </View>

      {/* Password Input */}
      <Text style={styles.label}>Password</Text>
      <View style={styles.inputContainer}>
        <Icon name="lock" size={24} color="#666" style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#666"
          secureTextEntry={obscureText}
        />
        <Pressable onPress={() => setObscureText(!obscureText)}>
          <Icon
            name={obscureText ? 'visibility' : 'visibility-off'}
            size={24}
            color="#666"
          />
        </Pressable>
      </View>

      {/* Forgot Password */}
      <Pressable
        onPress={() => navigation.navigate('AccountRecovery')}
        style={styles.forgotPassword}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </Pressable>

      {/* Login Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>

      {/* Sign Up Section */}
      <Text style={styles.noAccountText}>Don't have an account?</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  </SafeAreaView>
);
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EBF7FF',
      },
      content: {
        padding: 15,
      },
      header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
      },
      headerText: {
        fontFamily: 'Poppins-Bold',
        color: '#32AAFA',
        fontSize: 35,
        fontWeight: '700',
        marginLeft: 10,
      },
      label: {
        fontFamily: 'Poppins-Bold',
        color: '#35434C',
        fontSize: 14,
        fontWeight: '700',
        marginBottom: 8,
      },
      inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#E5EDF3',
        borderRadius: 20,
        paddingHorizontal: 15,
        height: 60,
        marginBottom: 35,
      },
      inputIcon: {
        marginRight: 10,
      },
      input: {
        flex: 1,
        fontFamily: 'Poppins-Regular',
        fontSize: 16,
        color: '#35434C',
      },
      forgotPassword: {
        alignSelf: 'flex-end',
        marginBottom: 20,
      },
      forgotPasswordText: {
        fontFamily: 'Poppins-Regular',
        color: '#35434C',
        fontSize: 14,
      },
      button: {
        backgroundColor: '#32AAFA',
        borderRadius: 15,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
      },
      buttonText: {
        fontFamily: 'Poppins-Bold',
        color: 'white',
        fontSize: 16,
        fontWeight: '700',
      },
      noAccountText: {
        fontFamily: 'Poppins-Medium',
        color: '#35434C',
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'center',
        marginBottom: 20,
      },
})

export default LogIn;
