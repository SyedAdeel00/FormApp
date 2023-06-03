// screens/FormScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import UserData from './UserData';
import { HStack } from 'native-base';
import { SelectList } from 'react-native-dropdown-select-list';

const HomeScreen = ({navigation}) => {
    const [isCustomerModalVisible, setIsCustomerModalVisible] = useState(false);
    const [isDeliverModalVisible, setIsDeliverModalVisible] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [siteReference, setSiteReference] = useState('');
  const [customerName, setCustomerName]= useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerContact, setCustomerContact] = useState('')
  const[docket, setDocket] = useState('');
  const[weight, setWeight] = useState('');
  const [selected, setSelected] = useState('');



  const customers = useSelector((state) => state.content.customers);
  const anotherCustomers = useSelector((state) => state.content.anotherCustomers);
  const dispatch = useDispatch();


  const toggleCustomerModal = () => {
    setIsCustomerModalVisible(!isCustomerModalVisible);
  };

  const toggleDeliverModal = () => {
    setIsDeliverModalVisible(!isDeliverModalVisible);
  };

  const addCustomer = () => {
    const customer = { name, email, contact };
    dispatch({ type: 'ADD_CUSTOMER', payload: customer });
    setName('');
    setEmail('');
    setContact('');
    setIsCustomerModalVisible(false);
  };

  const addDeliverCustomer = () => {
    const anotherCustomer = { customerName, customerEmail, customerContact };
    dispatch({ type: 'ADD_ANOTHER_CUSTOMER', payload: anotherCustomer });
    setCustomerName('');
    setCustomerEmail('');
    setCustomerContact('');
    setIsDeliverModalVisible(false);
  };


  const handleSubmit = () => {
    dispatch({ type: 'SET_SITE_REFERENCE', payload: siteReference }); // Dispatch action to update Redux state
    dispatch({ type: 'SET_DOCKET', payload: docket }); // Dispatch action to update Redux state
    dispatch({ type: 'SET_WEIGHT', payload: weight }); // Dispatch action to update Redux state
    dispatch({ type: 'SET_CATEGORY', payload: selected }); // Dispatch action to update Redux state
    navigation.navigate('UserData');

  };

  const data = [
    {key:'1', value:'Mobiles'},
    {key:'2', value:'Appliances'},
    {key:'3', value:'Cameras'},
]

  return (
    <View style={styles.container}>
        <View style={{marginTop:10, marginBottom:10}}>
            <HStack>
    <Text style={styles.heading}>Customer</Text>
    <TouchableOpacity style={styles.addButton} onPress={toggleCustomerModal} >
      <Text style={styles.addButtonText}>Add Customer</Text>
    </TouchableOpacity>
    </HStack>
    </View>

      <Modal visible={isCustomerModalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalHeading}>Add Customer</Text>
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Contact"
            value={contact}
            onChangeText={setContact}
          />
          <TouchableOpacity style={styles.addButton} onPress={addCustomer}>
            <Text style={styles.addButtonText}>Add</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <Text style={styles.heading}>Site Reference</Text>
      <TextInput
  style={styles.input}
  placeholder="Site Reference"
  value={siteReference}
  onChangeText={setSiteReference} // Update the onChangeText to use setSiteReference directly
/>
<View style={{marginTop:10, marginBottom:10}}>
    <HStack>
<Text style={styles.heading}>Deliver To</Text>
      <TouchableOpacity style={styles.addButton} onPress={toggleDeliverModal}>
        <Text style={styles.addButtonText}>Add Customer</Text>
      </TouchableOpacity>
      </HStack>
      </View>

      <Modal visible={isDeliverModalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalHeading}>Add Customer</Text>
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={customerName}
            onChangeText={setCustomerName}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={customerEmail}
            onChangeText={setCustomerEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Contact"
            value={customerContact}
            onChangeText={setCustomerContact}
          />
          <TouchableOpacity style={styles.addButton} onPress={addDeliverCustomer}>
            <Text style={styles.addButtonText}>Add</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <Text style={styles.heading}>Category</Text>
      <SelectList 
        setSelected={(val) => setSelected(val)} 
        data={data} 
        save="value"
    />

      <Text style={styles.heading}>Type</Text>
      <SelectList 
        setSelected={(val) => setSelected(val)} 
        data={data} 
        save="value"
    />

      <Text style={styles.heading}>Docket#</Text>
      <TextInput
        style={styles.input}
        placeholder="Docket#"
        value={docket}
        onChangeText={setDocket}
      />

      <Text style={styles.heading}>Weight(tonne). OPTIONAL</Text>
      <TextInput
        style={styles.input}
        placeholder="Weight"
        value={weight}
        onChangeText={setWeight}
      />

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop:50
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  addButton: {
    alignSelf: 'flex-end',
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 5,
    marginLeft:200
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  modalHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
   backgroundColor:"white",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  submitButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default HomeScreen;