import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../index';
import { useStore } from '../stores/UserStore';

type SelectServiceNavigationProp = NativeStackNavigationProp<RootStackParamList, 'SelectService'>;

const SelectService: React.FC = () => {
  const navigation = useNavigation<SelectServiceNavigationProp>();
  const selectedServices = useStore((state: { selectedServices: any; }) => state.selectedServices);
  const setSelectedServices = useStore((state: { setSelectedServices: any; }) => state.setSelectedServices);
  const [isButtonPressed, setIsButtonPressed] = useState([false, false, false, false, false]);

  const handleServicePress = (index: number, service: { name: string; price: number }) => {
    const updatedButtonPress = [...isButtonPressed];
    updatedButtonPress[index] = !updatedButtonPress[index];
    setIsButtonPressed(updatedButtonPress);

    if (updatedButtonPress[index]) {
      setSelectedServices([...selectedServices, service]);
    } else {
      setSelectedServices(selectedServices.filter((s: { name: string; }) => s.name !== service.name));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <MaterialIcons name="arrow-back" size={24} color="#35434C" />
        </TouchableOpacity>
        <Text style={styles.appBarTitle}>Select your service</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {services.map((service, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.serviceButton, isButtonPressed[index] && styles.serviceButtonPressed]}
            onPress={() => handleServicePress(index, service)}
          >
            <Text style={[styles.serviceButtonText, isButtonPressed[index] && styles.serviceButtonTextPressed]}>
              {service.name} - Ksh.{service.price}
            </Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('ContactDetails')}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const services = [
  { name: 'Wash', price: 800 },
  { name: 'Wash & Iron', price: 1500 },
  { name: 'Iron', price: 500 },
  { name: 'Dry Cleaning', price: 1000 },
  { name: 'Duvets & Bulky Items', price: 2000 },
];

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
  serviceButton: {
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#7CB8E0',
    backgroundColor: '#fff',
    alignItems: 'center',
    marginBottom: 10,
  },
  serviceButtonPressed: {
    backgroundColor: '#7CB8E0',
  },
  serviceButtonText: {
    fontFamily: 'Poppins',
    color: '#7CB8E0',
    fontSize: 14,
    fontWeight: '700',
  },
  serviceButtonTextPressed: {
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

export default SelectService;