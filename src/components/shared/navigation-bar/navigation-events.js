'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { navbarBg } from '@/helper/scroll';

export const NavigationEvents = () => {
    const pathname = usePathname()
    const searchParams = useSearchParams()

    useEffect(() => {
        navbarBg();
    }, [pathname, searchParams]);

    return null;
};