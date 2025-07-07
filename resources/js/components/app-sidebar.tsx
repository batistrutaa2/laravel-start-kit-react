import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import AppLogo from './app-logo';

import {
  LayoutDashboard,
  Building2,
  Users,
  CalendarCheck2,
  FileText,
  UserCircle2,
  CreditCard,
  UserCog,
  Package,
  MonitorSmartphone,
  BarChart3
} from 'lucide-react';

const mainNavItems: NavItem[] = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: LayoutDashboard,
  },
  {
    title: 'Empresas',
    href: '/empresas',
    icon: Building2,
  },
  {
    title: 'Clientes',
    href: '/clientes',
    icon: Users,
  },
  {
    title: 'Evento',
    href: '/eventos',
    icon: CalendarCheck2,
  },
  {
    title: 'Reembolso',
    href: '/reembolsos',
    icon: FileText,
  },
  {
    title: 'Consumidor',
    href: '/consumidores',
    icon: UserCircle2,
  },
  {
    title: 'Cartões',
    href: '/cartoes',
    icon: CreditCard,
  },
  {
    title: 'Usuários',
    href: '/usuarios',
    icon: UserCog,
  },
  {
    title: 'Produtos',
    href: '/produtos',
    icon: Package,
  },
  {
    title: 'Terminais',
    href: '/terminais',
    icon: MonitorSmartphone,
  },
  {
    title: 'Relatórios',
    href: '/relatorios',
    icon: BarChart3,
  },
];


const footerNavItems: NavItem[] = [
    {
        title: 'Algo para logs..',
        href: 'https://github.com/laravel/react-starter-kit',
        icon: BarChart3,
    },
    {
        title: 'documentação da api..',
        href: 'https://laravel.com/docs/starter-kits#react',
        icon: BarChart3,
    },
];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/dashboard" prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
