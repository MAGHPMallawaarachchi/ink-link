import { useState } from "react";
import axios from "axios";

const AddCommentForm = ({ articleName, onArticleUpdated }) => {
    const [name, setName] = useState("");
    const [commentText, setCommentText] = useState("");

    const addComment = async () => {

        const response = await axios.post(`/api/articles/${articleName}/comments`,{
            username: name,
            text: commentText,
        });

        const updatedArticle = response.data;
        onArticleUpdated(updatedArticle);

        setName("");
        setCommentText("");
    };

    return(
        <div className="flex flex-col items-start w-full gap-2 pb-6 border-b-2 border-black">
            <h3 className="mb-2 text-xl font-bold text-left">Add a Comment</h3>

            <label className="flex flex-col items-start mb-2 text-base font-medium text-left">
                Name
                <input 
                    className="w-[300px] px-2 py-1 border-2 border-black rounded-md"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    type="text"/>
            </label>

            <label className="flex flex-col items-start mb-2 text-base font-medium text-left">
                Comment
                <textarea 
                    className="w-[300px] px-2 py-1 border-2 border-black rounded-md"
                    value={commentText}
                    onChange={e => setCommentText(e.target.value)}
                    rows="4" cols="50"/>
            </label>

            <button className="w-[300px] px-2 py-1 text-white bg-black rounded-md" onClick={addComment}>Add Comment</button>
        </div>
    );
};

export default AddCommentForm;