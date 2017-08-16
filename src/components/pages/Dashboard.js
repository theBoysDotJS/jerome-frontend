import React, {Component} from 'react';
import Infinite from 'react-infinite';
import ConvoCard from "../elements/ConvoCard.js";
import NavBar from "../elements/NavBar.js";
import Api from "../../api.js"

class Dashboard extends Component {
	constructor() {
		super();
		this.state = {
			cardInfo: []
		};
	}

	componentDidMount() {
		this._fetchConvos();
	}

	_fetchConvos = () => {
		Api.getAllConvos(localStorage.token). //may need to be document.cookie
		then(res => res.body).then(cardData => {
			console.log(cardData, 'this is card data')
			this.setState({
				cardInfo: cardData[0]
			})
		})
	}

	render() {
		return (
			<div className="dashboard">
				{this.state.cardInfo.map(c => {
					console.log(c, 'this is c');
					return (<ConvoCard users={c.users} name={c.name} message={c.messages} handle={c.handle}/>);
				})}
			</div>
		);
	}
}

export default Dashboard;

// <Infinite useWindowAsScrollContainer containerHeight={90} elementHeight={400} displayBottomUpwards className="dashboard--cards">
// </Infinite>

//SET CONTAINER HEIGHT AND WINDOW SCROLL TO BYPASS RENDER ERROR, ONLY PLACEHOLDER VALUE
