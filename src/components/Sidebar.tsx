import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import Link from "next/link";

import {
  Calendar,
  Home,
  Inbox,
  Search,
  Settings,
  ChevronDown,
  Plus,
  Projector,
  Layers2,
  ThumbsUp,
  Telescope,
  CalendarFold
} from "lucide-react";


const navItems = [
  { title: "หน้าแรก", icon: Home, url: "/" },
  { title: "My Feed", icon: Layers2, url: "/feed" },
  { title: "Pantip Pick", icon: ThumbsUp, url: "/pick" },
  { title: "Pantip Hitz", icon: Inbox, url: "/hitz" },
  { title: "Explore", icon: Telescope, url: "/explore" },
];

const actionItems = [
  { title: "แลกพอยต์", icon: Inbox, url: "/points" },
  { title: "กิจกรรมพันทิป", icon: CalendarFold, url: "/events" },
];


export function AppSidebar() {
  return (
    <aside className="w-58 border-r h-full flex flex-col justify-between text-sm shadow-sm">

      {/* Navigation */}
      <nav className="py-2 px-4 space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.title}
            href={item.url}
            className="flex items-center gap-5 px-3 py-2 rounded-md hover:bg-gray-100 transition"
          >
            <item.icon className="w-5 h-5 text-gray-500" />
            <span>{item.title}</span>
          </Link>
        ))}

        <hr className="my-3" />

        {actionItems.map((item) => (
          <Link
            key={item.title}
            href={item.url}
            className="flex items-center gap-5 px-3 py-2 rounded-md hover:bg-gray-100 transition"
          >
            <item.icon className="w-5 h-5 text-gray-500" />
            <span>{item.title}</span>
          </Link>
        ))}
      </nav>


      {/* Misc bottom links */}
      <div className="px-4 py-3 text-xs text-gray-500 space-y-1 leading-tight">
        <div className="pt-2 text-[10px] text-gray-400">© 2025 Pantip Clone</div>
      </div>
    </aside>
  );
}