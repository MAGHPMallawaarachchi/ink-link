const CommentsList = ({ comments }) => (
    <>
        <h3 className="mb-2 text-xl font-bold text-left">Comments:</h3>
        {comments.map((comment, key) => (
            <div className="w-full py-4 border-b-2 border-black" key={key}>
                <h4 className="mb-2 text-base font-bold text-left">{comment.username}</h4>
                <p className="text-base text-left">{comment.text}</p>
            </div>
        ))}
    </>
);

export default CommentsList;