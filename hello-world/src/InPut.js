/**
 * Created by Dimas on 03.12.2016.
 */
import React from 'react'

import './InPut.css'

const Message = ({message, id, deleteMessage, editMessage}) =>
    <div>
        <button onClick={deleteMessage}>delete</button>
        <button onClick={editMessage}>edit</button>
        <h1>{message.id}:{message.text}:{message.author}:{message.created_at}</h1>
    </div>

const Editor = ({newMessage, changeMessageText, saveMessage}) => <div><input placeholder='Edit your message'
                                                                             value={newMessage.text}
                                                                             onChange={changeMessageText}/>
    <button onClick={saveMessage}>save</button>
</div>

class InPut extends React.Component {

    constructor() {
        super()
        this.state = {
            editMessage: '',
            author: '',
            newMessage: {},
            messages: [],

        }
    }


    changeMessageText(text) {
        const {newMessage} = this.state
        this.setState({
            newMessage: {
                ...newMessage,
                text
            }
        })
    }

    EditMessageText(text) {

        this.setState({
                editMessage: text
            }
        )
    }

    saveMessege() {


    }


    send() {
        const {newMessage, messages, author} = this.state
        let data = new Date()
        let day = data.getDate()
        let month = data.getMonth()
        let year = data.getFullYear()
        const full = (year + '/' + month + '/' + day)

        messages.push({
            ...newMessage,
            // get last id and increment it
            id: messages.length ? messages.map(item => item.id).reverse()[0] + 1 : 1,
            created_at: full,
            author
        })

        this.setState({
            messages,
            newMessage: {
                text: ''
            }
        })
    }

    deleteMessage(message) {
        const {messages} = this.state
        this.setState({
            messages: messages.filter(item => item.id !== message.id)
        })
    }

    editMessage(message) {
        const {messages, editMessage} = this.state


        let cat = messages[(message.id - 1)]
        cat.text = <Editor newMessage={message} changeMessageText={e => this.EditMessageText(e.target.value)}
                           saveMessege={() => this.saveMessage(message)}/>
        console.log(message.id, editMessage, cat.text)
        this.setState({messages})

    }

    saveMessage(message) {
        const {editMessage, messages}= this.state
        const cat = messages[(message.id - 1)]
        cat.text = editMessage
        console.log(cat.text)
        this.setState({messages})

    }


    changeAuthor(author) {
        this.setState({author})

    }

    render() {
        const {newMessage, messages, author} = this.state

        return (<div className="chat">
                <div className="massages">
                    {messages.map(message =>
                        <Message key={message.id} message={message} deleteMessage={() => this.deleteMessage(message)}
                                 editMessage={() => this.editMessage(message)}/>
                    )}
                </div>


                <div className="input">
                    <input
                        className="InputField" type="text"
                        placeholder="Type your massage..."
                        value={newMessage.text}
                        onChange={e => this.changeMessageText(e.target.value)}
                    />
                    <button onClick={() => this.send()}>send</button>
                    <div>
                        <input
                            className="UserName" type="text"
                            placeholder="Type Your Name, Bitch"
                            value={author}
                            onChange={(e) => this.changeAuthor(e.target.value)}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default InPut;
