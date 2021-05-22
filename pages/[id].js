import React from 'react';
import BlogDetails from '../src/elements/BlogDetails';
import axios from 'axios';

export default function BlogSingle(props){
    return (
        <BlogDetails {...props} />
    )
}

export async function getServerSideProps(context){
    const {id} = context.params;
    const blogResponse = await axios.get(`${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/blogs/${id}`);
    const blog = blogResponse.data;
    return {
        props: {
            blog
        }
    }
}