import { Link, useStaticQuery, graphql } from "gatsby";
import React from "react";
import * as styles from "./header.module.scss";

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      allSite {
        nodes {
          siteMetadata {
            title
          }
        }
      }
    }
  `);
  return (
    <header className={styles.header}>
      <h1>{data.allSite.nodes[0].siteMetadata.title}</h1>
      <ul>
        <li>
          <Link to="/" activeClassName={styles.activeLink}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/blog" activeClassName={styles.activeLink}>
            Blog
          </Link>
        </li>
        <li>
          <Link to="/about" activeClassName={styles.activeLink}>
            About
          </Link>
        </li>
      </ul>
    </header>
  );
};
export default Header;
