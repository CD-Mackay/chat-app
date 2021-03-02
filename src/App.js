import React from 'react';
import { Chat, Channel, ChannelHeader, ChannelList, Thread, Window } from 'stream-chat-react';
import { MessageList, MessageInput } from 'stream-chat-react';
import { StreamChat } from 'stream-chat';
import { ChannelPreview } from './Components/ChannelPreview';
import { MessageComponent } from './Components/MessageComponent';

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

// const channel = chatClient.channel('messaging', 'godevs', {
//   image: 'https://cdn.chrisshort.net/testing-certificate-chains-in-go/GOPHER_MIC_DROP.png',
//   name: 'reactions to React',
// });

const filters = { type: 'messaging', members: { $in: ['plain-dew-4'] } };
const sort = { last_message_at: -1 };
const channels = chatClient.queryChannels(filters, sort);

const App = () => (
  <Chat client={chatClient} theme='messaging light'>
    <ChannelList filters={filters} sort={sort} Preview={ChannelPreview} />
    <Channel Message={MessageComponent}>
      <Window>
        <ChannelHeader />
        <MessageList />
        <MessageInput />
      </Window>
      <Thread />
    </Channel>
  </Chat>
);

export default App;