import React, { Component, PropTypes } from 'react';
import Restaurant from './Restaurant';
import map from 'lodash/map';
import './Restaurants.css';
import { database } from './firebase';
class Restaurants extends Component {
	constructor(props) {
		super(props);
	}

	handleSelect = key => {
		const currentUser = this.props.user;
		database
			.ref('/restaurants')
			.child(key)
			.child('votes')
			.child(currentUser.uid)
			.set(currentUser.displayName);
	}
	handleDeselect = key => {
		const currentUser = this.props.user;
		database
			.ref('/restaurants')
			.child(key)
			.child('votes')
			.child(currentUser.uid)
			.remove();
	}
	render() {
		const { user, restaurants } = this.props;
		return (
			<section className="Restaurants">
				{map(restaurants, (restaurant, key) => (
					<Restaurant
						user={user}
						handleDeselect={() => this.handleDeselect(key)}
						handleSelect={() => this.handleSelect(key)}
						key={key}
						{...restaurant}
					/>
				))}
			</section>
		);
	}
}

Restaurants.propTypes = {
    user: PropTypes.object,
    currentUser: PropTypes.object,
	restaurantsRef: PropTypes.object,
	restaurants: PropTypes.object
};

export default Restaurants;
