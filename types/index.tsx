export interface ChildProps{
    children: React.ReactNode;
}

export interface IBlogs{
    title: string,
    description: string,
    author: string,
    tags: string[],
    date: string,
    image: string,
}