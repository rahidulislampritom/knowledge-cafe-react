import PropTypes from "prop-types";
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handleBookmarks, handleReadingTime}) => {

    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        fetch('blogs.json')
        .then (res => res.json())
        .then (data => setBlogs(data))
    },[])

    return (
        <div className="md:w-2/3 p-4">
            {
                blogs.map((blog,idx) => <Blog key={idx} blog={blog} handleBookmarks={handleBookmarks} handleReadingTime = {handleReadingTime} ></Blog>)
                
            }
            
        </div>
    );
};

Blogs.propTypes = {
    handleBookmarks:PropTypes.func.isRequired,
    handleReadingTime:PropTypes.func.isRequired
}

export default Blogs;