import "./styles.css";
import{useEffect, useState} from 'react'
import { PostItem } from "../../PostItem";
import{getAuth, onAuthStateChanged} from 'firebase/auth';
import { useHistory } from "react-router";

export const HomePage = () => {
  const[posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);


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
      setPosts(formattedData);
      setLoading(false);

    }catch(err){
      console.log(err);
      setLoading(false);
    }
  }

  return (
    <div className="timeline-page">
      <h1 className = "page-title">Timeline</h1>
          
      <div className="posts-container">
      {
          posts.map((post) => (
            <PostItem user ={post.user.stringValue} image={post.image.stringValue} text={post.text.stringValue} profileIcon="https://www.seekpng.com/png/detail/966-9665493_my-profile-icon-blank-profile-image-circle.png"></PostItem>
          ))
        }

        {
          loading && <p>Loading data..</p>
        }

      </div>
     
    </div>
  );
};
