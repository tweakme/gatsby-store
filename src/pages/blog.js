import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import { node } from "prop-types"

const getMarkdownPosts = graphql`
  {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date
          }
          excerpt
        }
      }
    }
  }
`
export default () => (
  <Layout>
    <div>
      <h1 style={{ display: "inlineBlock", borderBottom: "1px solid" }}>
        MG Blog
      </h1>
      <StaticQuery
        query={getMarkdownPosts}
        render={data => (
          <>
            <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <div key={node.id}>
                <h3>
                  {node.frontmatter.title}{" "}
                  <span style={{ color: "#bbb" }}>
                    {" "}
                    - {node.frontmatter.date}
                  </span>
                </h3>
                <p>{node.excerpt}</p>
              </div>
            ))}
          </>
        )}
      />
    </div>
  </Layout>
)
