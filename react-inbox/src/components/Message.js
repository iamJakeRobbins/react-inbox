import React, { Component } from 'react';
class Message extends Component{
	render(){
		return (
			<div>
				{this.props.subject}
			</div>
		)
	}
}
export default Message;
