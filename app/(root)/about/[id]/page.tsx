import BlogCards from "@/components/card/blogs";
import { getAuthorBlogs } from "@/service/author";
import Image from "next/image";

const AuthorPage = async ({params}: {params: {id: string}}) => {
	const authorBlog = await getAuthorBlogs(params.id)
    return (
        <div className="max-w-6xl mx-auto px-3 md:px-1">
			<div className='flex min-h-[40vh] mt-[20vh] gap-6 items-start max-md:flex-col'>
				<Image
					src={authorBlog.image.url}
					alt='author'
					width='350'
					height='250'
					className='rounded-md max-md:self-start mx-auto '
				/>
				<div className='flex-1 flex flex-col space-y-4'>
					<h2 className='text-4xl font-creteRound'>{authorBlog.name}</h2>
					<p className='line-clamp-2 text-muted-foreground'>{authorBlog.description}</p>
				</div>
			</div>
			<div className='flex flex-col space-y-24 mt-24 px-4 md:px-1'>
				<h2 className="font-creteRound text-5xl text-center section-title">Blogs</h2>
				{authorBlog.blog.map(blog => (
					<BlogCards key={blog.title} {...blog} ishorizantal={false}/>
				))}
			</div>
        </div>
    );
};

export default AuthorPage;