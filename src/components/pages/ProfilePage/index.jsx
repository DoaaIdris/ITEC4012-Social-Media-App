import {
    NavLink
} from "react-router-dom";

import { getAuth, onAuthStateChanged, signOut } from "@firebase/auth";
import{useEffect, useState} from "react";
import { PostItem } from "../../PostItem";

import "./styles.css";

export const ProfilePage = () => {

    const [user, setUser] = useState(null);
    const[posts, setPosts] = useState([]);

    useEffect(
        () => {
            const auth = getAuth();
            onAuthStateChanged( auth, (user) => {
                if(user){
                    setUser(user);
                }else {
                    setUser(null);
                } 
            })

            
        }, []
    )

    const getPosts = async()=> {
        try {
          const response = await fetch('https://firestore.googleapis.com/v1/projects/itec4012-social-media-app/databases/(default)/documents/social%20media%20posts/');
          const data = await response.json();
          console.log(data);
          const formattedData = data.documents.map((item) => {
            return item.fields
          });
    
          console.log(formattedData);
          setPosts(formattedData);
          //globalState.initializePosts(formattedData);
          //setLoading(false);
    
        }catch(err){
          console.log(err);
          //setLoading(false);
        }
      }


    return(

        <div className="posts-container">
            {
            posts.map((post) => (
                <PostItem user ={post.user.stringValue} image={post.image.stringValue} text={post.text.stringValue}></PostItem>
            ))
            }

        </div>
    
    )
}