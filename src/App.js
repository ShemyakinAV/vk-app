import React, { useState, useEffect , Component} from 'react';
import connect from '@vkontakte/vk-connect';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';
import Car from './Car/Car'

import Home from './panels/Home';
import Persik from './panels/Persik';

class App extends Component {

	state = {
		cars: [
			{id: 1, name: 'VAZ', year: 2018},
			{id: 2, name: 'Audi', year: 2016},
			{id: 3, name: 'Ferrari', year: 2010}
		],
		pageTitle: 'React components',
		showCars: true
	}

	onChangeName(name, index) {
		const car = this.state.cars[index]
		car.name = name
		const cars = [...this.state.cars]
		cars[index] = car
		this.setState({
			cars
		})
	}

	// toggleCarsHandler = () => {
	//     this.setState({
	//         showCars: !this.state.showCars
	//     })
	// }

	deleteHandler(index) {
		let cars = this.state.cars.concat()

		cars.splice(index, 1)

		this.setState({cars})
	}

	render() {
		const divStyle = {
			textAlign: 'center'
		}

		const cars = this.state.cars

		return (
			<div style={divStyle}>
				<h1>{this.state.pageTitle}</h1>

				{/*<button*/}
				{/*    onClick={this.toggleCarsHandler.bind(this, 'Changed!')}>Toggle Cars*/}
				{/*</button>*/}

				<div style={{
					width:300,
					margin:'auto',
					paddingTop: 20
				}}>
					{this.state.showCars ?
						this.state.cars.map((car, index) => {
							return (
								<Car
									key={index}
									name={car.name}
									year={car.year}
									onDelete={this.deleteHandler.bind(this, index)}
									onChangeName={event => this.onChangeName(event.target.value, index)}
								/>
							)
						})
						: null
					}
				</div>
			</div>
		);
	}
}

export default App;

