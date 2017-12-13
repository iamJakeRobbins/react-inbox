import React, {Component} from 'react'
import Message from './Message'

class Messages extends Component {

	render(){
		return (
		<div>
		{this.props.messages.map((x =>
		<Message
	key = {x.id}
	subject= {x.subject}
	read = {x.read}
	selected = {x.selected}
	checked = {this.props.checked}
	/>))}

		</div>
	)
	}
}

export default Messages;
