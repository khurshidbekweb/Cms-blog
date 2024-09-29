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
    createdAt: string,
    image: {url: string},
    category: Category ,
    tag: Tag,
}

export interface ITags{
    title: string,
    slug:string,
    blog: IBlogs[]
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

export interface Category{
    title: string,
    slug: string
}
interface Tag{
    title: string,
    slug: string
}
