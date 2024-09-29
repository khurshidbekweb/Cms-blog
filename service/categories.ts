
import { Category, ITags } from "@/types";
import request, { gql } from "graphql-request";

const getDateApi = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!

export const getCategories = async () => {
    const query = gql`
    query MyQuery {
        categories {
        title
        slug
        }
    }
    `

    const resut = request<{categories: Category[]}>(getDateApi ,query)
    return resut
}

export const getCategoryBlog = async (slug: string) => {
    const query = gql`
        query MyQuery($slug: String) {
            category(where: {slug: $slug}) {
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

    const {category} = await request<{category: ITags}>(getDateApi, query, {slug})
    

    return category
}


