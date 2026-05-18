import { makeStyles } from '@mui/styles';
import { colors } from '.';

export const useStyles: any = makeStyles(() => ({

	/*** Navbar ***/

	navbar: {
		boxShadow: 'none !important',
		transition: 'all 0.3s ease-out 0s !important',
		padding: '1rem 2rem !important'
	},
	brand: {
		height: '3em !important'
	},
	navbarToggler: {
		position: 'relative',
		margin: 'auto 0',
		borderColor: colors.Transparent,
		backgroundColor: colors.Transparent,
		'&:focus, &:active': {
			outline: '0 !important'
		},
		'& span': {
			display: 'block !important',
			backgroundColor: `${colors.Accent} !important`,
			height: '4px !important',
			width: '27px !important',
			marginTop: '5px !important',
			marginBottom: '5px !important',
			transform: 'rotate(0deg) !important',
			transition: 'transform 0.35s ease-in-out !important',
			left: '0 !important',
			opacity: '1 !important'
		},
		'&:not(.collapsed) span': {
			'&:nth-child(1)': {
				transform: 'translateY(4.5px) rotate(135deg) !important'
			},
			'&:nth-child(2)': {
				transform: 'translateY(-4.5px) rotate(-135deg) !important'
			}
		}
	},
	button: {
		textTransform: 'lowercase',
		fontFamily: 'press-start !important',
		fontSize: '1rem',
		color: colors.Accent,
		border: 'none',
		padding: '5px 10px',

		// Animation
		display: 'inline-block',
		backgroundColor: colors.Transparent,
		backgroundImage: `linear-gradient(${colors.Accent} 0 0)`,
		backgroundPosition: '0 50%',
		backgroundSize: '0 100%',
		backgroundRepeat: 'no-repeat',
		transition: 'color 0.3s, background-size 0.3s',
		'&:hover': {
			color: colors.Black,
			backgroundSize: '100% 100%'
		},
		'&:active': {
			color: colors.Black,
			backgroundSize: '100% 100%',
			backgroundImage: `linear-gradient(${colors.AccentDeep} 0 0)`
		}
	},

	/*** Home ***/

	homeContainer: {
		height: '75vh',
		display: 'flex'
	},
	homeName: {
		width: '75vmin !important',
		margin: 'auto'
	},

	/*** Timeline ***/

	timelineTitle: {
		color: colors.Accent,
		fontFamily: 'press-start !important',
		textAlign: 'center',
		textTransform: 'lowercase',
		padding: '30px 0'
	},
	timeline: {
		overflow: 'auto',
		margin: '0 auto',
		display: 'flex',
		width: 'fit-content'
	},
	timelineFull: {
		width: '100%',
		maxWidth: '100%',
		margin: '0',
		padding: 0,
		display: 'block',
		'& .MuiTimelineItem-root': {
			width: '100%',
			minHeight: 'unset',
			'&::before': {
				display: 'none'
			}
		},
		'& .MuiTimelineContent-root': {
			flex: '1 1 auto',
			maxWidth: 'none',
			width: '100%',
			padding: '0 0 1.5rem 1rem'
		},
		'& $timelineItem': {
			width: '100%'
		},
		'& $timelineItemContent': {
			width: '100%',
			display: 'block'
		},
		'& $timelineItemCard': {
			width: '100%',
			display: 'block',
			boxSizing: 'border-box'
		}
	},
	timelineSection: {
		width: '100%',
		maxWidth: '100%',
		boxSizing: 'border-box',
		padding: '0 clamp(1rem, 4vw, 3rem)'
	},
	timelineIntro: {
		marginBottom: '2vh',
		textAlign: 'left'
	},
	timelineItem: {
		width: 'fit-content',
		'&::before': {
			maxWidth: 0
		}
	},
	timelineDot: {
		backgroundColor: `${colors.Transparent} !important`,
		boxShadow: 'none !important'
	},
	timelineConnector: {
		backgroundColor: `${colors.Accent} !important`
	},
	timelineIcon: {
		color: colors.Accent
	},
	timelineItemContent: {
		overflow: 'auto',
		display: 'flex',
		width: 'fit-content'
	},
	timelineItemCard: {
		display: 'flex',
		background: `${colors.Transparent} !important`,
		border: `2px solid ${colors.Accent}`
	},
	itemTimeframe: {
		fontFamily: 'press-start !important',
		fontSize: '0.5rem !important',
		color: colors.White
	},
	itemHeader: {
		fontFamily: 'press-start !important',
		fontSize: '0.9rem !important',
		color: colors.White
	},
	skillTags: {
		display: 'flex',
		flexWrap: 'wrap',
		gap: '0.5rem',
		marginTop: '0.75rem'
	},
	skillTag: {
		display: 'inline-flex',
		alignItems: 'center',
		justifyContent: 'center',
		textAlign: 'center',
		minWidth: '4.75rem',
		minHeight: '2rem',
		padding: '0.4rem 0.75rem',
		border: `1px solid ${colors.Accent}`,
		borderRadius: '4px',
		backgroundColor: 'rgba(0, 0, 0, 0.25)',
		fontFamily: 'monospace',
		fontSize: '0.7rem',
		color: colors.White,
		lineHeight: 1.2,
		cursor: 'pointer',
		userSelect: 'none',
		willChange: 'transform',
		transition: 'transform 0.2s ease-out, border-color 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease',
		'&:hover': {
			borderColor: colors.AccentDeep,
			backgroundColor: 'rgba(147, 51, 234, 0.2)',
			boxShadow: '0 0 14px rgba(168, 85, 247, 0.45)'
		}
	},
	projectLinksRow: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		gap: '0.5rem',
		margin: '0.5rem 0 0.75rem'
	},
	projectLinkButton: {
		display: 'inline-flex',
		alignItems: 'center',
		gap: '0.35rem',
		padding: '0.3rem 0.55rem',
		border: `1px solid ${colors.Accent}`,
		borderRadius: '4px',
		backgroundColor: 'rgba(0, 0, 0, 0.25)',
		transition: 'background-color 0.2s ease, border-color 0.2s ease',
		'&:hover': {
			backgroundColor: 'rgba(173, 255, 47, 0.12)',
			borderColor: colors.Lime
		}
	},
	projectLinkIconButton: {
		display: 'inline-flex',
		alignItems: 'center',
		justifyContent: 'center',
		width: '2rem',
		height: '2rem',
		padding: '0.35rem',
		border: `1px solid ${colors.Accent}`,
		borderRadius: '4px',
		backgroundColor: 'rgba(0, 0, 0, 0.25)',
		transition: 'background-color 0.2s ease, border-color 0.2s ease',
		'&:hover': {
			backgroundColor: 'rgba(173, 255, 47, 0.12)',
			borderColor: colors.Lime
		}
	},
	projectLinkIconMui: {
		color: colors.Accent,
		fontSize: '0.95rem !important'
	},
	projectLinkLabel: {
		fontFamily: 'monospace !important',
		fontSize: '0.65rem !important',
		color: colors.Accent,
		lineHeight: 1
	},
	projectGithubIcon: {
		display: 'block',
		width: '1.15rem',
		height: '1.15rem'
	},
	bulletPoint: {
		display: 'flex'
	},

	/*** Courses ***/

	courseContainer: {
		maxWidth: 'fit-content',
		maxHeight: '75vh',
		margin: '0 auto'
	},

	/*** Resume ***/

	resume: {
		display: 'flex',
		justifyContent: 'center'
	},

	/*** About ***/

	aboutBox: {
		textAlign: 'center'
	},
	avatar: {
		height: '40vmin !important',
		width: '40vmin !important',
		margin: '2.5vh auto'
	},
	aboutName: {
		margin: '2.5vh auto',
		height: '40px'
	},
	aboutDescriptionBox: {
		display: 'inline-flex',
		overflowY: 'auto',
		maxHeight: '35vh',
		margin: '2.5vh 25vw',
		padding: '1.5vh 1.5vw',
		border: `3px solid ${colors.Accent}`,
		borderRadius: '10px'
	},
	linksBox: {
		width: 'fit-content',
		margin: '0 auto'
	},
	linkIcon: {
		display: 'flex',
		height: 'inherit',
		width: 'inherit'
	},
	linksList: {
		overflowY: 'auto',
		maxHeight: '50vh',
		border: `3px solid ${colors.Accent}`,
		borderRadius: '10px'
	},

	/*** Footer ***/

	footer: {
		bottom: 0,
		textAlign: 'center'
	},
	copyright: {
		color: colors.Accent,
		fontFamily: 'press-start !important',
		fontSize: '1rem !important',
		padding: '2.5vh 2.5vw'
	},

	/*** 404 ***/

	errorBox: {
		textAlign: 'center',
		margin: '2.5vh auto',
		padding: '5vh 0',
		animation: '$upDown 5s ease-in-out infinite'
	},
	notFoundTitle: {
		fontFamily: 'press-start !important',
		fontSize: '4rem !important',
		color: colors.Accent
	},
	notFoundSubtitle: {
		fontFamily: 'press-start !important',
		fontSize: '2rem !important',
		color: colors.Accent
	},
	notFoundImage: {
		width: '66vw',
		marginTop: '5vh'
	},
	'@keyframes upDown': {
		'0%': {
			transform: 'translateY(-2.5vh)'
		},
		'50%': {
			transform: 'translateY(2.5vh)'
		},
		'100%': {
			transform: 'translateY(-2.5vh)'
		}
	},

	/*** Other ***/

	bodyText: {
		fontFamily: 'press-start !important',
		fontSize: '0.75rem !important',
		color: colors.White
	},
	center: {
		textAlign: 'center',
		marginBottom: '3vh'
	},
	textButton: {
		// Animation
		display: 'inline-block',
		backgroundColor: colors.Transparent,
		backgroundImage: `linear-gradient(${colors.Accent} 0 0)`,
		backgroundPosition: '0 100%',
		backgroundSize: '0 2px',
		backgroundRepeat: 'no-repeat',
		transition: 'background-size 0.3s',
		'&:hover': {
			color: colors.Accent,
			backgroundSize: '100% 2px'
		},
		'&:active': {
			color: colors.AccentDeep,
			backgroundSize: '100% 2px',
			backgroundImage: `linear-gradient(${colors.AccentDeep} 0 0)`
		}
	}
}));
