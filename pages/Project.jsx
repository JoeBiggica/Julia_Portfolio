import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'next/router';
import { Action } from 'actions';
import fetch from 'isomorphic-unfetch';
import Head from 'next/head';
import Header from 'components/header';
import Layout from 'components/layout';

const project_mock =  require('static/project.json');

import styles from './Project.scss';

import PropTypes from 'prop-types';

class Project extends Component {

	static async getInitialProps ({ store, req, res, query }) {
		const isServer = !!req
		const project_name = query.name;
		// const url = `https://www.fongshungga.com/article/${slug}`;

		// if (typeof(fetch) !== 'undefinded') {
		// 	const article_res = await fetch(`https://biggica-sites.s3.amazonaws.com/fongs-hung-ga/articles/${slug}/article-data.json`);
		// 	const article_json = await article_res.json();

		// 	if (article_json) {
		// 		return {
		// 			article: article_json.article
		// 		};
		// 	}
		// }

		return {
			project_name
		};
		
	}

	static propTypes = {
		router: PropTypes.object
	}

	static defaultProps = {
		project: {}
	}

	renderLeftColumn = () => {
		const {
			title,
			attribution,
			description,
			images
		} = project_mock;
		return (
			<>

				<div className={styles('title-container')}>
					<h3 className={styles('title')}>{title}</h3>
					<div className={styles('background')} />
				</div>
				<p className={styles('attribution')}>{attribution}</p>
				<p className={styles('description')}>{description}</p>
			</>
		);
	}

	renderRightColumn = () => {
		const {
			title,
			attribution,
			description,
			images
		} = project_mock;
		return (
			<>
				<h2 className={styles('title')}>{title}</h2>
				<p className={styles('attribution')}>{attribution}</p>
				<p className={styles('description')}>{description}</p>
			</>
		);
	}

	render() {
		const {
			router,
			project,
			url
		} = this.props;

		console.log('#####', project_mock);
		
		const {
			title,
			attribution,
			description,
			images
		} = project_mock;
		
		return (
			<>
				<Header />
				<Layout
					columns={Layout.Columns.TWO_COLUMN}
					padding
					left_column_max_width={700}
					renderLeftColumn={this.renderLeftColumn()}
					renderRightColumn={this.renderRightColumn()}
				>
					<h2 className={styles('title')}>{title}</h2>
					<p className={styles('attribution')}>{attribution}</p>
					<p className={styles('description')}>{description}</p>
					<div className={styles('image-list')}>
					</div>
				</Layout>
			</>
		)
	}
}

export default withRouter(Project
	);
