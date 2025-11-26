import Link from 'next/link'
import { AiOutlineGithub } from 'react-icons/ai'
import { FaXTwitter } from 'react-icons/fa6'

const page = () => {
  return (
    <div className='min-h-screen w-screen font-display bg-white text-black flex flex-col text-sm'>
      <Nav />
     <div className='mx-auto'>
       <DisplayCards />
     </div>
      <Footer />
    </div>
  )
}

export default page

const Nav = () => {
  return (
    <div className='fixed top-0 bg-white w-screen h-fit flex md:flex-row flex-col md:gap-0 gap-1 justify-between items-center px-5 py-3 uppercase'>
      <Link href='/' className='hover:underline'>Designed.cards</Link>
      <div>your ui library of ready to use cards</div>
    </div>
  )
}

const DisplayCards = () => {
  return (
    <div className='w-screen h-screen p-5 md:pt-25 pt-30 grid md:grid-cols-4 md:gap-20 gap-10 grid-cols-1 pb-20 overflow-y-scroll'>
      <Card imgUrl='https://cdn.cosmos.so/2acebb6c-c04a-4442-b941-8d368d3ac807?format=jpeg' title='01' href='/' />
      <Card imgUrl='https://cdn.cosmos.so/1a853e35-a7d4-4de2-8a68-ef46bd1b6a25?format=jpeg' title='02' href='/' />
      <Card imgUrl='https://cdn.cosmos.so/c8483ef0-cd1e-466f-ba58-19f7c1b67eb6?format=jpeg' title='03' href='/' />
      <Card imgUrl='https://cdn.cosmos.so/1563d902-2a41-46d3-ba0f-89f7cb8d40ab?format=jpeg' title='04' href='/' />
       <Card imgUrl='https://cdn.cosmos.so/2acebb6c-c04a-4442-b941-8d368d3ac807?format=jpeg' title='01' href='/' />
      <Card imgUrl='https://cdn.cosmos.so/1a853e35-a7d4-4de2-8a68-ef46bd1b6a25?format=jpeg' title='02' href='/' />
      <Card imgUrl='https://cdn.cosmos.so/c8483ef0-cd1e-466f-ba58-19f7c1b67eb6?format=jpeg' title='03' href='/' />
      <Card imgUrl='https://cdn.cosmos.so/1563d902-2a41-46d3-ba0f-89f7cb8d40ab?format=jpeg' title='04' href='/' />
       <Card imgUrl='https://cdn.cosmos.so/2acebb6c-c04a-4442-b941-8d368d3ac807?format=jpeg' title='01' href='/' />
      <Card imgUrl='https://cdn.cosmos.so/1a853e35-a7d4-4de2-8a68-ef46bd1b6a25?format=jpeg' title='02' href='/' />
      <Card imgUrl='https://cdn.cosmos.so/c8483ef0-cd1e-466f-ba58-19f7c1b67eb6?format=jpeg' title='03' href='/' />
      <Card imgUrl='https://cdn.cosmos.so/1563d902-2a41-46d3-ba0f-89f7cb8d40ab?format=jpeg' title='04' href='/' />
    </div>
  )
}

const Card = ({ Component, title, href }: { imgUrl: string, title: string, href: string }) => {
  return (
    <Link href={href} className='flex flex-col gap-2 items-center'>
      <div className='size-60 rounded-4xl border border-neutral-300 overflow-hidden hover:shadow-lg hover:shadow-neutral-200'>
        <img src={Component} alt='' className='w-full h-full object-cover' />
      </div>
      <div>{title}</div>
    </Link>
  )
}

const Footer = () => {
  return (
    <div className='bg-white fixed w-screen bottom-0 px-5 py-3 text-xs uppercase flex md:flex-row flex-col-reverse justify-between items-center gap-1'>
      <div>2025 designed.cards. All rights Reserved.</div>
      <div className='flex items-center gap-3'>
        <Link href='/'><FaXTwitter className='size-4 cursor-pointer' /></Link>
        <Link href='/'><AiOutlineGithub className='size-4 cursor-pointer'  /></Link>
      </div>
    </div>
  )
}