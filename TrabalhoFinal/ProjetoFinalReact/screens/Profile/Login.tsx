import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import CustomButton from '../../components/CustomButton';

const Login = ({ navigation, onLogin, onNavigateToRegister }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const handleLoginPress = () => {
    onLogin(email, password);
  };

  const handleRegisterPress = () => {
    onNavigateToRegister();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#ccc"
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
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    color: '#fff',
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











