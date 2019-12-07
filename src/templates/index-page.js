import React from "react"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => {
  const {
    markdownRemark: { frontmatter },
  } = data
  return <div>{frontmatter.title}</div>
}

export default IndexPage

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
  }
`
