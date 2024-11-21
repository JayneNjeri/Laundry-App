import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MaterialIcons } from '@expo/vector-icons';
import { RootStackParamList } from '../index';

type LoadingScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'LoadingScreen'>;

const LoadingScreen: React.FC = () => {
  const navigation = useNavigation<LoadingScreenNavigationProp>();
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('PlaceOrder');
    }, 3000); // Simulate a loading time of 3 seconds

    return () => clearTimeout(timer);
  }, [navigation]);

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      })
    ).start();
  }, [spinValue]);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
      <Animated.View style={{ transform: [{ rotate: spin }] }}>
        <MaterialIcons name="local-laundry-service" size={100} color="#32AAFA" />
      </Animated.View>
      <Text style={styles.loadingText}>Please wait as we Process Your Info</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E5EDF3',
  },
  loadingText: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: '600',
    color: '#35434C',
    fontFamily: 'Poppins',
  },
});

export default LoadingScreen;