import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import "../static/style.css";

export default ({ data }) => (
  <div className="main-div">
    <Layout>
      <div>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id} style={{ paddingBottom: `45px` }}>
            <h3>
              {node.frontmatter.title}{" "}
              <span style={{ color: `#bbb` }}> - {node.frontmatter.date}</span>
            </h3>
            <p>{node.excerpt}</p>
          </div>
        ))}
      </div>
    </Layout>
  </div>
);

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`;
