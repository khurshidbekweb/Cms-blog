import BlogCards from "@/components/card/blogs";
import { getTagsBlogs } from "@/service/tags";
import { Dot, Home } from "lucide-react";
import Link from "next/link";


const TagsPage = async ({params}: {params: {slug: string}}) => {
    const {blog, title} = await getTagsBlogs(params.slug)
	
    return (
        <div className="max-w-6xl mx-auto px-3 md:px-1">
            <div className="relative min-h-[40vh] flex items-center justify-center flex-col">
                <h2 className="text-3xl font-creteRound text-muted-foreground">{title}</h2>
                <div className='flex gap-1 items-center mt-4'>
					<Home className='w-4 h-4' />
					<Link
						href={'/'}
						className='opacity-90 hover:underline hover:opacity-100'
					>
						Home
					</Link>
					<Dot />
					<Link
						href={'/blogs'}
						className='opacity-90 hover:underline hover:opacity-100'
					>
						Blogs
					</Link>
					<Dot />
					<p className='text-muted-foreground'>{title}</p>
				</div>
			</div>
                <div className='flex flex-col space-y-24 mt-24 px-4 md:px-1'>
				{blog.map(blogs => (
					<BlogCards key={blogs.title} {...blogs} ishorizantal={false}/>
				))}
			</div>
        </div>
    );
};

export default TagsPage;