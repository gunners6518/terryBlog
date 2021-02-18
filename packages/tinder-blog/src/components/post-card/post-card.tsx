import * as React from 'react';
import { Link } from 'gatsby';
import _ from 'lodash';
import Img from 'gatsby-image';
import {
	PostCardWrapper,
	PostPreviewArea,
	PostPreview,
	PostDetails,
	PostCategory,
	PostTitle,
	PostDate,
	PostMeta,
} from './post-card.style';

interface PostCardProps {
	image?: any;
	title: string;
	postColor: string;
	url: string;
	date?: string;
	tags?: [];
	categories?: [];
	className?: string;
	imageType?: 'fixed' | 'fluid';
	readTime?: string;
}

const PostCard: React.FunctionComponent<PostCardProps> = ({
	image,
	title,
	postColor,
	url,
	date,
	tags,
	categories,
	className,
	imageType,
	readTime,
	...props
}) => {
	// Add all classs to an array
	const addAllClasses = ['post_card'];

	// className prop checking
	if (className) {
		addAllClasses.push(className);
	}

	return (
		<PostCardWrapper className={addAllClasses.join(' ')} {...props}>
			{image == null ? null : (
				<PostPreviewArea postColor={postColor ? postColor : 'null'}>
					<PostPreview className='post_preview'>
						<Link to={url}>
							{imageType === 'fluid' ? (
								<Img fluid={image} alt='post preview' />
							) : (
								<Img fixed={image} alt='post preview' />
							)}
						</Link>
					</PostPreview>
				</PostPreviewArea>
			)}

			<PostDetails
				className={
					image == null ? 'post_details' : 'post_details post_have_thumbnail'
				}
			>
				{categories == null ? null : (
					<PostCategory categoryColor={postColor}>
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
				<PostMeta>
					{date && (
						<PostDate
							dangerouslySetInnerHTML={{
								__html: date,
							}}
							className='post_date'
						/>
					)}
				</PostMeta>
			</PostDetails>
		</PostCardWrapper>
	);
};

PostCard.defaultProps = {
	imageType: 'fluid',
};

export default PostCard;
