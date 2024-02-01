import { Fragment, useEffect, useState } from 'react';

import PageHeader from './page-header';

import useAuthRedirection from '../hooks/useAuthRedirection';

import axios from '../utils/axios';

import useSWR from 'swr';

import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import './album.css';

const fetcher = url => axios.get(url).then(response => response.data);

const Album = () => {

    useAuthRedirection();

    const [album, setAlbum] = useState();
    const [photos, setPhotos] = useState();

    const userId = useParams().userId;
    const albumId = useParams().albumId;

    const { data: albumDetails } = useSWR(`http://localhost:5000/api/albums/${albumId}`, fetcher);
    const { data: photosList } = useSWR(`http://localhost:5000/api/photos/album/${albumId}`, fetcher);

    useEffect(() => {
        
        if (albumDetails) {

            setAlbum(albumDetails);
        }

        if (photosList) {
            setPhotos(photosList);
        }
    }, [albumDetails, photosList]);

    const imageList = photos ? photos.map((photo) => {

        return (
            <li key={photo.id}>
                <Link className='images-link' to={`/users/${userId}/albums/${albumId}/photos/${photo.id}`}>
                    {photo.title}                     
                </Link>                
            </li>
        )

    }) :""
    
    return (
        <Fragment>
            <main className='album-component'>
                <PageHeader header={album ? album.title : ""} />
                <h1 className='album-details'>
                    {`${photos ? photos.length : 0} total photos`}
                </h1>
                <PageHeader header={`Photos`} />
                <ul className='images-list'>
                    {imageList}
                </ul>
            </main>

        </Fragment>
    )
}

export default Album;