import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import BannerPosts from './banner-post';
import TrendingPost from '../../../components/trending-post/trending-post';
import {
	BannerWrapper,
	BannerInner,
	BannerPostArea,
	TrendingPosts,
	Title,
} from './style';

type BannerProps = {};

const Banner: React.FunctionComponent<BannerProps> = () => {
	const data = useStaticQuery(graphql`
		query {
			allMarkdownRemark(
				sort: { fields: [frontmatter___date], order: DESC }
				limit: 6
				filter: { frontmatter: { tags: { eq: "trending" } } }
			) {
				totalCount
				edges {
					node {
						excerpt(pruneLength: 300)
						fields {
							slug
						}
						frontmatter {
							title
							tags
						}
					}
				}
			}
		}
	`);

	const posts = data.allMarkdownRemark.edges;
	return (
		<BannerWrapper>
			<BannerInner>
				<BannerPostArea>
					<BannerPosts />
				</BannerPostArea>
				<TrendingPosts>
					<Title>Trending Posts</Title>
					{posts.map(({ node }: any) => {
						const title = node.frontmatter.title || node.fields.slug;
						return (
							<TrendingPost
								key={node.fields.slug}
								title={title}
								url={node.fields.slug}
								tags={node.frontmatter.tags}
							/>
						);
					})}
				</TrendingPosts>
			</BannerInner>
		</BannerWrapper>
	);
};

export default Banner;
