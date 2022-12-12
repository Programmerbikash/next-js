import Head from "next/head";
import Link from "next/link";
import React from "react";

const AllBooks = ({ posts }) => {
  // console.log(posts);
  return (
    <div className="my-20 w-5/6 mx-auto">
      <Head>
        <title>Books Page</title>
      </Head>
      <div className="grid grid-col-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ml-0">
        {posts?.map((post) => (
          <div
            key={post?.id}
            className="max-w-sm bg-gray-100 text-center border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
          >
            <a href="#">
              <img
                className="rounded-t-lg w-5/6 mx-auto mt-4"
                src="/img/book1.jpg"
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Rich Dad Poor Dad
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              This is not a self-help book. It’s a wake-up call! Can’t Hurt Me, David Goggins’ smash hit memoir, demonstrated how much untapped ability we all have but was merely an introduction to the power of the mind.
              </p>
              <Link
                href={`/books/${post?.id}`}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-5">
        <Link href="/books">
          <button className="btn btn-primary">Home Page</button>
        </Link>
      </div>
    </div>
  );
};

export default AllBooks;

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  //   const res = await fetch("booksInfo.json");
  const data = await res.json();

  return {
    props: {
      posts: data,
    },
  };
};
