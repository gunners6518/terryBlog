import * as React from 'react';
import TinderBlogWrapper from './style';
import Posts from './posts';
import FeaturedPosts from './featured-post';
import Banner from './banner';

type TinderBlogProps = {};

const TinderBlog: React.FunctionComponent<TinderBlogProps> = (props) => {
  return (
    <TinderBlogWrapper {...props}>
      <Banner />
      <FeaturedPosts />
      <Posts />
    </TinderBlogWrapper>
  );
};

export default TinderBlog;
