import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView, Platform } from 'react-native';
import ChatsScreen from './src/screens/ChatsScreen'

export default function App() {
  return (
    
    <SafeAreaView style={styles.container}>
      <ChatsScreen />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'ios' ? null : 30,
  },
});
