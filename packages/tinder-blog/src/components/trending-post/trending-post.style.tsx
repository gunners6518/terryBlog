import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const TrendingPostWrapper = styled.div`
	position: relative;
	margin-bottom: 25px;
	@media (max-width: 1200px) {
		margin-bottom: 20px;
	}
	&:last-child {
		margin-bottom: 0;
	}
`;

export const PostTitle = styled.h3`
	font-size: ${themeGet('fontSizes.5', '18')}px;
	font-weight: ${themeGet('fontWeights.3', '400')};
	line-height: 1.75;
	margin-bottom: 0;
	font-family: ${themeGet('fontFamily.0', "'Poppins', sans-serif")};

	@media (max-width: 1200px) {
		font-size: ${themeGet('fontSizes.4', '16')}px;
	}
	@media (max-width: 1024px) {
		font-size: ${themeGet('fontSizes.3', '15')}px;
		line-height: 1.65;
	}
	@media (max-width: 575px) {
		font-size: 14px;
	}
	a {
		color: ${themeGet('colors.textColor', '#121213')};
		display: inline;
		background: linear-gradient(to right, currentColor 0%, currentColor 100%);
		background-size: 0px 1px;
		background-position: 0 95%;
		transition: background-size 0.35s cubic-bezier(0.48, 0.56, 0.67, 0.76) 0s;
		padding: 0.3% 0;
		background-repeat: no-repeat;
		&:hover {
			background-size: 100% 1px;
		}
	}
`;
