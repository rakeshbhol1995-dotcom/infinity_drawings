import React from 'react';

const JsonLd = () => {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Infinity Light Drawings",
        "alternateName": "ILD",
        "url": "https://infinitylightdrawings.com",
        "logo": "https://infinitylightdrawings.com/new_logo.png",
        "founder": {
            "@type": "Person",
            "name": "Nishith Sahasransu Ray"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "",
            "contactType": "customer service",
            "areaServed": "IN",
            "availableLanguage": "en"
        },
        "sameAs": [
            "https://www.imdb.com/name/nm10851210/",
            "https://www.instagram.com/infinitylightdrawings/",
            "https://www.linkedin.com/in/nishit-ray-3b02a21b4/"
        ]
    };

    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Nishith Sahasransu Ray",
        "url": "https://infinitylightdrawings.com",
        "image": "https://infinitylightdrawings.com/nishit.jpg",
        "jobTitle": "Filmmaker, Producer, Director",
        "worksFor": {
            "@type": "Organization",
            "name": "Infinity Light Drawings"
        },
        "sameAs": [
            "https://www.imdb.com/name/nm10851210/",
            "https://www.instagram.com/nishit_ray/"
        ]
    };

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Infinity Light Drawings",
        "url": "https://infinitylightdrawings.com",
        "potentialAction": {
            "@type": "SearchAction",
            "target": "https://infinitylightdrawings.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
            />
        </>
    );
};

export default JsonLd;
