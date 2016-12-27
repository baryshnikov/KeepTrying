/**
 * Created by Dimas on 14.12.2016.
 */
import React from 'react'
import InPut from './InPut'
import './menu.css'
import Images from'./Images'
class Menu extends React.Component {
    constructor() {
        super()
        this.state = {
            value: '',
            List: {
                chat: {value: 'Chat', Name: <InPut/>},
                images: {value: 'Images', Name: <Images/>},
                contacts: {value: 'Contacts'},
                Name: ''
            }

        }
    }

    handleMenu(event) {

        this.setState({value: event.Name})
    }

    render() {
        return <div>
            <div className="Menu">
                <button className="btn"
                        onClick={() => this.handleMenu(this.state.List.chat)}>{this.state.List.chat.value}</button>
                <button className="btn"
                        onClick={() => this.handleMenu(this.state.List.images)}>{this.state.List.images.value}</button>
                <button className="btn"
                        onClick={() => this.handleMenu(this.state.List.contacts)}>{this.state.List.contacts.value}</button>
                <div className="Emb">Їбать пікча</div>

            </div>
            <div className="LeftTool"></div>
            <div className="app">{this.state.value}</div>
            <div className="RightTool"></div>
        </div>
    }

}

export default Menu;