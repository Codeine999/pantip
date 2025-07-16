


import { BookOpen } from 'lucide-react';

const rooms = [
    {
        id: "1",
        title: "ห้องสมุด",
        icon: BookOpen,
        link: "https://google.com"
    },
    {
        id: "2",
        title: "สยามสแควร์",
        icon: BookOpen,
        link: "https://google.com"
    },
    {
        id: "3",
        title: "ก้นครัว",
        icon: BookOpen,
        link: "https://google.com"
    },
    {
        id: "4",
        title: "กรุงโซล",
        icon: BookOpen,
        link: "https://google.com"
    },
    {
        id: "5",
        title: "การ์ตูน",
        icon: BookOpen,
        link: "https://google.com"
    },
    {
        id: "6",
        title: "แกลเลอรี่",
        icon: BookOpen,
        link: "https://google.com"
    },
    {
        id: "7",
        title: "เฉลิมกรุง",
        icon: BookOpen,
        link: "https://google.com"
    },
    {
        id: "8",
        title: "ชานเรือน",
        icon: BookOpen,
        link: "https://google.com"
    },
    {
        id: "9",
        title: "ซิลิคอวัลเลย์",
        icon: BookOpen,
        link: "https://google.com"
    },
    {
        id: "10",
        title: "เครื่องแป้ง",
        icon: BookOpen,
        link: "https://google.com"
    },
    {
        id: "11",
        title: "บลูแพลน",
        icon: BookOpen,
        link: "https://google.com"
    },
    {
        id: "12",
        title: "พรหมชาติ",
        icon: BookOpen,
        link: "https://google.com"
    },
    {
        id: "13",
        title: "มาบุญครอง",
        icon: BookOpen,
        link: "https://google.com"
    },
    {
        id: "14",
        title: "พันทิปแคมป์",
        icon: BookOpen,
        link: "https://google.com"
    },
    {
        id: "15",
        title: "โรงเรียน",
        icon: BookOpen,
        link: "https://google.com"
    },
    {
        id: "16",
        title: "ไอทีคาเฟ่",
        icon: BookOpen,
        link: "https://google.com"
    },
    {
        id: "17",
        title: "หอศิลป์",
        icon: BookOpen,
        link: "https://google.com"
    },
    {
        id: "18",
        title: "นิยาย",
        icon: BookOpen,
        link: "https://google.com"
    },
    {
        id: "19",
        title: "หนังสือ",
        icon: BookOpen,
        link: "https://google.com"
    },
    {
        id: "20",
        title: "คนรักสัตว์",
        icon: BookOpen,
        link: "https://google.com"
    },
    {
        id: "21",
        title: "คนแปลก",
        icon: BookOpen,
        link: "https://google.com"
    },
    {
        id: "22",
        title: "ศาลาประชา",
        icon: BookOpen,
        link: "https://google.com"
    },
    {
        id: "23",
        title: "แว่นตา",
        icon: BookOpen,
        link: "https://google.com"
    },
    {
        id: "24",
        title: "บ้านไม้",
        icon: BookOpen,
        link: "https://google.com"
    }
]


const RoomSection = () => {
    return (
        <div className="flex justify-center">
            <div className="w-full h-[240px]  rounded-md">
                <div className="w-full h-11 border-1  p-2 px-4 bg-gray-50">
                    <p className="text-md">Select rooms</p>
                </div>

                <div className="grid grid-cols-12">

                    {rooms.map((item) => (
                        <div
                            key={item.id}
                            className="px-3 py-5.5 border-1 hover:bg-accent cursor-pointer"
                        >
                            <div className="flex flex-col items-center">
                                <div>
                                    <item.icon className="w-6 h-6 " />

                                </div>
                                <p className="mt-3 text-sm whitespace-nowrap">{item.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default RoomSection