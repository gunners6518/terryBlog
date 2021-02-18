import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const BlogPostsWrapper = styled.div`
	margin: 0 auto;
	padding: 120px 75px 0 75px;
	position: relative;

	@media (max-width: 1400px) {
		padding: 120px 35px 0 35px;
	}
	@media (max-width: 1024px) {
		padding: 80px 25px 0 25px;
	}
	@media (max-width: 575px) {
		padding: 60px 25px 0 25px;
	}
`;
export const PostsList = styled.div`
	display: flex;
	flex-wrap: wrap;
`;
export const PostPaginationWrapper = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 120px 0 30px;
	@media (max-width: 1024px) {
		margin-top: 100px;
	}
	@media (max-width: 767px) {
		margin-top: 80px;
		border-top: 1px solid #dbdbdb;
		border-bottom: 1px solid #dbdbdb;
		padding: 30px 0;
	}
`;
export const PostName = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	overflow: hidden;
	> h2 {
		font-size: ${themeGet('fontSizes.5', '18')}px;
		font-weight: ${themeGet('fontWeights.5', '600')};
		color: ${themeGet('colors.textColor', '#121213')};
		font-family: ${themeGet('fontFamily.0', "'Poppins',sans-serif")};
		line-height: 1.7;
		margin-bottom: 0;
		transition: all 0.25s ease;
		@media (max-width: 1024px) {
			font-size: ${themeGet('fontSizes.4', '16')}px;
		}
	}
`;

export const Text = styled.span`
	display: flex;
	align-items: center;
	transition: all 0.35s ease;
	font-size: 16px;
	color: #494e51;
	margin-bottom: 12px;
	@media (max-width: 1024px) {
		font-size: ${themeGet('fontSizes.3', '15')}px;
		margin-bottom: 10px;
	}
	@media (max-width: 767px) {
		margin-bottom: 0;
		font-size: ${themeGet('fontSizes.5', '18')}px;
	}
`;

export const ThumbImg = styled.div`
	width: 100%;
	height: 185px;
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;
	flex-shrink: 0;
	margin-right: 20px;
	background-color: ${themeGet('colors.inactiveField', '#F7F7F7')};
	@media (max-width: 767px) {
		display: none;
	}
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		opacity: 0;
		transition: all 0.25s;
	}
`;
export const PostInfo = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 5;
	padding: 30px 40px;
	display: flex;
	align-content: center;
	justify-content: center;
	flex-direction: column;
	@media (max-width: 1024px) {
		padding: 25px 20px;
	}
	@media (max-width: 767px) {
		padding: 0px;
		position: relative;
	}
	&:before {
		position: absolute;
		content: '';
		left: 0;
		top: 0;
		height: 100%;
		width: 100%;
		background: linear-gradient(
			to bottom,
			rgba(0, 0, 0, 0.15),
			rgba(0, 0, 0, 0.7)
		);
		transition: all 0.25s;
		opacity: 0;
		z-index: -1;
	}
`;

export const PrevButton = styled.div`
	width: 50%;
	display: flex;
	align-items: center;
	overflow: hidden;
	position: relative;
	margin-right: 15px;
	@media (max-width: 1024px) {
		margin-right: 10px;
	}
	a {
		display: flex;
		align-items: center;
		width: 100%;
		min-height: 20px;
		overflow: hidden;
		cursor: pointer;
		position: relative;
		@media (min-width: 768px) {
			&:hover {
				${PostName} > h2 {
					color: ${themeGet('colors.white', '#ffffff')};
				}
				${Text} {
					color: ${themeGet('colors.primary', '#FF2D54')};
				}
				${ThumbImg} > img,
				${PostInfo}:before {
					opacity: 1;
				}
			}
		}

		@media (max-width: 767px) {
			${PostName} {
				display: none;
			}

			${Text} {
				opacity: 1;
			}
		}
	}
`;

export const NextButton = styled.div`
	width: 50%;
	display: flex;
	align-items: center;
	overflow: hidden;
	position: relative;
	justify-content: flex-end;
	margin-left: 15px;
	@media (max-width: 1024px) {
		margin-left: 10px;
	}
	a {
		display: flex;
		align-items: center;
		width: 100%;
		min-height: 20px;
		overflow: hidden;
		cursor: pointer;
		position: relative;
		${Text} {
			justify-content: flex-end;
		}
		${PostName} {
			text-align: right;
			justify-content: flex-end;
		}
		@media (min-width: 768px) {
			&:hover {
				${PostName} > h2 {
					color: ${themeGet('colors.white', '#ffffff')};
				}
				${Text} {
					color: ${themeGet('colors.primary', '#FF2D54')};
				}
				${ThumbImg} > img,
				${PostInfo}:before {
					opacity: 1;
				}
			}
		}

		@media (max-width: 767px) {
			${PostName} {
				display: none;
			}

			${Text} {
				opacity: 1;
			}
		}
	}
`;

export const RelatedPostWrapper = styled.div`
	margin: 0 auto;
	@media (max-width: 1200px) {
		margin-bottom: -15px;
	}
	@media (max-width: 1024px) {
		margin-bottom: -50px;
	}
	.pagination {
		margin-top: 80px;
		@media (max-width: 1024px) {
			margin-top: 60px;
		}
		@media (max-width: 575px) {
			margin-top: 30px;
		}
	}
