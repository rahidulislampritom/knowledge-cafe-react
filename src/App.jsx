import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  const [bookmarks,setBookmarks] = useState([]);

  const [readingTime, setReadingTime] = useState(0);


  const handleBookmarks = (blog) =>{
      setBookmarks([...bookmarks, blog]);
  };

  const handleReadingTime = (reading_time) => {
    setReadingTime(readingTime+reading_time)
   }; 

  return (
    <>
      
      <Header></Header>
      <div className='md:flex'>
      <Blogs  handleBookmarks={handleBookmarks} handleReadingTime = {handleReadingTime}></Blogs>
      <Bookmarks bookmarks = {bookmarks} readingTime = {readingTime}></Bookmarks>
      </div>
     
    </>
  )
}

export default App
