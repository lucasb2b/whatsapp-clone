import { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';

export default function InputBox() {
  const [newMessage, setNewMessage] = useState('');

  const onSend = () => {
    console.warn('Sending a new message: ', newMessage);
    setNewMessage('');
  }

  return(
    <SafeAreaView edges={['bottom']} style={styles.container}>

      <AntDesign name='plus' size={24} color='royalblue' />

      <TextInput 
        value={newMessage} 
        onChangeText={setNewMessage}
        style={styles.input} 
        placeholder='type your message...' 
      />

      <MaterialIcons onPress={onSend} style={styles.send} name='send' size={16} color='white' />

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'whitesmoke',
    padding: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: 'center',
    borderTopColor: 'lightgray',
    borderTopWidth: StyleSheet.hairlineWidth
  },
  input: {
    flex: 1,
    backgroundColor: 'white',
    padding: 5,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    borderRadius: 50,
    borderColor: 'lightgray',
    borderWidth: StyleSheet.hairlineWidth,
    height: 35
  },
  send: {
    backgroundColor: 'royalblue',
    padding: 8,
    borderRadius: 16,
    overflow: 'hidden'
  },
});