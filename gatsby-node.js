const path = require("path");

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogTemplate = path.resolve(`src/templates/blog.jsx`);

  // ==============================================================
  // creating blog pages dynamically with contentful CMS
  // ==============================================================
  const cmsRes = await graphql(`
    query MyQuery {
      allContentfulGatsbyBootcampModel {
        nodes {
          slug
        }
      }
    }
  `);
  cmsRes.data.allContentfulGatsbyBootcampModel.nodes.forEach((obj) => {
    createPage({
      component: blogTemplate,
      path: `/blog/${obj.slug}`,
      context: {
        slug: obj.slug,
      },
    });
  });
};
