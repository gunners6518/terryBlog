import React from 'react';
import { graphql, PageProps } from 'gatsby';
import Layout from '../containers/layout';
import TinderBlog from '../containers/home';
import SEO from '../components/seo';

interface IndexPageProps extends PageProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
        description: string;
      };
    };
  };
}
export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
const IndexPage: React.FC<IndexPageProps> = (props) => {
  const { data } = props;

  return (
    <Layout>
      <SEO
        title="Tinder Blog"
        description={data.site.siteMetadata.description}
      />
      <TinderBlog />
    </Layout>
  );
};

export default IndexPage;
