
import "swiper/css";
import "swiper/css/pagination";


import { BookOpen, TrendingUp, DoorOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';


const rooms = [
  { id: "1", title: "ห้องสมุด", icon: "📚", link: "https://google.com" },
  { id: "2", title: "สยามสแควร์", icon: "🏙️", link: "https://google.com" },
  { id: "3", title: "ก้นครัว", icon: "🍳", link: "https://google.com" },
  { id: "4", title: "กรุงโซล", icon: "🗼", link: "https://google.com" },
  { id: "5", title: "การ์ตูน", icon: "🎨", link: "https://google.com" },
  { id: "6", title: "แกลเลอรี่", icon: "🖼️", link: "https://google.com" },
  { id: "7", title: "เฉลิมกรุง", icon: "🎭", link: "https://google.com" },
  { id: "8", title: "ชานเรือน", icon: "🏡", link: "https://google.com" },
  { id: "9", title: "ซิลิคอวัลเลย์", icon: "💻", link: "https://google.com" },
  { id: "10", title: "เครื่องแป้ง", icon: "💄", link: "https://google.com" },
  { id: "11", title: "บลูแพลน", icon: "📊", link: "https://google.com" },
  { id: "12", title: "พรหมชาติ", icon: "🔮", link: "https://google.com" },
  { id: "13", title: "มาบุญครอง", icon: "🛍️", link: "https://google.com" },
  { id: "14", title: "พันทิปแคมป์", icon: "🏕️", link: "https://google.com" },
  { id: "15", title: "โรงเรียน", icon: "🏫", link: "https://google.com" },
  { id: "16", title: "ไอทีคาเฟ่", icon: "☕️", link: "https://google.com" },
  { id: "17", title: "หอศิลป์", icon: "🖌️", link: "https://google.com" },
  { id: "18", title: "นิยาย", icon: "📖", link: "https://google.com" },
  { id: "19", title: "หนังสือ", icon: "📚", link: "https://google.com" },
  { id: "20", title: "คนรักสัตว์", icon: "🐾", link: "https://google.com" },
  { id: "21", title: "คนแปลก", icon: "🕵️‍♂️", link: "https://google.com" },
  { id: "22", title: "ศาลาประชา", icon: "🏛️", link: "https://google.com" },
  { id: "23", title: "แว่นตา", icon: "👓", link: "https://google.com" },
  { id: "24", title: "บ้านไม้", icon: "🏠", link: "https://google.com" }
];

const RoomSection = () => {
    return (
        <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                    <div
                        className="w-7 h-7 bg-gradient-to-br from-[#FF5A5F] to-[#FF5A5F]
                            rounded-md items-center flex justify-center"
                    >
                        <DoorOpen className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-xl font-medium text-gray-900">Select Rooms</p>
                </div>
            </div>

            <div className="grid lg:grid-cols-8 md:grid-cols-5 grid-cols-3 gap-4">

                {rooms.slice(0, 16).map((item) => (
                    <Button
                        key={item.id}
                        variant="ghost"
                        className="w-[100px] h-[90px] border-1 rounded-2xl duration-350 hover:scale-108"
                    >
                        <div className='mt-2 flex justify-center'>
                            <div className="flex flex-col items-center">

                                <span className="text-2xl">{item.icon}</span>

                                <p className="mt-2 text-xs  text-black whitespace-nowrap">
                                    {item.title}
                                </p>
                            </div>
                        </div>
                    </Button>
                ))}
            </div>

            <div className="flex justify-center">
                <p className="text-red-500 text-3xl"> . . . .</p>
            </div>
        </div>

    )
}

export default RoomSection