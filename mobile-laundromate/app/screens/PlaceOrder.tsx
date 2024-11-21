import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../index';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useStore } from '../stores/UserStore';

type PlaceOrderNavigationProp = NativeStackNavigationProp<RootStackParamList, 'PlaceOrder'>;

const PlaceOrder: React.FC = () => {
  const navigation = useNavigation<PlaceOrderNavigationProp>();
  const selectedServices = useStore((state) => state.selectedServices);
  const fullName = useStore((state) => state.fullName);
  const phoneNumber = useStore((state) => state.phoneNumber);
  const collectionMethod = useStore((state) => state.collectionMethod);
  const deliveryMethod = useStore((state) => state.deliveryMethod);

  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <Text style={styles.appBarTitle}>Place Order</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Order Summary</Text>
        <Text style={styles.orderDetail}>Full Name: {fullName}</Text>
        <Text style={styles.orderDetail}>Phone Number: {phoneNumber}</Text>
        <Text style={styles.orderDetail}>Collection Method: {collectionMethod}</Text>
        <Text style={styles.orderDetail}>Delivery Method: {deliveryMethod}</Text>
        <Text style={styles.sectionTitle}>Selected Services</Text>
        {selectedServices.map((service, index) => (
          <Text key={index} style={styles.orderDetail}>
            {service.name} - Ksh.{service.price}
          </Text>
        ))}
        <TouchableOpacity style={styles.homeButton} onPress={() => navigation.navigate('OrderPlaced')}>
          <Text style={styles.homeButtonText}>Place Order</Text>
        </TouchableOpacity>
      </View>
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
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  sectionTitle: {
    fontFamily: 'Poppins',
    fontSize: 18,
    fontWeight: '700',
    color: '#35434C',
    marginBottom: 20,
  },
  orderDetail: {
    fontFamily: 'Poppins',
    fontSize: 16,
    color: '#35434C',
    marginBottom: 10,
  },
  homeButton: {
    backgroundColor: '#32AAFA',
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 100,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  homeButtonText: {
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: '700',
    color: '#fff',
  },
});

export default PlaceOrder;