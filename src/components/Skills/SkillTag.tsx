import React, { useRef } from 'react';
import { useStyles } from '../../theme';

interface Props {
	label: string;
}

const MAGNETIC_STRENGTH = 0.35;

export const SkillTag: React.FC<Props> = ({ label }: Props): JSX.Element => {
	const classes: any = useStyles();
	const tagRef = useRef<HTMLSpanElement>(null);

	const handleMouseMove = (event: React.MouseEvent<HTMLSpanElement>): void => {
		const tag = tagRef.current;
		if (!tag) {
			return;
		}

		const rect = tag.getBoundingClientRect();
		const offsetX = event.clientX - rect.left - rect.width / 2;
		const offsetY = event.clientY - rect.top - rect.height / 2;

		tag.style.transform = `translate(${offsetX * MAGNETIC_STRENGTH}px, ${offsetY * MAGNETIC_STRENGTH}px)`;
	};

	const handleMouseLeave = (): void => {
		const tag = tagRef.current;
		if (!tag) {
			return;
		}

		tag.style.transform = 'translate(0, 0)';
	};

	return (
		<span
			ref={tagRef}
			className={classes.skillTag}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
		>
			{label}
		</span>
	);
};
