import { Bell, BriefcaseBusiness, Home, MessageCircleMore, Users } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

type NAVITEMS ={
    src: string,
    icon: JSX.Element,
    text: string
}

const navItems:NAVITEMS[] = [
    {
        src: "/",
        icon: <Home/>,
        text: "Home",
    },
    {
        src: "/networks",
        icon: <Users/>,
        text: "My Network",
    },
    {
        src: "/job",
        icon: <BriefcaseBusiness/>,
        text: "Jobs",
    },
    // {
    //     src: "/message",
    //     icon: <MessageCircleMore/>,
    //     text: "Messaging",
    // },
    {
        src: "/notification",
        icon: <Bell/>,
        text: "Notification",
    },
]

const NavItems = () => {
  return (
    <div className='flex gap-8'>
      {navItems.map((items, index)=> (
        <div key={index} className='flex flex-col items-center cursor-pointer text-[#666666] hover:text-black'>
            
            <Link className='flex flex-col items-center' href={items.src}>
            <span>{items.icon}</span>
            <span className='text-xs sm:block hidden'>{items.text}</span>
            </Link>
        </div>
      ))}
    </div>
  )
}

export default NavItems
