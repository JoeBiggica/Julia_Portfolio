import React, { Component } from 'react';
import Link from 'next/link'
import Poster from './poster';

import styles from './Portfolio.scss';

export default class Portfolio extends Component {

	state = {
		active_project_index: null,
		active_project: false
	}

	constructor(props) {
		super(props);

		this.projects = [
			{
				name: 'skullcandy',
				poster_image: 'https://static1.squarespace.com/static/534b388de4b0d9388241e656/555499d4e4b0565df9f23a1d/555499e7e4b0565df9f23a5e/1431607784781/LoneWolf2_sm.jpg?format=750w',
				title: 'Skullcandy',
				opened: false,
				hidden: false,
				id: 1,
				assets: [
					{
						title: 'Title Goes Here',
						url: 'https://static1.squarespace.com/static/534b388de4b0d9388241e656/555499d4e4b0565df9f23a1d/555499e7e4b0565df9f23a5e/1431607784781/LoneWolf2_sm.jpg?format=750w',
						description: 'Description for the asset.'
					},
					{
						title: 'Title Goes Here',
						url: 'https://static1.squarespace.com/static/534b388de4b0d9388241e656/555499d4e4b0565df9f23a1d/555499e7e4b0b9618acd2d70/1431607784463/DarkHorse2_sm.jpg?format=750w',
						description: 'Description for the asset.'
					},
					{
						title: 'Title Goes Here',
						url: 'https://static1.squarespace.com/static/534b388de4b0d9388241e656/555499d4e4b0565df9f23a1d/555499e7e4b0565df9f23a60/1431607784172/BlackSheep2_sm.jpg?format=750w',
						description: 'Description for the asset.'
					}
				]
			},
			{
				name: 'tesla',
				poster_image: 'https://static1.squarespace.com/static/534b388de4b0d9388241e656/547f3e8ce4b04d33120eeb57/54b99732e4b06e38ad6034c7/1421449017883/tesla_v5_2.jpg?format=750w',
				title: 'Tesla',
				opened: false,
				hidden: false,
				id: 2
			},
			{
				name: 'barkbox',
				poster_image: 'https://static1.squarespace.com/static/534b388de4b0d9388241e656/549903d8e4b098bb33b87e9e/54990c02e4b0787a0cc14957/1419316236777/BarkBox_Print_-06.jpg?format=750w',
				title: 'Barkbox',
				opened: false,
				hidden: false,
				id: 3
			},
			{
				name: 'nike',
				poster_image: 'https://static1.squarespace.com/static/534b388de4b0d9388241e656/549907bbe4b07bc577886c39/549907e9e4b0bff459301cfa/1419315183649/nike_billboard_v1.jpg?format=750w',
				title: 'Nike',
				opened: false,
				hidden: false,
				id: 4
			},
			{
				name: 'roomba',
				poster_image: 'https://static1.squarespace.com/static/534b388de4b0d9388241e656/54991ce9e4b0bc65ffac1462/549a2492e4b0a7e35c9a2be6/1419388057416/NYC+copy+copy.jpg?format=750w',
				title: 'Roomba',
				opened: false,
				hidden: false,
				id: 5
			},
			{
				name: 'greygoose',
				poster_image: 'https://static1.squarespace.com/static/534b388de4b0d9388241e656/558c1bb3e4b03447dc04bba9/558c2a99e4b00dea8bca5bd7/1435249321448/?format=750w',
				title: 'Grey Goose',
				opened: false,
				hidden: false,
				id: 6
			},
			{
				name: 'skullcandy',
				poster_image: 'https://static1.squarespace.com/static/534b388de4b0d9388241e656/555499d4e4b0565df9f23a1d/555499e7e4b0565df9f23a5e/1431607784781/LoneWolf2_sm.jpg?format=750w',
				title: 'Skullcandy',
				opened: false,
				hidden: false,
				id: 7
			},
			{
				name: 'tesla',
				poster_image: 'https://static1.squarespace.com/static/534b388de4b0d9388241e656/547f3e8ce4b04d33120eeb57/54b99732e4b06e38ad6034c7/1421449017883/tesla_v5_2.jpg?format=750w',
				title: 'Tesla',
				opened: false,
				hidden: false,
				id: 8
			},
			{
				name: 'barkbox',
				poster_image: 'https://static1.squarespace.com/static/534b388de4b0d9388241e656/549903d8e4b098bb33b87e9e/54990c02e4b0787a0cc14957/1419316236777/BarkBox_Print_-06.jpg?format=750w',
				title: 'Barkbox',
				opened: false,
				hidden: false,
				id: 9
			},
		]
	}

	renderPoster = (p, i) => {
		return (
			<a href={`/project/${p.name}`}>
				<Poster {...p} />
			</a>
		);
	}

	render() {
		const active_project = this.projects[this.state.active_project_index];
		return(
			<div className={styles('container')}>
				<div className={styles('items-wrapper')}>
					{ this.projects.map(this.renderPoster.bind(this)) }
				</div>
			</div>
		)
	}
}