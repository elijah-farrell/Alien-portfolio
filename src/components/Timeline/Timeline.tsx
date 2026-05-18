import React from 'react';
import { Card, CardContent, Zoom } from '@mui/material';
import {
	Timeline as TimelineMUI,
	TimelineItem,
	TimelineSeparator,
	TimelineDot,
	TimelineConnector,
	TimelineContent
} from '@mui/lab';
import { useStyles } from '../../theme';

interface Props {
  data: Array<any>,
  icon: any,
  element: any,
  align?: 'center' | 'full'
}

export const Timeline: React.FC<Props> = (props: Props): JSX.Element => {
	const classes: any = useStyles();
	const transitionDelay: number = 50;
	const isFullWidth: boolean = props.align === 'full';
	const timelineClass: string = isFullWidth
		? `${classes.timeline} ${classes.timelineFull}`
		: classes.timeline;

	return (
		<TimelineMUI className={timelineClass} position='right'>
			{props.data.map((timelineItem: any, tIndex: number) => (
				<Zoom key={tIndex} in={true} style={{ transitionDelay: `${transitionDelay * tIndex}ms` }}>
					<TimelineItem className={classes.timelineItem} position='right'>
						<TimelineSeparator>
							<TimelineDot className={classes.timelineDot}>
								<props.icon className={classes.timelineIcon} />
							</TimelineDot>
							<TimelineConnector className={classes.timelineConnector} />
						</TimelineSeparator>
						<TimelineContent className={classes.timelineItemContent}>
							<Card className={classes.timelineItemCard}>
								<CardContent>
									{props.element(timelineItem)}
								</CardContent>
							</Card>
						</TimelineContent>
					</TimelineItem>
				</Zoom>
			))}
		</TimelineMUI>
	);
};
