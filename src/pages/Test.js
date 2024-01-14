import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Cadre from '../component/Cadre';
import mygif from '../../assets/gif/fc.gif';

export default function Test({}) {
  const [buttonPressed, setButtonPressed] = useState(false);

  const handleButtonPress = () => {
    setButtonPressed(true);
    // Ajoutez ici le code pour lancer les GIFs ou effectuer d'autres actions nécessaires
  };

  return (
    <View style={styles.container}>
      <Cadre title="Réaliser une mesure">
        {buttonPressed ? (
          // Afficher le GIF ou autre contenu après avoir appuyé sur le bouton
          <View>
            <Image source={mygif} style={styles.gif} />
            <Text style={styles.projectDescription}>Mesure en cours...</Text>
          </View>
        ) : (
          // Afficher le bouton si le bouton n'a pas encore été pressé
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
              <Text style={styles.buttonText}>Lancer la mesure</Text>
            </TouchableOpacity>
          </View>
        )}
      </Cadre>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center', // Centrer le contenu verticalement
    marginTop: 40,
  },
  projectDescription: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 40,
    paddingHorizontal: 40,
    color: '#fff', // Couleur du texte de la description
  },
  buttonContainer: {
    marginTop: 'auto', // Pour positionner le bouton en bas de l'écran
  },
  button: {
    backgroundColor: 'green', // Couleur de fond du bouton (vert)
    padding: 30,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white', // Couleur du texte du bouton
    fontSize: 16,
    fontWeight: 'bold',
  },
  gif: {
    width: '100%',
    height: 600, // Ajustez la hauteur selon vos besoins
  },
});