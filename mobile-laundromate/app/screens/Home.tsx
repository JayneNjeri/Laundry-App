import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert, Button, Image, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../index';
import { useNavigation } from '@react-navigation/native';
import * as Location from 'expo-location';

type HomePageNavigationProp = {
  [x: string]: any;
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};

const Home:React.FC = () => {
    const navigation = useNavigation<HomePageNavigationProp>();
    const [locationPermission, setLocationPermission] = useState<boolean | null>(null);
  
    useEffect(() => {
      requestLocationPermission();
    }, []);
  
    const requestLocationPermission = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status === 'granted') {
        setLocationPermission(true);
      } else {
        setLocationPermission(false);
        Alert.alert('Permission Denied', 'Location permission is required to use this app.');
      }
    };
  
    const showLocationDialog = () => {
      Alert.alert(
        'Location Services',
        'Choose your preferred location service',
        [
          {
            text: 'Current Location',
            onPress: async () => {
              let location = await Location.getCurrentPositionAsync({});
              console.log(location);
            },
          },
          {
            text: 'Other Addresses',
            onPress: () => navigation.navigate('CollectionandDelivery'),
          },
        ],
        { cancelable: true }
      );
    };
  return (
    <View style={styles.container}>
    <Text style={styles.welcomeText}>Welcome, Jane</Text>
    <Text style={styles.subtitleText}>Let's schedule your first order</Text>
    <EstimateBook />
  </View>
);
};

const EstimateBook: React.FC = () => {
    const navigation = useNavigation<HomePageNavigationProp>();
  
   return (
    <View style={styles.card}>
    <Image source={require('../../assets/images/smiley.png')} style={styles.cardImage} />
    <View style={styles.cardContent}>
      <Text style={styles.cardTitle}>Get instant price estimate</Text>
      <Text style={styles.cardSubtitle}>Explore our super pricing options and book with confidence</Text>
      <TouchableOpacity style={styles.cardButton} onPress={() => navigation.navigate('Prices')}>
        <Text style={styles.cardButtonText}>Estimate & Book</Text>
      </TouchableOpacity>
    </View>
  </View>
);
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#E5EDF3',
  padding: 20,
},
welcomeText: {
  fontSize: 20,
  fontWeight: '600',
  color: '#35434C',
  marginBottom: 10,
},
subtitleText: {
  fontSize: 16,
  color: '#35434C',

},
card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
    marginTop: 20, 
 
   
  },
  cardImage: {
    width: 150,
    height: 190,
  },
  cardContent: {
    flex: 1,
    padding: 10,
  },
cardTitle: {
  fontSize: 16,
  fontWeight: '800',
  color: '#35434C',
  marginBottom: 5,
},
cardSubtitle: {
  fontSize: 15,
  color: '#35434C',
  marginBottom: 20,
},
cardButton: {
  backgroundColor: '#32AAFA',
  alignItems: 'center',
  paddingVertical: 10,
  paddingHorizontal: 20,
  borderRadius: 10,
},
cardButtonText: {
  color: '#fff',
  fontSize: 15,
  fontWeight: '500',
},
});
 export default Home;