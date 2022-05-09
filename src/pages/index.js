import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({ data }) => {
  console.log(data.allMarkdownRemark.edges)
  return (
    <Layout>
      <Seo title="Home" />
      <div>
        <h1>Slobodan's Thoughts</h1>
        <h4>{data.allMarkdownRemark.totalCount}</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <span>
              {node.frontmatter.title} - {node.frontmatter.date}
            </span>
            <p>{node.excerpt}</p>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query MyQuery {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          frontmatter {
            title
            date
            description
          }
          excerpt
        }
      }
    }
  }
`
