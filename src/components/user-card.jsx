import { Fragment } from "react";

import './user-card.css';

import { FaRegUser } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { BiPhotoAlbum } from "react-icons/bi";

import { Button } from "@mui/material";

import { Link } from "react-router-dom";

const UserCard = ({name, username, email, noOfAlbums, albumsLink}) => {
    
    return (
        <Fragment>
            <div className="user-card">
                <h4 className="name" >{ name }</h4>
                <ul className="list">
                    <li><i><FaRegUser/></i> <span className="user-name">{username}</span></li>
                    <li><i><MdAlternateEmail /></i><span>{ email }</span></li>
                    <li><i><BiPhotoAlbum/></i><span> {noOfAlbums} Albums</span></li>
                </ul>
                <div className="centered-button">
                    <Link to={albumsLink} >
                        <Button style={{ textTransform: "Capitalize", marginBottom: "10px" }}                            
                            variant="outlined" size="small">     
                            view user's albums
                        </Button>
                    </Link>
                </div>
            </div>
        </Fragment>
    )
}

export default UserCard;