import React from 'react';
import { CiBookmark } from 'react-icons/ci';


const BlogInfo = ({ blogInfo,handleBook,handleReadingTime }) => {
    const icon = {
        color: 'orange'
    }
    const { profile_image, image, title, name, read_time, seen_date, hashtags } = blogInfo;
    return (
        <div className='space-y-3 mb-5'>
            <img className=' w-full' src={image} alt="" />
            <div className=' flex justify-between'>
                <div className=' flex gap-2'>
                    <img className=' size-12' src={profile_image} alt="" />
                    <div>
                        <h3 className='text-xl font-medium'>{name}</h3>
                        <span>{seen_date}</span>
                    </div>
                </div>
                <div className=' flex items-center gap-3'>
                    <p>{read_time} min</p>
                    <button onClick={()=> handleBook(blogInfo)}><CiBookmark style={icon}></CiBookmark></button>
                </div>
            </div>
            <div>
                <h2 className='text-xl font-semibold mb-3'>{title}</h2>
                <span>{hashtags}</span>
            </div>
            <button onClick={()=>handleReadingTime(read_time)} className='underline flex justify-start border-none text-blue-500'>Mark as read</button>
        </div>
    );
};

export default BlogInfo;