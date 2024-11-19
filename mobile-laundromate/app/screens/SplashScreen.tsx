import React, { useCallback, useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Platform, 
  Animated, 
  TouchableOpacity,
  Dimensions
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import * as ExpoSplashScreen from 'expo-splash-screen';
import type { RootStackParamList } from '../index';

// Prevent the splash screen from auto-hiding
ExpoSplashScreen.preventAutoHideAsync();

const { width } = Dimensions.get('window');

type SplashScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Splash'>;

const CustomSplashScreen: React.FC = () => {
  const navigation = useNavigation<SplashScreenNavigationProp>();
  // Animation values
  const [fadeAnim] = useState(new Animated.Value(1));
  const [slideAnim] = useState(new Animated.Value(0));
  const [showAuth, setShowAuth] = useState(false);
  const [authOpacity] = useState(new Animated.Value(0));

  // Load Poppins font
  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Medium': require('../../assets/fonts/Poppins-Medium.ttf'),
  });

  // Handle animations and auth display
  useEffect(() => {
    if (fontsLoaded) {
      // Initial delay for branding display
      setTimeout(() => {
        // Fade out animation
        Animated.parallel([
          Animated.timing(fadeAnim, {
            toValue: 0.3,
            duration: 500,
            useNativeDriver: true,
          }),
          Animated.timing(slideAnim, {
            toValue: -100,
            duration: 500,
            useNativeDriver: true,
          }),
          Animated.timing(authOpacity, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
          }),
        ]).start(() => {
          setShowAuth(true);
        });
      }, 3000);
    }
  }, [fontsLoaded, fadeAnim, slideAnim, authOpacity]);

  // Handle layout when resources are ready
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await ExpoSplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <StatusBar style="light" backgroundColor='#32AAFA'/>
      
      {/* Branding Section */}
      <Animated.View 
        style={[
          styles.contentContainer,
          {
            opacity: fadeAnim,
            transform: [{ translateY: slideAnim }]
          }
        ]}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Laundromate</Text>
          <MaterialIcons 
            name="local-laundry-service" 
            size={40} 
            color="#FFD700"
            style={styles.icon}
          />
        </View>
        <Text style={styles.subtitleText}>
          Africa's Leading{'\n'}24/7 Laundry App
        </Text>
      </Animated.View>

      {/* Auth Buttons Section */}
      {showAuth && (
        <Animated.View 
          style={[
            styles.authContainer,
            {
              opacity: authOpacity,
              transform: [
                {
                  translateY: authOpacity.interpolate({
                    inputRange: [0, 1],
                    outputRange: [50, 0],
                  }),
                },
              ],
            },
          ]}
        >
          {/* Main Auth Buttons */}
          <View style={styles.mainAuthButtons}>
            <TouchableOpacity 
              style={[styles.authButton, styles.signUpButton]}
              onPress={()=>navigation.navigate('SignUp')}
            >
              <Text style={styles.signUpButtonText}>Sign Up</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[styles.authButton, styles.loginButton]}
              onPress={() => navigation.navigate('Login')}
            >
              <Text style={styles.loginButtonText}>Log In</Text>
            </TouchableOpacity>
          </View>

          {/* Social Auth Section */}
          <View style={styles.socialAuthSection}>
            <Text style={styles.orText}>or continue with</Text>
            
            <View style={styles.socialButtons}>
              <TouchableOpacity style={styles.socialButton}>
                <FontAwesome name="apple" size={24} color="white" />
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.socialButton}>
                <FontAwesome name="google" size={24} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </Animated.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#32AAFA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    alignItems: 'center',
    position: 'absolute',
    top: '30%',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  titleText: {
    fontFamily: 'Poppins-Bold',
    color: '#FFFFFF',
    fontSize: 40,
    marginRight: 8,
    ...Platform.select({
      ios: {
        marginTop: 5,
      },
    }),
  },
  icon: {
    marginLeft: 4,
  },
  subtitleText: {
    fontFamily: 'Poppins-Regular',
    color: '#FFFFFF',
    fontSize: 20,
    textAlign: 'center',
    lineHeight: 28,
  },
  authContainer: {
    position: 'absolute',
    bottom: 50,
    width: width * 0.9,
    maxWidth: 400,
  },
  mainAuthButtons: {
    marginBottom: 20,
  },
  authButton: {
    width: '100%',
    height: 56,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  signUpButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    height: 50,
  },
  loginButton: {
    backgroundColor: '#2479B2',
    borderRadius: 15,
    height: 50,
  },
  signUpButtonText: {
    fontFamily: 'Poppins-Medium',
    color: '#32AAFA',
    fontSize: 16,
  },
  loginButtonText: {
    fontFamily: 'Poppins-Medium',
    color: '#FFFFFF',
    fontSize: 16,
  },
  socialAuthSection: {
    alignItems: 'center',
  },
  orText: {
    fontFamily: 'Poppins-Regular',
    color: '#FFFFFF',
    fontSize: 14,
    marginBottom: 20,
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
  },
  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CustomSplashScreen;