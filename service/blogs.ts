import { IBlogs } from "@/types";
import request, { gql } from "graphql-request";

const getBlogsAPi = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!;

export const getBlogs = async () => {
    const query = gql`
    query MyQuery {
      blogs {
        id
        title
        slug
        description
        content {
          html
        }
        author {
            id
            name
            slug
            image {
              url
            }
            description
        }
        createdAt
        image {
          url
        }
        category {
          title
          slug
        }
        tag {
          title
          slug
        }
      }
    }
  `;
    const { blogs } = await request<{ blogs: IBlogs[] }>(getBlogsAPi, query);

    return blogs;
};


export const getDetailBlogs = async (slug: string) => {
    const query = gql`
    query MyQuery($slug: String) {
      blog(where: { slug: $slug }) {
        id
        image {
          url
        }
        slug
        tag {
          title
          slug
        }
        title
        description
        createdAt
        content {
          html
        }
        author {
            id
            name
            slug
            image {
              url
            }
            description
        }
        category {
          title
          slug
        }
        tag {
          title
          slug
        }
      }
    }
  `

  const {blog} = await request<{blog: IBlogs}>(getBlogsAPi, query, {slug})

  return blog
};

export const getSearchBlogs = async (title: string) => {
  const query = gql`
    query MyQuery($title: String) {
      blogs(where: {title_contains: $title}) {
        id
        title
        slug
        description
        content {
          html
        }
        author {
            id
            name
            slug
            image {
              url
            }
            description
        }
        createdAt
        image {
          url
        }
        category {
          title
          slug
        }
        tag {
          title
          slug
        }
      }
    }
  `

  const {blogs} = await request<{blogs: IBlogs[]}>(getBlogsAPi, query, { title})

  return blogs
}