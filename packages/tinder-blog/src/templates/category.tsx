import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../containers/layout';
import PostCard from '../components/post-card/post-card';
import SEO from '../components/seo';
import {
	TagPostsWrapper,
	TagPageHeading,
	TagName,
	PostRow,
	PostsList,
	CategoryPostCol,
} from './templates.style';

const Category = ({ pageContext, data }: any) => {
	const { category } = pageContext;
	const { edges, totalCount } = data.allMarkdownRemark;

	const colors = ['#E33974', '#006EE5', '#4F4DBF', '#784D74'];
	function getRandomColor(values: string[]) {
		const random = Math.floor(Math.random() * values.length);
		return values[random];
	}

	return (
		<Layout>
			<SEO
				title={category}
				description={`A collection of ${totalCount} post`}
			/>

			<TagPostsWrapper>
				<TagPageHeading>
					<TagName>{category}</TagName>
					{`A collection of ${totalCount} post`}
				</TagPageHeading>
				<PostRow>
					<PostsList>
						{edges.map(({ node }: any) => (
							<CategoryPostCol key={node.fields.slug}>
								<PostCard
									postColor={getRandomColor(colors)}
									title={node.frontmatter.title}
									image={
										node.frontmatter.cover == null
											? null
											: node.frontmatter.cover.childImageSharp.fluid
									}
									date={node.frontmatter.date}
									url={node.fields.slug}
								/>
							</CategoryPostCol>
						))}
					</PostsList>
				</PostRow>
			</TagPostsWrapper>
		</Layout>
	);
};

export default Category;

export const pageQuery = graphql`
	query($category: String) {
		allMarkdownRemark(
			limit: 2000
			sort: { fields: [frontmatter___date], order: DESC }
			filter: { frontmatter: { categories: { in: [$category] } } }
		) {
			totalCount
			edges {
				node {
					excerpt(pruneLength: 300)
					fields {
						slug
					}
					frontmatter {
						date(formatString: "MMMM DD, YYYY")
						title
						categories
						cover {
							childImageSharp {
								fluid(maxWidth: 635, maxHeight: 390, quality: 100) {
									...GatsbyImageSharpFluid_withWebp_tracedSVG
								}
							}
						}
					}
				}
			}
		}
	}
`;
