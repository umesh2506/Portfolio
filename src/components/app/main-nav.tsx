'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from '@/components/ui/sidebar';
import { Home, FileText, LayoutGrid, Mail, Briefcase } from 'lucide-react';

const menuItems = [
  { path: '/', label: 'Home', icon: Home },
  { path: '/resume', label: 'Resume', icon: FileText },
  { path: '/projects', label: 'Projects', icon: LayoutGrid },
  { path: '/contact', label: 'Contact', icon: Mail },
];

export function MainNav() {
  const pathname = usePathname();

  return (
    <>
      <SidebarHeader>
        <Link href="/" className="flex items-center gap-2.5">
            <Briefcase className="w-7 h-7 text-accent" />
            <h2 className="text-xl font-semibold tracking-tighter text-sidebar-foreground">
                Profolio
            </h2>
        </Link>
      </SidebarHeader>
      <SidebarMenu className="flex-1">
        {menuItems.map((item) => (
          <SidebarMenuItem key={item.path}>
            <Link href={item.path} passHref>
              <SidebarMenuButton
                isActive={pathname === item.path}
                tooltip={item.label}
              >
                <item.icon />
                <span>{item.label}</span>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </>
  );
}
