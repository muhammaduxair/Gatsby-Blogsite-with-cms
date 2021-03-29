import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Head from "../components/Head";

export const query = graphql`
  query($slug: String!) {
    contentfulGatsbyBootcampModel(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        raw
        references {
          title
          file {
            url
          }
        }
      }
    }
  }
`;

const Blog = ({ data }) => {
  const option = {
    renderNode: {
      "embedded-asset-block": () => {
        const target = data.contentfulGatsbyBootcampModel.body.references[0];
        return <img src={target.file.url} alt={target.title} />;
      },
    },
  };

  return (
    <Layout>
      <Head title={data.contentfulGatsbyBootcampModel.title} />
      <div>
        <h1>{data.contentfulGatsbyBootcampModel.title}</h1>
        <p>{data.contentfulGatsbyBootcampModel.publishedDate}</p>
        <div>
          {documentToReactComponents(
            JSON.parse(data.contentfulGatsbyBootcampModel.body.raw),
            option
          )}
        </div>
      </div>
    </Layout>
  );
};
export default Blog;
