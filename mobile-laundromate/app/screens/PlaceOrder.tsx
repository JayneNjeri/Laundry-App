import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../index';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

type PlaceOrderNavigationProp = NativeStackNavigationProp<RootStackParamList, 'PlaceOrder'>;

const PlaceOrder: React.FC = () => {
  const navigation = useNavigation<PlaceOrderNavigationProp>();

  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <TouchableOpacity onPress={() => navigation.navigate('SelectService')}>
          <MaterialIcons name="arrow-back" size={24} color="#35434C" />
        </TouchableOpacity>
        <Text style={styles.appBarTitle}>Place Order</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.message}>Your order has been placed successfully!</Text>
        <MaterialIcons name="check-circle" size={100} color="#32AAFA" />
        <TouchableOpacity style={styles.homeButton} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.homeButtonText}>Go to Home</Text>
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
  message: {
    fontFamily: 'Poppins',
    fontSize: 18,
    fontWeight: '700',
    color: '#35434C',
    marginBottom: 20,
    textAlign: 'center',
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