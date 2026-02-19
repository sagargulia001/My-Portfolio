"use client"

import { ThemeToggle } from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'
import { Github } from 'lucide-react'
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import { cn } from "@/lib/utils"
import HeaderSkeleton from './skeleton/header'
import Image from 'next/image'
import Link from 'next/link'

interface HeaderProps {
    activeTab?: string
}

export default function Header({ activeTab }: HeaderProps) {
    const { resolvedTheme } = useTheme()
    const [isMounted, setIsMounted] = useState(false)
    const [showImage, setShowImage] = useState(true)

    useEffect(() => {
        setIsMounted(true)

        const handleScroll = () => {
            const isMobileView = window.innerWidth <= 640
            const scrolledEnough = window.scrollY >= 120
            const isProfileTab = !activeTab || activeTab === 'profile'

            if (!isMobileView) {
                // Desktop: always show
                setShowImage(true)
            } else if (!isProfileTab) {
                // Mobile + not profile tab: always show
                setShowImage(true)
            } else {
                // Mobile + profile tab: only show when scrolled enough
                setShowImage(scrolledEnough)
            }
        }

        handleScroll()
        window.addEventListener('scroll', handleScroll)
        window.addEventListener('resize', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('resize', handleScroll)
        }
    }, [activeTab])

    if (!isMounted) return <HeaderSkeleton />

    return (
        <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
            <div className="container mx-auto px-4 py-4 lg:px-20 xl:px-32">
                <div className="flex items-center justify-between gap-1">
                    <div className="flex items-center space-x-4">
                        {showImage && (
                            <div
                                className={cn(
                                    "size-10 sm:size-13 rounded-lg bg-linear-to-br flex items-center justify-center relative outline outline-offset-[3px] outline-border",
                                    resolvedTheme === "dark"
                                        ? "from-zinc-600 to-zinc-900"
                                        : "from-zinc-50 to-zinc-200"
                                )}
                            >
                                <Image
                                    src="/avatar-p.png"
                                    alt="Profile photo"
                                    height={40}
                                    width={40}
                                    className="absolute h-full w-full top-0 left-0 rounded-xl object-cover saturate-100"
                                    aria-label="Profile photo of Sagar Gulia"
                                    quality={100}
                                />
                            </div>
                        )}
                        <div className='hidden sm:block'>
                            <h1 className="text-base sm:text-xl font-medium flex items-center gap-2">
                                Sagar Gulia
                                <div className="size-1.5 sm:size-2.5 animate-pulse relative after:content-[''] after:absolute flex items-center justify-center after:h-full after:w-full after:bg-green-400 after:rounded-full after:animate-ping rounded-full bg-primary"></div>
                            </h1>
                            <p className="text-muted-foreground text-[11px] sm:text-sm">
                                Software Engineer
                            </p>
                        </div>
                        {/* Mobile: always show name/title except on profile before scroll */}
                        {(showImage || (activeTab && activeTab !== 'profile')) && (
                            <div className='block sm:hidden'>
                                <h1 className="text-sm font-medium flex items-center gap-2">
                                    Sagar Gulia
                                    <div className="size-1.5 animate-pulse relative after:content-[''] after:absolute flex items-center justify-center after:h-full after:w-full after:bg-green-400 after:rounded-full after:animate-ping rounded-full bg-primary"></div>
                                </h1>
                                <p className="text-muted-foreground text-[10px]">
                                    Software Engineer
                                </p>
                            </div>
                        )}
                    </div>
                    <div className="flex items-center space-x-2">
                        <ThemeToggle />
                        <Link href="https://github.com/sagargulia001" aria-label="View GitHub Profile" target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" size="sm">
                                <Github className="w-4 h-4 sm:mr-1" />
                                <span className="hidden sm:inline">View GitHub</span>
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}