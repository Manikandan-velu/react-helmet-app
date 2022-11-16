import React from 'react';
import { Helmet } from 'react-helmet-async';

const seoArr ={
    title:'React Helmet Application',
    desc: 'Beginner friendly page for learning React Helmet.',
    ogType:'',
    ogTitle:'React Helmet Application',
    ogDesc:'Beginner friendly page for learning React Helmet.',
    twitterCreate:'',
    twitterCard:'',
    twitterTitle:'',
    twitterDesc:'',

}

function SEO(){
    return (
        <Helmet>
        { /* Standard metadata tags */ }
        <title>{seoArr.title}</title>
        <meta name='description' content={seoArr.desc} />
        { /* End standard metadata tags */ }
        { /* Facebook tags */ }
        <meta property="og:type" content={seoArr.ogType} />
        <meta property="og:title" content={seoArr.ogTitle} />
        <meta property="og:description" content={seoArr.ogDesc} />
        { /* End Facebook tags */ }
        { /* Twitter tags */ }
        
        { /* End Twitter tags */ }
        </Helmet>
    )
}

export default SEO;