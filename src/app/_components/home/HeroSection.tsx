import Image from "next/image"
import { ChevronRight } from 'lucide-react';

const HeroSection = () => {
    return (
        <div>
            <div className="w-full h-[187px] relative">
                <Image
                    src="/constant/pantip.png"
                    alt="header"
                    fill
                    className="object-cover"
                />
            </div>
            <div className="border-1 w-full h-[40px]">
                <div className="p-2 px-18 flex items-center">
                    <ChevronRight className="!w-5 !h-5" />
                    <p className="text-sm font-semibold text-gray-500">หน้าแรกพันทิป</p>
                </div>
            </div>
        </div>
    )
}

export default HeroSection