"use client"

import { useEffect, useState, useRef } from "react"
import dynamic from "next/dynamic"

// Dynamically import ForceGraph with no SSR
const ForceGraph2D = dynamic(() => import("react-force-graph").then((mod) => mod.ForceGraph2D), { ssr: false })

const networkData = {
  nodes: [
    { id: "router", name: "Main Router", group: 1, size: 15 },
    { id: "firewall", name: "Firewall", group: 1, size: 12 },
    { id: "switch1", name: "Switch 1", group: 2, size: 10 },
    { id: "switch2", name: "Switch 2", group: 2, size: 10 },
    { id: "server1", name: "File Server", group: 3, size: 8 },
    { id: "server2", name: "Web Server", group: 3, size: 8 },
    { id: "server3", name: "Database Server", group: 3, size: 8 },
    { id: "pc1", name: "Workstation 1", group: 4, size: 5 },
    { id: "pc2", name: "Workstation 2", group: 4, size: 5 },
    { id: "pc3", name: "Workstation 3", group: 4, size: 5 },
    { id: "pc4", name: "Workstation 4", group: 4, size: 5 },
    { id: "pc5", name: "Workstation 5", group: 4, size: 5 },
    { id: "laptop1", name: "Laptop 1", group: 5, size: 4 },
    { id: "laptop2", name: "Laptop 2", group: 5, size: 4 },
    { id: "mobile1", name: "Mobile Device 1", group: 6, size: 3 },
    { id: "mobile2", name: "Mobile Device 2", group: 6, size: 3 },
    { id: "iot1", name: "IoT Device 1", group: 7, size: 2 },
    { id: "iot2", name: "IoT Device 2", group: 7, size: 2 },
    { id: "printer", name: "Network Printer", group: 8, size: 4 },
  ],
  links: [
    { source: "router", target: "firewall", value: 10 },
    { source: "firewall", target: "switch1", value: 8 },
    { source: "firewall", target: "switch2", value: 8 },
    { source: "switch1", target: "server1", value: 5 },
    { source: "switch1", target: "server2", value: 5 },
    { source: "switch1", target: "server3", value: 5 },
    { source: "switch1", target: "pc1", value: 3 },
    { source: "switch1", target: "pc2", value: 3 },
    { source: "switch1", target: "pc3", value: 3 },
    { source: "switch2", target: "pc4", value: 3 },
    { source: "switch2", target: "pc5", value: 3 },
    { source: "switch2", target: "laptop1", value: 2 },
    { source: "switch2", target: "laptop2", value: 2 },
    { source: "switch2", target: "mobile1", value: 1 },
    { source: "switch2", target: "mobile2", value: 1 },
    { source: "switch2", target: "iot1", value: 1 },
    { source: "switch2", target: "iot2", value: 1 },
    { source: "switch2", target: "printer", value: 2 },
  ],
}

export function NetworkMap() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [dimensions, setDimensions] = useState({ width: 800, height: 500 })
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)

    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight,
        })
      }
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)
    return () => window.removeEventListener("resize", updateDimensions)
  }, [])

  const getNodeColor = (node: any) => {
    const colors = ["#3b82f6", "#ef4444", "#10b981", "#f59e0b", "#8b5cf6", "#ec4899", "#6b7280", "#f97316"]
    return colors[(node.group - 1) % colors.length]
  }

  if (!isClient) {
    return (
      <div ref={containerRef} className="h-full w-full flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p>Loading network map...</p>
        </div>
      </div>
    )
  }

  return (
    <div ref={containerRef} className="h-full w-full">
      <ForceGraph2D
        graphData={networkData}
        nodeLabel="name"
        nodeColor={getNodeColor}
        nodeRelSize={1}
        width={dimensions.width}
        height={dimensions.height}
        linkWidth={(link) => Math.sqrt(link.value as number)}
        linkDirectionalParticles={2}
        linkDirectionalParticleSpeed={0.005}
        cooldownTicks={100}
        onNodeClick={(node) => {
          console.log("Clicked node:", node)
        }}
      />
    </div>
  )
}

