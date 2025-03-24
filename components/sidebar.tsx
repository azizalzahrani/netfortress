"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { BarChart3, Shield, Network, AlertTriangle, Settings, Users, History, ShieldCheck, Zap } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

export function Sidebar({ className, open = true, onOpenChange }: SidebarProps) {
  const [expanded, setExpanded] = useState<string | null>(null)

  const toggleExpanded = (key: string) => {
    setExpanded(expanded === key ? null : key)
  }

  const items = [
    {
      title: "Dashboard",
      icon: BarChart3,
      href: "/",
      variant: "default" as const,
    },
    {
      title: "Threat Detection",
      icon: AlertTriangle,
      href: "/threats",
      variant: "ghost" as const,
      submenu: [
        { title: "Active Threats", href: "/threats/active" },
        { title: "Threat History", href: "/threats/history" },
        { title: "Predictive Analysis", href: "/threats/predictive" },
      ],
    },
    {
      title: "Network",
      icon: Network,
      href: "/network",
      variant: "ghost" as const,
      submenu: [
        { title: "Devices", href: "/network/devices" },
        { title: "Traffic Analysis", href: "/network/traffic" },
        { title: "Vulnerabilities", href: "/network/vulnerabilities" },
      ],
    },
    {
      title: "Protection",
      icon: Shield,
      href: "/protection",
      variant: "ghost" as const,
      submenu: [
        { title: "Firewall", href: "/protection/firewall" },
        { title: "Intrusion Prevention", href: "/protection/intrusion" },
        { title: "Quarantine", href: "/protection/quarantine" },
      ],
    },
    {
      title: "Reports",
      icon: History,
      href: "/reports",
      variant: "ghost" as const,
    },
    {
      title: "Users",
      icon: Users,
      href: "/users",
      variant: "ghost" as const,
    },
    {
      title: "Settings",
      icon: Settings,
      href: "/settings",
      variant: "ghost" as const,
    },
  ]

  return (
    <div
      className={cn(
        "flex flex-col border-r bg-background transition-all duration-300",
        open ? "w-64" : "w-0 md:w-16",
        className,
      )}
    >
      <div className={cn("flex h-16 items-center border-b px-4", !open && "justify-center")}>
        <Link href="/" className="flex items-center gap-2">
          <ShieldCheck className="h-6 w-6 text-primary" />
          {open && <span className="text-xl font-bold">Net Fortress</span>}
        </Link>
        {open && (
          <Button variant="ghost" size="icon" className="ml-auto" onClick={() => onOpenChange?.(false)}>
            <Zap className="h-4 w-4" />
            <span className="sr-only">Toggle sidebar</span>
          </Button>
        )}
      </div>
      <ScrollArea className="flex-1">
        <nav className="grid gap-1 px-2 py-4">
          {items.map((item, index) => (
            <div key={index} className="space-y-1">
              <Button
                variant={item.variant}
                size={open ? "default" : "icon"}
                className={cn("w-full justify-start", !open && "justify-center px-0")}
                onClick={() => item.submenu && toggleExpanded(item.title)}
                asChild={!item.submenu}
              >
                {!item.submenu ? (
                  <Link href={item.href}>
                    <item.icon className={cn("h-5 w-5", open && "mr-2")} />
                    {open && <span>{item.title}</span>}
                  </Link>
                ) : (
                  <div>
                    <item.icon className={cn("h-5 w-5", open && "mr-2")} />
                    {open && (
                      <>
                        <span className="flex-1">{item.title}</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className={cn("h-4 w-4 transition-transform", expanded === item.title && "rotate-180")}
                        >
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </>
                    )}
                  </div>
                )}
              </Button>
              {item.submenu && expanded === item.title && open && (
                <div className="ml-4 grid gap-1">
                  {item.submenu.map((subitem, subindex) => (
                    <Button key={subindex} variant="ghost" size="sm" className="w-full justify-start" asChild>
                      <Link href={subitem.href}>{subitem.title}</Link>
                    </Button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </ScrollArea>
      <div className="mt-auto border-t p-4">
        <div className={cn("flex items-center gap-2", !open && "justify-center")}>
          <div className="rounded-full bg-primary/10 p-1">
            <ShieldCheck className="h-5 w-5 text-primary" />
          </div>
          {open && (
            <div className="space-y-1">
              <p className="text-xs font-medium leading-none">Protection Status</p>
              <p className="text-xs text-muted-foreground">Active & Monitoring</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

