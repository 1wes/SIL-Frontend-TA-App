import { Fragment, useState, useEffect } from "react";

import './home.css'

import withAuthRedirect from './redirect';

import axios from "../utils/axios";
import useSWR from 'swr';

import UserCard from "./user-card";

const fetcher=url=>axios.get(url).then(response=>response.data)

const Users = () => {

    const [users, setUsers] = useState([]);

    // fetch all users
    const { data } = useSWR(`http://localhost:5000/api/users`, fetcher);

    useEffect(() => {

        if (data) {
            setUsers(data);
        }
        
    }, [data]);

    const usersList = users.map((user) => (

        <UserAlbumDetails key={user.id} user={user} />
    ))
    
    return (
        <Fragment>
            <main className="users-component">
                <h1>
                    Users
                </h1>
                <ul className="user-cards">
                    {usersList}
                </ul>
            </main>
        </Fragment>
    )
}

// To avoid fetching data in a loop, pass the users as a prop to a different component
const UserAlbumDetails = ({ user }) => {
    
    // fetch a specific user's albums
    const { data: albums } = useSWR(`http://localhost:5000/api/users/${user.id}/albums`, fetcher);

    const totalAlbums = albums ? albums.length : 0;

    return (
        <li key={user.id}>
            <UserCard name={user.name} username={user.username} email={user.email} noOfAlbums={totalAlbums} albumsLink={`/users/${user.id}`} />
        </li>
    )
}

export default withAuthRedirect(Users);