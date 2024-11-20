import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../index';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

type SelectServiceNavigationProp = NativeStackNavigationProp<RootStackParamList, 'SelectService'>;

const SelectService: React.FC = () => {
  const navigation = useNavigation<SelectServiceNavigationProp>();
  const [isCardSelected, setIsCardSelected] = useState([false, false, false, false, false]);
  const [isButtonPressed, setIsButtonPressed] = useState([false, false, false, false, false]);

  const handleCardPress = (index: number) => {
    const updatedCardSelection = [...isCardSelected];
    const updatedButtonPress = [...isButtonPressed];
    updatedCardSelection[index] = !updatedCardSelection[index];
    updatedButtonPress[index] = !updatedButtonPress[index];
    setIsCardSelected(updatedCardSelection);
    setIsButtonPressed(updatedButtonPress);
  };

  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <TouchableOpacity onPress={() => navigation.navigate('Prices')}>
          <MaterialIcons name="arrow-back" size={24} color="#35434C" />
        </TouchableOpacity>
        <Text style={styles.appBarTitle}>Select your service</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            iconColor={service.iconColor}
            title={service.title}
            description={service.description}
            details={service.details}
            price={service.price}
            isSelected={isCardSelected[index]}
            isAdded={isButtonPressed[index]}
            onPress={() => handleCardPress(index)}
          />
        ))}
        <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('LoadingPage')}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const ServiceCard: React.FC<{
  icon: string;
  iconColor: string;
  title: string;
  description: string;
  details: string;
  price: string;
  isSelected: boolean;
  isAdded: boolean;
  onPress: () => void;
}> = ({ icon, iconColor, title, description, details, price, isSelected, isAdded, onPress }) => {
  return (
    <View style={[styles.card, isSelected && styles.cardSelected]}>
      <View style={styles.cardHeader}>
        <MaterialIcons name={icon} size={40} color={iconColor} />
        <Text style={styles.cardTitle}>{title}</Text>
        <TouchableOpacity style={styles.addButton} onPress={onPress}>
          <Text style={styles.addButtonText}>{isAdded ? 'Added' : 'Add'}</Text>
          <MaterialIcons name={isAdded ? 'check' : 'add'} size={24} color="#fff" />
        </TouchableOpacity>
      </View>
      <Text style={styles.cardPrice}>{price}</Text>
      <Text style={styles.cardDetails}>{details}</Text>
      <Text style={styles.cardDescription}>{description}</Text>
    </View>
  );
};

const services = [
  {
    icon: 'cleaning-services',
    iconColor: '#3CA0F3',
    title: 'Wash',
    description: 'For everyday laundry that requires ironing',
    details: 'Wash & Iron + Tumble Dry + In a bag',
    price: 'From 800Ksh/7kg',
  },
  {
    icon: 'iron',
    iconColor: '#DC6F47',
    title: 'Wash & Iron',
    description: 'For everyday laundry that requires ironing',
    details: 'Wash & Iron + Tumble Dry + In a bag',
    price: 'From 1500Ksh/item',
  },
  {
    icon: 'iron',
    iconColor: 'green',
    title: 'Iron',
    description: 'For items that are already clean',
    details: 'Ironing + On Hangers + In a bag',
    price: 'From 500Ksh/item',
  },
  {
    icon: 'dry-cleaning',
    iconColor: '#DFD57A',
    title: 'Dry Cleaning',
    description: 'For delicate items and fabrics',
    details: 'Dry Cleaning + Ironing + On Hangers',
    price: 'From 1000Ksh/item',
  },
  {
    icon: 'bed',
    iconColor: 'black',
    title: 'Duvets & Bulky Items',
    description: 'For items that require extra care',
    details: 'Custom Care',
    price: '',
  },
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
    padding: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#013F72',
  },
  cardSelected: {
    backgroundColor: '#A5CAE8',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardTitle: {
    fontFamily: 'Poppins',
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
    flex: 1,
    marginLeft: 10,
  },
  addButton: {
    backgroundColor: '#3CA0F3',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  addButtonText: {
    fontFamily: 'Poppins',
    fontSize: 15,
    fontWeight: '700',
    color: '#fff',
    marginRight: 10,
  },
  cardPrice: {
    fontFamily: 'Poppins',
    fontSize: 19,
    fontWeight: '700',
    color: '#000',
    marginTop: 10,
  },
  cardDetails: {
    fontFamily: 'Poppins',
    fontSize: 10,
    fontWeight: '600',
    color: '#000',
    marginTop: 5,
  },
  cardDescription: {
    fontFamily: 'Poppins',
    fontSize: 10,
    fontWeight: '600',
    color: '#000',
    marginTop: 5,
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