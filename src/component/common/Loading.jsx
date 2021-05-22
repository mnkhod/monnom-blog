import React from 'react';
import {PulseLoader} from 'react-spinners';

export default function Loading(props){
    return (
        <div style={{display: 'flex', justifyContent: 'center', minHeight: '15rem'}}><PulseLoader color={'#7f0080'} /></div>
    )
}