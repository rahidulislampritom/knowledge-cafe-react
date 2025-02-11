import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks ,readingTime }) => {

    return (
        <div className="md:w-1/3 md:pt-14 ">

            <div>

                <div className="  bg-[#6047ec1a] rounded-lg border border-[#6047EC] mb-6">
                    <h1 className="text-2xl md:text-2xl text-[#6047EC] font-bold p-6 text-center ">Spend time on read: {readingTime}</h1>
                </div>

                <div className="bg-[#1111110d] p-7 space-y-4 rounded-lg">
                    <h1 className="text-2xl font-bold">Bookmarked Blogs: {bookmarks.length}</h1>
                    {
                        bookmarks.map((bookmark,idx)=> <Bookmark key = {idx} bookmark = {bookmark} ></Bookmark>)
                    }
                </div>

            </div>


        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.func.isRequired
}

export default Bookmarks;