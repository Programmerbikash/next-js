import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

const blog = () => {
    return (
        <div>
            <Head>
                <title>Blog Page</title>
            </Head>
            <h2>Blog Page</h2>
            <Link href="/">Home</Link>
        </div>
    );
};

export default blog;