import BlogCards from '@/components/card/blogs';
import { blogs } from '@/constants';
import { Dot, Home } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const BlogPage = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <div className='relative min-h-[40vh] flex items-center justify-end flex-col'>
				<h2 className='text-center text-4xl section-title font-creteRound'>
					<span>Blogs</span>
				</h2>

				<div className='flex gap-1 items-center mt-4'>
					<Home className='w-4 h-4' />
					<Link
						href={'/'}
						className='opacity-90 hover:underline hover:opacity-100'
					>
						Home
					</Link>
					<Dot />
					<p className='text-muted-foreground'>Blogs</p>
				</div>
			</div>
            <div className='grid grid-cols-1 md:grid-cols-2  gap-y-24 gap-x-6 mt-28'>
				{blogs.map(blog => (
					<BlogCards key={blog.title} {...blog} ishorizantal/>
				))}
			</div>
        </div>
    );
};

export default BlogPage;