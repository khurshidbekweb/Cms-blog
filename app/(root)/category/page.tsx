import CategoryTags from "@/components/card/categoryTags";
import { getCategories } from "@/service/categories";
import { Dot, Home } from "lucide-react";
import Link from "next/link";

const CategoriesPage = async () => {
    const {categories} = await getCategories()

    return (
        <div className='max-w-6xl mx-auto'>
            <div className='relative min-h-[40vh] flex items-center justify-end flex-col'>
				<h2 className='text-center text-4xl section-title font-creteRound'>
					<span>Categories</span>
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
					<p className='text-muted-foreground'>Categories</p>
				</div>
			</div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-16 px-2 md:px-1'>
				{categories.map(item => <CategoryTags key={item.slug} type="category" {...item}/>)}
			</div>
        </div>
    );
};

export default CategoriesPage;