import { Author } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';



const AuthorCard = (author: Author) => {        
    return (
        <Link href={`/about/${author.id}`} className='flex flex-col space-y-2 w-52 justify-center items-center cursor-pointer'>
            <div className="w-full relative h-52">
                <Image alt={author.name} src={author.image.url} fill className='object-cover grayscale hover:grayscale-0'/>
            </div>
            <h2 className='text-2xl md:text-2xl font-creteRound'>{author.name}</h2>
            <p className='text-muted-foreground'>
				<span className='font-bold text-white'>{author.blog.length}</span> Published posts
			</p>
        </Link>
    );
};

export default AuthorCard;