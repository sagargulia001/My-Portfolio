'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

export default function GitHubSnake() {
    const { resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <div className="w-full overflow-hidden">
            {resolvedTheme === 'dark' ? (
                <img
                    src="/github-contribution-snake/github-contribution-grid-snake-dark.svg"
                    alt="github contribution snake"
                    className="w-full"
                />
            ) : (
                <img
                    src="/github-contribution-snake/github-contribution-grid-snake.svg"
                    alt="github contribution snake"
                    className="w-full"
                />
            )}
        </div>
    )
}