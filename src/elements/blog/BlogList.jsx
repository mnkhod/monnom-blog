import React, { Component ,Fragment, useEffect, useState} from "react";
import BlogContent from "./BlogContent";
import Link from 'next/link';
import Router, { useRouter } from 'next/router';


const renderLink = (child, params) => {
    const router = useRouter();
    console.log(router.pathname);
    return (
        <a  
            onClick={(e) => {
                e.preventDefault();
                router.push({
                    pathname: `/${params.blog.id}`
                })
            }}
            className="text-white">
            {child}
        </a>
    )
}

const BlogList = ({blogs}) => {

    return (
         <Fragment>
             <div className="row">
                {blogs.map((blog , i ) => (
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={blog.id} style={{cursor: 'pointer'}}>
                        <div className="blog blog-style--1">
                            <div className="thumbnail">
                                {renderLink(<img className="w-100" src={`${process.env.NEXT_PUBLIC_REACT_APP_API_URL}${blog.picture?.url}`} alt="Blog Images"/>, {
                                            blog
                                        })}
                            </div>
                            <div className="content">
                                <p className="blogtype">{blog.blog_category?.name || ''}</p>
                                <h4 className="title">
                                    {renderLink(blog.title, {
                                            blog
                                        })}
                                </h4>
                                <div className="blog-btn">
                                <a className="rn-btn text-white"
                                 onClick={() => {

                                }}>
                                {renderLink('Дэлгэрэнгүй', {
                                            blog
                                        })}
                                </a>
                                </div>
                            </div>
                        </div>
                    </div>
                 ))}
             </div>
         </Fragment>
    );
}
export default BlogList;