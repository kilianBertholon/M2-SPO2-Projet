import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Button, TextInput } from 'react-native';
import Cadre from '../component/Cadre';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../FirebaseConfig';


export default function SeConnecter({navigation}){

    //Initialiser les variables email et password à 0 pour éviter les erreurs
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const user = React.useState(null);
    const UserEmail = React.useState(null);

    const Inscription = async () => {
        navigation.navigate('Inscription')
    }


    const handleSignIn = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential)=>{
            console.log('SignIn !');
            const user = userCredential.user;
            navigation.navigate('MonCompte');
        })
        .catch((error) => {
            console.log(error);
        });
    
    }   

    
    return(
        <View style={styles.container}>
            <Cadre title = "Se connecter">
            <TextInput onChangeText={(text) => setEmail(text)} style={styles.input} placeholder="Email" />
            <TextInput secureTextEntry={true} onChangeText={(text) => setPassword(text)} style={styles.input} placeholder="Mot de passe" />
            <TouchableOpacity style={styles.button} onPress={handleSignIn}>
                <Text style={styles.buttonText}>Se connecter</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={Inscription}>
                <Text style={styles.buttonText}>S'inscrire</Text>
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
      padding: 15,
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
        height: 50,
        width: '100%',
        margin: 10,
        padding: 15,
        borderRadius: 10,
        color: 'white',
        backgroundColor: 'grey',
      },
  });

