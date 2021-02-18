import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const BlogPostsWrapper = styled.div`
	padding: 100px 0 0;
	position: relative;

	@media (max-width: 1420px) {
		padding: 80px 0 0;
	}
	@media (max-width: 1024px) {
		padding: 60px 0 0;
	}
	@media (max-width: 767px) {
		padding: 40px 0 0;
	}
`;

export const PostsList = styled.div`
	display: flex;
	flex-wrap: wrap;
`;
export const PostRow = styled.div`
	margin: 0 -15px;
	@media (max-width: 1024px) {
		margin: 0 -10px;
	}
`;

export const PostCol = styled.div`
	margin-bottom: 50px;
	width: 50%;
	float: left;
	padding: 0 15px;
	@media (max-width: 1024px) {
		margin-bottom: 40px;
		padding: 0 10px;
	}
	@media (max-width: 767px) {
		padding: 0 10px;
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
	&.full_width {
		width: 100%;
		margin-bottom: 115px;
		@media (max-width: 1420px) {
			margin-bottom: 90px;
		}
		@media (max-width: 1024px) {
			margin-bottom: 70px;
		}
		@media (max-width: 767px) {
			margin-bottom: 50px;
		}
		@media (max-width: 575px) {
			margin-bottom: 45px;
		}
	}
`;

export const LoadMoreButton = styled.div`
	text-align: center;
	margin-top: 5px;
	.button {
		text-transform: uppercase;
		font-weight: 700;
		background-color: ${themeGet('primary', '#FF2D54')};
		font-size: 14px;
		font-family: ${themeGet('fontFamily.1', "'Roboto', sans-serif")};
		&:hover {
			background-color: ${themeGet('black', '#121213')};
		}
	}
	@media (max-width: 1024px) {
		margin-top: 50px;
	}
	@media (max-width: 575px) {
		margin-top: 30px;
	}
`;

export default BlogPostsWrapper;
