

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../index';

// Define prop types for the navigation
type SignUpScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'SignUp'>;
};

// Define the form data interface
interface FormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  password: string;
  repeatPassword: string;
}

// Define the input props interface
interface RenderInputProps {
  label: string;
  field: keyof FormData;
  placeholder: string;
  icon?: string;
  isPassword?: boolean;
  showPasswordState?: boolean;
  setShowPasswordState?: (value: boolean) => void;
}

const SignUpScreen: React.FC<SignUpScreenProps> = ({ navigation }) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phoneNumber: '',
    password: '',
    repeatPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSignUp = () => {
    // Add your signup logic here
    navigation.navigate('Home');
  };

  const renderInput = ({
    label,
    field,
    placeholder,
    icon,
    isPassword = false,
    showPasswordState = false,
    setShowPasswordState,
  }: RenderInputProps) => (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.textInputContainer}>
        {icon && (
          <MaterialIcons 
            name={icon as keyof typeof MaterialIcons.glyphMap} 
            size={24} 
            color="#666" 
            style={styles.icon} 
          />
        )}
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={formData[field]}
          onChangeText={(value) => handleChange(field, value)}
          secureTextEntry={isPassword && !showPasswordState}
          autoCapitalize="none"
        />
        {isPassword && setShowPasswordState && (
          <TouchableOpacity
            onPress={() => setShowPasswordState(!showPasswordState)}
            style={styles.eyeIcon}
          >
            <MaterialIcons
              name={showPasswordState ? 'visibility-off' : 'visibility'}
              size={24}
              color="#666"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <MaterialIcons name="local-laundry-service" size={40} color="#32AAFA" />
          <Text style={styles.headerText}>Laundromate</Text>
        </View>

        {renderInput({
          label: 'Full Name',
          field: 'fullName',
          placeholder: 'Enter your full name',
          icon: 'person'
        })}

        {renderInput({
          label: 'E-Mail',
          field: 'email',
          placeholder: 'Enter your email',
          icon: 'email'
        })}

        {renderInput({
          label: 'Phone Number',
          field: 'phoneNumber',
          placeholder: 'Phone Number',
          icon: 'phone'
        })}

        {renderInput({
          label: 'Password',
          field: 'password',
          placeholder: 'Password',
          icon: 'lock',
          isPassword: true,
          showPasswordState: showPassword,
          setShowPasswordState: setShowPassword
        })}

        {renderInput({
          label: 'Repeat Password',
          field: 'repeatPassword',
          placeholder: 'Password',
          icon: 'lock',
          isPassword: true,
          showPasswordState: showRepeatPassword,
          setShowPasswordState: setShowRepeatPassword
        })}

        <TouchableOpacity 
          style={styles.signUpButton}
          onPress={handleSignUp}
        >
          <Text style={styles.signUpButtonText}>Sign Up</Text>
        </TouchableOpacity>

        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.loginLink}>Log in</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBF7FF',
  },
  scrollContent: {
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontFamily: 'Poppins-Bold',
    color: '#32AAFA',
    fontSize: 40,
    fontWeight: '800',
    marginLeft: 10,
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontFamily: 'Poppins-Bold',
    color: '#35434C',
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 5,
  },
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E5EDF3',
    borderRadius: 20,
    height: 50,
    paddingHorizontal: 15,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontFamily: 'Poppins-Regular',
    color: '#35434C',
  },
  eyeIcon: {
    padding: 5,
  },
  signUpButton: {
    backgroundColor: '#32AAFA',
    borderRadius: 15,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  signUpButtonText: {
    fontFamily: 'Poppins-Bold',
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  loginText: {
    fontFamily: 'Poppins-Regular',
    color: '#3C3B3B',
    fontSize: 14,
    fontWeight: '500',
  },
  loginLink: {
    fontFamily: 'Poppins-SemiBold',
    color: '#32AAFA',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default SignUpScreen;