import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Avatar, List, ListItem, Icon, Link as MuiLink, Zoom, Fade } from '@mui/material';
import TabTitle from '../TabTitle';
import { useStyles } from '../../theme';
import avatar from '../../assets/images/alien-lime.png';
import about from '../../db/about.json';

export const About: React.FC = (): JSX.Element => {
	const classes: any = useStyles();
	const title: string = 'About';
	const transitionDelay: number = 50;

	return (
		<>
			<TabTitle title={title} />
			<div className={classes.aboutBox}>
				<Zoom in={true}>
					<Avatar
						className={classes.avatar}
						src={avatar}
						alt='avatar'
					/>
				</Zoom>
				<Zoom in={true}>
					<h2 className='about-name-glitch'>{about.name}</h2>
				</Zoom>
				<div className={classes.center}>
					<Link to={'/resume'}>
						<div className={`${classes.bodyText} ${classes.textButton}`}>See resume</div>
					</Link>
				</div>
				<div className={classes.aboutDescriptionBox}>
					<div className={classes.bodyText}>{about.description}</div>
				</div>
				<div className={classes.linksBox}>
					<List className={classes.linksList}>
						{about.links.map((link: any, lIndex: number) => (
							<Fade key={lIndex} in={true} style={{transitionDelay: `${transitionDelay * lIndex}ms`}}>
								<ListItem>
									<Icon>
										<img className={classes.linkIcon} alt='icon' src={require(`../../${link['icon-path']}`)} />
									</Icon>
									{link.ref ? (
										<MuiLink href={link.ref} target='_blank' underline='none'>
                                            &nbsp;&nbsp;
											<div className={`${classes.bodyText} ${classes.textButton}`}>{link.value}</div>
										</MuiLink>
									):(
										<Typography>&nbsp;{link.value}</Typography>
									)}
								</ListItem>
							</Fade>
						))}
					</List>
				</div>
			</div>
		</>
	);
};
