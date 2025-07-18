import Image from "next/image"
import { ChevronRight } from 'lucide-react';

const HeroSection = () => {
    return (
        <div className="p-6">
            <div className="w-full xl:h-[220px] h-[200px] relative  rounded-2xl overflow-hidden">
                <Image
                    src="/constant/pantip.png"
                    alt="header"
                    fill
                    className="object-cover"
                />
            </div>
            <div className="md:p-4 md:px-6 pt-4 w-full flex">
                <ChevronRight className="!w-5 !h-5" />
                <p className="text-sm font-noto-thai font-medium">หน้าแรกพันทิป</p>
            </div>

        </div>
    )
}


export default HeroSection