
import Flame from '@/assect/icon/flame.svg'
import Image from 'next/image'

import { Button } from '@/components/ui/button';
import fire from '@/assect/icon/flame.png'
import {
    Search,
    User,
    Bell,
    Settings,
    Heart,
    TrendingUp,
    MessageCircle,
    Eye,
    Calendar,
    Filter,
    Newspaper
} from 'lucide-react';


const hotTopics = [
    {
        id: 1,
        title: "สร้างรายได้เป็นค่าร่วมแบบมือใหม่ ได้แล้ว เพียงเยื่อมองปัญชีพื้นที่ปนป่าง Google AdSense",
        category: "เทคโนโลยี",
        // views: "15.2K",
        comments: "89",
        time: "2 ชั่วโมงที่แล้ว",
        trending: true
    },
    {
        id: 2,
        title: "Kratoo Podcast 💡 EP22 : ชีวิตจริงในฤดู 10 ปี / ทำอิคจิกมรรมานิไฟฟ้าองหา",
        category: "ไลฟ์สไตล์",
        // views: "8.7K",
        comments: "156",
        time: "4 ชั่วโมงที่แล้ว",
        trending: false
    },
    {
        id: 3,
        title: "LG Beauty เครื่องดูดฝุ่นเกาหลี ช่วยร่วมกิจกรรมแพทย์กาศภาพสากล คุ้มรับมสืกเข็ทที่ปไช้ 40 รางวัล ฟรี",
        category: "ความงาม",
        // views: "12.5K",
        comments: "234",
        time: "6 ชั่วโมงที่แล้ว",
        trending: true
    },
    {
        id: 4,
        title: "LG Beauty เครื่องดูดฝุ่นเกาหลี ช่วยร่วมกิจกรรมแพทย์กาศภาพสากล คุ้มรับมสืกเข็ทที่ปไช้ 40 รางวัล ฟรี",
        category: "ความงาม",
        // views: "12.5K",
        comments: "234",
        time: "6 ชั่วโมงที่แล้ว",
        trending: true
    }
];



export const TrendCard = () => {
    return (
        <div>
            {hotTopics.map((topic) => (
                <div key={topic.id} className="p-2 border-b transition-all cursor-pointer ">
                    <div className="flex items-start space-x-4">
                        <div className="w-4 h-4 flex items-center justify-center">
                            {topic.trending && (
                                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                            )}
                        </div>
                        <div className="flex-1">
                            <h4 className="font-sans transition-colors md:text-md text-sm">
                                {topic.title}
                            </h4>
                            <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                                <span className="bg-gray-100 px-2 py-2 rounded-full text-xs">
                                    {topic.category}
                                </span>
                                <div className="flex items-center space-x-1">
                                    <MessageCircle className="w-4 h-4" />
                                    <p className='text-xs'>{topic.comments}</p>
                                </div>
                                <div className="flex items-center space-x-1">
                                    <Calendar className="w-4 h-4" />
                                    <p className='text-xs'>{topic.time}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}


const TrendSection = () => {
    return (
            <div className="bg-card rounded-2xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                        <div
                            className="w-7 h-7 bg-gradient-to-br from-[#FF5A5F] to-[#FF5A5F]
                            rounded-md items-center flex justify-center"
                        >
                            <TrendingUp className="w-4 h-4 text-white" />
                        </div>
                        <p className="text-xl font-medium">Hot Topics</p>
                    </div>
                    <button className="flex items-center space-x-2 text-gray-500 hover:text-gray-700 transition-colors">
                        <Filter className="w-4 h-4" />
                        <span>ตัวกรอง</span>
                    </button>
                </div>

                <div className="md:max-h-[235px] max-h-[505px] overflow-y-auto space-y-5">
                    <TrendCard />
                </div>
            </div>
    )
}

export default TrendSection