import { Fragment, useState, useEffect, useRef } from 'react';

import useAuthRedirection from '../hooks/useAuthRedirection';

import './photo.css';

import useSWR from 'swr';

import axios from '../utils/axios';

import { useParams } from 'react-router-dom';

import PageHeader from './page-header';

import { MdModeEdit } from "react-icons/md";

import { Button } from '@mui/material';

const fetcher = url=>axios.get(url).then(response => response.data);

const Photo = () => {
    
    useAuthRedirection();

    const [photo, setPhoto] = useState();
    const [edit, setEdit] = useState(true);
    const [newTitle, setNewTitle] = useState();

    const photoId = useParams().id;

    const { data: photoDetails } = useSWR(`http://localhost:5000/api/photos/${photoId}`, fetcher);

    const editRef = useRef(null);

    useEffect(() => {
        
        if (photoDetails) {
            setPhoto(photoDetails);
        }
    }, [photoDetails]);

    // update photo object when photo title is changed
    const handleChange = (e) => {
        
        const newName = e.target.value;

        setNewTitle(newName)
    }

    const makeEditable = () => {

        setNewTitle((prev)=>prev=photo.title)

        setEdit(false);

        editRef.current.focus();        
    }

    const changePhotoTitle = (e => {
        
        e.preventDefault();

    });

    const cancelEditing = () => {
        
        setEdit(true);
    }

    return (
        <Fragment>
            <main className='photo-component'>
                <PageHeader header={`Photo`} />
                <div className='photo-title'> 
                    <span className='title'>
                        <form onSubmit={changePhotoTitle}>
                            <input className={!edit?"editable-input":""} name='title' ref={editRef} value={!edit?newTitle!==""?newTitle:"":photo?photo.title:""}
                                type='text' onChange={handleChange} readOnly={edit} ></input>
                            
                            {!edit && <div className='submit-btns'>
                                <Button variant='outlined' color='error' style={{ textTransform: "capitalize" }} onClick={cancelEditing} >Cancel</Button>
                                <Button variant='contained' color='success' style={{ textTransform: "capitalize" }}>Save New Title</Button>
                            </div>}
                        </form>
                    </span>
                    <span className='edit' onClick={makeEditable}>
                        <i>
                            <MdModeEdit/>
                        </i> Edit Title
                    </span>
                </div>
            </main>
        </Fragment>
    )
}

const Image = () => {
    
    return (
        <Fragment>

        </Fragment>
    )
}

export default Photo;