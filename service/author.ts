
import { Author } from "@/types";
import request, { gql } from "graphql-request";

const getAuthorsAPi = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!;

export const getAuthors = async () => {
    const query = gql`
        query MyQuery {
            authors {
                id
                name
                slug
                image {
                url
                }
                description 
                blog {
                    id
                }
            }
        }
    `
    const {authors} = await request<{authors: Author[]}>(getAuthorsAPi, query)
    return authors
}

export const getAuthorBlogs = async (id: string) =>{
    const query = gql`
        query MyQuery($id: ID!) {
            author(where: {id: $id}) {
              name
              description
              image {
                url
              }
              blog {
                title
                slug
                description
                image {
                  url
                }
                tag {
                  title
                  slug
                }
                createdAt
                content {
                  html
                }
                category {
                  title
                  slug
                }
                author {
                  name
                  slug
                  image {
                    url
                  }
                }
              }
            }
          }
`

    const {author} = await request<{author: Author}>(getAuthorsAPi, query, {id})

    return author
}