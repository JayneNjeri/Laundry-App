import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Import all your screens
import CustomSplashScreen from './screens/SplashScreen';
import SignUpScreen from './screens/SignUp';
import LoginScreen from './screens/LogIn';
import HomePage from './screens/Home';
import AccountRecovery from './screens/AccountRecovery';
import PricesPage from './screens/PricesPage';
import SelectService from './screens/SelectService';
import CollectionAndDelivery from './screens/CollectionandDelivery';
import ContactDetails from './screens/ContactDetails';
import LoadingScreen from './screens/LoadingScreen';
import CustomBottomTabNavigator from './navigation/CustomBottomTabNavigator';
import PlaceOrder from './screens/PlaceOrder';
import OrderPlaced from './screens/OrderPlaced';


export type RootStackParamList = {
  Splash: undefined;
  SignUp: undefined;
  Login: undefined;
  Home: undefined;
  AccountRecovery: undefined;
  Prices: undefined;
  SelectService: undefined;
  LoadingScreen: undefined;
  CollectionAndDelivery: undefined;
  ContactDetails: undefined;
  CustomBottomTabNavigator: undefined;
  PlaceOrder: undefined;
  OrderPlaced: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="Splash"
          screenOptions={{
            headerShown: false,
            animation: 'fade',
          }}
        >
          <Stack.Screen name="Splash" component={CustomSplashScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="AccountRecovery" component={AccountRecovery} /> 
          <Stack.Screen name="Prices" component={PricesPage} />
          <Stack.Screen name="SelectService" component={SelectService} />
          <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
          <Stack.Screen name="CollectionAndDelivery" component={CollectionAndDelivery} />
          <Stack.Screen name="ContactDetails" component={ContactDetails} />
          <Stack.Screen 
            name="CustomBottomTabNavigator" 
            component={CustomBottomTabNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="PlaceOrder" component={PlaceOrder} />
          <Stack.Screen name="OrderPlaced" component={OrderPlaced} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;