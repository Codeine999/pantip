
import Flame from '@/assect/icon/flame.svg'
import Image from 'next/image'

import { Button } from '@/components/ui/button';

import {
    Newspaper,
    MessageCircle
} from 'lucide-react';


const threads = [
    {
        title: "มัดรวมบริการลงโฆษณา Pantip.com แบนเนอร์ รีวิว",
        tag: "Ad",
        image: "/pantip-ads.jpg",
        author: "Pantip Ads",
        comments: "89",
        time: "2 ช.ม",
    },
    {
        title: "ผัก 1 ชนิด แคลเซียมสูงกว่า...",
        tag: "สุขภาพ",
        image: "/veggie.jpg",
        author: "สมาชิกหมายเลข 2469579",
        comments: "89",
        time: "2 ช.ม",
    },
    {
        title: "ผัก 1 ชนิด แคลเซียมสูงกว่า...",
        tag: "สุขภาพ",
        image: "/veggie.jpg",
        author: "สมาชิกหมายเลข 2469579",
        comments: "89",
        time: "2 ช.ม",
    },
    {
        title: "ผัก 1 ชนิด แคลเซียมสูงกว่า...",
        tag: "สุขภาพ",
        image: "/veggie.jpg",
        author: "สมาชิกหมายเลข 2469579",
        comments: "89",
        time: "2 ช.ม",
    },
    {
        title: "ผัก 1 ชนิด แคลเซียมสูงกว่า...",
        tag: "สุขภาพ",
        image: "/veggie.jpg",
        author: "สมาชิกหมายเลข 2469579",
        comments: "89",
        time: "2 ช.ม",
    },
    {
        title: "ผัก 1 ชนิด แคลเซียมสูงกว่า...",
        tag: "สุขภาพ",
        image: "/veggie.jpg",
        author: "สมาชิกหมายเลข 2469579",
        comments: "89",
        time: "2 ช.ม",
    },

];
const FeedSection = () => {
    return (
        <div className="p-6 bg-card border-1 rounded-2xl shadow-lg">
            <div className="max-w-6xl mx-auto ">
                <div className='flex gap-3'>
                    <div
                        className="w-7 h-7 bg-gradient-to-br from-[#FF5A5F] to-[#FF5A5F]
                            rounded-md items-center flex justify-center mt-2"
                    >
                        <Newspaper className="w-4 h-4 text-white" />
                    </div>

                    <div className='mb-6 flex flex-col gap-0.5'>
                        <p className="text-xl font-medium">Feed</p>
                        <p className="text-xs">
                            กระทู้ที่มีคนเปิดอ่านมากในขณะนี้ อัปเดตทุกนาที
                        </p>
                    </div>
                </div>

                <div className='md:block hidden'>
                    <div className="grid grid-cols-2 divide-x ">
                        {/* ฝั่งซ้าย */}
                        <div className="pr-4">
                            {threads.slice(0, Math.ceil(threads.length / 2)).map((thread, i) => (
                                <div
                                    key={i}
                                    className="flex items-start gap-3 p-3 rounded-md hover:bg-[#4a458a] transition"
                                >
                                    <div className="flex-shrink-0 w-[100px] h-[70px] bg-gray-200 rounded overflow-hidden">
                                        <img
                                            src={thread.image}
                                            alt="cover"
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                    <div className="flex flex-col justify-between">
                                        <p className="font-noto-thai font-medium">
                                            {thread.title}
                                        </p>
                                        <div className='flex gap-2 mt-6'>
                                            <p className="text-xs text-gray-400 ">
                                                {thread.author}
                                            </p>
                                            <p className="text-xs text-gray-400 ">
                                                {thread.time}
                                            </p>
                                            <div className="flex items-center space-x-1">
                                                <MessageCircle className="w-4 h-4 text-gray-400" />
                                                <p className='text-xs text-gray-400'>{thread.comments}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* ฝั่งขวา */}
                        <div className="pl-4">
                            {threads.slice(Math.ceil(threads.length / 2)).map((thread, i) => (
                                <div
                                    key={i}
                                    className="flex items-start gap-3 p-3 rounded-md"
                                >
                                    <div className="flex-shrink-0 w-[100px] h-[70px] bg-gray-200 rounded overflow-hidden">
                                        <img
                                            src={thread.image}
                                            alt="cover"
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                    <div className="flex flex-col justify-between">
                                        <p className="font-noto-thai2 font-medium">
                                            {thread.title}
                                        </p>
                                        <div className='flex gap-2 mt-6'>
                                            <p className="text-xs text-gray-400 ">
                                                {thread.author}
                                            </p>
                                            <p className="text-xs text-gray-400 ">
                                                {thread.time}
                                            </p>
                                            <div className="flex items-center space-x-1">
                                                <MessageCircle className="w-4 h-4 text-gray-400" />
                                                <p className='text-xs text-gray-400'>{thread.comments}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className='md:hidden block'>
                    {threads.slice(0, 4).map((thread, i) => (
                        <div
                            key={i}
                            className="flex items-start gap-3 p-3 rounded-md"
                        >
                            <div className="flex-shrink-0 w-[100px] h-[70px] bg-gray-200 rounded overflow-hidden">
                                <img
                                    src={thread.image}
                                    alt="cover"
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <div className="flex flex-col justify-between">
                                <p className="font-noto-thai2 font-medium">
                                    {thread.title}
                                </p>
                                <div className='flex gap-2 mt-6'>
                                    <p className="text-xs text-gray-400 whitespace-nowrap ">
                                        {thread.author}
                                    </p>
                                    <p className="text-xs text-gray-400 whitespace-nowrap">
                                        {thread.time}
                                    </p>
                                    <div className="flex items-center space-x-1">
                                        <MessageCircle className="w-4 h-4 text-gray-400" />
                                        <p className='text-xs text-gray-400 whitespace-nowrap'>{thread.comments}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Button className="hover:text-white underline bg-gradient-to-br from-[#FF5A5F] to-[#FF5A5F] w-full">
                        ดูเพิ่มเติม ▼
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default FeedSection