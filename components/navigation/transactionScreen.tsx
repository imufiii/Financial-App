import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TransactionContext } from './transactionItems';
import { FontAwesome } from '@expo/vector-icons'; 

const TransactionScreen = () => {
  const transactions = TransactionContext();
  const navigations = useNavigation();

  const navigateToTheItem = (transaction) => {
    navigations.navigate('TransactionDetail', { transaction });
  };

  const renderTransactionItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigateToTheItem(item)}>
      <View style={styles.transactionContainer}>

        <View style={styles.transactionDetails}>
          <Text style={styles.transactionName}>{item.name}</Text>
          
        </View>
        <View style={styles.transactionAmountContainer}>
          <Text style={styles.transactionAmount}>${item.amount}</Text>
          <FontAwesome name="chevron-right" size={20} color="black" />
        </View>
        
      </View>
      <View style={styles.line} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList

        data={transactions}
           keyExtractor={(item) => item.id}
        renderItem={renderTransactionItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  transactionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',

    padding: 16,
    marginBottom: 12,
    borderRadius: 8,
  },
  line: {
    height: 1,
    backgroundColor: 'gray',
  
  },
  transactionDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  transactionName: {
    fontSize: 18,
    fontWeight: 'bold',

    marginRight: 8,
  },
  transactionAmountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  transactionAmount: {
        fontSize: 18,
    marginLeft: 8,
  },
});

export default TransactionScreen;
