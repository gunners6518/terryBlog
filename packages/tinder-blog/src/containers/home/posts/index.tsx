import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PostCard from '../../../components/post-card/post-card';
import PostCardFull from '../../../components/post-card-full/post-card-full';
import Button from '../../../components/button/button';
import BlogPostsWrapper, {
	PostRow,
	PostsList,
	PostCol,
	LoadMoreButton,
} from './style';

// small utility functions
function isFluid(value: number) {
	return !(value % 5);
}
const colors = ['#E33974', '#006EE5', '#4F4DBF', '#784D74'];
function getRandomColor(values: string[]) {
	const random = Math.floor(Math.random() * values.length);
	return values[random];
}

type PostsProps = {};

const Posts: React.FunctionComponent<PostsProps> = () => {
	const data = useStaticQuery(graphql`
		query {
			allMarkdownRemark(
				sort: { fields: [frontmatter___date], order: DESC }
				skip: 1
				filter: { frontmatter: { tags: { ne: "featured" } } }
			) {
				totalCount
				edges {
					node {
						fields {
							slug
							readingTime {
								text
							}
						}
						frontmatter {
							date(formatString: "MMMM DD, YYYY")
							title
							categories
							cover {
								childImageSharp {
									fluid(maxWidth: 1360, quality: 100) {
										...GatsbyImageSharpFluid_withWebp_tracedSVG
									}
								}
							}
						}
					}
				}
			}
		}
	`);

	const posts = data.allMarkdownRemark.edges;
	const totalPost = data.allMarkdownRemark.totalCount;

	const [visiblePost, setVisiblePost] = useState(8);
	const [loading, setLoading] = useState(false);

	const fetchMoreData = () => {
		setLoading(true);
		setTimeout(function () {
			setVisiblePost((prev) => prev + 8);
			setLoading(false);
		}, 1000);
	};

	return (
		<BlogPostsWrapper>
			<PostRow>
				<PostsList>
					{posts.slice(0, visiblePost).map(({ node }: any, idx: number) => {
						const title = node.frontmatter.title || node.fields.slug;
						if (isFluid(idx)) {
							return (
								<PostCol key={node.fields.slug} className='full_width'>
									<PostCardFull
										postColor={getRandomColor(colors)}
										title={title}
										image={
											node.frontmatter.cover == null
												? null
												: node.frontmatter.cover.childImageSharp.fluid
										}
										url={node.fields.slug}
										categories={node.frontmatter.categories}
										date={node.frontmatter.date}
									/>
								</PostCol>
							);
						}
						return (
							<PostCol key={node.fields.slug}>
								<PostCard
									postColor={getRandomColor(colors)}
									title={title}
									image={
										node.frontmatter.cover == null
											? null
											: node.frontmatter.cover.childImageSharp.fluid
									}
									url={node.fields.slug}
									categories={node.frontmatter.categories}
									date={node.frontmatter.date}
								/>
							</PostCol>
						);
					})}
				</PostsList>
				<LoadMoreButton>
					{visiblePost < totalPost ? (
						<Button
							title='More Stories'
							type='submit'
							onClick={fetchMoreData}
							isLoading={loading}
							loader='Loading..'
						/>
					) : (
						<p>No more posts</p>
					)}
				</LoadMoreButton>
			</PostRow>
		</BlogPostsWrapper>
	);
};

export default Posts;
