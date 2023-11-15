import { useState } from "react";
import axios from "axios";
import useUser from "../hooks/useUser";

const AddCommentForm = ({ articleName, onArticleUpdated }) => {
    const [name, setName] = useState("");
    const [commentText, setCommentText] = useState("");
    const { user } = useUser();

    const addComment = async () => {
        const token = user && await user.getIdToken();
        const headers = token ? { authtoken: token } : {};
        const response = await axios.post(`/api/articles/${articleName}/comments`,{
            username: name,
            text: commentText,
        },{
            headers,
        });

        const updatedArticle = response.data;
        onArticleUpdated(updatedArticle);

        setName("");
        setCommentText("");
    };

    return(
        <div className="flex flex-col items-start w-full gap-2 pb-6 border-b-2 border-black">
            <h3 className="mb-2 text-xl font-bold text-left">Add a Comment</h3>
            {user && <p className="pb-2 text-base font-medium text-left">You are commenting as {user.email}</p>}

            <textarea 
                className="w-[300px] px-2 py-1 border-2 border-black rounded-md mb-2"
                value={commentText}
                onChange={e => setCommentText(e.target.value)}
                rows="4" cols="50"/>

            <button className="w-[300px] px-2 py-1 text-white bg-black rounded-md" onClick={addComment}>Add Comment</button>
        </div>
    );
};

export default AddCommentForm;