
import Flame from '@/assect/icon/flame.svg'
import Image from 'next/image'

const trend = [
    {
        id: "1",
        title: "สร้างรายได้เป็นค่าขนมแบบชิลล์ๆ ได้แล้ว เพียงเชื่อมต่อบัญชีพันทิปกับ Google AdSense",
        icon: "X",
        link: "https://google.com"
    },
    {
        id: "2",
        title: "🎧 Kratoo Podcast 🎧 EP22 : ชีวิตจริงในคุก 10 ปี / ทำผิดกับภรรยาแต่ไม่อยากหย่า",
        icon: "X",
        link: "https://google.com"
    },
    {
        id: "3",
        title: "LG Beauty เครือดังจากเกาหลี ชวนร่วมกิจกรรมแชร์สภาพปัญหาผิวหน้า ลุ้นรับผลิตภัณฑ์ไปใช้ 40 รางวัล ฟรี",
        icon: "X",
        link: "https://google.com"
    },
]
const TrendSection = () => {
    return (
        <div className="flex justify-center">
            <div className="w-full h-[180px] border-1 rounded-sm shadow-sm">
                <div className="w-full h-11 border-b-1 p-2 px-4 bg-gray-50">
                    <div className='flex gap-3 items-center'>
                        <Image
                            src={Flame}
                            width={17}
                            height={17}
                            alt="fire"
                        />
                        <p className='text-lg'>
                            Hot
                        </p>
                    </div>
                </div>
                {trend.map((item) => (
                    <div key={item.id} className="px-4 border-b-1 last:border-b-0 py-2.5">
                        <div className="flex gap-4">
                            <span>{item.icon}</span>
                            <p>{item.title}</p>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default TrendSection