import React from "react";
import ReactDOM from "react-dom";
// import App from './components/MessageList/MessageList';
import { App } from './App';

// import { Counter } from './components/Counter';
// import { App } from './components/App'

//const element = React.createElement ("a", {href: "https://ya.ru"}, "Yandex.ru")

//const Link = () => React.createElement ("a", {href: "https://ya.ru"}, "Yandex.ru")

// function Link(props) {
//   return React.createElement ("a", {href: "https://" + props.to}, props.to.toLocaleUpperCase());
// }

// function Link(props) {
//   return <a href={"https://" + props.to}>{props.to.toLocaleUpperCase()}</a>
// }

// const messages = [
//   {name: "Ivan", content: "Hello, world"},
//   {name: "Petr", content: "Hello, how are you?"},
//   {name: "Ivan", content: "I'm well"}
// ]
//
// const Message = ({name, content}) => {
//   return <li><strong>{name}: </strong>{content}</li>
// }
//
// const MessagesList = ({messages}) => {
//   return (<ul>
//     {messages.map((item, index) => <Message {...item} key={index}/>)}
//   </ul>);
// }
//
// const Messenger = ({messages}) => {
//   const sendMessage = () => {
//     messages.push({name: "Test", content: "It's wrong way"});
//     console.log(messages);
//     renderApp();
//   }
//
//   return (
//     <div>
//       <MessagesList messages = {messages} />
//       <button onClick = {sendMessage}>Send message</button>
//     </div>
//   )
// }
//
// function renderApp() {
//   ReactDOM.render(<Messenger messages={messages}/>, document.getElementById('root'));
// }
//
// renderApp();

ReactDOM.render(<App/>, document.getElementById('root'));
// ReactDOM.render(<Messenger messages={messages}/>, document.getElementById('root'));
