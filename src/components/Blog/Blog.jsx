import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog,handleBookmarks, handleReadingTime }) => {
    const {id, author_img, name, cover, hashtags, posted_date, reading_time, title } = blog;
    return (
        <div className="mb-10 lg:mb-14 mt-6 lg:mt-10">

            <div>
                <div>
                    <img className="w-full object-cover rounded-xl" src={cover} alt="" />
                </div>


                <div className="flex justify-between items-center  md:pr-2 my-2 md:my-4">

                    <div className="flex items-center gap-2  md:gap-6">

                        <div>
                            <img className="w-16 h-16 rounded-full object-cover" src={author_img} alt="" />
                        </div>
                       
                        <div>
                            <h3 className="text-[#111111] text-2xl font-bold">{name}</h3>
                            <p>{posted_date}</p>
                        </div>

                    </div>

                    <div>
                        <p className="text-[tomato]">{reading_time} min read <button onClick={()=>handleBookmarks(blog)} className="text-black"><FaBookmark /></button></p>
                    </div>

                </div>
            </div>
 
            <div className="md:space-y-2">
                <h1 className="text-[#111111] text-xl lg:text-4xl font-bold">{title} </h1>
                <p>{hashtags.map((hashtag, idx) => <span className="mr-2" key={idx}>{hashtag}</span>)}</p>
                <button onClick={()=>handleReadingTime(id,reading_time)} className="underline text-[#6047EC] font-bold">Mark as read</button>
            </div>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.array.isRequired,
    handleBookmarks: PropTypes.func.isRequired,
    handleReadingTime: PropTypes.func.isRequired
}

export default Blog;