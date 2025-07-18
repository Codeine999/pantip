"use client"

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
  useSidebar
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
  const { open } = useSidebar()
  return (
    <Sidebar collapsible="icon" className="transition-width duration-300 ease-in-out">
      <SidebarContent className={` ${open ? 'p-4' : ''}`}>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="mt-14">
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title} className="py-1">
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="flex gap-4">
                      <item.icon

                        className={` ${open ? '!w-5 !h-5' : '!w-4 !h-4'}`}
                      />
                      <p className="text-gray-900 font-noto-thai font-medium">{item.title}</p>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>

            <hr className="my-3" />

            <SidebarMenu className="mt-4">
              {actionItems.map((item) => (
                <SidebarMenuItem key={item.title} className="py-1">
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="flex gap-4">
                      <item.icon
                        className={` ${open ? '!w-5 !h-5' : '!w-4 !h-4'}`}
                      />
                      <p className="text-gray-900 font-noto-thai font-medium">{item.title}</p>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>

          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <p className="text-gray-900 p-4 text-xs opacity-30">Pantip + airbnb clone</p>
    </Sidebar>
  );
}