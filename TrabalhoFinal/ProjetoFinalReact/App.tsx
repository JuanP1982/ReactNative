// src/App.tsx
import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import AuthNavigator from './auth/AuthNavigator';
import Routes from './routes';
import Logo from './components/logo';

const App = () => {
  const [userAuthenticated, setUserAuthenticated] = React.useState(false);

  const handleAuthentication = (authenticated) => {
    setUserAuthenticated(authenticated);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      {/* <Logo /> */}
      <View style={styles.authContainer}>
        {!userAuthenticated ? (
          <AuthNavigator onAuthentication={handleAuthentication} />
        ) : (
          <View style={styles.routesContainer}>
            <Routes />
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  authContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  routesContainer: {
    flex: 1,
    width: '100%',
  },
});

export default App;  










