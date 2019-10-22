/* eslint-disable react/require-default-props */
import React from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'

interface SeoProps {
    title: string
    description: string
    image: string
    url: string
}

const Seo = ({
    title = 'Metomic',
    description = 'Developer privacy tools',
    image = 'url',
    url = 'https://www.metomic.com'
}: SeoProps) => (
    <Helmet>
        {/* General tags */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="image" content={image} />
        <meta charSet="utf-8" />

        {/* OpenGraph tags */}
        <meta property="og:locale" content="en_GB" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={title} />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
    </Helmet>
)

export default Seo
