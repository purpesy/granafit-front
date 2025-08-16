import AppLayout from '../../layout/AppLayout'
import Card from '../../components/ui/Card'
import Table from '../../components/ui/Table'

export default function ContasSalarios() {
  const accounts = [
    { name: 'Nubank', balance: 3200.45 },
    { name: 'Inter', balance: 1800.1 },
    { name: 'Caixa', balance: 950.0 },
  ]

  const salaryColumns = [
    { header: 'Data', accessor: 'date' },
    { header: 'Origem', accessor: 'source' },
    { header: 'Valor', accessor: 'amount', cell: (v) => <span className="text-emerald-600">R$ {v.toFixed(2)}</span> },
  ]
  const salaryData = [
    { date: '2025-08-05', source: 'Empresa X', amount: 5200 },
    { date: '2025-07-05', source: 'Empresa X', amount: 5200 },
  ]

  return (
    <AppLayout>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {accounts.map((a) => (
          <Card key={a.name} title={a.name} color="slate">
            <div className="text-2xl font-bold">R$ {a.balance.toFixed(2)}</div>
          </Card>
        ))}
      </div>
      <div className="mt-6">
        <Card title="Salários">
          <Table columns={salaryColumns} data={salaryData} />
        </Card>
      </div>
    </AppLayout>
  )
}


