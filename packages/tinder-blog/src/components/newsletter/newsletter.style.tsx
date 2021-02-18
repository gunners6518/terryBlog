import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const NewsletterWrapper = styled.div`
	border-radius: 3px;
	margin-top: 120px;
	background: ${themeGet('colors.inactiveField', '#F7F7F7')};
	padding: 60px;
	height: 100%;
	border-radius: 3px;
	display: flex;
	align-items: center;
	@media (max-width: 1200px) {
		padding: 50px 40px;
	}
	@media (max-width: 1024px) {
		flex-direction: column;
		padding: 50px 40px 60px;
		margin-top: 100px;
	}
	@media (max-width: 767px) {
		margin-top: 80px;
	}
	@media (max-width: 575px) {
		flex-direction: column;
		padding: 40px 20px 50px;
	}
`;

export const NewsletterTitle = styled.p`
	font-size: 28px;
	color: ${themeGet('colors.textColor', '#121213')};
	font-weight: ${themeGet('fontWeights.5', '600')};
	line-height: 1.55;
	flex: 0 0 50%;
	max-width: 50%;
	margin: 0;
	padding-right: 30px;
	@media (max-width: 1200px) {
		font-size: ${themeGet('fontSizes.6', '24')}px;
	}
	@media (max-width: 1024px) {
		flex: 0 0 100%;
		max-width: 100%;
		margin-bottom: 30px;
		padding: 0;
		text-align: center;
	}
	@media (max-width: 575px) {
		font-size: 22px;
	}
	@media (max-width: 460px) {
		font-size: 18px;
		line-height: 1.5;
		margin-bottom: 25px;
	}
`;

export const NewsletterInputWrapper = styled.form`
	display: flex;
	flex-direction: column;
	min-height: 56px;
	flex: 0 0 50%;
	max-width: 50%;
	@media (max-width: 1024px) {
		flex: 0 0 100%;
		max-width: 100%;
		min-width: 500px;
	}
	@media (max-width: 575px) {
		min-width: 100%;
		min-height: 50px;
	}

	.field-wrapper {
		flex-grow: 1;
		@media (max-width: 460px) {
			width: 100%;
		}
		.inner-wrap {
			input {
				border-width: 0;
				border-color: ${themeGet('colors.textColor', '#292929')};
				height: 56px;
				font-size: 16px;
				@media (max-width: 575px) {
					font-size: ${themeGet('fontSizes.3', '15')}px;
					height: 50px;
				}
			}
		}
	}
	.button {
		height: 56px;
		text-transform: uppercase;
		font-weight: 700;
		font-family: ${themeGet('fontFamily.1', "'Roboto', sans-serif")};
		background-color: ${themeGet('primary', '#FF2E55')};
		&:hover {
			background-color: ${themeGet('black', '#121213')};
		}
		@media (max-width: 575px) {
			height: 50px;
		}
		@media (max-width: 460px) {
			margin-top: 15px;
		}
	}
`;

export const InputWrapper = styled.div`
	width: 100%;
	display: flex;
	align-items: center;

	@media (max-width: 460px) {
		flex-direction: column;
	}
`;

export const ErrorMessage = styled.div`
	flex: 0 0 50%;
	margin-top: 10px;
	margin-left: 15px;
	text-align: justify;
	font-size: 14px;

	> span {
		color: #d8000c;
	}
	a {
		color: #d10068;
	}
`;

export const SuccessMessage = styled.div`
	font-size: 22px;
	line-height: 1.7;
	text-align: center;
	width: 100%;

	@media (max-width: 990px) {
		font-size: 18px;
	}
	@media (max-width: 575px) {
		font-size: 16px;
	}
`;
