import { ICategoryAndTags } from '@/types';
import { Layers2, Tag } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

interface Prosp extends ICategoryAndTags{
    type: "category" | "tags"
}

const CategoryTags = (props: Prosp) => {
    console.log(props);
    
    return (
        <Link  href={`/${props.type}/${props.slug}`} className='bg-secondary hover:opacity-80 transition-colors flex justify-center gap-3 items-center p-4 py-8 md:p-6 rounded-md'>
            {props.type==="category" ? <Layers2/> : <Tag/>}
            {props.title}
        </Link>
    );
};

export default CategoryTags;