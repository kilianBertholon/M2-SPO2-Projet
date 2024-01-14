import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cadre from '../component/Cadre'
import Graph from '../component/Graph.js'

export default function TestAffichage({navigation}) {
  return (
    <View style={styles.container}>
      <Cadre title = "SP02 Project">
      <Graph title = "SP02 Graph"></Graph>
      <Graph title = "FC Graph"></Graph>
      <StatusBar 
              backgroundColor="#FFF" // Couleur d'arrière-plan de la barre d'état
              barStyle="light-content" // Couleur du texte (light ou dark)
              hidden={false} // Si true, la barre d'état est masquée
               />
      </Cadre>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 40,
  },
});