`;

export const RelatedPostItems = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin: 0 -15px;
	@media (max-width: 767px) {
		margin: 0 -10px;
	}
`;

export const RelatedPostItem = styled.div`
	flex: 0 0 33.333333333%;
	max-width: 33.333333333%;
	padding: 0 15px;
	@media (max-width: 1024px) {
		max-width: 50%;
		flex: 0 0 50%;
		margin-bottom: 35px;
	}
	@media (max-width: 767px) {
		padding: 0 10px;
	}
	@media (max-width: 575px) {
		max-width: 420px;
		flex: 0 0 420px;
		margin-bottom: 30px;
		margin-left: auto;
		margin-right: auto;
	}
	@media (max-width: 460px) {
		max-width: 100%;
		flex: 0 0 100%;
	}

	.post_card {
		&:hover {
			.post_preview {
				a {
					transform: scale(1.05);
				}
			}
		}
	}
`;
export const TagPostsWrapper = styled.div`
	margin: 0 auto -75px;
	padding-top: 60px;
	position: relative;
	@media (max-width: 1200px) {
		margin-bottom: -55px;
	}
	@media (max-width: 767px) {
		padding-top: 40px;
		margin-bottom: -45px;
	}
`;
export const TagPageHeading = styled.div`
	font-size: 15px;
	font-weight: 400;
	margin-bottom: 60px;
	position: relative;
	@media (max-width: 1200px) {
		padding-left: 160px;
	}
	@media (max-width: 1024px) {
		padding-left: 0;
		font-size: 13px;
		margin-bottom: 80px;
	}
	@media (max-width: 767px) {
		margin-bottom: 60px;
	}

	&:after {
		content: '';
		display: block;
		width: 90px;
		height: 1px;
		background: #292929;
		margin-top: 15px;
	}
`;

export const TagName = styled.h1`
	font-size: 30px;
	font-weight: 700;
	text-transform: capitalize;
	color: ${themeGet('colors.primary', '#FF2D54')};
	margin-bottom: 8px;
	@media (max-width: 1024px) {
		font-size: 26px;
	}
	@media (max-width: 575px) {
		font-size: 22px;
	}
`;
export const BlogPostFooter = styled.div`
	width: 100%;
	max-width: 100%;
	padding-top: 60px;
	display: flex;
	align-items: center;
	justify-content: center;
	@media (max-width: 1024px) {
		padding-top: 40px;
		width: 100%;
	}
	&.center {
		margin: 0 auto;
	}
`;

export const BlogPostComment = styled.div`
	width: 100%;
	max-width: 100%;
	padding-top: 80px;
	@media (max-width: 1024px) {
		padding-top: 60px;
		width: 100%;
	}
	@media (max-width: 767px) {
		padding-top: 40px;
	}
	&.center {
		margin: 0 auto;
	}
`;

export const PostShare = styled.div`
	display: flex;
	align-items: center;
	> span {
		flex-shrink: 0;
	}
	> div,
	.react-share__ShareButton {
		cursor: pointer;
		margin-left: 25px;
		font-size: 22px;
		outline: 0;
		color: ${themeGet('colors.textColor', '#292929')};
		transition: 0.15s ease-in-out;
		&:hover {
			color: ${themeGet('colors.primary', '#D10068')};
		}
		svg {
			display: block;
		}
	}
`;

export const BlogPostDetailsWrapper = styled.div`
	margin: 30px auto 0;
	max-width: 100%;
	padding-bottom: 120px;
	@media (max-width: 1024px) {
		padding-bottom: 90px;
	}
	@media (max-width: 767px) {
		padding-bottom: 75px;
	}
`;

export const PostTags = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	@media (max-width: 575px) {
		display: none;
	}

	a {
		display: block;
		margin-right: 30px;
		font-size: 14px;
		font-weight: 400;
		color: ${themeGet('primary', '#D10068')};
		@media (max-width: 1024px) {
			font-size: 13px;
			margin-right: 25px;
		}
	}
`;

export const PostRow = styled.div`
	margin: 0 -15px;
	@media (max-width: 1024px) {
		margin: 0 -10px;
	}
`;

export const PostCol = styled.div`
	margin-bottom: 50px;
	width: 33.33333%;
	float: left;
	padding: 0 15px;
	@media (max-width: 1024px) {
		padding: 0 10px;
	}
	@media (max-width: 767px) {
		width: 50%;
	}
	@media (max-width: 575px) {
		width: 100%;
		margin-bottom: 40px;
	}
`;

export const CategoryPostCol = styled.div`
	margin-bottom: 50px;
	width: 50%;
	float: left;
	padding: 0 15px;
	@media (max-width: 1024px) {
		margin-bottom: 40px;
		padding: 0 10px;
	}
	@media (max-width: 767px) {
		margin-bottom: 30px;
	}
	@media (max-width: 575px) {
		width: 420px;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 25px;
	}
	@media (max-width: 460px) {
		width: 100%;
	}
`;
