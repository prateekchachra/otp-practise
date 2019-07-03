import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import firebase from 'firebase';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';

export default function App() {

  componentDidMount = () => {
    const firebaseConfig = {
      apiKey: "AIzaSyCQMDaSHyWBbTy9Avj6u6PMxFYWzsiLESw",
      authDomain: "opt-practise.firebaseapp.com",
      databaseURL: "https://opt-practise.firebaseio.com",
      projectId: "opt-practise",
      storageBucket: "",
      messagingSenderId: "713675627418",
      appId: "1:713675627418:web:5e6da8cb209a71da"
    };
    firebase.initializeApp(firebaseConfig);

  };
  


  return (
    <View style={styles.container}>
     <SignUpForm />
     <SignInForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
