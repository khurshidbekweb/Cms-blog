import { CalendarDays, Clock, Minus } from "lucide-react";
import Image from "next/image";

const SlugPage = () => {
    return (
        <div className="pt-[15vh] max-w-5xl mx-auto">
            <h1 className="lg:text-6xl md:text-5xl text-4xl font-creteRound">
                The AGI hype train is running out of steam
            </h1>
            <div className='flex items-center flex-wrap max-md:justify-center gap-4 mt-4'>
				<div className='flex items-center gap-2'>
					<Image
						src={'/author/thomas-macaulay.jpg'}
						alt='author'
						width={30}
						height={30}
						className='object-cover rounded-sm'
					/>
					<p>by Samar</p>
				</div>
				<Minus />
				<div className='flex items-center gap-2'>
					<Clock className='w-5 h-5' />
					<p>01 min read</p>
				</div>
				<Minus />
				<div className='flex items-center gap-2'>
					<CalendarDays className='w-5 h-5' />
					<p>Dec 5, 2021</p>
				</div>
			</div>
            <Image
				src={'/blogs/02.jpg'}
				alt='alt'
				width={`1120`}
				height={`595`}
				className='mt-4 rounded-md'
			/>
            <div className="flex "></div>
        </div>
    );
};

export default SlugPage;