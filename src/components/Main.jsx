import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';

import AppBar from './AppBar';
// import AppBar from './NewAppBar';
import RepositoryList from './RepositoryList';
import SignIn from './SignIn';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e1e4e8"
  },
  repoList: {
    paddingTop: 10
  }
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route
          path="/"
          element={<RepositoryList style={styles.repoList}/>}
          exact
        />
        <Route
          path="/sign-in"
          element={<SignIn />}
          exact
        />
        <Route
          path="*"
          element={<Navigate to="/" />}
          replace
        />
      </Routes>
      <StatusBar style='light' />
    </View>
  );
};

export default Main;
