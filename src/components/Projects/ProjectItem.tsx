import React from 'react';
import { Typography, Link, Tooltip, Box } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import BulletedList from '../BulletedList';
import { useStyles } from '../../theme';
import githubIcon from '../../assets/icons/github.svg';

interface Props {
  projectItem: any
}

export const ProjectItem: React.FC<Props> = (props: Props): JSX.Element => {
	const classes: any = useStyles();
	const { projectItem } = props;
	const hasPrimaryLink: boolean = Boolean(projectItem.ref);
	const hasGithub: boolean = Boolean(projectItem.github);

	return (
		<>
			<Typography className={classes.itemHeader}>{projectItem.title}</Typography>
			{(hasPrimaryLink || hasGithub) && (
				<Box className={classes.projectLinksRow}>
					{hasPrimaryLink && (
						<Link
							href={projectItem.ref}
							target='_blank'
							rel='noreferrer'
							underline='none'
							className={classes.projectLinkButton}
						>
							<OpenInNewIcon className={classes.projectLinkIconMui} fontSize='small' />
							<Typography className={classes.projectLinkLabel} component='span'>
								{projectItem['ref-label'] || 'View project'}
							</Typography>
						</Link>
					)}
					{hasGithub && (
						<Tooltip title='View source on GitHub' arrow>
							<Link
								href={projectItem.github}
								target='_blank'
								rel='noreferrer'
								underline='none'
								className={classes.projectLinkIconButton}
								aria-label='GitHub repository'
							>
								<img className={classes.projectGithubIcon} src={githubIcon} alt='' />
							</Link>
						</Tooltip>
					)}
				</Box>
			)}
			<Typography className={classes.bodyText}>{projectItem.description}</Typography>
			<BulletedList items={projectItem['bullet-points']} />
		</>
	);
};
