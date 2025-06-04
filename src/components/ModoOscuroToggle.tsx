"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Sun, Moon } from "lucide-react"

export default function ModoOscuroToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [systemTheme, setSystemTheme] = useState<"light" | "dark" | undefined>(undefined)

  useEffect(() => {
    setMounted(true)

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    const handleChange = () => {
      setSystemTheme(mediaQuery.matches ? "dark" : "light")
    }

    handleChange()
    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  if (!mounted || (theme === "system" && systemTheme === undefined)) return null

  const currentTheme = theme === "system" ? systemTheme : resolvedTheme
  const isDark = currentTheme === "dark"

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark")
  }

  return (
    <button
      onClick={toggleTheme}
      className={`fixed bottom-4 right-4 z-50 flex items-center gap-2 px-4 py-2 rounded-full text-sm shadow-md transition-colors
        ${isDark ? "bg-black text-white" : "bg-white text-black"}`}
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
      {isDark ? "Claro" : "Oscuro"}
    </button>
  )
}
