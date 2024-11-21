import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons  from '@expo/vector-icons/MaterialIcons';


import HomePage from '../../app/screens/Home';
import PricesPage from '../../app/screens/PricesPage';
import CollectionAndDelivery from '../../app/screens/CollectionandDelivery';
import ContactDetails from '../../app/screens/ContactDetails';


const Tab = createBottomTabNavigator();

const BottomTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof MaterialIcons.glyphMap= 'home';

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Prices') {
            iconName = 'price-change';
          } else if (route.name === 'Collection') {
            iconName = 'local-laundry-service';
          } else if (route.name === 'Contact') {
            iconName = 'contacts';
          }

          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#32AAFA',
        tabBarInactiveTintColor: '#35434C',
      })}
    >
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="Prices" component={PricesPage} />
      <Tab.Screen name="Collection" component={CollectionAndDelivery} />
      <Tab.Screen name="Contact" component={ContactDetails} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;