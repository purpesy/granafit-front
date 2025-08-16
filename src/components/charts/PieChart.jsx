import { Pie, PieChart as RPieChart, ResponsiveContainer, Tooltip, Cell, Legend } from 'recharts'

export default function PieChart({ data, dataKey = 'value', nameKey = 'name', colors = ['#2563EB', '#16A34A', '#0EA5E9', '#22C55E', '#64748B'] }) {
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <RPieChart>
          <Tooltip />
          <Legend />
          <Pie data={data} dataKey={dataKey} nameKey={nameKey} outerRadius={100} fill="#2563EB" stroke="none">
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Pie>
        </RPieChart>
      </ResponsiveContainer>
    </div>
  )
}


