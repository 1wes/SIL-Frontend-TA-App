import { Fragment, useState, useEffect } from "react";

import './home.css'

import useAuthRedirection from "../hooks/useAuthRedirection";

import axios from "../utils/axios";
import useSWR from 'swr';

import UserCard from "./user-card";

import PageHeader from "./page-header";

const fetcher=url=>axios.get(url).then(response=>response.data)

const Users = () => {

    useAuthRedirection();

    const [users, setUsers] = useState([]);

    // fetch all users
    const { data } = useSWR(`https://sil-ta-api.onrender.com/api/users`, fetcher);

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
                <PageHeader header={`Users`} />
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
    const { data: albums } = useSWR(`https://sil-ta-api.onrender.com/api/users/${user.id}/albums`, fetcher);

    const totalAlbums = albums ? albums.length : 0;

    return (
        <li key={user.id}>
            <UserCard name={user.name} noOfAlbums={totalAlbums} albumsLink={`/users/${user.id}`} buttonText={`view user's albums`} />
        </li>
    )
}

export default Users;