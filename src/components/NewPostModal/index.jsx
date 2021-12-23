import{useForm} from "react-hook-form";
import { useHistory } from "react-router-dom";
import{ getAuth, onAuthStateChanged} from 'firebase/auth';
import{useEffect} from 'react'

import "./styles.css"
export const NewPostModal = (props) => {

    const { register, handleSubmit } = useForm();
    const history = useHistory();

    //check if current user is logged into firebase
    useEffect(
        ()=> {
            
            const auth = getAuth();
            console.log(auth.currentUser);
            onAuthStateChanged(auth, (user) => {
                if (!user) {
                    history.push('/login');
                }
            })
        }, []
    ); 
    

    const submitPost = async (formVals) => {
        const auth = getAuth();

        const formattedData = {
            fields: {
                user:{
                    stringValue: auth.currentUser.email
                },
                text: {
                    stringValue: formVals.text
                },
                image: {
                    stringValue: formVals.image
                },
            
            }
        }
    

    console.log(formVals, formattedData);
    try {
        const response = await fetch('https://firestore.googleapis.com/v1/projects/itec4012-social-media-app/databases/(default)/documents/social%20media%20posts/',
        {
            headers: {
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(formattedData)
        })
        history.push('/');
    } catch (error) {
        console.log("Error", error);
    }
};

if(!props.show){
    return null
}

    return (
        <div className="modal" onClick = {props.onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h2 className="title">Create a New Post! </h2>
                </div>
                <div className="model-body">
                    <form className="form-layout"  onSubmit={handleSubmit(submitPost)}>
                        
                        <br />
                        <label htmlFor="text"> Add Caption </label>
                        <input
                        {...register("text")}
                        name="text"
                        required
                        />   
                        <label htmlFor="image"> Add an Image </label> 
                        <input
                        {...register("image")}  
                        name="image"
                        
                        />
                        <input className="submit-button" type="submit" value="Publish Post" Post />
                        <br/>

                    </form>
                </div>
            </div>
        </div>
    )
}