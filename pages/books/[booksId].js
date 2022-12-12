import React from 'react';
import { useRouter } from "next/router";

const booksId = ({post}) => {
    const router = useRouter();

    const handleBack = () => {
        router.push("/books")
    }

    return ( 
        <div key={post?.id} className="card mx-10 my-10 bg-primary text-primary-content">
    <figure>
      <img className='w-full h-52' src="https://placeimg.com/400/225/arch" alt="Shoes" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">{post?.title}</h2>
      <p className="text-xl">{post?.body}</p>
      <div className="card-actions justify-center">
        <button onClick={handleBack} className="btn btn-primary">Back to post</button>
      </div>
    </div>
  </div>
    );
};

export const getStaticProps = async (context) => {
    const { params } = context;

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params?.booksId}`);
    const data = await res.json();
  
    return {
      props: {
        post: data
      }
    }
  }

export const getStaticPaths = async() => { 

    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();

    const paths = posts.map(post => {
        return {
            params: {
                booksId: `${post.id}`
            }
        }
    })


    return {
        paths,
        fallback: false,
    }

}

export default booksId;