import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import FeaturedCard from '../../../components/featured-card/featured-card';
import { FeaturedPostWrapper, FeaturedPostRow, FeaturedPostCol } from './style';

type FeaturedPostsProps = {};

const colors = ['#E33974', '#006EE5', '#4F4DBF'];
function getRandomColor(values: string[]) {
	const random = Math.floor(Math.random() * values.length);
	return values[random];
}

const FeaturedPosts: React.FunctionComponent<FeaturedPostsProps> = () => {
	const data = useStaticQuery(graphql`
		query {
			allMarkdownRemark(
				sort: { fields: [frontmatter___date], order: DESC }
				limit: 3
				filter: { frontmatter: { tags: { eq: "featured" } } }
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
									fluid(maxWidth: 435, maxHeight: 400, quality: 100) {
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
		<FeaturedPostWrapper>
			<FeaturedPostRow>
				{posts.map(({ node }: any) => {
					const title = node.frontmatter.title || node.fields.slug;
					return (
						<FeaturedPostCol key={title}>
							<FeaturedCard
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
								overlay={true}
							/>
						</FeaturedPostCol>
					);
				})}
			</FeaturedPostRow>
		</FeaturedPostWrapper>
	);
};

export default FeaturedPosts;
