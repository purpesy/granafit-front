import AppLayout from '../../layout/AppLayout'
import Card from '../../components/ui/Card'
import Table from '../../components/ui/Table'

export default function Categorias() {
  const columns = [
    { header: 'Categoria', accessor: 'name' },
    { header: 'Status', accessor: 'status', cell: (v) => (
      <span className={`rounded-full px-2 py-1 text-xs ${v === 'Ativa' ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-300' : 'bg-slate-100 text-slate-600 dark:bg-slate-900 dark:text-slate-300'}`}>{v}</span>
    ) },
  ]
  const data = [
    { name: 'Moradia', status: 'Ativa' },
    { name: 'Alimentação', status: 'Ativa' },
    { name: 'Lazer', status: 'Pausada' },
  ]

  return (
    <AppLayout>
      <Card title="Categorias">
        <Table columns={columns} data={data} />
      </Card>
    </AppLayout>
  )
}


