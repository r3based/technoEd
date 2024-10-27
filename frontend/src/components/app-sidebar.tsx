import { Home, Inbox, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';

// Menu items.
const items = [
    {
        title: 'Корпоративные нормы',
        url: '/',
        icon: Home,
    },
    {
        title: 'Soft skills',
        url: '/soft-skills',
        icon: Inbox,
    },
    {
        title: 'Аккаунт',
        url: '#',
        icon: Settings,
    },
    {
        title: 'Админ панель',
        url: '/admin-panel',
        icon: Settings,
    },
];

export function AppSidebar() {
    return (
        <Sidebar variant="sidebar">
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Меню</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <Link to={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
}
