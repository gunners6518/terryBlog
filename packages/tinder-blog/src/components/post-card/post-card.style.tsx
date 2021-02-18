import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

type ColorProps = {
	postColor?: string;
	categoryColor?: string;
};

export const PostCardWrapper = styled.div`
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

export const PostPreviewArea = styled('div')<ColorProps>`
	padding-right: 30px;
	position: relative;
	@media (max-width: 1420px) {
		padding-right: 20px;
	}
	@media (max-width: 1024px) {
		padding-right: 15px;
	}
	@media (min-width: 576px) and (max-width: 767px) {
		padding-right: 10px;
	}
	@media (max-width: 460px) {
		padding-right: 10px;
	}
	&:before {
		position: absolute;
		content: '';
		left: 30px;
		top: 30px;
		height: 100%;
		width: 100%;
		@media (max-width: 1420px) {
			left: 20px;
			top: 20px;
		}
		@media (max-width: 1024px) {
			left: 15px;
			top: 15px;
		}
		@media (min-width: 576px) and (max-width: 767px) {
			left: 10px;
			top: 10px;
		}
		@media (max-width: 460px) {
			left: 10px;
			top: 10px;
		}
		background-color: ${(props) =>
			props.postColor
				? props.postColor
				: themeGet('colors.primary', '#FF2E55')};
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
	width: calc(100% - 60px);
	display: flex;
	flex-direction: column;
	padding: 0px 30px 45px;
	background-color: ${themeGet('colors.white', '#FFFFFF')};
	position: relative;
	z-index: 1;
	@media (max-width: 1420px) {
		padding: 0px 20px 20px;
		width: calc(100% - 40px);
	}
	@media (max-width: 1024px) {
		padding: 0px 20px 0px;
		width: calc(100% - 30px);
	}
	@media (min-width: 576px) and (max-width: 767px) {
		padding-left: 10px;
		padding-right: 10px;
		width: calc(100% - 20px);
	}
	@media (max-width: 460px) {
		padding-left: 10px;
		padding-right: 10px;
		width: calc(100% - 20px);
	}
	&.post_have_thumbnail {
		margin-top: -115px;
		padding-top: 25px;
		@media (max-width: 1420px) {
			padding-top: 20px;
			margin-top: -100px;
		}
		@media (max-width: 1024px) {
			padding-top: 15px;
			margin-top: -70px;
		}
		@media (max-width: 767px) {
			padding-top: 10px;
			margin-top: -40px;
		}
	}
`;

export const PostTitle = styled.h2`
	font-size: 22px;
	font-weight: ${themeGet('fontWeights.5', '600')};
	color: ${themeGet('colors.textColor', '#121213')};
	line-height: 1.65;
	margin-bottom: 12px;
	font-family: ${themeGet('fontFamily.0', "'Poppins', sans-serif")};
	@media (max-width: 1420px) {
		font-size: 20px;
	}
	@media (max-width: 1200px) {
		font-size: ${themeGet('fontSizes.5', '18')}px;
	}
	@media (max-width: 1024px) {
		font-size: 17px;
		line-height: 1.6;
	}
	@media (max-width: 767px) {
		font-size: 15px;
		line-height: 1.5;
	}
	@media (max-width: 575px) {
		font-size: ${themeGet('fontSizes.5', '18')}px;
	}
	@media (max-width: 460px) {
		font-size: ${themeGet('fontSizes.4', '16')}px;
	}
	a {
		color: ${themeGet('colors.textColor', '#121213')};
		display: inline;
		background: linear-gradient(to right, currentColor 0%, currentColor 100%);
		background-size: 0px 2px;
		background-position: 0 95%;
		transition: background-size 0.3s cubic-bezier(0.48, 0.56, 0.67, 0.76) 0s;
		padding: 0.3% 0;
		background-repeat: no-repeat;
		@media (max-width: 767px) {
			padding: 0.2% 0;
			background-size: 0px 1px;
		}
		&:hover {
			background-size: 100% 2px;
			@media (max-width: 767px) {
				background-size: 100% 1px;
			}
		}
	}
`;

export const PostMeta = styled.div`
	display: flex;
	margin-bottom: 15px;
`;

export const PostDate = styled.div`
	font-size: ${themeGet('fontSizes.2', '14')}px;
	color: ${themeGet('colors.textColor', '#121213')};
	@media (max-width: 767px) {
		font-size: ${themeGet('fontSizes.1', '12')}px;
	}
`;

export const PostCategory = styled('span')<ColorProps>`
	display: flex;
	align-items: center;
	margin-bottom: 7px;
	margin-left: -5px;
	margin-right: -5px;
	a {
		font-size: 12px;
		background-color: ${(props) =>
			props.categoryColor
				? props.categoryColor
				: themeGet('colors.primary', '#FF2E55')};
		font-weight: ${themeGet('fontWeights.6', '700')};
		text-transform: uppercase;
		color: ${themeGet('white', '#FFFFFF')};
		padding: 2px 10px;
		display: inline-block;
		margin: 5px;
		@media (max-width: 767px) {
			font-size: ${themeGet('fontSizes.0', '10')}px;
		}
	}
`;
