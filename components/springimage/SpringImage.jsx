import PropTypes from 'prop-types';
import classnames from 'classnames';
import { useState, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import styles from './SpringImage.scss';

const calc = (x, y) => [x - window.innerWidth / 10, y - window.innerHeight / 10];
const trans = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;

function SpringImage(props) {
	const {
		className,
		image_url
	} = props;

	const ref = useRef();

	const [isHovered, setHovered] = useState(false);

	const [amimateProps, setAnimateProps] = useSpring(() => ({ 
		xy: [0, 0], 
		config: { 
			mass: 10, 
			tension: 550, 
			friction: 140 
		} 
	}));


	const image_styles = {
		backgroundImage: `url(${image_url})`,
	}

	return (
		<div className={classnames(styles('container'), className)}>
			<div 
				class="container" 
				onMouseMove={({ clientX: x, clientY: y }) => setAnimateProps({ xy: calc(0, 0) })}
				onMouseLeave={() => setAnimateProps({ xy: [0, 0] })}
			>
				<animated.div 
					ref={ref}
					className={styles('card')} 
					style={{ 
						transform: amimateProps.xy.interpolate(trans),
						...image_styles
					}} 
				/>
		    </div>

		</div>
	);	
}

SpringImage.propTypes = {
	className: PropTypes.string,
	image_url: PropTypes.string
};

export default SpringImage;
