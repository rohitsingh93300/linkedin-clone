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
        src: "/home",
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
            <span>{items.icon}</span>
            <Link className='text-xs hidden sm:block' href={items.src}>{items.text}</Link>
        </div>
      ))}
    </div>
  )
}

export default NavItems
