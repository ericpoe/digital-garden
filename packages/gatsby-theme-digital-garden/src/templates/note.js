import { graphql } from 'gatsby'

import Note from '../components/note'

export default Note

export const pageQuery = graphql`
  query($id: String!, $title: String) {
    note: mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        description
      }
      fileAbsolutePath
    }
    image: ogImage {
      src(text: $title)
    }
  }
`
