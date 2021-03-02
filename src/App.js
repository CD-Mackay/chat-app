import React from 'react';
import { Chat, Channel, ChannelHeader, Thread, Window } from 'stream-chat-react';
import { MessageList, MessageInput } from 'stream-chat-react';
import { StreamChat } from 'stream-chat';

import 'stream-chat-react/dist/css/index.css';

const chatClient = StreamChat.getInstance('dz5f4d5kzrue');
const userToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoicGxhaW4tZGV3LTQiLCJleHAiOjE2MTQ3MjE2MDJ9.-IByyU7GN8jCMUISIbrIG0JxOL57P8hkbd_s65GRwP0';

chatClient.connectUser(
  {
    id: 'plain-dew-4',
    name: 'plain',
    image: 'https://getstream.io/random_png/?id=plain-dew-4&name=plain',
  },
  userToken,
);

const channel = chatClient.channel('messaging', 'godevs', {
  image: 'https://cdn.chrisshort.net/testing-certificate-chains-in-go/GOPHER_MIC_DROP.png',
  name: 'reactions to React',
});

const app = () => {
  <Chat client={chatClient} theme='messaging light'>
    <Channel channel={channel}>
      <Window>
        <ChannelHeader />
        <MessageList />
        <MessageInput />
      </Window>
      <Thread />
    </Channel>
  </Chat>
};

export default App;