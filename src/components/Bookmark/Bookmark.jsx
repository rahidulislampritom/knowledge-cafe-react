import PropTypes from "prop-types";

const Bookmark = ({bookmark}) => {

    const {title} = bookmark
    
    return (
        <div className="bg-[#FFFFFF] rounded-lg">
            <h1 className="text-lg font-semibold text-[#111111] p-5">{title}</h1>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired
}

export default Bookmark;