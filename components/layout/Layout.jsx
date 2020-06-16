import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './Layout.scss';

const Columns = {
	ONE_COLUMN: 'one-column',
	TWO_COLUMN: 'two-column',
	THREE_COLUMN: 'three-column'
};

class Layout extends PureComponent {

	static propTypes = {
		children: PropTypes.node,
		padding: PropTypes.bool,
		columns: PropTypes.oneOf(Object.values(Columns)),
		left_column_width: PropTypes.string,
		right_column_width: PropTypes.string,
		renderLeftColumn: PropTypes.object,
		renderRightColumn: PropTypes.object,
		renderMiddleColumn: PropTypes.object
	}

	static defaultProps = {
		columns: Columns.ONE_COLUMN
	}

	static Columns = Columns;

	renderColumns = () => {
		const {
			columns,
			children,
			left_column_width,
			right_column_width,
			renderLeftColumn,
			renderRightColumn,
			renderMiddleColumn
		} = this.props;

		switch (columns) {
			case 'one-column':
				return children;

			case 'two-column': {
				return (
					<div className={styles('columns')}>
						<div className={styles('left-column')} style={{width: `${left_column_width}`}}>
							{renderLeftColumn}
						</div>
						<div className={styles('right-column')} style={{width: `${right_column_width}`}}>
							{renderRightColumn}
						</div>
					</div>
				);
			}
			default:
				return children;
		}
	}

	render() {
		const {
			className,
			children,
			padding
		} = this.props;

		const inner_classname = styles('inner', {
			'padding': padding
		});

		return (
			<div className={classnames(styles('container'), className)}>
				<div className={inner_classname}>
					{this.renderColumns()}
				</div>
			</div>
		);	
	}
}

export default Layout;
