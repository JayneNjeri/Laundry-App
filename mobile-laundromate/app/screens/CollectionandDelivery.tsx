import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../index';

type CollectionAndDeliveryNavigationProp = NativeStackNavigationProp<RootStackParamList, 'CollectionandDelivery'>;

const CollectionAndDelivery: React.FC = () => {
  const navigation = useNavigation<CollectionAndDeliveryNavigationProp>();
  const [dropdownValue, setDropdownValue] = useState('Take to the laundromate');
  const [dropdownValue2, setDropdownValue2] = useState('Delivery');
  const [isButtonPressed, setIsButtonPressed] = useState([false, false, false, false]);

  const handleButtonPress = (index: number) => {
    const updatedButtonPress = [...isButtonPressed];
    updatedButtonPress[index] = !updatedButtonPress[index];
    setIsButtonPressed(updatedButtonPress);
  };

  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <TouchableOpacity onPress={() => navigation.navigate('ContactDetails')}>
          <MaterialIcons name="arrow-back" size={24} color="#35434C" />
        </TouchableOpacity>
        <Text style={styles.appBarTitle}>Collection & Delivery</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.label}>Collection Time</Text>
        <View style={styles.inputContainer}>
          <MaterialIcons name="calendar-month" size={24} color="#35434C" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Today"
            placeholderTextColor="#35434C"
          />
        </View>
        <View style={styles.inputContainer}>
          <MaterialIcons name="punch-clock" size={24} color="#35434C" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="12:00 PM - 2:00 PM"
            placeholderTextColor="#35434C"
          />
        </View>
        <View style={styles.dropdownContainer}>
          <Text style={styles.dropdownLabel}>Collection Method</Text>
          <TouchableOpacity style={styles.dropdown} onPress={() => {}}>
            <Text style={styles.dropdownText}>{dropdownValue}</Text>
            <MaterialIcons name="arrow-drop-down" size={24} color="#35434C" />
          </TouchableOpacity>
        </View>
        <Text style={styles.label}>Delivery Time</Text>
        <View style={styles.inputContainer}>
          <MaterialIcons name="calendar-month" size={24} color="#35434C" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Today"
            placeholderTextColor="#35434C"
          />
        </View>
        <View style={styles.inputContainer}>
          <MaterialIcons name="punch-clock" size={24} color="#35434C" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="12:00 PM - 2:00 PM"
            placeholderTextColor="#35434C"
          />
        </View>
        <View style={styles.dropdownContainer}>
          <Text style={styles.dropdownLabel}>Delivery Method</Text>
          <TouchableOpacity style={styles.dropdown} onPress={() => {}}>
            <Text style={styles.dropdownText}>{dropdownValue2}</Text>
            <MaterialIcons name="arrow-drop-down" size={24} color="#35434C" />
          </TouchableOpacity>
        </View>
        <Text style={styles.label}>Frequency</Text>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={[styles.frequencyButton, isButtonPressed[0] && styles.frequencyButtonPressed]}
            onPress={() => handleButtonPress(0)}
          >
            <Text style={[styles.frequencyButtonText, isButtonPressed[0] && styles.frequencyButtonTextPressed]}>
              Just Once
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.frequencyButton, isButtonPressed[1] && styles.frequencyButtonPressed]}
            onPress={() => handleButtonPress(1)}
          >
            <Text style={[styles.frequencyButtonText, isButtonPressed[1] && styles.frequencyButtonTextPressed]}>
              Weekly
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={[styles.frequencyButton, isButtonPressed[2] && styles.frequencyButtonPressed]}
            onPress={() => handleButtonPress(2)}
          >
            <Text style={[styles.frequencyButtonText, isButtonPressed[2] && styles.frequencyButtonTextPressed]}>
              Every two weeks
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.frequencyButton, isButtonPressed[3] && styles.frequencyButtonPressed]}
            onPress={() => handleButtonPress(3)}
          >
            <Text style={[styles.frequencyButtonText, isButtonPressed[3] && styles.frequencyButtonTextPressed]}>
              Every Four weeks
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('LoadingScreen')}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F9FF',
  },
  appBar: {
    backgroundColor: '#F0F9FF',
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  appBarTitle: {
    fontFamily: 'Poppins',
    fontSize: 20,
    fontWeight: '800',
    color: '#35434C',
    marginLeft: 10,
  },
  scrollView: {
    padding: 20,
  },
  label: {
    fontFamily: 'Poppins',
    color: '#35434C',
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: '#fff',
    color: '#35434C',
    fontFamily: 'Poppins',
  },
  dropdownContainer: {
    marginBottom: 20,
  },
  dropdownLabel: {
    fontFamily: 'Poppins',
    color: '#35434C',
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 10,
  },
  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 40,
    justifyContent: 'space-between',
  },
  dropdownText: {
    fontFamily: 'Poppins',
    color: '#35434C',
    fontSize: 14,
    fontWeight: '700',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  frequencyButton: {
    width: '48%',
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#7CB8E0',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  frequencyButtonPressed: {
    backgroundColor: '#7CB8E0',
  },
  frequencyButtonText: {
    fontFamily: 'Poppins',
    color: '#7CB8E0',
    fontSize: 14,
    fontWeight: '700',
  },
  frequencyButtonTextPressed: {
    color: '#fff',
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

export default CollectionAndDelivery;