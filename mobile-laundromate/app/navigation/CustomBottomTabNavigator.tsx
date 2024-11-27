
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


import HomePage from '../../app/screens/Home';
import PricesPage from '../../app/screens/PricesPage';
import CollectionAndDelivery from '../../app/screens/CollectionandDelivery';
import ContactDetails from '../../app/screens/ContactDetails';

const Tab = createBottomTabNavigator();

const CustomTabBarButton: React.FC<{ children: React.ReactNode; onPress: () => void }> = ({ children, onPress }) => (
  <TouchableOpacity
    style={{
      top: -10,
      justifyContent: 'center',
      alignItems: 'center',
      ...styles.shadow,
    }}
    onPress={onPress}
  >
    <View
      style={{
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#32AAFA',
      }}
    >
      {children}
    </View>
  </TouchableOpacity>
);

const CustomBottomTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName: string = 'home';

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Prices') {
            iconName = 'price-change';
          } else if (route.name === 'BookNow') {
            iconName = 'add-circle-outline';
          } else if (route.name === 'Rewards') {
            iconName = 'card-giftcard';
          } else if (route.name === 'More') {
            iconName = 'more-horiz';
          }

          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#32AAFA',
        tabBarInactiveTintColor: '#35434C',
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
        //   elevation: 0,
          backgroundColor: '#ffffff',
          borderRadius: 15,
          height: 90,
          ...styles.shadow,
        },
      })}
    >
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="Prices" component={PricesPage} />
      <Tab.Screen
        name="BookNow"
        component={CollectionAndDelivery}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="add-circle-outline"
              size={30}
              color={focused ? '#ffffff' : '#32AAFA'}
            />
          ),
          tabBarButton: (props) => <CustomTabBarButton {...props} onPress={() => {}} />,
        }}
      />
      <Tab.Screen name="Rewards" component={ContactDetails} />
      <Tab.Screen name="More" component={ContactDetails} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default CustomBottomTabNavigator;