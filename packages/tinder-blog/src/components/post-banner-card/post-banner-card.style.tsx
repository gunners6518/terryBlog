import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const PostBannerCardWrapper = styled.div`
	position: relative;
	overflow: hidden;
	&:hover {
		.post_preview {
			a {
				transform: scale(1.05);
			}
		}
	}
`;

export const PostPreview = styled.div`
	position: relative;
	overflow: hidden;
	a {
		display: block;
		transition: 0.25s ease-in-out;
	}
`;

export const PostDetails = styled.div`
	width: calc(100% - 120px);
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 25px 50px;
	background-color: ${themeGet('colors.white', '#FFFFFF')};
	margin-top: -125px;
	margin-left: auto;
	margin-right: auto;
	position: relative;
	z-index: 1;
	text-align: center;
	@media (max-width: 1420px) {
		width: calc(100% - 80px);
		padding: 20px 30px;
		margin-top: -105px;
	}
	@media (max-width: 1200px) {
		margin-top: -100px;
		width: calc(100% - 60px);
	}
	@media (max-width: 1024px) {
		margin-top: -60px;
		width: calc(100% - 40px);
		padding: 15px 20px;
	}
	@media (min-width: 576px) and (max-width: 767px) {
		margin-top: -80px;
		width: calc(100% - 60px);
		padding: 20px;
	}
	@media (max-width: 460px) {
		margin-top: -55px;
		width: calc(100% - 20px);
	}
`;

export const PostTitle = styled.h2`
	font-size: 28px;
	font-weight: ${themeGet('fontWeights.5', '600')};
	color: ${themeGet('colors.textColor', '#121213')};
	line-height: 1.6;
	margin-bottom: 28px;
	font-family: ${themeGet('fontFamily.0', "'Poppins', sans-serif")};
	@media (max-width: 1420px) {
		font-size: ${themeGet('fontSizes.6', '24')}px;
		margin-bottom: 20px;
	}
	@media (max-width: 1200px) {
		font-size: 20px;
	}
	@media (max-width: 1024px) {
		font-size: ${themeGet('fontSizes.5', '18')}px;
	}
	@media (min-width: 576px) and (max-width: 767px) {
		font-size: 22px;
	}
	@media (max-width: 575px) {
		margin-bottom: 15px;
	}
	@media (max-width: 460px) {
		margin-bottom: 10px;
		line-height: 1.5;
		font-size: ${themeGet('fontSizes.4', '16')}px;
	}
	a {
		color: ${themeGet('colors.textColor', '#121213')};
		display: inline;
		background: linear-gradient(to right, currentColor 0%, currentColor 100%);
		background-size: 0px 2px;
		background-position: 0 95%;
		transition: background-size 0.35s cubic-bezier(0.48, 0.56, 0.67, 0.76) 0s;
		padding: 0.3% 0;
		background-repeat: no-repeat;
		@media (max-width: 575px) {
			padding: 0.2% 0;
			background-size: 0px 1px;
		}
		&:hover {
			background-size: 100% 2px;
			@media (max-width: 575px) {
				background-size: 100% 1px;
			}
		}
	}
`;

export const PostMeta = styled.div`
	display: flex;
	justify-content: center;
`;

export const PostDate = styled.div`
	font-size: ${themeGet('fontSizes.5', '18')}px;
	color: ${themeGet('colors.textColor', '#121213')};
	@media (max-width: 1420px) {
		font-size: ${themeGet('fontSizes.4', '16')}px;
	}
	@media (max-width: 1200px) {
		font-size: ${themeGet('fontSizes.3', '15')}px;
	}
	@media (max-width: 1024px) {
		font-size: ${themeGet('fontSizes.2', '14')}px;
	}
	@media (max-width: 575px) {
		font-size: 13px;
	}
`;

export const PostCategory = styled.span`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 25px;
	margin-left: -5px;
	margin-right: -5px;
	@media (max-width: 1420px) {
		margin-bottom: 15px;
	}
	@media (max-width: 1024px) {
		margin-bottom: 10px;
	}
	a {
		font-size: 12px;
		background-color: ${themeGet('primary', '#FF2E55')};
		font-weight: ${themeGet('fontWeights.6', '700')};
		text-transform: uppercase;
		color: ${themeGet('white', '#FFFFFF')};
		padding: 2px 10px;
		display: inline-block;
		margin: 5px;
		@media (max-width: 575px) {
			font-size: ${themeGet('fontSizes.0', '10')}px;
		}
	}
`;
