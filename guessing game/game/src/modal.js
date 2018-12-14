import React, {Component} from 'react';
import './modal.css'

class Modal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            flag : true,
        }
    }

    render() {
        return(
            <div className={`modal ${this.state.flag ? '' : 'hidden'}`}></div>
        )
    }
}

export default Modal