// import Image from 'next/image'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Banner from '../Component/Banner/Banner'
import Books from '../Component/Books/Books'
import Footer from '../Component/Footer/Footer'
import Navbar from '../Component/Navbar/Navbar'

export default function Home({ posts }) {
  // console.log(posts)

  return (
    <div>
      <Head>
        <title>Home Page</title>
      </Head>
      <h1>Hello Next</h1>
      <button className="btn">Button</button>
      <Link href="allBooks">Blog</Link>
      <Image src="/img/book1.jpg" width={300} height={200}></Image>
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=6");
  const data = await res.json();

  return {
    props: {
      posts: data
    }
  }
}
