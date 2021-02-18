import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PostBannerCard from '../../../../components/post-banner-card/post-banner-card';
import { BannerPostWrapper, BannerPostRow } from './style';

type BannerPostsProps = {};

const BannerPosts: React.FunctionComponent<BannerPostsProps> = () => {
	const data = useStaticQuery(graphql`
		query {
			allMarkdownRemark(
				sort: { fields: [frontmatter___date], order: DESC }
				limit: 1
			) {
				totalCount
				edges {
					node {
						fields {
							slug
						}
						frontmatter {
							date(formatString: "MMMM DD, YYYY")
							title
							description
							categories
							cover {
								childImageSharp {
									fluid(maxWidth: 985, quality: 100) {
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

	return (
		<BannerPostWrapper>
			<BannerPostRow>
				{posts.map(({ node }: any) => {
					const title = node.frontmatter.title || node.fields.slug;
					return (
						<PostBannerCard
							key={node.fields.slug}
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
					);
				})}
			</BannerPostRow>
		</BannerPostWrapper>
	);
};

export default BannerPosts;
