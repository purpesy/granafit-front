import AppLayout from '../../layout/AppLayout'
import Card from '../../components/ui/Card'

export default function DespesasPendentes() {
  const items = [
    { name: 'Conta de Luz', value: 230.5, status: 'Pendente' },
    { name: 'Academia', value: 99.9, status: 'Pago' },
    { name: 'Internet', value: 120.0, status: 'Pendente' },
  ]

  return (
    <AppLayout>
      <Card title="Despesas Pendentes">
        <ul className="grid gap-3">
          {items.map((i) => (
            <li key={i.name} className="flex items-center justify-between rounded-lg border border-slate-200 bg-white p-3 dark:border-slate-800 dark:bg-slate-950">
              <div>
                <div className="font-medium">{i.name}</div>
                <div className="text-sm text-slate-500">R$ {i.value.toFixed(2)}</div>
              </div>
              <span className={`rounded-full px-2 py-1 text-xs ${i.status === 'Pago' ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-300' : 'bg-amber-50 text-amber-700 dark:bg-amber-950/30 dark:text-amber-300'}`}>{i.status}</span>
            </li>
          ))}
        </ul>
      </Card>
    </AppLayout>
  )
}


