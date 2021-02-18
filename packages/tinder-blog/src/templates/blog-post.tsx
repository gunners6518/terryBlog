import React from 'react';
import { graphql, Link } from 'gatsby';
import _ from 'lodash';
import urljoin from 'url-join';
import { DiscussionEmbed } from 'disqus-react';
import Layout from '../containers/layout';
import SEO from '../components/seo';
import FeaturedCard from '../components/featured-card/featured-card';
import PostDetails from '../components/post-details/post-details';
import {
	FacebookShareButton,
	TwitterShareButton,
	LinkedinShareButton,
	RedditShareButton,
} from 'react-share';
import {
	IoLogoFacebook,
	IoLogoTwitter,
	IoLogoLinkedin,
	IoLogoReddit,
	IoIosArrowBack,
	IoIosArrowForward,
} from 'react-icons/io';

import {
	BlogPostDetailsWrapper,
	PostPaginationWrapper,
	PrevButton,
	NextButton,
	PostName,
	Text,
	ThumbImg,
	PostInfo,
	RelatedPostWrapper,
	RelatedPostItems,
	RelatedPostItem,
	BlogPostFooter,
	PostShare,
	BlogPostComment,
} from './templates.style';

const colors = ['#E33974', '#006EE5', '#4F4DBF'];
function getRandomColor(values: string[]) {
	const random = Math.floor(Math.random() * values.length);
	return values[random];
}

const BlogPostTemplate = ({ pageContext, ...props }: any) => {
	const post = props.data.markdownRemark;
	const { edges } = props.data.allMarkdownRemark;
	const title = post.frontmatter.title;
	const slug = post.fields.slug;
	const siteUrl = props.data.site.siteMetadata.siteUrl;
	const shareUrl = urljoin(siteUrl, slug);
	const { next, previous } = pageContext;

	const disqusConfig = {
		shortname: process.env.GATSBY_DISQUS_NAME,
		config: { identifier: slug, title },
	};

	return (
		<Layout>
			<SEO
				title={post.frontmatter.title}
				description={post.frontmatter.description || post.excerpt}
			/>
			<BlogPostDetailsWrapper>
				<PostDetails
					title={post.frontmatter.title}
					date={post.frontmatter.date}
					categories={post.frontmatter.categories}
					preview={
						post.frontmatter.cover == null
							? null
							: post.frontmatter.cover.childImageSharp.fluid
					}
					description={post.html}
				/>

				<BlogPostFooter
					className={post.frontmatter.cover == null ? 'center' : ''}
				>
					<PostShare>
						<FacebookShareButton url={shareUrl} quote={post.excerpt}>
							<IoLogoFacebook size='23px' />
						</FacebookShareButton>
						<TwitterShareButton url={shareUrl} title={title}>
							<IoLogoTwitter size='23px' />
						</TwitterShareButton>
						<LinkedinShareButton url={shareUrl} title={title}>
							<IoLogoLinkedin size='23px' />
						</LinkedinShareButton>
						<RedditShareButton
							url={shareUrl}
							title={`${post.frontmatter.title}`}
						>
							<IoLogoReddit size='23px' />
						</RedditShareButton>
					</PostShare>
				</BlogPostFooter>

				<PostPaginationWrapper>
					<PrevButton>
						{next && (
							<Link to={next.fields.slug}>
								<ThumbImg>
									<img
										src={
											next.frontmatter.cover == null
												? null
												: next.frontmatter.cover.childImageSharp.fluid.srcWebp
										}
										alt={next.frontmatter.title}
									/>
								</ThumbImg>
								<PostInfo>
									<Text>
										<IoIosArrowBack />
										&nbsp; Previous
									</Text>
									<PostName>
										<h2>{next.frontmatter.title}</h2>
									</PostName>
								</PostInfo>
							</Link>
						)}
					</PrevButton>

					<NextButton>
						{previous && (
							<Link to={previous.fields.slug}>
								<ThumbImg>
									<img
										src={
											previous.frontmatter.cover == null
												? null
												: previous.frontmatter.cover.childImageSharp.fluid
														.srcWebp
										}
										alt={previous.frontmatter.title}
									/>
								</ThumbImg>
								<PostInfo>
									<Text>
										Next &nbsp;
										<IoIosArrowForward />
									</Text>
									<PostName>
										<h2>{previous.frontmatter.title}</h2>
									</PostName>
								</PostInfo>
							</Link>
						)}
					</NextButton>
				</PostPaginationWrapper>

				<BlogPostComment
					className={post.frontmatter.cover == null ? 'center' : ''}
				>
					<DiscussionEmbed {...disqusConfig} />
				</BlogPostComment>
			</BlogPostDetailsWrapper>

			{edges.length !== 0 && (
				<RelatedPostWrapper>
					<RelatedPostItems>
						{edges.map(({ node }: any) => (
							<RelatedPostItem key={node.fields.slug}>
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
							</RelatedPostItem>
						))}
					</RelatedPostItems>
				</RelatedPostWrapper>
			)}
		</Layout>
	);
};

export default BlogPostTemplate;

export const pageQuery = graphql`
	query BlogPostBySlug($slug: String!, $tag: [String!]) {
		site {
			siteMetadata {
				siteUrl
			}
		}
		markdownRemark(fields: { slug: { eq: $slug } }) {
			id
			html
			fields {
				slug
			}
			frontmatter {
				title
				date(formatString: "DD MMM, YYYY")
				description
				tags
				categories
				cover {
					publicURL
					childImageSharp {
						fluid(maxWidth: 860, maxHeight: 500, quality: 100) {
							...GatsbyImageSharpFluid_withWebp_tracedSVG
						}
					}
				}
			}
		}
		allMarkdownRemark(
			limit: 3
			sort: { fields: [frontmatter___date], order: DESC }
			filter: {
				frontmatter: { tags: { in: $tag } }
				fields: { slug: { ne: $slug } }
			}
		) {
			edges {
				node {
					excerpt(pruneLength: 80)
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
`;
