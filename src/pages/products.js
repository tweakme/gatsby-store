import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"

const Products = ({ data: { allContentfulProduct } }) => (
  <Layout>
    <div>
      {allContentfulProduct.edges.map(({ node: product }) => (
        <div key={product.id}>
          <h2>tweak Products</h2>
          <Link to={`/products/${product.slug}`}>
            <h3>{product.name}</h3>
          </Link>
          <img style={{ maxWidth: 600 }} fluid={product.image.fluid}></img>
        </div>
      ))}
    </div>
  </Layout>
)

export const query = graphql`
  {
    allContentfulProduct {
      edges {
        node {
          id
          slug
          name
          image {
            fluid(maxWidth: 800) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

export default Products
