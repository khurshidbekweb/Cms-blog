
import { IBlogs } from '@/types'
import request, { gql } from 'graphql-request'

const getBlogsAPi = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!

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
        `
    const {blogs} = await request<{blogs: IBlogs[]}>(getBlogsAPi, query)

    return blogs
} 