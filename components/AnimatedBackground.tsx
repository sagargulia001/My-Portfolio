"use client"

import { useEffect, useRef } from "react"

export default function AnimatedBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext("2d")
        if (!ctx) return

        let animationId: number

        function resize() {
            if (!canvas) return
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }
        resize()
        window.addEventListener("resize", resize)

        // Two independent groups
        const groups = [
            // Group 1
            [
                { x: 200, y: 150, vx: 1.2, vy: 0.1 },
                { x: 600, y: 300, vx: -0.5, vy: 1.7 },
                { x: 900, y: 500, vx: 0.8, vy: -1.9 },
                { x: 400, y: 600, vx: -1.5, vy: -0.2 },
                { x: 1100, y: 200, vx: -0.1, vy: 1.1 },
            ],
            // Group 2
            [
                { x: 100, y: 400, vx: 0.9, vy: -1.3 },
                { x: 750, y: 150, vx: -1.1, vy: 0.8 },
                { x: 1000, y: 350, vx: 1.4, vy: 1.2 },
                { x: 300, y: 500, vx: -0.7, vy: -1.6 },
                { x: 850, y: 650, vx: 1.3, vy: -0.4 },
            ],
        ]

        const TRAIL = 60

        // Separate trails per group
        const groupTrails = groups.map(balls =>
            balls.map(b =>
                Array.from({ length: TRAIL }, () => ({ x: b.x, y: b.y }))
            )
        )

        function updateGroup(balls: typeof groups[0], trails: typeof groupTrails[0]) {
            const w = canvas!.width
            const h = canvas!.height
            balls.forEach((b, i) => {
                b.x += b.vx
                b.y += b.vy
                if (b.x <= -150) { b.x = -150; b.vx *= -1 }
                if (b.x >= w + 150) { b.x = w + 150; b.vx *= -1 }
                if (b.y <= -150) { b.y = -150; b.vy *= -1 }
                if (b.y >= h + 150) { b.y = h + 150; b.vy *= -1 }

                trails[i].unshift({ x: b.x, y: b.y })
                trails[i].pop()
            })
        }

        function drawRibbons(balls: typeof groups[0], trails: typeof groupTrails[0]) {
            // Connect adjacent balls
            for (let bi = 0; bi < balls.length - 1; bi++) {
                const trailA = trails[bi]
                const trailB = trails[bi + 1]

                for (let t = 0; t < TRAIL - 1; t++) {
                    const alpha = (1 - t / TRAIL) * 0.12
                    const a1 = trailA[t], a2 = trailA[t + 1]
                    const b1 = trailB[t], b2 = trailB[t + 1]
                    ctx!.beginPath()
                    ctx!.moveTo(a1.x, a1.y)
                    ctx!.lineTo(b1.x, b1.y)
                    ctx!.lineTo(b2.x, b2.y)
                    ctx!.lineTo(a2.x, a2.y)
                    ctx!.closePath()
                    ctx!.fillStyle = `rgba(64, 255, 70, ${alpha})`
                    ctx!.fill()
                }

                ctx!.beginPath()
                ctx!.moveTo(balls[bi].x, balls[bi].y)
                ctx!.lineTo(balls[bi + 1].x, balls[bi + 1].y)
                ctx!.strokeStyle = `rgba(64, 255, 70, 0.25)`
                ctx!.lineWidth = 0.8
                ctx!.stroke()
            }

            // Close the loop — last back to first
            const trailA = trails[balls.length - 1]
            const trailB = trails[0]
            for (let t = 0; t < TRAIL - 1; t++) {
                const alpha = (1 - t / TRAIL) * 0.08
                const a1 = trailA[t], a2 = trailA[t + 1]
                const b1 = trailB[t], b2 = trailB[t + 1]
                ctx!.beginPath()
                ctx!.moveTo(a1.x, a1.y)
                ctx!.lineTo(b1.x, b1.y)
                ctx!.lineTo(b2.x, b2.y)
                ctx!.lineTo(a2.x, a2.y)
                ctx!.closePath()
                ctx!.fillStyle = `rgba(64, 255, 70, ${alpha})`
                ctx!.fill()
            }

            ctx!.beginPath()
            ctx!.moveTo(balls[balls.length - 1].x, balls[balls.length - 1].y)
            ctx!.lineTo(balls[0].x, balls[0].y)
            ctx!.strokeStyle = `rgba(64, 255, 70, 0.2)`
            ctx!.lineWidth = 0.8
            ctx!.stroke()
        }

        function render() {
            if (!canvas || !ctx) return

            ctx.globalCompositeOperation = "source-over"
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            ctx.globalCompositeOperation = "lighter"

            groups.forEach((balls, gi) => {
                updateGroup(balls, groupTrails[gi])
                drawRibbons(balls, groupTrails[gi])
            })

            animationId = requestAnimationFrame(render)
        }

        render()

        return () => {
            cancelAnimationFrame(animationId)
            window.removeEventListener("resize", resize)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 -z-10 pointer-events-none"
            style={{ width: "100vw", height: "100vh" }}
        />
    )
}