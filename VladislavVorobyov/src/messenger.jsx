import React from 'react';
import MessageList from './message-list.jsx';

const messages = [
    {id: 1, author: "Vlad", content: "Hello, world!"},
    {id: 2, author: "World", content: "Hello, Vlad!"},
];

class MessengerApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [...messages],
            message: '',
            author: 'Anonimous',
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    render() {
        return (
            <div>
                <h3>Messanger</h3>
                <label htmlFor="author">Кто вы: </label>
                <input
                    id={"author"}
                    onChange={this.handleChange}
                    value={this.state.author}
                />
                <MessageList messages={this.state.messages} />
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="message">Сообщение: </label>
                    <input
                        id={"message"}
                        onChange={this.handleChange}
                        value={this.state.message}
                    />
                </form>
            </div>
        );
    }

    handleChange(e) {
        this.setState({[e.target.id]: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        if (!this.state.message.length){
            return;
        }
        const newMessage = {
            id: this.state.messages.length+1,
            author: this.state.author.length?this.state.author:'Anonimous',
            content: this.state.message,
        };
        this.setState(state => ({
            messages: state.messages.concat(newMessage),
            message: '',
        }));
    }
}

export default MessengerApp;