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



export interface Author{
    id: string,
    name:string,
    slug:string,
    image: {
        url:string
    },
    description: string;
    blog: IBlogs[]
}

export interface Category{
    title: string,
    slug: string
}
export interface Tag{
    title: string,
    slug: string
}
export interface ICategoryAndTags{
    title: string,
    slug: string
}