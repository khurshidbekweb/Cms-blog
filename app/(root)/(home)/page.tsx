

import BlogCards from '@/components/card/blogs';
import BgArrow from '@/components/shared/bg-arrow';
// import { blogs } from '@/constants';
import { getBlogs } from '@/service/blogs';

const HomePage = async () => {   
    const blogs = await getBlogs()
    
    return (
        <div className="max-w-6xl mx-auto">
            <div className="relative min-h-[60vh] flex items-center justify-center">
                <h1 className='text-3xl md:text-4xl lg:text-5xl font-creteRound text-center max-w-2xl'>
                    Taking control of your daily life is easy when you know how!
                </h1>
                <BgArrow/>
            </div>
            <h2 className='text-center text-4xl section-title font-creteRound'>
                <span>Recent posts</span>
            </h2>
            <div className='flex flex-col space-y-24 mt-24 px-4 md:px-1'>
				{blogs.map(blog => (
					<BlogCards key={blog.title} {...blog} ishorizantal={false}/>
				))}
			</div>
        </div>
    );
};

export default HomePage;