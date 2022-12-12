// import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import Banner from '../../Component/Banner/Banner';
import Books from '../../Component/Books/Books';
import Footer from '../../Component/Footer/Footer';
import Navbar from '../../Component/Navbar/Navbar';

export default function Home({ posts }) {
  // console.log(posts)

  return (
    <div>
      <Head>
        <title>Home Page</title>
      </Head>
      <Navbar></Navbar>
      <Banner></Banner>
      <div className='my-20 w-5/6 mx-auto'>
      <h2 className="text-2xl">Book Card</h2>
      <div className='grid grid-col-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ml-0'>
            {
          posts?.map(post => <Books post={post} key={post.id}></Books> )
        }
        </div>
        <div className='text-center mt-5'>
        <Link href="/allBooks">
          <button className='btn btn-primary'>Show All</button>
        </Link>
        </div>
        </div>
      <Footer></Footer>
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=4");
  const data = await res.json();

  return {
    props: {
      posts: data
    }
  }
}
