import { Line, LineChart as RLineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid, Legend } from 'recharts'

export default function LineChart({ data, xKey, lines }) {
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <RLineChart data={data} margin={{ top: 8, right: 16, left: 0, bottom: 8 }}>
          <CartesianGrid strokeDasharray="3 3" className="text-slate-200 dark:text-slate-800" />
          <XAxis dataKey={xKey} tick={{ fill: 'currentColor' }} stroke="currentColor" className="text-slate-400" />
          <YAxis tick={{ fill: 'currentColor' }} stroke="currentColor" className="text-slate-400" />
          <Tooltip />
          <Legend />
          {lines.map((l) => (
            <Line key={l.dataKey} type="monotone" dataKey={l.dataKey} stroke={l.color} strokeWidth={2} dot={false} />
          ))}
        </RLineChart>
      </ResponsiveContainer>
    </div>
  )
}


