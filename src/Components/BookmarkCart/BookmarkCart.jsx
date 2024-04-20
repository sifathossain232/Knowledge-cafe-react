import React from 'react';
import BookMark from './BookMark';

const BookmarkCart = ({ blogCart, reading }) => {
    return (
        <div>
            <h2 className='bg-purple-100 text-purple-700 font-semibold px-5 text-center py-3 rounded-lg'>Spent time on read :{reading}  min</h2>
            <div>
                <div className='bg-slate-100 px-10 pb-5'>
                    <h2 className='my-5 pt-5 font-semibold text-xl'>Bookmarked Blogs : {blogCart.length}</h2>
                    <div>
                        {
                            blogCart.map((bookmark, e) => <BookMark key={e} bookmark={bookmark}></BookMark>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookmarkCart;