import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const AboutWrapper = styled.div`
	position: relative;
	padding: 60px 0 0;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: -15px;
	width: 860px;
	@media (max-width: 1200px) {
		width: 800px;
	}
	@media (max-width: 1024px) {
		width: 720px;
	}
	@media (max-width: 767px) {
		width: 100%;
		padding-top: 40px;
	}
`;

export const AboutPageTitle = styled.div`
	margin-bottom: 50px;
	text-align: center;
	padding: 0 100px;
	@media (max-width: 767px) {
		margin-bottom: 45px;
		padding: 0 50px;
	}
	@media (max-width: 575px) {
		margin-bottom: 40px;
		padding: 0;
	}
	p {
		color: ${themeGet('colors.lightTextColor', '#757575')};
		@media (max-width: 767px) {
			font-size: ${themeGet('fontSizes.3', '15')}px;
		}
	}

	h2 {
		font-size: 30px;
		font-weight: 700;
		color: ${themeGet('colors.textColor', '#292929')};
		line-height: 1.53;
		margin-bottom: 20px;

		@media (max-width: 1024px) {
			font-size: 28px;
		}
		@media (max-width: 767px) {
			font-size: ${themeGet('fontSizes.6', '24')}px;
			margin-bottom: 15px;
		}
	}
`;

export const AboutImage = styled.div`
	margin-bottom: 70px;
	@media (max-width: 1024px) {
		margin-bottom: 50px;
	}
`;

export const AboutDetails = styled.div`
	width: 1170px;
	max-width: 100%;
	margin: 0 auto;

	h2 {
		font-size: 21px;
		font-weight: 500;
		color: ${themeGet('colors.textColor', '#292929')};
		margin-bottom: 30px;
		@media (max-width: 1024px) {
			margin-bottom: 30px;
		}
		@media (max-width: 767px) {
			font-size: 18px;
			margin-bottom: 25px;
		}
	}

	p {
		color: ${themeGet('colors.lightTextColor', '#757575')};
		@media (max-width: 767px) {
			font-size: ${themeGet('fontSizes.3', '15')}px;
		}
	}
`;
export const SocialProfiles = styled.div`
	margin-top: 60px;
	position: relative;
	@media (max-width: 767px) {
		margin-top: 40px;
	}

	&:before {
		content: '';
		width: 30px;
		height: 1px;
		background: #292929;
		display: block;
		margin-bottom: 60px;
		@media (max-width: 767px) {
			margin-bottom: 40px;
		}
	}
`;
