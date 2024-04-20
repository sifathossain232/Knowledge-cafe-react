

const BookMark = ({bookmark,}) => {
    const{title} = bookmark
    return (
        <div className="bg-white text-xl font-semibold mb-5 p-5 rounded-lg">
            {title}
        </div>
    );
};

export default BookMark;