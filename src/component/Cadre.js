import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Cadre = ({ title, children }) => {
  return (
    <View style={styles.container}>
      {title && <Text style={styles.title}>{title}</Text>}
      <View style={styles.content}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0, // Pour que le cadre ne prenne pas toute la hauteur de l'écran
    width:'100%', //prenne toute la largeur de l'écran
    height:'100%', // Prenne 100% de la hauteur
    padding: 16,
    backgroundColor: '#000000', // Couleur de fond du cadre
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center', // Centre le texte horizontalement
    justifyContent: 'center', // Centre le texte verticalement
  },
  content: {
    flex: 1, // Pour occuper l'espace restant
  },
});

export default Cadre;