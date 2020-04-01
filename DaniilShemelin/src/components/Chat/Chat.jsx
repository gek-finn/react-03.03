import React from 'react';
import { Message } from './../Message/Message.jsx';
import { MessageList } from './../MessageList/MessageList.jsx';
import { ChatForm } from './../ChatForm/ChatForm.jsx';
import './Chat.css';
import PropTypes from 'prop-types';

export const Chat = ({ messages, onSendMessage }) => {
  return (
    <div className="chat__wrapper">
      <MessageList messages={ messages } />
      <ChatForm onSendMessage={ onSendMessage } />
    </div>
  )
}

Chat.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape(Message.propTypes)),
  onSendMessage: PropTypes.func.isRequired
}
