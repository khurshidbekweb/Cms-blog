import { ITags } from "@/types";
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

