import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([]);            

  const [readingTime, setReadingTime] = useState(0);


  const handleBookmarks = (blog) =>{
      setBookmarks([...bookmarks, blog]);
  };

  const handleReadingTime = (id, reading_time) => {
    setReadingTime(readingTime + reading_time);

    // remove the read block from bookmark
    const remaining = bookmarks.filter(bookmark => bookmark.id !==id);
    setBookmarks(remaining);
   }; 

  return (
    <>
      
      <Header></Header>
      <div className = 'md:flex'>
      <Blogs  handleBookmarks ={handleBookmarks} handleReadingTime ={handleReadingTime}></Blogs>
      <Bookmarks bookmarks = {bookmarks} readingTime = {readingTime}></Bookmarks>
      </div>
     
    </>
  )
}

export default App
