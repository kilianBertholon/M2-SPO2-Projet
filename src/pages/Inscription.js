import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button, TextInput, Alert } from 'react-native';
import Cadre from '../component/Cadre';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../FirebaseConfig';



export default function Inscription({navigation}){
    //Initialiser les variables email et password à 0 pour éviter les erreurs
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    //Inscrire un utilisateurs
    const handleCreateAccount = async () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential)=>{
            console.log('User account created & signed in!');
            const user = userCredential.user;
            console.log(user);
            navigation.navigate('MonCompte');
        })
        .catch((error) => {
            console.log(error);
            alert(error.message);
        });
    }

    // se déplacer sur connecter
    const SeConnecter = async () => {
        navigation.navigate('SeConnecter')
    }

    return(
    <View style={styles.container}>
        <Cadre title = "S'inscrire">
        <TextInput onChangeText={(text) => setEmail(text)} style={styles.input} placeholder="Email" />
        <TextInput secureTextEntry={true} onChangeText={(text) => setPassword(text)} style={styles.input} placeholder="Mot de passe" />
        <TouchableOpacity style={styles.button} onPress={handleCreateAccount}>
            <Text style={styles.buttonText}>S'inscrire</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={SeConnecter}>
            <Text style={styles.buttonText}>Je me connecte</Text>
        </TouchableOpacity>
        </Cadre>
    </View>
);
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  marginTop: 40,
},
button: {
  backgroundColor: 'red', // Couleur de fond du bouton
  padding: 10,
  marginBottom: 10,
  borderRadius: 10,
  alignItems: 'center',
},
buttonText: {
  color: 'white', // Couleur du texte du bouton
  fontSize: 24,
  fontWeight: 'bold',
},
input: {
    height: 40,
    width: '100%',
    margin: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    color: 'white',
    backgroundColor: 'grey',
  },
});