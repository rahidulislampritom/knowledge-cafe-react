import PropTypes from "prop-types";

const Blog = ({ blog }) => {
    const { author_img, name, cover, hashtags, posted_date, reading_time, title } = blog;
    return (
        <div className="mb-14 mt-10">

            <div>
                <div className="">
                    <img className=" w-4xl object-cover rounded-xl" src={cover} alt="" />
                </div>


                <div className="md:flex justify-between items-center pr-2  my-4">

                    <div className="md:flex items-center gap-6">

                        <div>
                            <img className="w-16 h-16 rounded-full object-cover" src={author_img} alt="" />
                        </div>

                        <div>
                            <h3 className="text-[#111111] text-2xl font-bold">{name}</h3>
                            <p>{posted_date}</p>
                        </div>

                    </div>

                    <div>
                        <p>{reading_time}</p>
                    </div>

                </div>
            </div>

            <div className="space-y-2">
                <h1 className="text-[#111111] text-2xl lg:text-4xl font-bold">{title} </h1>
                <p>{hashtags.map((hashtag, idx) => <span className="mr-2" key={idx}>{hashtag}</span>)}</p>
                <p className="underline text-[#6047EC]">Mark as read</p>
            </div>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.array.isRequired
}

export default Blog;