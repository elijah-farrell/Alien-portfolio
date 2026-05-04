import React from 'react';
import ReactPlayer from 'react-player';
import { Container, Typography } from '@mui/material';
import TabTitle from '../TabTitle';
import { useStyles } from '../../theme';

export const Music: React.FC = (): JSX.Element => {
	const classes: any = useStyles();
	const title: string = 'Music';
	const musicSource: string = '';

	return (
		<>
			<TabTitle title={title} />
			<Container className={classes.musicContainer}>
				<Typography className={classes.musicTitle}>
					Music
				</Typography>
				{musicSource ? (
					<ReactPlayer
						className={classes.audioPlayer}
						playing
						loop
						url={musicSource}
					/>
				) : (
					<Typography className={classes.bodyText} sx={{ textAlign: 'center' }}>
						Add a SoundCloud or other audio URL in Music.tsx when you want an embed here.
					</Typography>
				)}
			</Container>
		</>
	);
};
