"use client"

import { RoughNotation } from "react-rough-notation"
import { useTheme } from "next-themes"
import { useInView } from "react-intersection-observer"
import { useEffect, useState, ElementType, ReactNode } from "react"

type SubrayadoType =
  | "underline"
  | "highlight"
  | "box"
  | "circle"
  | "strike-through"
  | "crossed-off"
  | "bracket"

type BracketValue =
  | "left"
  | "right"
  | "top"
  | "bottom"
  | ["left", "right"]
  | ["top", "bottom"]

type Props = {
  children: ReactNode
  as?: ElementType
  type?: SubrayadoType
  colorLight?: string
  colorDark?: string
  animate?: boolean
  padding?: number
  multiline?: boolean
  strokeWidth?: number
  animationDelay?: number
  animationDuration?: number
  brackets?: BracketValue
  className?: string
  lazy?: boolean
}

export default function Subrayado({
  children,
  as: Component = "span",
  type = "underline",
  colorLight = "#f472b6",   // rosa pastel
  colorDark = "#facc15",    // amarillo claro
  animate = true,
  padding = 2,
  multiline = false,
  strokeWidth = 2,
  animationDelay = 0,
  animationDuration = 800,
  brackets,
  className = "",
  lazy = true,
}: Props) {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const resolvedTheme = mounted ? theme : "light"
  const color = resolvedTheme === "dark" ? colorDark : colorLight

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const show = lazy ? animate && inView : animate

  const propsFinales = {
    type,
    show,
    color,
    padding,
    multiline,
    strokeWidth,
    animationDelay,
    animationDuration,
    ...(type === "bracket" && brackets && { brackets }),
  }

  return (
    <Component className={className} ref={ref}>
      {mounted ? (
        <RoughNotation {...propsFinales}>
          {children}
        </RoughNotation>
      ) : (
        children
      )}
    </Component>
  )
}
