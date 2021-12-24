import { getAuth, onAuthStateChanged} from "@firebase/auth";
import{useEffect, useState} from "react";
import { PostItem } from "../../PostItem";
import { ProfileHeader } from "../../ProfileHeader";
import { useHistory } from "react-router";

import "./styles.css";

export const ProfilePage = () => {

    const[profilePosts, setProfilePosts] = useState([]);

    const history = useHistory();

    //check if current user is logged into firebase
    useEffect(
        ()=> {
          getPosts();
          const auth = getAuth();
          console.log(auth.currentUser);
          onAuthStateChanged(auth, (user) => {
            if (!user) {
              history.push('/login');
            }
          })
        }, []
      ); 

    const getPosts = async()=> {
        try {

            const response = await fetch('https://firestore.googleapis.com/v1/projects/itec4012-social-media-app/databases/(default)/documents/social%20media%20posts/');
            const data = await response.json();
            console.log(data);

            
            const formattedData = data.documents.map((item) => {

                return item.fields

            });
                
            console.log(formattedData);

            setProfilePosts(formattedData);

            //filter posts to only get ones by specific logged in user
            const auth = getAuth();

            const profilePosts = formattedData.filter(
            (post) => {
                const username = post.user.stringValue; 
                const isMatch = username.indexOf(auth.currentUser.email);
                    
                return isMatch !== -1;
                }   
            )
            setProfilePosts(profilePosts);

            console.log(profilePosts);
            

    
        }catch(err){
            console.log(err);
          //setLoading(false);
        }
    }

    const auth = getAuth();

    return(
            
        <div className="profile-page">
        <ProfileHeader username= {auth.currentUser.email} profilePhoto="https://www.seekpng.com/png/detail/966-9665493_my-profile-icon-blank-profile-image-circle.png" followers="10" following="50"
        description="Illustrations | SEVENTEEN | 日本語も勉強しています| Insta: dodotheburd"/>
        <h2 className="profile-page-title">My Posts</h2>
        <div className="profile-posts-container">
            {
            profilePosts.map((post) => (
                <PostItem user ={post.user.stringValue} image={post.image.stringValue} text={post.text.stringValue}  profileIcon="https://www.seekpng.com/png/detail/966-9665493_my-profile-icon-blank-profile-image-circle.png"></PostItem>
            ))
            }
        </div>
        </div>
    
    )
}