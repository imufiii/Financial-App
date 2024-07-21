import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TransactionDetailScreen = ({ route }) => {
  const { transaction } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.locationContainer}>
      <Text style={styles.amount}>${transaction.amount}</Text>
    
        <Text style={styles.locationText}>{transaction.location}</Text>
      </View>
      <View style={styles.lineContainer}>
            <Text style={styles.lineText}>Transaction</Text>
       
        <Text style={styles.dateText}>{transaction.date}</Text>
      </View>
  
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  amount: {

    fontSize: 34,

  },
  line: {
    height: 1,
    backgroundColor: 'gray',
    marginVertical: 10,
  },
  locationContainer: {
    backgroundColor: '#add8e6',
    padding: 16,
   
    marginBottom: 16,
    alignItems: 'center',
    width: '100%',

  },
  locationText: {

    fontSize: 24,
    textAlign: 'center',
  },
  lineContainer: {
    flexDirection: 'row',

    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%', 
    paddingHorizontal: 16, 
    
    
  },
  lineText: {
    fontSize: 16,
    fontStyle: 'italic',
    justifyContent: 'space-between',
  },
  dateText: {
    fontSize: 16,
    fontStyle: 'italic',
    
    marginLeft: 'auto', 
  },
});

export default TransactionDetailScreen;
