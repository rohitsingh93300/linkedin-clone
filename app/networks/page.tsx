import News from '@/components/News'
import Sidebar from '@/components/Sidebar'
import { currentUser } from '@clerk/nextjs/server';
import React from 'react'

const NetworkPage = async() => {
    const user = await currentUser();
  return (
    <div className="md:pt-20 pt-14 ">
    <div className="md:max-w-6xl mx-auto flex justify-between gap-8">
       {/* Sidebar */}
       <Sidebar user={user}/>
       {/* feed */}
       Network page
       {/* news */}
       <News/>
    </div>
  </div>
  )
}

export default NetworkPage
