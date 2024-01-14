import React from 'react';
import { name as appName } from './app.json';
import { AppRegistry } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AuthProvider } from './back/AuthContext'; // Importez le AuthProvider

import TestAffichage from './pages/TestAffichage';
import SeConnecter from './pages/SeConnecter';
import Accueil from './pages/Accueil';
import Inscription from './pages/Inscription';
import MonCompte from './pages/MonCompte';
import Test from './pages/Test';



const Stack = createNativeStackNavigator();

export default function App() {
  return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Accueil'>
          <Stack.Screen name="Accueil" options={{headerShown: false}} component={Accueil} />
          <Stack.Screen name="SeConnecter" options={{headerShown: false}} component={SeConnecter} />
          <Stack.Screen name="TestAffichage" options={{headerShown: false}} component={TestAffichage} />
          <Stack.Screen name="Inscription" options={{headerShown: false}} component={Inscription} />
          <Stack.Screen name="MonCompte" options={{headerShown: false}} component={MonCompte} />
          <Stack.Screen name="Test" options={{headerShown: false}} component={Test} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

AppRegistry.registerComponent(appName, () => App);

