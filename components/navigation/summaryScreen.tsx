import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TransactionContext } from './transactionItems';

const SummaryScreen = () => {
  const transactionsList = TransactionContext();

  const TotalNumberofTransaction = transactionsList.length;
  const totalSpend = transactionsList.reduce((sum, transaction) => sum + transaction.amount, 0);
  
  const Cheapest = transactionsList.reduce((min, transaction) => (transaction.amount < min.amount ? transaction : min), transactionsList[0]);
  const ExpensiveItem = transactionsList.reduce((max, transaction) => (transaction.amount > max.amount ? transaction : max), transactionsList[0]);

  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <Text style={styles.title}>Transactions:</Text>
        
        <Text style={styles.value}>{TotalNumberofTransaction}</Text>
      </View>
      <View style={styles.line} />
      <View style={styles.itemContainer}>
      
        <Text style={styles.title}>Total Spending:</Text>

        <Text style={styles.value}>${totalSpend}</Text>
      </View>
      <View style={styles.line} />
      <View style={styles.columnContainer}>
               <Text style={styles.title}>Highest Spending:</Text>
        <View style={styles.rowContainer}>
          <Text style={styles.name}>{ExpensiveItem.name}</Text>
        
        
          <Text style={styles.amount}>${ExpensiveItem.amount}</Text>

        </View>
      </View>
      <View style={styles.line} />
      <View style={styles.columnContainer}>
     
     
        <Text style={styles.title}>Lowest Spending:</Text>
        <View style={styles.rowContainer}>
          <Text style={styles.name}>{Cheapest.name}</Text>
          
          <Text style={styles.amount}>${Cheapest.amount}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  columnContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  line: {
    height: 1,
    backgroundColor: 'gray',
    marginVertical: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 18,
    marginLeft: 'auto',
  },
  name: {
    fontSize: 16,
    marginRight: 8,
  },
  amount: {
    fontSize: 16,
  },
});

export default SummaryScreen;
