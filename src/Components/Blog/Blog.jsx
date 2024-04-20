import React, { useEffect, useState } from 'react';
import BlogInfo from '../Blog_info/BlogInfo';

const Blog = ({ handleBook, handleReadingTime }) => {
    const [blog, setBlog] = useState([]);
    useEffect(() => {
        fetch('/FakeData.json')
            .then(res => res.json())
            .then(data => setBlog(data))
    }, []);
    return (
        <div>
            <div>
                {
                    blog.map((blogInfo, i) => <BlogInfo blogInfo={blogInfo} key={i}
                        handleBook={handleBook}
                        handleReadingTime={handleReadingTime}
                    ></BlogInfo>)
                }
            </div>
        </div>
    );
};

export default Blog;