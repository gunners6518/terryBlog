import * as React from 'react';
import { Link } from 'gatsby';
import _ from 'lodash';
import Img from 'gatsby-image';
import {
	PostCardWrapper,
	PostPreview,
	PostDetails,
	PostDetailsInner,
	PostCategory,
	PostTitle,
	ReadMore,
} from './post-card-full.style';

interface PostCardProps {
	image?: any;
	title: string;
	postColor: string;
	url: string;
	date?: string;
	categories?: [];
	className?: string;
	imageType?: 'fixed' | 'fluid';
	readTime?: string;
}

const PostCardFull: React.FunctionComponent<PostCardProps> = ({
	image,
	title,
	postColor,
	url,
	date,
	categories,
	className = '',
	imageType,
	readTime,
	...props
}) => {
	return (
		<PostCardWrapper
			className={`post_card_full ${className}`.trim()}
			{...props}
		>
			{image == null ? null : (
				<PostPreview className='post_preview'>
					<Link to={url}>
						{imageType === 'fluid' ? (
							<Img fluid={image} alt='post preview' />
						) : (
							<Img fixed={image} alt='post preview' />
						)}
					</Link>
				</PostPreview>
			)}

			<PostDetails>
				<PostDetailsInner>
					{categories == null ? null : (
						<PostCategory categoryColor={postColor ? postColor : 'null'}>
							{categories &&
								categories.map((cat, index) => (
									<Link key={index} to={`/category/${_.kebabCase(cat)}/`}>
										{cat}
									</Link>
								))}
						</PostCategory>
					)}
					<PostTitle className='post_title'>
						<Link to={url}>{title}</Link>
					</PostTitle>
					<ReadMore>
						<Link to={url}>Read More</Link>
					</ReadMore>
				</PostDetailsInner>
			</PostDetails>
		</PostCardWrapper>
	);
};

PostCardFull.defaultProps = {
	imageType: 'fluid',
};

export default PostCardFull;
