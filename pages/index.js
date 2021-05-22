import React from 'react';
import Blog from '../src/elements/Blog';
import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_REACT_APP_API_URL
});

const getBlogs = async (idx, limit) => {
  const response = await apiClient.get(`/blogs?_start=${idx}&_limit=${limit}&_sort=id:DESC`);
  return response.data;
}

const getBlogCount = async () => {
  const countResponse = await apiClient.get(`/blogs/count`);
  return countResponse.data;
}

export default function Home(props){
  return <Blog {...props}/>
}

export async function getServerSideProps(context) {
  const blogs = await getBlogs(0, 6);
  const blogCount = await getBlogCount();
  return {
    props: {
        custom: 1,
        blogs,
        blogCount
    }, // will be passed to the page component as props
  }
}
