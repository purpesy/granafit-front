import AppLayout from '../../layout/AppLayout'
import Card from '../../components/ui/Card'
import Table from '../../components/ui/Table'
import Dialog from '../../components/ui/Dialog'
import { useState } from 'react'

export default function Transacoes() {
  const [open, setOpen] = useState(false)

  const columns = [
    { header: 'Data', accessor: 'date' },
    { header: 'Descrição', accessor: 'desc' },
    { header: 'Categoria', accessor: 'category' },
    { header: 'Tipo', accessor: 'type' },
    { header: 'Valor', accessor: 'amount', cell: (v) => <span className={v < 0 ? 'text-red-600' : 'text-emerald-600'}>R$ {Math.abs(v).toFixed(2)}</span> },
  ]
  const data = Array.from({ length: 22 }).map((_, i) => ({
    date: `2025-08-${String((i % 28) + 1).padStart(2, '0')}`,
    desc: `Transação ${i + 1}`,
    category: ['Alimentação', 'Transporte', 'Moradia'][i % 3],
    type: i % 2 === 0 ? 'Entrada' : 'Saída',
    amount: i % 2 === 0 ? 120 + i * 3 : -(80 + i * 2),
  }))

  return (
    <AppLayout>
      <div className="flex items-center justify-between gap-3">
        <h1 className="text-xl font-semibold">Transações</h1>
        <button onClick={() => setOpen(true)} className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">Nova transação</button>
      </div>
      <div className="mt-4">
        <Card>
          <Table
            columns={columns}
            data={data}
            onFilter={
              <>
                <select className="rounded-md border border-slate-200 bg-white px-2 py-1.5 text-sm dark:border-slate-800 dark:bg-slate-950">
                  <option>Todos os tipos</option>
                  <option>Entrada</option>
                  <option>Saída</option>
                </select>
                <input type="date" className="rounded-md border border-slate-200 bg-white px-2 py-1.5 text-sm dark:border-slate-800 dark:bg-slate-950" />
              </>
            }
          />
        </Card>
      </div>

      <Dialog open={open} onOpenChange={setOpen} title="Nova transação" description="Crie uma entrada ou saída">
        <form className="grid gap-3">
          <input placeholder="Descrição" className="rounded-md border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-200 dark:border-slate-800 dark:bg-slate-950" />
          <div className="grid grid-cols-2 gap-3">
            <input placeholder="Valor" type="number" className="rounded-md border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-200 dark:border-slate-800 dark:bg-slate-950" />
            <select className="rounded-md border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-200 dark:border-slate-800 dark:bg-slate-950">
              <option>Entrada</option>
              <option>Saída</option>
            </select>
          </div>
          <div className="flex justify-end gap-2">
            <button type="button" onClick={() => setOpen(false)} className="rounded-md border border-slate-200 bg-white px-4 py-2 text-sm dark:border-slate-800 dark:bg-slate-950">Cancelar</button>
            <button type="submit" className="rounded-md bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700">Salvar</button>
          </div>
        </form>
      </Dialog>
    </AppLayout>
  )
}


