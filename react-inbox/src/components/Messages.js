import React, {Component} from 'react'
import Message from './Message'

class Messages extends Component {
	render(){
		console.log(this.props.messages);
		return (
		<div>

		{this.props.messages.map((x =>
		<Message
	key = {x.id}
	subject= {x.subject} />))}

		</div>
	)
	}
}

export default Messages;
