import React from 'react'
import Link from 'gatsby-link'
import BlogPostList from '../components/BlogPostList'

const IndexPage = props => (
  <div>
    {/*<h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>*/}
    <BlogPostList
      {...props}
      styles={{
        postList: 'blog-post-list',
        postListItem: 'blog-post-list__item',
      }}
      header={<h3>Latest Blog Posts</h3>}
    />
  </div>
)

// needed to query for the blog posts.
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`

export default IndexPage
