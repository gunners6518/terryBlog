import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

type ColorProps = {
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

export const PostPreview = styled.div`
	position: relative;
	overflow: hidden;
	min-height: 210px;
	.gatsby-image-wrapper > div,
	img {
		min-height: 210px;
	}
	a {
		display: block;
		transition: 0.25s ease-in-out;
	}
`;

export const PostDetails = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	height: 100%;
	padding: 25px 60px;
	&:before {
		position: absolute;
		left: 0;
		top: 0;
		content: '';
		width: 100%;
		height: 100%;
		background-color: #000000;
		opacity: 0.35;
	}
	@media (max-width: 1200px) {
		padding: 20px 35px;
	}
	@media (max-width: 1024px) {
		padding: 20px 30px;
	}
	@media (max-width: 767px) {
		padding: 20px;
	}
	@media (max-width: 460px) {
		padding: 15px;
	}
`;
export const PostDetailsInner = styled.div`
	display: flex;
	flex-direction: column;
	width: 58%;
	position: relative;
	z-index: 2;
	@media (max-width: 1420px) {
		width: 65%;
	}
	@media (max-width: 1024px) {
		width: 490px;
	}
	@media (max-width: 767px) {
		width: 435px;
	}
	@media (max-width: 575px) {
		width: 100%;
	}
`;

export const PostTitle = styled.h2`
	font-size: 28px;
	font-weight: ${themeGet('fontWeights.5', '600')};
	color: ${themeGet('colors.white', '#FFFFFF')};
	line-height: 1.65;
	margin-bottom: 12px;
	font-family: ${themeGet('fontFamily.0', "'Poppins', sans-serif")};
	@media (max-width: 1420px) {
		font-size: 24px;
	}
	@media (max-width: 1200px) {
		font-size: 20px;
	}
	@media (max-width: 1024px) {
		font-size: ${themeGet('fontSizes.5', '18')}px;
		line-height: 1.6;
	}
	@media (max-width: 767px) {
		font-size: 17px;
		line-height: 1.5;
	}
	@media (max-width: 575px) {
		font-size: ${themeGet('fontSizes.5', '18')}px;
	}
	@media (max-width: 460px) {
		font-size: ${themeGet('fontSizes.4', '16')}px;
	}
	a {
		color: ${themeGet('colors.white', '#FFFFFF')};
		display: inline;
		background: linear-gradient(to right, currentColor 0%, currentColor 100%);
		background-size: 0px 2px;
		background-position: 0 95%;
		transition: background-size 0.25s cubic-bezier(0.48, 0.56, 0.67, 0.76) 0s;
		padding: 0.3% 0;
		background-repeat: no-repeat;
		&:hover {
			background-size: 100% 2px;
		}
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

export const ReadMore = styled.div`
	a {
		font-size: 12px;
		font-weight: 700;
		color: ${themeGet('colors.white', '#ffffff')};
		font-family: ${themeGet('fontFamily.1', "'Roboto', sans-serif")};
		background-color: ${themeGet('colors.primary', '#FF2D54')};
		text-transform: uppercase;
		padding: 12px 25px;
		display: inline-flex;
		align-items: center;
		transition: 0.25s ease-in-out;
		@media (max-width: 1024px) {
			padding: 10px 20px;
		}
		&:hover {
			background-color: ${themeGet('colors.white', '#ffffff')};
			color: ${themeGet('colors.textColor', '#121213')};
			text-decoration: none;
		}
	}
`;
