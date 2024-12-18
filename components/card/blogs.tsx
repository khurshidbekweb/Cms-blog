import { IBlogs } from '@/types';
import { CalendarDays, Clock, Dot, Minus } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Badge } from '../ui/badge';
import { cn, getTimeReading } from '@/lib/utils';
import { format } from 'date-fns';

interface Props extends IBlogs{
    ishorizantal: boolean
}

const BlogCards = (blog:  Props) => {     
    
    return (
        <div className={cn('grid gap-4 group', blog.ishorizantal ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2')}>
                <Link href={`/blogs/${blog.slug}`} className="relative bg-secondary rounded-md">
                    <Image 
                        width={650}
                        height={335}
                        alt={blog.title} 
                        src={blog.image.url} 
                        className='px-2 md:px-7 rounded-md group-hover:-translate-y-7 -translate-y-6 transition-all object-cover l group-hover:grayscale-0 max-md:-translate-y-2 max-md:group-hover:-translate-y-3'
                    />
                </Link>
                <div className="flex flex-col space-y-4">
                    {/* Time info */}
                    <Link href={`/blogs/${blog.slug}`} className='space-y-4'>                    
                        <div className='flex items-center gap-4'>
                            <div className='flex items-center gap-2'>
                                <CalendarDays className='w-5 h-5' />
                                <p>{format(new Date(blog.createdAt), 'MMM dd, yyy')}</p>
                            </div>
                            <Minus />
                            <div className='flex items-center gap-2'>
                                <Clock className='w-5 h-5' />
                                <p>{getTimeReading(blog.content.html)} min read</p>
                            </div>
                        </div>
                            
                        {/* Title */}
                        <h2 className='text-3xl max-md:text-2xl font-creteRound space-y-4 group-hover:text-blue-500 transition-colors'>
                            {blog.title}
                        </h2>
                        <p className='text-muted-foreground line-clamp-3'>{blog.description}</p>
                    </Link>

                    	{/* Author */}
                    <div className='flex items-center gap-4 flex-wrap'>
                        <div className='flex items-center gap-2'>
                            <Image
                                src={blog.author.image.url}
                                alt='author'
                                width={30}
                                height={30}
                                className='object-cover rounded-sm'
                            />
                            <p>by {blog.author.name}</p>
                        </div>
                        {blog.tag && 
                            <>
                                <Dot />
                                <Link href={`/tags/${blog.tag.slug}`} className='flex items-center gap-2'>
                                    <Badge variant={'secondary'}>{blog.tag.title}</Badge>
                                </Link>
                            </>
                        }
                        {blog.category &&
                            <>
                                <Dot />
                                <Link href={`/category/${blog.category.slug}`} className='flex items-center gap-2'>
                                    <Badge variant={'secondary'}>{blog.category.title}</Badge>
                                </Link>
                            </>
                        }
                    </div>
                </div>
        </div>
    );
};

export default BlogCards;