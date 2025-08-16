import { Bar, BarChart as RBarChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid, Legend } from 'recharts'

export default function BarChart({ data, xKey, bars }) {
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <RBarChart data={data} margin={{ top: 8, right: 16, left: 0, bottom: 8 }}>
          <CartesianGrid strokeDasharray="3 3" className="text-slate-200 dark:text-slate-800" />
          <XAxis dataKey={xKey} tick={{ fill: 'currentColor' }} stroke="currentColor" className="text-slate-400" />
          <YAxis tick={{ fill: 'currentColor' }} stroke="currentColor" className="text-slate-400" />
          <Tooltip />
          <Legend />
          {bars.map((b) => (
            <Bar key={b.dataKey} dataKey={b.dataKey} fill={b.color} radius={[4, 4, 0, 0]} />
          ))}
        </RBarChart>
      </ResponsiveContainer>
    </div>
  )
}


