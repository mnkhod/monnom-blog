import React, { useEffect, useMemo, useState } from "react";
import Paginate from 'react-paginate';
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import Pagination from "../elements/common/Pagination";
import BlogList from "../elements/blog/BlogList";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import { FiClock , FiUser , FiMessageCircle , FiHeart, FiFolder, FiLoader} from "react-icons/fi";
import Loading from '../component/common/Loading';

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

const PAGINATION = 6;
export default function Blog(props){

    const [blogs, setBlogs ] = useState(props.blogs || []);
    const [isLoading, setIsLoading] = useState(false);
    
    const [blogCount, setBlogCount] = useState(props.blogCount || 0);

    const paginate = async (idx, limit) => {
        setIsLoading(true);
        const blogs = await getBlogs(idx, limit);
        // let dummySize = 36;
        // for (let i=0; i<dummySize - 1; i++){
        //     blogs.push({
        //         ...blogs[0],
        //         id: `${blogs[0].id}-${i}`,
        //         title: `${blogs[0].title}-${i}`
        //     })
        // }
        const count = await getBlogCount();
        setBlogCount(count);
        setBlogs(blogs);
        setIsLoading(false);
    }

    const pageCount = useMemo(() => {
        return Math.max(parseInt(blogCount / PAGINATION) + Math.min(parseInt(blogCount / PAGINATION), 1), 1);
    }, [blogCount]);

    const handlePagination = async ({selected}) => {
        await paginate(selected*PAGINATION, PAGINATION);
        let elem = document.getElementById('blogs');
        if (elem){
            window.scroll({behavior: 'smooth', top: elem.offsetTop - 50});
        }
    }
    return(
        <React.Fragment>
            <PageHelmet pageTitle='Blog' />

            <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />
            {/* Start Breadcrump Area */}
            <Breadcrumb title={'Мэдээ мэдээлэл'}   />
            {/* End Breadcrump Area */}

            
            {/* Start Blog Area */}
            <div className="rn-blog-area ptb--120 bg_color--1">
                <div id="blogs" className="container">
                    {isLoading?(<div><Loading /></div>):<BlogList blogs={blogs} />}
                    <div className="row mt--20">
                        <div className="col-lg-12">
                            {/* Start Pagination Area */}
                            <div className="rn-pagination text-center">
                                <Paginate onPageChange={handlePagination} previousLabel="Өмнөх" nextLabel="Дараагийнх" pageCount={pageCount} containerClassName="page-list" activeClassName="active"/>
                            </div>
                            {/* End Pagination Area */}
                        </div>
                    </div>
                </div>
            </div>
            {/* End Blog Area */}
            
            {/* Start Back To Top */}
            <div className="backto-top">
                <ScrollToTop showUnder={160}>
                    <FiChevronUp />
                </ScrollToTop>
            </div>
            {/* End Back To Top */}
            
            <Footer /> 

        </React.Fragment>
    )
}