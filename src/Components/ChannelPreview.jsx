import React from 'react';

class ChannelPreview extends React.Component { 
  render() {
    const { setActiveChannel, channel } = this.props;
    const unReadCount = channel.countUnread();
    return (
      <div className="channel_preview">
        <a href='#' onClick={(e) => setActiveChannel(channel, e)}>
          {channel.data.name}
        </a>
        <span>unread messages: {unreadCount}</span>
      </div>
    );
  }
}