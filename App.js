import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView, Platform } from 'react-native';
import Navigator from './src/navigation';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Navigator />
      <StatusBar />
    </SafeAreaView>
  );
}

const color = (Platform.OS === 'ios' ? 'dark' : 'light')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'ios' ? null : 30,
  },
});
