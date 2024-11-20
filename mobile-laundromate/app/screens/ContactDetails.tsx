import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Button,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../index';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

type ContactDetailsNavigationProp = NativeStackNavigationProp<RootStackParamList, 'ContactDetails'>;

const ContactDetails: React.FC = () => {
  const navigation = useNavigation<ContactDetailsNavigationProp>();
  const [isButtonPressed, setIsButtonPressed] = useState([false, false]);
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleButtonPress = (index: number) => {
    const updatedButtonPress = [...isButtonPressed];
    updatedButtonPress[index] = !updatedButtonPress[index];
    setIsButtonPressed(updatedButtonPress);
  };

  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <TouchableOpacity onPress={() => navigation.navigate('SelectService')}>
          <MaterialIcons name="arrow-back" size={24} color="#35434C" />
        </TouchableOpacity>
        <Text style={styles.appBarTitle}>Contact Details</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={[styles.optionButton, isButtonPressed[0] && styles.optionButtonPressed]}
            onPress={() => handleButtonPress(0)}
          >
            <Text style={[styles.optionButtonText, isButtonPressed[0] && styles.optionButtonTextPressed]}>
              Individual
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.optionButton, isButtonPressed[1] && styles.optionButtonPressed]}
            onPress={() => handleButtonPress(1)}
          >
            <Text style={[styles.optionButtonText, isButtonPressed[1] && styles.optionButtonTextPressed]}>
              Company
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            placeholderTextColor="#35434C"
            value={fullName}
            onChangeText={setFullName}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            placeholderTextColor="#35434C"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
        </View>
        <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('CollectionandDelivery')}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C3E6FE',
  },
  appBar: {
    backgroundColor: '#C3E6FE',
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  appBarTitle: {
    fontFamily: 'Poppins',
    fontSize: 20,
    fontWeight: '700',
    color: '#35434C',
    marginLeft: 10,
  },
  scrollView: {
    padding: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  optionButton: {
    width: '48%',
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#7CB8E0',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  optionButtonPressed: {
    backgroundColor: '#7CB8E0',
  },
  optionButtonText: {
    fontFamily: 'Poppins',
    color: '#7CB8E0',
    fontSize: 14,
    fontWeight: '700',
  },
  optionButtonTextPressed: {
    color: '#fff',
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#E5EDF3',
    borderRadius: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: '#35434C',
    color: '#35434C',
    fontFamily: 'Poppins',
  },
  nextButton: {
    backgroundColor: '#32AAFA',
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 150,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  nextButtonText: {
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: '700',
    color: '#fff',
  },
});

export default ContactDetails;