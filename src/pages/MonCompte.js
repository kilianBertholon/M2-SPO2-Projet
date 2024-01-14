import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Cadre from '../component/Cadre';

import wifiLogo from '../../assets/image/Captor/logo_wifi.png';
import tests from '../../assets/image/Captor/tests.png';
import parametres from '../../assets/image/Captor/paramètres.png';
import check from '../../assets/image/Captor/check.png';

export default function MonCompte({navigation}) {
  const [firstButtonPressed, setFirstButtonPressed] = useState(false);
  const handleSubmit = async () => {
    navigation.navigate('Test')
}

  return (
    <View style={styles.container}>
      <Cadre title="Bonjour test">
        <TouchableOpacity
          style={firstButtonPressed ? styles.firstButtonPressed : styles.button}
          onPress={() => setFirstButtonPressed(true)}
        >
          <Image source={wifiLogo} style={styles.logo} />
          <Text style={styles.buttonText}>Se connecter à un capteur</Text>
        </TouchableOpacity>

        {/* Bouton 2 - Accéder à ses derniers tests */}
        <TouchableOpacity style={styles.button}>
          <Image source={tests} style={styles.logo} />
          <Text style={styles.buttonText}>Accéder à ses derniers tests</Text>
        </TouchableOpacity>

        {/* Bouton 3 - Gérer ses paramètres */}
        <TouchableOpacity style={styles.button}>
          <Image source={parametres} style={styles.logo} />
          <Text style={styles.buttonText}>Gérer ses paramètres</Text>
        </TouchableOpacity>

        {/* Bouton 4 - Commencer une nouvelle mesure */}
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Image source={check} style={styles.logo} />
          <Text style={styles.buttonText}>Commencer une nouvelle mesure </Text>
        </TouchableOpacity>
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
  button: {
    backgroundColor: '#CCCCCC', // Couleur grise
    borderRadius: 10,
    padding: 15,
    margin: 10,
    width: '100%', // Largeur à 100% de l'écran
    height: '18%',
    flexDirection: 'row', // Aligner les éléments horizontalement
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center', // Centre le bouton horizontalement sur l'écran
  },
  firstButtonPressed: {
    backgroundColor: '#CCCCCC', // Couleur grise
    borderRadius: 10,
    borderWidth: 1, // Ajoute une bordure si le premier bouton est pressé
    borderColor: 'red', // Couleur de la bordure rouge
    padding: 15,
    margin: 10,
    width: '100%', // Largeur à 100% de l'écran
    height: '18%',
    flexDirection: 'row', // Aligner les éléments horizontalement
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center', // Centre le bouton horizontalement sur l'écran
  },
  buttonText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000000',
  },
  logo: {
    width: 40, // Ajustez la largeur selon vos besoins
    height: 40, // Ajustez la hauteur selon vos besoins
    marginRight: 5, // Ajustez la marge à droite pour l'espace entre le logo et le texte
  },
});