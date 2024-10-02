import { ITags, Tag } from "@/types";
import request, { gql } from "graphql-request";

const getBlogsAPi = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!;

export const getTagsBlogs = async (slug: string) => {
    const query = gql`
        query MyQuery($slug: String) {
  tag(where: {slug: $slug}) {
    title
    slug
    blog {
      image {
        url
      }
      title
      description
      tag {
        title
        slug
      }
      category {
        slug
        title
      }
      author {
        name
        image {
          url
        }
        createdAt
      }
      createdAt
      content {
          html
        }
    }
  }
}
    `

    const {tag} = await request<{tag:ITags}>(getBlogsAPi, query, {slug})
    

    return tag
}

export const GetAllTags = async() =>{
  const query = gql`  
    query MyQuery {
          tags {
            title
            slug
            }
          }
  `

  const result = request<{tags: Tag[]}>(getBlogsAPi, query)

  return result
}
