import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      allSite {
        nodes {
          siteMetadata {
            author
          }
        }
      }
    }
  `);

  return (
    <footer>
      <p>
        copyright © 2021. Created By {data.allSite.nodes[0].siteMetadata.author}
      </p>
    </footer>
  );
};
export default Footer;
