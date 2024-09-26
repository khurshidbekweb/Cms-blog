import { IAuthor } from '@/types';
import Image from 'next/image';
import React from 'react';



const AuthorCard = (author: IAuthor) => {    
    return (
        <div className='flex flex-col space-y-2 w-52 justify-center items-center cursor-pointer'>
            <div className="w-full relative h-52">
                <Image alt={author.name} src={author.image} fill className='object-cover grayscale hover:grayscale-0'/>
            </div>
            <h2 className='text-2xl md:text-2xl font-creteRound'>{author.name}</h2>
            <p className='text-muted-foreground'>
				<span className='font-bold text-white'>04</span> Published posts
			</p>
        </div>
    );
};

export default AuthorCard;