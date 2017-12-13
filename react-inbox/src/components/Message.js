
import React, { Component } from 'react';
class Message extends Component{
	constructor(props){
		super(props);
		this.state = {
			data: this.props,
			selected: this.props.selected,
			starred: this.props.starred
		}
	}

	defaultRead(){
		return this.props.read === true ? 'read' : 'unread'
	};

	defaultSelected(){
		return this.props.selected === true ? 'selected' : ''
	};

	defaultStarred() {
		return this.props.starred === true ? 'star fa fa-star' : 'star fa fa-star-o'
	}

	defaultChecked(){
		let selected = this.state.selected
		return selected === true ? 'checked' : ""
	}

	defaultLabels() {
		return this.props.labels.map((labelName) => {
			return <span class="label label-warning">{labelName}</span>
		})
	}

	render(){
		return (
			<div className={`row message ${this.defaultRead()} ${this.defaultSelected()}` }>
			  <div className="col-xs-1">
			    <div className="row">
			      <div className="col-xs-2">
			        <input type="checkbox"
								checked = {this.defaultChecked()}
							  />
			      </div>
			      <div className="col-xs-2">
			        <i className={this.defaultStarred()}></i>
			      </div>
			    </div>
			  </div>
			  <div className="col-xs-11">
						{this.defaultLabels()}
						{this.props.subject}
			  </div>
			</div>
		)
	}
}

export default Message;
