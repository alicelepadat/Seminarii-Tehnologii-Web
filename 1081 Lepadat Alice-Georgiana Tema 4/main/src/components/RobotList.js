import React, { Component } from 'react'
import RobotStore from '../stores/RobotStore'
import Robot from './Robot'
import RobotForm from './RobotForm'



class RobotList extends Component {
	constructor() {
		super()
		this.state = {
			robots: []
		}
	}
	componentDidMount() {
		this.store = new RobotStore()
		this.setState({
			robots: this.store.getRobots()
		})
		this.store.emitter.addListener('UPDATE', () => {
			this.setState({
				robots: this.store.getRobots()
			})
		})
	}

	onAdd = (e, robot) => {
		e.preventDefault();
		
		const newRobot = {
			id: null,
			name: robot.name,
			type: robot.type,
			mass: robot.mass
		}
		this.store.addRobot(newRobot);
	}
	render() {
		return (
			<div>
				{
					this.state.robots.map((e, i) =>
						<Robot item={e} key={i} />
					)
				}

				<RobotForm onAdd={(e, robot) => this.onAdd(e, robot)} />
			</div>
		)
	}
}

export default RobotList
