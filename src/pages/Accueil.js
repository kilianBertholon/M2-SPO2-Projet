import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';
import Cadre from '../component/Cadre';
import Arduino from '../../assets/image/Captor/arduino.jpg';


export default function Accueil({ navigation}) {
    const handleSubmit = async () => {
        navigation.navigate('SeConnecter')
    }
    return (
      <View style={styles.container}>
        <Cadre title="SP02 Project">
          <Text style={styles.projectDescription}>
            Bienvenue sur l'application SP02 Project, Ce projet vise à créer un outil de suivi 
            de mesure de la saturation en oxygène dans le sang et de la fréquence cardiaque.
            en milieu aquatique.
          </Text>
          <Image style={styles.logo} source={Arduino} />
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Se connecter</Text>
            </TouchableOpacity>
          </View>
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
    textAlign: 'left',
    marginTop: 40,
    paddingHorizontal: 40,
    color: '#fff', // Couleur du texte de la description
  },
  logo: {
    width: '80%',
    height: '45%',
    marginBottom: 2,
    marginTop: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  buttonContainer: {
    marginTop: 'auto', // Pour positionner le bouton en bas de l'écran
  },
  button: {
    backgroundColor: 'red', // Couleur de fond du bouton (vert)
    padding: 30,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white', // Couleur du texte du bouton
    fontSize: 16,
    fontWeight: 'bold',
  },
});
