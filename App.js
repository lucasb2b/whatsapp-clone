import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView, Platform } from 'react-native';
import ChatsScreen from './src/screens/ChatsScreen';
import ChatScreen from './src/screens/ChatScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ChatScreen />
      <StatusBar style={color} backgroundColor='#03BB85'/>
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
