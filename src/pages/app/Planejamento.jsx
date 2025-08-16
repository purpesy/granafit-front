import AppLayout from '../../layout/AppLayout'
import Card from '../../components/ui/Card'
import BarChart from '../../components/charts/BarChart'

export default function Planejamento() {
  const data = [
    { mes: 'Jan', limite: 2000, gasto: 1800 },
    { mes: 'Fev', limite: 2000, gasto: 2100 },
    { mes: 'Mar', limite: 2200, gasto: 1900 },
    { mes: 'Abr', limite: 2200, gasto: 2400 },
  ]

  return (
    <AppLayout>
      <Card title="Planejamento Mensal" subtitle="Limite vs Gasto real">
        <BarChart data={data} xKey="mes" bars={[{ dataKey: 'limite', color: '#93C5FD' }, { dataKey: 'gasto', color: '#2563EB' }]} />
      </Card>
    </AppLayout>
  )
}


