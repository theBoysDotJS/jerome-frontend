import React from 'react';

class Settings extends React.Component {
	constructor() {
		super();
		this.state = {}
	}

	render() {
		return(
			<section id="settings">
				<ul>
					<li className="settings--language">
						<div>
					{/* Add language select in here */}
						</div>
					</li>
					<li className="settings--notifications">
						<div>
					{/* Add sound notification toggle in here */}
						</div>
					</li>
					<li className="settings--sounds">
						<div>
					{/* Add sound slider in here */}
						</div>
					</li>
				</ul>
			</section>
		);
	}
}
