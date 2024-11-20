import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../index';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

type PricesPageNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Prices'>;

const PricesPage: React.FC = () => {
  const navigation = useNavigation<PricesPageNavigationProp>();

  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <MaterialIcons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.appBarTitle}>Prices</Text>
      </View>
      <ScrollView contentContainerStyle={styles.grid}>
        <ServiceCard
          icon="cleaning-services"
          iconColor="#35434C"
          title="Wash"
          description="For everyday laundry, bedsheets and towels."
          details="wash + tumble dry + in a bag"
          price="Ksh.800/7kg"
          onPress={() => navigation.navigate('SelectService')}
        />
        <ServiceCard
          icon="iron"
          iconColor="#DC6F47"
          title="Wash & Ironing"
          description="For items that are already clean."
          details="wash + tumble dry + ironing"
          price="Ksh.1500/item"
          onPress={() => navigation.navigate('SelectService')}
        />
        <ServiceCard
          icon="dry-cleaning"
          iconColor="#DFD57A"
          title="Dry Cleaning"
          description="For delicate items and fabrics."
          details="Dry Cleaning + Ironing + On Hangers"
          price="Ksh.1000/item"
          onPress={() => navigation.navigate('SelectService')}
        />
        <ServiceCard
          icon="iron"
          iconColor="green"
          title="Ironing"
          description="For items that are already clean."
          details="Ironing + on Hangers + in a bag"
          price="Ksh.500/item"
          onPress={() => navigation.navigate('SelectService')}
        />
        <ServiceCard
          icon="bed"
          iconColor="black"
          title="Duvets & Bulky Items"
          description="For larger items that require extra care"
          details="Custom wash"
          price=""
          onPress={() => navigation.navigate('SelectService')}
        />
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
  onPress: () => void;
}> = ({ icon, iconColor, title, description, details, price, onPress }) => {
  return (
    <View style={styles.card}>
      <MaterialIcons name={icon} size={30} color={iconColor} />
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardDescription}>{description}</Text>
      <Text style={styles.cardDetails}>{details}</Text>
      <View style={styles.cardFooter}>
        <Text style={styles.cardPrice}>{price}</Text>
        <TouchableOpacity onPress={onPress}>
          <MaterialIcons name="arrow-forward-ios" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0EEF8',
  },
  appBar: {
    backgroundColor: '#E0EEF8',
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  appBarTitle: {
    fontFamily: 'Poppins',
    fontSize: 20,
    fontWeight: '700',
    color: '#35434C',
     marginLeft: 10
  },
  grid: {
    padding: 20,
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 15,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#32AAFA',
  },
  cardTitle: {
    fontFamily: 'Poppins',
    fontSize: 20,
    fontWeight: '700',
    color: '#35434C',
    marginTop: 10,
  },
  cardDescription: {
    fontFamily: 'Poppins',
    fontSize: 15,
    fontWeight: '500',
    color: '#35434C',
    marginTop: 10,
  },
  cardDetails: {
    fontFamily: 'Poppins',
    fontSize: 15,
    fontWeight: '500',
    color: '#35434C',
    marginTop: 10,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#A6D2F6',
    borderRadius: 15,
    padding: 10,
  },
  cardPrice: {
    fontFamily: 'Poppins',
    fontSize: 15,
    fontWeight: '600',
    color: '#35434C',
  },
});

export default PricesPage;