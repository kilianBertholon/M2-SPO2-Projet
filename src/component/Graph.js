import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Carre = ({ title }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.content}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '40%',
    backgroundColor: '#FFFFFF',
    marginBottom: '2%', // Marge en bas du carré
  },
  header: {
    flex: 0.10, // 5% de la hauteur
    justifyContent: 'center', // Centre le titre verticalement
    padding: 10, // Marge intérieure pour le titre
    backgroundColor: '#000000', // Couleur de fond du titre
  },
  title: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center', // Centre le texte horizontalement
  },
  content: {
    flex: 0.90, // 95% de la hauteur pour le contenu (graphiques, etc.)
  },
});

export default Carre;