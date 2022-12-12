import { useRouter } from 'next/router';
import React from 'react';

const blogId = () => {
    const router = useRouter();
    const id = router.query.blogId;
    return (
        <div>
            <h2>Dynamic Blog Page {id}</h2>
        </div>
    );
};

export default blogId;