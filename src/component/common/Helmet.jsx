import React, { Component } from "react";
import {Helmet} from 'react-helmet'

class PageHelmet extends Component{
    render(){
        return(
            <React.Fragment>
                <Helmet>
                    <meta name="description" content="MON NOM web" />
                </Helmet>
            </React.Fragment>
        )
    }
}


export default PageHelmet;
