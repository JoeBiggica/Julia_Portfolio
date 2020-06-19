import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'next/router';
import { Action } from 'actions';
import fetch from 'isomorphic-unfetch';
import Head from 'next/head';
import Header from 'components/header';
import Layout from 'components/layout';
import LightBox from 'components/lightbox';

const project_mock =  require('static/project.json');

import styles from './Project.scss';

import PropTypes from 'prop-types';

class Project extends Component {

	static async getInitialProps ({ store, req, res, query }) {
		const isServer = !!req
		const project_name = query.name;

		if (typeof(fetch) !== 'undefinded') {
			const project_res = await fetch(`https://biggica-sites.s3.amazonaws.com/julia-portfolio/projects/${project_name}/project.json`);
			const project_json = await project_res.json();

			if (project_json) {
				console.log(project_json);
				return {
					project: project_json
				};
			}
		}

		return {
			project_name,
			project
		};
		
	}

	static propTypes = {
		router: PropTypes.object
	}

	static defaultProps = {
		project: {}
	}

	state = {
		lightbox_active: false
	}

	componentDidMount() {
		document.addEventListener('keyup', e => {
			if (e.keyCode === 13) this.closeLightBox();     // enter
			if (e.keyCode === 27) this.closeLightBox();   // esc
		});
	}


	openLightBox = image_url => {
		this.setState({
			lightbox_active: true,
			lightbox_image_url: image_url
		});
		document.body.style['overflow-x'] = 'hidden';
		document.body.style['overflow-y'] = 'hidden';
	}

	closeLightBox = () => {
		this.setState({ 
			lightbox_active: false 
		});
		document.body.style['overflow-x'] = '';
		document.body.style['overflow-y'] = '';
	}

	renderLightBoxImage = image_url => {
		const image_styles = {
			backgroundImage: `url(${image_url})`,
			backgroundSize: 'contain',
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'center'
		};

		return (
			<div className={styles('lightbox-image-container')}>
				{/*<div className={styles('lightbox-image')} style={image_styles} />*/}
				<img src={image_url} />
			</div>
		);
	}

	renderImage = (image, index) => {
		return (
			<img 
				key={`image=${index}`}
				src={image.url} 
				loading='lazy' 
				onClick={() => this.openLightBox(image.url)}
			/>
		);
	}

	renderLeftColumn = () => {
		const {
			title,
			attribution,
			description,
			images
		} = this.props.project;
		return (
			<>

				<div className={styles('title-container')}>
					<h3 className={styles('title')}>{title}</h3>
					<div className={styles('background')} />
				</div>
				{ attribution && <p className={styles('attribution')}>{attribution}</p> }
				{description && <div className={styles('description')} dangerouslySetInnerHTML={{ __html: description }} /> }
			</>
		);
	}

	renderRightColumn = () => {
		const {
			images
		} = this.props.project;
		return (
			<div className={styles('image-list')}>
				{ images && images.map(this.renderImage) }
			</div>
		);
	}

	render() {
		const {
			router,
			project,
			url
		} = this.props;
		
		console.log('########', project);
		const {
			lightbox_active,
			lightbox_image_url
		} = this.state;
		
		return (
			<>
				<Header />
				<Layout
					columns={Layout.Columns.TWO_COLUMN}
					padding
					left_column_width='30%'
					right_column_width='70%'
					renderLeftColumn={this.renderLeftColumn()}
					renderRightColumn={this.renderRightColumn()}
				>
				</Layout>
				{ lightbox_active && 
					<LightBox onClick={() => this.closeLightBox()}>
						{ this.renderLightBoxImage(lightbox_image_url) }
					</LightBox>
				}
			</>
		)
	}
}

export default withRouter(Project
);
