
import React, { Component } from 'react';
class Message extends Component{
	constructor(props){
		super(props);
		this.state = {
			data: this.props,
			selected: this.props.selected
		}
	}
	// selectedState(e){
	// 	this.state.selected === true ? this.setState({selected:false}) : {selected:true}
	// }
	toggleRead(){
		return this.props.read === true ? 'read' : 'unread'
	};
	toggleSelected(){
		return this.props.selected === true ? 'selected' : ''
	};
	setChecked(){
		let selected = this.state.selected
		 return selected === true ? 'checked' : ""
	}
	// clickHandler(variable){
	// 	let poop = this.state.data
	// 	poop[variable].selected === !poop[variable].selected
	// 		this.setState({
	// 			data: poop
	// 		})
	// }

	render(){
		console.log(this.state.selected)
		return (
			<div className={`row message ${this.toggleRead()} ${this.toggleSelected()}` }>
			  <div className="col-xs-1">
			    <div className="row">
			      <div className="col-xs-2">
			        <input type="checkbox"

							  />
			      </div>
			      <div className="col-xs-2">
			        <i className="star fa fa-star-o"></i>
			      </div>
			    </div>
			  </div>
			  <div className="col-xs-11">

						{this.props.subject}

			  </div>
			</div>
		)
	}
}
export default Message;
