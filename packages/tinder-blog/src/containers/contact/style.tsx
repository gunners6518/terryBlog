import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const ContactWrapper = styled.div`
	padding: 60px 0 0;
	margin-left: auto;
	margin-right: auto;
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

export const ContactPageTitle = styled.div`
	margin-bottom: 70px;
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
		margin-bottom: 15px;
		@media (max-width: 1024px) {
			font-size: 28px;
		}
		@media (max-width: 767px) {
			font-size: ${themeGet('fontSizes.6', '24')}px;
		}
	}
`;

export const ContactFromWrapper = styled.div`
	position: relative;
	.button {
		margin-top: 60px;
		position: relative;
		left: 50%;
		transform: translateX(-50%);
		@media (max-width: 575px) {
			margin-top: 40px;
		}
		&:hover {
			background-color: ${themeGet('colors.primary', '#FF2D54')};
		}
	}
`;

export const InputGroup = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	@media (max-width: 575px) {
		flex-direction: column;
	}
	.field-wrapper {
		flex-grow: 1;
		max-width: calc(50% - 30px);
		margin-bottom: 60px;
		@media (max-width: 767px) {
			margin-bottom: 40px;
			max-width: calc(50% - 15px);
		}
		@media (max-width: 575px) {
			max-width: 100%;
			margin-bottom: 35px;
		}
	}
`;
