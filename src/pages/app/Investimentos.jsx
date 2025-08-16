import AppLayout from '../../layout/AppLayout'
import Card from '../../components/ui/Card'

export default function Investimentos() {
  const items = [
    { tipo: 'CDB', valor: 3000, data: '2025-06-10' },
    { tipo: 'Tesouro Selic', valor: 4500, data: '2025-03-18' },
    { tipo: 'Fundos', valor: 2200, data: '2025-01-22' },
  ]

  return (
    <AppLayout>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {items.map((i, idx) => (
          <Card key={idx} title={i.tipo} color="slate">
            <div className="text-2xl font-bold">R$ {i.valor.toFixed(2)}</div>
            <div className="text-sm text-slate-500 dark:text-slate-400">{new Date(i.data).toLocaleDateString('pt-BR')}</div>
          </Card>
        ))}
      </div>
    </AppLayout>
  )
}


