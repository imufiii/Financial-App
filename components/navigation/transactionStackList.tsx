import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TransactionScreen from './transactionScreen';
import TransactionDetailScreen from './transactionDetails';

const Stack = createStackNavigator();

const TransactionStackListItem = () => (
  <Stack.Navigator>
    <Stack.Screen name="TransactionList" component={TransactionScreen} options={{ headerShown: false }} />
    <Stack.Screen name="TransactionDetail" component={TransactionDetailScreen}  />
  </Stack.Navigator>
);

export default TransactionStackListItem;
