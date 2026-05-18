import React from 'react';
import { Typography } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import TabTitle from '../TabTitle';
import Timeline from '../Timeline';
import { SkillItem } from './SkillItem';
import { useStyles } from '../../theme';
import skills from '../../db/skills.json';

export const Skills: React.FC = (): JSX.Element => {
	const classes: any = useStyles();
	const title: string = 'Skills';

	return (
		<>
			<TabTitle title={title} />
			<Typography className={classes.timelineTitle} variant='h4'>
				{title}
			</Typography>
			<div className={classes.timelineSection}>
				<Timeline
					align='full'
					data={skills}
					icon={CodeIcon}
					element={(timelineItem: any) => <SkillItem skillItem={timelineItem} />}
				/>
			</div>
		</>
	);
};
