import { useState } from 'react';
import Blog from './Components/Blog/Blog';
import BookmarkCart from './Components/BookmarkCart/BookmarkCart';
import Header from './Components/Header/Header';

function App() {
  const [blogCart, setBlogCart] = useState([]);
  const [reading ,setReading] = useState(0);

  const handleBook = (blog) => {
    const newBlogcart = [...blogCart, blog]
    setBlogCart(newBlogcart)
  }
  const handleReadingTime = (read)=>{
    const newReading = reading + read;
    setReading(newReading)

  }

  return (
    <div>
      <Header></Header>
      <div className='flex w-8/12 mx-auto gap-10 my-6'>
        <div className='w-8/12'>
          <Blog handleBook={handleBook} handleReadingTime={handleReadingTime}></Blog>
        </div>
        <div className='w-4/12'>
          <BookmarkCart blogCart={blogCart}
          reading={reading}></BookmarkCart>
        </div>
      </div>
    </div>
  )
}

export default App
