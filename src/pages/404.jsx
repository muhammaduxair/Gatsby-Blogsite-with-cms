import { Link } from "gatsby";
import React from "react";
import Layout from "../components/Layout";

const NotFound = () => {
  return (
    <Layout>
      <h1>404 | Page Not Found</h1>
      <Link to="/">Go to Home</Link>
    </Layout>
  );
};
export default NotFound;
