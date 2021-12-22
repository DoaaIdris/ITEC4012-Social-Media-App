import './styles.css';
import { useContext } from 'react';

export const PostItem = (props) => {
    
    const {user, text, image} = props;

    //const globalState = useContext(PetsOrderContext);

    const addPetToCart = () => {

        const pet = {
            user,
            text,
            image   
        }

    }

    return(
        <div className="post">
            <p className="post-user"> {user.substring(0, user.indexOf("@"))}</p>
            
            {image == ''? null: <img className="post-photo" src={image} alt={user + "post" + "photo"} />}
    
            <p className="post-text"> {text} </p>

        </div>
    )
}