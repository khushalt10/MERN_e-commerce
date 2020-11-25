import React from 'react'
import { Helmet } from 'react-helmet'

function Meta({ title, description, keywords }) {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name='description' content={description} />
                <meta name='keywords' content={keywords} />
        </Helmet>
    )
}

Meta.defaultProps = {
    title: 'Welcome To ProShop',
    keywords: 'electronics, the best around thr world',
    description: 'we sell the products at best price'
}

export default Meta
