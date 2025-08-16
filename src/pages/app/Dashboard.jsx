import AppLayout from '../../layout/AppLayout'
import Card from '../../components/ui/Card'
import Table from '../../components/ui/Table'
import LineChart from '../../components/charts/LineChart'
import PieChart from '../../components/charts/PieChart'
import { ArrowDownCircle, ArrowUpCircle, Target, Activity } from 'lucide-react'

export default function Dashboard() {
  const resumeCards = [
    { title: 'Entradas do mês', value: 'R$ 8.200,00', icon: ArrowUpCircle, color: 'green' },
    { title: 'Saídas do mês', value: 'R$ 5.120,00', icon: ArrowDownCircle, color: 'blue' },
    { title: 'Metas ativas', value: '5', icon: Target, color: 'slate' },
    { title: 'Gasto médio', value: 'R$ 170,30', icon: Activity, color: 'slate' },
  ]

  const lineData = [
    { dia: '01', entradas: 200, saidas: 120 },
    { dia: '05', entradas: 400, saidas: 320 },
    { dia: '10', entradas: 300, saidas: 150 },
    { dia: '15', entradas: 500, saidas: 450 },
    { dia: '20', entradas: 200, saidas: 230 },
    { dia: '25', entradas: 600, saidas: 300 },
  ]

  const pieData = [
    { name: 'Moradia', value: 1200 },
    { name: 'Alimentação', value: 800 },
    { name: 'Transporte', value: 400 },
    { name: 'Lazer', value: 300 },
  ]

  const columns = [
    { header: 'Data', accessor: 'date' },
    { header: 'Descrição', accessor: 'desc' },
    { header: 'Categoria', accessor: 'category' },
    { header: 'Valor', accessor: 'amount', cell: (v) => <span className={v < 0 ? 'text-red-600' : 'text-emerald-600'}>R$ {Math.abs(v).toFixed(2)}</span> },
  ]
  const transactions = [
    { date: '2025-08-02', desc: 'Mercado', category: 'Alimentação', amount: -220.5 },
    { date: '2025-08-03', desc: 'Salário', category: 'Renda', amount: 5200 },
    { date: '2025-08-05', desc: 'Transporte app', category: 'Transporte', amount: -35.9 },
  ]

  return (
    <AppLayout>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {resumeCards.map((c) => (
          <Card key={c.title} title={c.title} icon={c.icon} color={c.color}>
            <div className="text-2xl font-bold">{c.value}</div>
          </Card>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Card title="Fluxo do mês" subtitle="Entradas x Saídas" color="blue" className="lg:col-span-2">
          <LineChart data={lineData} xKey="dia" lines={[{ dataKey: 'entradas', color: '#16A34A' }, { dataKey: 'saidas', color: '#2563EB' }]} />
        </Card>
        <Card title="Gastos por categoria" subtitle="Distribuição" color="slate">
          <PieChart data={pieData} />
        </Card>
      </div>

      <div className="mt-6">
        <Card title="Últimas transações" color="slate">
          <Table columns={columns} data={transactions} />
        </Card>
      </div>
    </AppLayout>
  )
}


