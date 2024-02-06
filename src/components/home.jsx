import React, { Fragment } from "react";

import './home.css'

import useAuthRedirection from "../hooks/useAuthRedirection";

import axiosInstance from "../utils/axios";
import useSWR from "swr";

import UserCard from "./user-card";

import PageHeader from "./page-header";

const fetcher=url=>axiosInstance.get(url).then(response=>response.data)

const Users = () => {

    useAuthRedirection();

    // fetch all users
    const { data:allUsers } = useSWR(`https://sil-ta-api.onrender.com/api/users`, fetcher);
    
    return (
        <Fragment>
            <main className="users-component">
                <PageHeader header={`Users`} />
                <ul className="user-cards">
                    {allUsers && allUsers.map((user) => (
                        <UserAlbumDetails key={user.id} user={user} />                        
                    ))}                                    
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