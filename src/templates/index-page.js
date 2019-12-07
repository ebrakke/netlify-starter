import React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"

export const IndexPageTemplate = ({ image = "", html, title }) => {
  return (
    <div>
      <p>{title}</p>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <div>
        <h2>Here's an image</h2>
        <div style={{ maxWidth: 400 }}>
          {image.childImageSharp ? (
            <Img fluid={image.childImageSharp.fluid} />
          ) : (
            <img src={image} />
          )}
        </div>
      </div>
    </div>
  )
}

const IndexPage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark
  return (
    <IndexPageTemplate
      title={frontmatter.title}
      html={html}
      image={frontmatter.image}
    />
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
