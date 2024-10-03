'use client'

import { Badge } from "@/components/ui/badge";
import { Drawer, DrawerClose, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { popularCategories, popularTags } from "@/constants";
import { getSearchBlogs } from "@/service/blogs";
import { IBlogs } from "@/types";
import { Loader, Minus, Search } from "lucide-react";
import Link from "next/link";
import { ChangeEvent, useState } from "react";

import {debounce} from 'lodash'
import Image from "next/image";


const GlobalSearch = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [blogs, setBlogs] = useState<IBlogs[]>([])

    const onSearch = async (e: ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value.toLowerCase()       

        if(text && text.length>2){
            setIsLoading(true)
            const data = await getSearchBlogs(text)
            setBlogs(data)
            setIsLoading(false)
        }else{
            setBlogs([])
            setIsLoading(false)
        }
    }    

    const debounsSearch = debounce(onSearch, 500)

    return (
        <Drawer>
            <DrawerTrigger>
                    <DrawerTitle>
                    <div className='hover:bg-blue-400/20 cursor-pointer rounded-sm transition-colors flex items-center gap-1 px-3 py-2'>
                        <span className='hidden md:flex'>Search</span>
                        <Search className='w-4 h-4' />
                    </div>
                    </DrawerTitle>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader aria-describedby="">
                    <div className="container max-w-6xl mx-auto py-12">
                        <Input className="bg-secondary" placeholder="Type to search blog..."
                        disabled={isLoading}  
                        onChange={debounsSearch}/>

                        {isLoading && <Loader className="animate-spin mx-auto mt-10"/>}
                        {blogs.length ?  <div className="">
                            <h3 className="mt-3 text-start text-2xl font-creteRound"><b>{blogs.length}</b> Result found</h3>
                            <div className="flex items-start">
                                {blogs.length && blogs.map(blog => {
                                    return <div key={blog.id} className="flex flex-col items-center">
                                                <Link href={`/blogs/${blog.slug}`} className="relative">
                                                    <Image 
                                                        width={250}
                                                        height={135}
                                                        alt={blog.title} 
                                                        src={blog.image.url} 
                                                        className='px-2 md:px-7 rounded-md object-cover grayscale hover:grayscale-0 max-md:-translate-y-2 max-md:group-hover:-translate-y-3'
                                                    />
                                                </Link>
                                            </div>
                                })}
                            </div>
                        </div> :null}

                        <div className='flex flex-col space-y-2 mt-4'>
                            <p className='font-creteRound text-2xl text-start'>See posts by categories</p>
                            <div className="flex items-center gap-x-3">
                                <div className='flex flex-wrap gap-2'>
                                    {popularCategories.map(item => (
                                        <Badge key={item.slug} variant={'secondary'}>
                                            {item.name}
                                        </Badge>
                                    ))}
                                </div>
                                <Minus/>
                                <Link href={'/category'} className="text-blue-500 underline">
                                        <DrawerClose>
                                            See all
                                        </DrawerClose>
                                </Link>
                            </div>
                        </div>

                        <div className='flex flex-col space-y-2 mt-4'>
                            <p className='font-creteRound text-2xl text-start'>See posts by tags</p>
                            <div className="flex items-center gap-x-3">
                                <div className='flex flex-wrap gap-2'>
                                    {popularTags.map(item => (
                                        <Badge key={item.slug} variant={'secondary'}>
                                            {item.name}
                                        </Badge>
                                    ))}
                                </div>
                                <Minus/>
                                <Link href={'/tags'} className="text-blue-500 underline">
                                    <DrawerClose>
                                        See all
                                    </DrawerClose>
                                </Link>
                            </div>
                        </div>

                    </div>
                </DrawerHeader>
            </DrawerContent>
        </Drawer>

    );
};

export default GlobalSearch;