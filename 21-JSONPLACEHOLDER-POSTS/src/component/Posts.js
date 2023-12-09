import Post from "./Post";
import { useState, useEffect } from "react";

function Posts () {
    const [posts, setPosts ] = useState([]);
    useState(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((rec) => rec.json()
        .then ((posts) => setPosts(posts))
        .catch((error) => console.log(error.massage))
        );
    },[])

    return(
    <>
    {posts.map((post) => (
    <Post key={post.id} {...post} />
    ))}

    </>
    )
}

export default Posts;