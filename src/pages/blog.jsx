import React from "react";
import Layout from "../components/Layout";
import { useStaticQuery, graphql, Link } from "gatsby";
import * as blogStyle from "./blog.module.scss";
import Head from "../components/Head";

const Blog = () => {
  // =================================
  // fetching data for CMS using graphql
  // =================================
  const res = useStaticQuery(graphql`
    query {
      allContentfulGatsbyBootcampModel(
        sort: { fields: publishedDate, order: DESC }
      ) {
        nodes {
          title
          slug
          publishedDate(formatString: "MMMM Do, YYYY")
        }
      }
    }
  `);

  return (
    <div>
      <Layout>
        <Head title="Blog" />
        <div className={blogStyle.box}>
          <h2>Blog Page</h2>
          <ol>
            {res.allContentfulGatsbyBootcampModel.nodes.map((v, i) => (
              <li key={i}>
                <Link className={blogStyle.anchor} to={`/blog/${v.slug}`}>
                  <h3>{v.title}</h3>
                  <p>
                    <i>{v.publishedDate}</i>
                  </p>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </Layout>
    </div>
  );
};
export default Blog;
