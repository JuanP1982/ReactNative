import React, { useEffect, useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import CustomButton from '../../components/CustomButton/CustomButton';
import { auth, db } from '../../firebaseConnection';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Firestore, collection, getDocs, query, where } from 'firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import Input from '../../components/Input';

const Login = ({  onLogin, onNavigateToRegister }) => {
  const navigation = useNavigation()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  
  useEffect(() => {
    const LoginSucesso = async () => {
      
      
      if (user) {
        await ArmazenarUser();
        navigation.navigate('Routes');
      }
    };

    LoginSucesso();
  }, [user]);

  async function ArmazenarUser(){
    try {
      
      const usersRef = collection(db, 'Clientes');
      const q = query(usersRef, where('email', '==', email));
      const querySnapshot = await getDocs(q);

      let usuario = {};
      querySnapshot.forEach((doc) => {
        usuario = {
          id: doc.id,
          nome: doc.data().nome,
          email: doc.data().email,
          favoritos: doc.data().favoritos,
        };
      });
      
      
      await AsyncStorage.setItem('Usuario', JSON.stringify(usuario));
      await AsyncStorage.setItem('token', 'logado');
    } catch (e) {
      console.error('Erro ao armazenar usuário no AsyncStorage:', e);
      Alert.alert('Erro', 'Não foi possível armazenar os dados do usuário.');
    }
  }

  const handleLoginPress = async () => {
    try {
      await signInWithEmailAndPassword(email, password);
      } catch (erro) {
      console.error('Erro ao efetuar login:', erro.message);
      Alert.alert('Erro', 'Houve um problema ao tentar fazer login.');
    }
  };

  const handleRegisterPress = () => {
    onNavigateToRegister();
  };


  return (
    <View style={styles.container}>
      <Input
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#ccc"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={secureTextEntry}
        />
        <TouchableOpacity
          style={styles.eyeButton}
          onPress={() => setSecureTextEntry(!secureTextEntry)}
        >
          <Text style={styles.eyeText}>{secureTextEntry ? '👁️' : '🙈'}</Text>
        </TouchableOpacity>
      </View>
      <CustomButton title="Login" onPress={handleLoginPress} />
      <TouchableOpacity style={styles.registerButton} onPress={handleRegisterPress}>
        <Text style={styles.registerButtonText}>Registrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#121212',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  eyeButton: {
    position: 'absolute',
    right: 10,
  },
  eyeText: {
    color: '#fff',
    fontSize: 18,
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    color: '#fff',
  },
  registerButton: {
    backgroundColor: '#000',
    padding: 20,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 10,
    shadowColor: '#00ff00',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 30,
  },
  registerButtonText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default Login;











