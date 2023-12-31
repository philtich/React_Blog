import { Link } from "react-router-dom";

import { Blogtype } from '../../App'

type BlogProps = {
    blog: Blogtype;
}

export const BlogCard = ({blog: { id, title, desc, date, image }}: BlogProps)=> {
  return (
    
        <div key={id}className='flex justify-center items-center gap-2 flex-col bg-gray-400'>
              <img className="w-full h-full object-cover" src={`${image}`}></img>
            <div className='w-10/12 py-4 flex flex-col gap-6 text-white text-xs'>
                <div className='lg:h-20'>
                  <h3 className='text-blue-600 text-lg font-bold'> {title}</h3> 
                </div>
                <p>{desc.substring(0,60)}...</p>
                <Link className="bg-blue-600 uppercase text-white font-bold p-1 w-1/2 flex justify-center items-center"to={`/${id}`}>Mehr erfahren</Link>
                <div className=' border-gray-200 border-t py-2'><span className='text-gray-500 text-xs'>Erstellt am: <span className='text-blue-600 text-xs'>{date}</span></span></div>
            </div>
        </div>
    
  )
}
