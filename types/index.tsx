export interface ChildProps{
    children: React.ReactNode;
}

export interface IBlogs{
    id:string,
    title: string,
    description: string,
    slug: string,
    content:{html: string},
    author: Author,
    tags: string[],
    createdAt: string,
    image: {url: string},
    category: Category ,
    tag: Tag,
}

interface Author{
    id: string,
    name:string,
    slug:string,
    image: {
        url:string
    },
    description: string
}

interface Category{
    title: string,
    slug: string
}
interface Tag{
    title: string,
    slug: string
}
