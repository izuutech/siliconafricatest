import '../App.css';
import { useState, useEffect } from 'react';

export default function Posts() {
    const [posts, setPosts]=useState([])
    
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => {
            let thePosts =[]
            for (let i = 0; i < 6; i++){
                thePosts.push(data[i])
            }
            setPosts(thePosts)
        })
        .catch((err) => console.log(err))
    

    }, [])
    
    const deletePost = (i) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/{i}`, {
            method: "DELETE"
        })
            .then((res) => res.json())
            .then((data) => {
                let newPost=posts.filter(post => {
                    return post.id !== i
                })
                setPosts(newPost)
                
            })
            .catch((err) => console.log(err))

    }
    return (
        <div className="postsBox" >
            {(posts[0])&&(
                    posts.map(post=>(
                <div className="aPost" key={post.id}>
                    <div className="postImgBox">
                        <img src="https://source.unsplash.com/random" className="postImg" alt="Post Image" />
                    </div>
                    <div className="postTitle">{post.title}</div>
                    <div className="postBody">{post.body}</div>
                    <button className="postBtn" onClick={()=>deletePost(post.id)}> DELETE </button>
                        </div>
                        ))
            )}
            {(!posts[0]) && (
                <div className="noPost">No posts yet!</div>
            )}
                
        </div>
    )
}