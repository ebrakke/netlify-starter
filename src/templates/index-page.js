import React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => {
  const {
    markdownRemark: { html, frontmatter },
  } = data
  return (
    <div>
      <p>{frontmatter.title}</p>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <div>
        <h2>Here's an image</h2>
        <div style={{ maxWidth: 400 }}>
          <Img fluid={frontmatter.image.childImageSharp.fluid} />
        </div>
      </div>
    </div>
  )
}

export default IndexPage

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
