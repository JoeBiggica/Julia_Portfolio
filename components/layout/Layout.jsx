import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './Layout.scss';

const Columns = {
	ONE_COLUMN: 'one-column',
	TWO_COLUMN: 'two-column',
	TWO_COLUMN_INVERTED: 'two-column-inverted',
	THREE_COLUMN: 'three-column'
};

class Layout extends PureComponent {

	static propTypes = {
		children: PropTypes.node,
		padding: PropTypes.bool,
		columns: PropTypes.oneOf(Object.values(Columns)),
		renderLeftColumn: PropTypes.func,
		renderRightColumn: PropTypes.func,
		renderMiddleColumn: PropTypes.func
	}

	static defaultProps = {
		columns: Columns.ONE_COLUMN
	}

	static Columns = Columns;

	renderColumns = () => {
		const {
			columns,
			children,
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
						<div className={styles('left-column', 'large')}>
							{renderLeftColumn}
						</div>
						<div className={styles('right-column')}>
							{renderRightColumn}
						</div>
					</div>
				);
			}
			case 'two-column-inverted': {
				return (
					<div className={styles('columns')}>
						<div className={styles('left-column')}>
							{renderLeftColumn}
						</div>
						<div className={styles('right-column', 'large')}>
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
