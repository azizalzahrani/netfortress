"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"

const data = [
  { name: "00:00", threats: 4, traffic: 20, anomalies: 2 },
  { name: "03:00", threats: 3, traffic: 25, anomalies: 1 },
  { name: "06:00", threats: 2, traffic: 30, anomalies: 3 },
  { name: "09:00", threats: 6, traffic: 40, anomalies: 4 },
  { name: "12:00", threats: 8, traffic: 45, anomalies: 5 },
  { name: "15:00", threats: 5, traffic: 35, anomalies: 3 },
  { name: "18:00", threats: 7, traffic: 30, anomalies: 2 },
  { name: "21:00", threats: 4, traffic: 25, anomalies: 1 },
]

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="threats" stroke="#ef4444" strokeWidth={2} activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="traffic" stroke="#3b82f6" strokeWidth={2} />
        <Line type="monotone" dataKey="anomalies" stroke="#eab308" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  )
}

