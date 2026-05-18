import React from 'react';
import { Typography, Box } from '@mui/material';
import { useStyles } from '../../theme';
import { SkillTag } from './SkillTag';

interface Props {
	skillItem: {
		category: string;
		'bullet-points': string[];
	};
}

export const SkillItem: React.FC<Props> = (props: Props): JSX.Element => {
	const classes: any = useStyles();

	return (
		<>
			<Typography className={classes.itemHeader}>{props.skillItem.category}</Typography>
			<Box className={classes.skillTags}>
				{props.skillItem['bullet-points'].map((skill: string, index: number) => (
					<SkillTag key={index} label={skill} />
				))}
			</Box>
		</>
	);
};
