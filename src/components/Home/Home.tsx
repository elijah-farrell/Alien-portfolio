import React from 'react';
import { Zoom } from '@mui/material';
import TabTitle from '../TabTitle';
import { useStyles } from '../../theme';

const NAME = 'Elijah Farrell';

export const Home: React.FC = (): JSX.Element => {
	const classes: any = useStyles();

	return (
		<>
			<TabTitle title={NAME} />
			<div className={classes.homeContainer}>
				<Zoom in={true}>
					<div className='home-glitch-hero'>
						<h1 className='home-glitch'>{NAME}</h1>
					</div>
				</Zoom>
			</div>
		</>
	);
};
