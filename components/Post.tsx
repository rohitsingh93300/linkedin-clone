'use client'
import React from 'react'
import ProfilePhoto from './shared/ProfilePhoto'
import { useUser } from '@clerk/nextjs'
import { Button } from './ui/button'
import { Bookmark,  Edit, EllipsisVertical,  Settings, Trash2 } from 'lucide-react'
import { Badge } from './ui/badge'
import PostContent from './PostContent'
import SocialOptions from './SocialOptions'
import { IPostDocument } from '@/models/post.model'
import ReactTimeago from 'react-timeago'
import { deletePostAction } from '@/lib/serveractions'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const Post = ({ post }: { post: IPostDocument }) => {
    const user = useUser()
    //  console.log("Rohit",post)
    console.log("pohit", user)
    const fullName = post?.user?.firstName + " " + post?.user?.lastName;
    const userName = (post?.user?.firstName + post?.user?.lastName).toLowerCase();
    const loggedInUser = user?.user?.id === post?.user?.userId;

    // const userName = user?.user?.primaryEmailAddress?.emailAddress.split('@')[0]

    return (
        <div className='bg-white my-2 mx-2 md:mx-0 rounded-lg border border-gray-300'>
            <div className='flex gap-2 p-4'>
                <ProfilePhoto src={post?.user?.profilePhoto!} />
                <div className='flex items-center justify-between w-full'>
                    <div>
                        <h1 className='text-sm font-bold'>
                            {fullName} 
                            {
                                loggedInUser && (

                                    <Badge variant={'secondary'} className='ml-2'>You</Badge>
                                )
                            }
                        </h1>
                        <p className='text-xs text-gray-500'>@{userName}</p>

                        <p className='text-xs text-gray-500'>
                            <ReactTimeago date={new Date(post.createdAt)} />
                        </p>
                    </div>
                </div>
                <div>
                    {
                        loggedInUser && (

                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>

                                    {/* <Button size={'icon'} className='rounded-full' variant={'outline'}> */}
                                        <EllipsisVertical />
                                    {/* </Button> */}

                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-40 mr-2 md:mr-0">
                                    {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
                                    {/* <DropdownMenuSeparator /> */}
                                    <DropdownMenuGroup>
                                        <DropdownMenuItem>
                                            {/* <User className="mr-2 h-4 w-4" /> */}
                                            <span>Profile</span>
                                            {/* <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut> */}
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <Bookmark className="mr-2 h-4 w-4" />
                                            <span>Save</span>
                                            {/* <DropdownMenuShortcut>⌘B</DropdownMenuShortcut> */}
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <Edit className="mr-2 h-4 w-4" />
                                            <span>Edit</span>
                                            {/* <DropdownMenuShortcut>⌘B</DropdownMenuShortcut> */}
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <Settings className="mr-2 h-4 w-4" />
                                            <span>Settings</span>
                                            {/* <DropdownMenuShortcut>⌘S</DropdownMenuShortcut> */}
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <Trash2 className="mr-2 h-4 w-4" />
                                            <span onClick={() => {
                                                const res = deletePostAction(post._id);
                                            }}>Delete Post</span>
                                            {/* <DropdownMenuShortcut>⌘K</DropdownMenuShortcut> */}
                                        </DropdownMenuItem>
                                    </DropdownMenuGroup>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        )
                    }
                </div>
            </div>
            <PostContent post={post} />
            <SocialOptions />
        </div>
    )
}

export default Post
