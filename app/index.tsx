import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons'; 

import transactionStackList from '../components/navigation/transactionStackList';
import summaryScreen from '../components/navigation/summaryScreen';
import { TransactionListItem } from '../components/navigation/transactionItems';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <TransactionListItem>
      <NavigationContainer independent={true}>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {

              let iconName;

              let iconColor;

              if (route.name === 'Transactions') {
                iconName = 'list';
                iconColor = focused ? '#ff6347' : '#4682b4';

              } else if (route.name === 'Summary') {
                  iconName = 'pie-chart';
                iconColor = focused ? '#ff6347' : '#4682b4'; 

              }

              return <MaterialIcons name={iconName} size={size} color={iconColor} />;
            },
            tabBarActiveTintColor: '#ff6347', 
            tabBarInactiveTintColor: '#4682b4', 
          })}
        >
          <Tab.Screen name="Transactions" component={transactionStackList} />
          <Tab.Screen name="Summary" component={summaryScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </TransactionListItem>
  );
}
