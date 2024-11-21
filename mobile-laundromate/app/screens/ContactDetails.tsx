import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../index';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useStore } from '../stores/UserStore';

type ContactDetailsNavigationProp = NativeStackNavigationProp<RootStackParamList, 'ContactDetails'>;

const ContactDetails: React.FC = () => {
  const navigation = useNavigation<ContactDetailsNavigationProp>();
  const fullName = useStore((state) => state.fullName);
  const phoneNumber = useStore((state) => state.phoneNumber);
  const setFullName = useStore((state) => state.setFullName);
  const setPhoneNumber = useStore((state) => state.setPhoneNumber);

  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <TouchableOpacity onPress={() => navigation.navigate('SelectService')}>
          <MaterialIcons name="arrow-back" size={24} color="#35434C" />
        </TouchableOpacity>
        <Text style={styles.appBarTitle}>Contact Details</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          placeholderTextColor="#35434C"
          value={fullName}
          onChangeText={setFullName}
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          placeholderTextColor="#35434C"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
        <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('CollectionandDelivery')}>
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

export default ContactDetails;