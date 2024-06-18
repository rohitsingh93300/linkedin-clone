import Image from 'next/image'
import React from 'react'
import SearchInput from './SearchInput'
import NavItems from './NavItems'
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { Button } from "@/components/ui/button"
import { Search } from 'lucide-react'


const Navbar = () => {
  return (
    <div className='fixed w-full bg-white z-50 shadow-sm'>
      <div className='flex items-center max-w-6xl justify-between h-14 mx-auto px-3'>
        <div className='flex items-center gap-2'>
          <Image
            src={'/Linkedin.png'}
            width={40}
            height={40}
            alt='Logo'
          />
          <div className='hidden md:block'>
            <SearchInput />
          </div>
          <div className='sm:hidden'>
            <Search />
          </div>
        </div>
        <div className='flex items-center gap-5'>
          <div className='md:block '>
            <NavItems />
          </div>
          <div>
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <Button className='rounded-full' variant={'secondary'}>
                <SignInButton />
              </Button>
            </SignedOut>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
