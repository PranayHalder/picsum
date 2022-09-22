import React from 'react';
import Nature from '../../assets/images/nature.jpg';
import Sky from '../../assets/images/sky.jpg';
import Space from '../../assets/images/space.jpg';
import Art from '../../assets/images/art.jpg';
import Mountain from '../../assets/images/mountain.jpg';
import ExploreGif from '../../assets/images/explore.gif';
import Footer from './Footer.jsx';


const Home = () => {
    return (
       <>
       <div className='flex justify-center items-center bg-[#ffc4bc]'>
       <span className='absolute   z-10'>
        <input type="text" placeholder='Search for free photos' className='w-[42rem] h-14 px-6 py-3 rounded-full shadow-[0_4px_4px_#00000040] outline-none' />
       </span>
         <img src='https://static.tacdn.com/img2/brand/home/homemar2022_dt_trans.png' className='h-full w-full' />
         </div>
         <div className='w-100  mt-20 px-10 mb-0'>
          <ul className='flex justify-center'>
            <li className='px-8 py-3 cursor-pointer border rounded-full'>Collections</li>
            <li className='px-8 py-3 cursor-pointer border rounded-full ml-3'>Leaderboard</li>
            <li className='px-8 py-3 cursor-pointer border rounded-full ml-3'>Challenges</li>
          </ul>
          {/* PHOTOS SECTION */}
          <div className="container mx-auto mt-20">
          <h1 className='text-2xl'>Free Stock Photos</h1> 

        <div  className="mt-10 grid-cols-4 p-0 m-0 lg:grid lg:gap-3 lg:grid-rows-2 "> 
        <div className="w-full rounded flex justify-center items-center">
            <h2 className='text-3xl text-white absolute font-semibold z-10'>Nature</h2>
        
            <img className='rounded-3xl object-cover brightness-75 hover:brightness-50 cursor-pointer transition-all ease-linear' src={Nature} alt="image"/>
        </div>
        <div className="w-full col-span-2 row-span-2 rounded flex justify-center items-center">
        <h2 className='text-3xl text-white absolute font-semibold z-10'>Space</h2>
            <img className='rounded-3xl object-cover w-100 brightness-75 hover:brightness-50 cursor-pointer transition-all ease-linear' src={Space}
                alt="image"/>
        </div>
        <div className="w-full rounded flex justify-center items-center">
        <h2 className='text-3xl text-white absolute font-semibold z-10'>Sky</h2>
            <img className='rounded-3xl object-cover brightness-75 hover:brightness-50 cursor-pointer transition-all ease-linear' src={Sky}
                alt="image"/>
        </div>
        <div className="w-full rounded flex justify-center items-center">
        <h2 className='text-3xl text-white absolute font-semibold z-10'>Art</h2>
            <img className='rounded-3xl object-cover h-[207px] w-[327px] brightness-75 hover:brightness-50 cursor-pointer transition-all ease-linear ' src={Art}
                alt="image"/>
        </div>
        <div className="w-full rounded flex justify-center items-center">
        <h2 className='text-3xl text-white absolute font-semibold z-10'>Mountain</h2>
            <img className='rounded-3xl object-cover brightness-75 hover:brightness-50 cursor-pointer transition-all ease-linear' src={Mountain}
                alt="image"/>
         </div> 
        </div>
        </div>
  </div>
  {/* PHOTOS SECTION END */}
  <div className='mt-20 px-20 flex justify-center items-center'>
    <img src={ExploreGif} className='mr-8' />
    <div>
    <h1 className='text-3xl font-bold'>Popular & Trending Photos</h1> 
    <button className="block py-2 px-10 mt-4 text-white text-md cursor-pointer bg-[#000] rounded-3xl">Explore</button>
    </div>
  </div>


{/* LOCATION PHOTOS SECTION */}
<div className='mt-16 px-40 box-border  bg-[#004f32] flex max-h-[38rem] overflow-hidden items-center z-20'>
  <div className='w-1/4 px-6'>
  <svg fill='#ffffff' height="44" width="44" viewBox="0 0 24 24" aria-hidden="true" aria-label="" role="img"><path d="M0 12c0 5.123 3.211 9.497 7.73 11.218-.11-.937-.227-2.482.025-3.566.217-.932 1.401-5.938 1.401-5.938s-.357-.715-.357-1.774c0-1.66.962-2.9 2.161-2.9 1.02 0 1.512.765 1.512 1.682 0 1.025-.653 2.557-.99 3.978-.281 1.189.597 2.159 1.769 2.159 2.123 0 3.756-2.239 3.756-5.471 0-2.861-2.056-4.86-4.991-4.86-3.398 0-5.393 2.549-5.393 5.184 0 1.027.395 2.127.889 2.726a.36.36 0 0 1 .083.343c-.091.378-.293 1.189-.332 1.355-.053.218-.173.265-.4.159-1.492-.694-2.424-2.875-2.424-4.627 0-3.769 2.737-7.229 7.892-7.229 4.144 0 7.365 2.953 7.365 6.899 0 4.117-2.595 7.431-6.199 7.431-1.211 0-2.348-.63-2.738-1.373 0 0-.599 2.282-.744 2.84-.282 1.084-1.064 2.456-1.549 3.235C9.584 23.815 10.77 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12"></path></svg>

 <h4 className='text-3xl font-bold mt-5 text-white'>Photographers' Choice Best of the Best</h4>
 <button className="block py-2 px-10 mt-8 text-white text-md cursor-pointer bg-[#000] rounded-3xl">Join Now</button>
       
  </div>
  <div className='w-3/4'>
  <div className="columns-2 md:columns-3">

    <div className='p-3 bg-[#fde39a] rounded-lg mb-4'>
    <img  src="" />
    <h5 className='text-lg mt-2 mb-4 font-semibold'>Kochi , India</h5>
    </div>
    <div className='p-3 bg-[#ffffff] rounded-lg mb-4'>
    <img  src="https://source.unsplash.com/collection/928423/?sig=5556324" />
    <h5 className='text-lg mt-2 mb-4 font-semibold'>Kochi , India</h5>
    </div>

    <div className='p-3 bg-[#f4ddd3] rounded-lg mb-4'>
    <img  src="https://source.unsplash.com/collection/928423/?sig=552324" />
    <h5 className='text-lg mt-2 mb-4 font-semibold'>Kochi , India</h5>
    </div>

    <div className='p-3 bg-[#c9f2e2] rounded-lg mb-4'>
    <img  src="https://source.unsplash.com/collection/928423/?sig=22352" />
    <h5 className='text-lg mt-2 mb-4 font-semibold'>Kochi , India</h5>
    </div>

    <div className='p-3 bg-[#faf1ee] rounded-lg mb-4'>
    <img  src="https://source.unsplash.com/collection/928423/?sig=352532" />
    <h5 className='text-lg mt-2 mb-4 font-semibold'>Kochi , India</h5>
    </div>

    <div className='p-3 bg-[#fde39a] rounded-lg mb-4'>
    <img  src="https://source.unsplash.com/collection/928423/?sig=243255" />
    <h5 className='text-lg mt-2 mb-4 font-semibold'>Kochi , India</h5>
    </div>

    <div className='p-3 bg-[#f4ddd3] rounded-lg mb-4'>
    <img  src="https://source.unsplash.com/collection/928423/?sig=23222" />
    <h5 className='text-lg mt-2 mb-4 font-semibold'>Kochi , India</h5>
    </div>

    <div className='p-3 bg-[#fde39a] rounded-lg mb-4'>
    <img  src="https://source.unsplash.com/collection/928423/?sig=23554" />
    <h5 className='text-lg mt-2 mb-4 font-semibold'>Kochi , India</h5>
    </div>
  </div>
  </div>
 </div>
 {/* LOCATION PHOTOS SECTION END*/}

<Footer />     
</>
    )
   }
   export default Home;