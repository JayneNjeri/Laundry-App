import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../index';
import { useStore } from '../stores/UserStore';

type CollectionAndDeliveryNavigationProp = NativeStackNavigationProp<RootStackParamList, 'CollectionandDelivery'>;

const CollectionAndDelivery: React.FC = () => {
  const navigation = useNavigation<CollectionAndDeliveryNavigationProp>();
  const collectionMethod = useStore((state) => state.collectionMethod);
  const deliveryMethod = useStore((state) => state.deliveryMethod);
  const setCollectionMethod = useStore((state) => state.setCollectionMethod);
  const setDeliveryMethod = useStore((state) => state.setDeliveryMethod);

  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <TouchableOpacity onPress={() => navigation.navigate('ContactDetails')}>
          <MaterialIcons name="arrow-back" size={24} color="#35434C" />
        </TouchableOpacity>
        <Text style={styles.appBarTitle}>Collection & Delivery</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.label}>Collection Method</Text>
        <TextInput
          style={styles.input}
          placeholder="Collection Method"
          placeholderTextColor="#35434C"
          value={collectionMethod}
          onChangeText={setCollectionMethod}
        />
        <Text style={styles.label}>Delivery Method</Text>
        <TextInput
          style={styles.input}
          placeholder="Delivery Method"
          placeholderTextColor="#35434C"
          value={deliveryMethod}
          onChangeText={setDeliveryMethod}
        />
        <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('PlaceOrder')}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </ScrollView>
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
  scrollView: {
    padding: 20,
  },
  label: {
    fontFamily: 'Poppins',
    color: '#35434C',
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#E5EDF3',
    borderRadius: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: '#35434C',
    color: '#35434C',
    fontFamily: 'Poppins',
    marginBottom: 20,
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

export default CollectionAndDelivery;