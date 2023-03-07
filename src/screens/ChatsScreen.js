import React from 'react';
import { View, Text, FlatList } from 'react-native';
import chats from '../../assets/data/chats.json';
import ChatListItem from '../components/ChatListItem';

const ChatsScreen = () => {
  return(
    <View>
      <FlatList 
        data={chats}
        renderItem={({ item }) => <ChatListItem chat={item} />}
        style={{ backgroundColor: 'white' }}
      />
    </View>
  )
}

export default ChatsScreen;