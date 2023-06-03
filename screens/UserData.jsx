import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { ScrollView } from 'react-native-gesture-handler';

const UserData = () => {
  const userId = 1; // Replace with the actual user ID you want to retrieve data for
  const userContent = useSelector((state) => state.content[userId]);

  if (!userContent) {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>No data available for the user.</Text>
      </View>
    );
  }

  const { customers, siteReferences,anotherCustomers, dockets, weights, selects } = userContent;


  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Customer List:</Text>
      <ScrollView>
      <View style={styles.contentContainer}>
     
        {customers.map((customer, index) => (
          <View key={index}>
            <Text style={styles.contentItem}>{"Sender Name: "+customer.name}</Text>
            <Text style={styles.contentItem}>{"Sender Email: "+customer.email}</Text>
            <Text style={styles.contentItem}>{"Sender Contact: "+customer.contact}</Text>
            <Text style={styles.contentItem}>{"SiteReference: "+siteReferences[index]}</Text>
            <Text style={styles.contentItem}>{"Docket: "+dockets[index]}</Text>
            <Text style={styles.contentItem}>{"Weights: "+weights[index]}</Text>
            <Text style={styles.contentItem}>Category: {selects[index]}</Text>
            <Text style={styles.contentItem}>Type: {selects[index]}</Text>
            <Text>{"Receiver Name: " + anotherCustomers[index].customerName}</Text>
            <Text>{"Receiver Email: " + anotherCustomers[index].customerEmail}</Text>
            <Text>{"Receiver Contact: " + anotherCustomers[index].customerContact}</Text>
            <View style={styles.horizontalLine} />


           
          </View>
        ))}
      </View>
     </ScrollView>
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
  contentContainer: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  contentItem: {
    marginBottom: 5,
  },

  horizontalLine: {
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    marginTop: 20,
    marginBottom:20
  },
});

export default UserData;
