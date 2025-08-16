import { useMemo, useState } from 'react'

export default function Table({ columns, data, pageSize = 10, onFilter }) {
  const [page, setPage] = useState(1)
  const totalPages = Math.max(1, Math.ceil((data?.length || 0) / pageSize))
  const pageData = useMemo(() => {
    const start = (page - 1) * pageSize
    return (data || []).slice(start, start + pageSize)
  }, [data, page, pageSize])

  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800">
      <div className="flex items-center justify-between gap-2 border-b border-slate-200 bg-slate-50/60 p-3 dark:border-slate-800 dark:bg-slate-900/50">
        <div className="text-sm font-medium text-slate-700 dark:text-slate-200">{data?.length || 0} registros</div>
        {onFilter && (
          <div className="flex gap-2">
            {onFilter}
          </div>
        )}
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-800">
          <thead className="bg-slate-50/60 dark:bg-slate-900/50">
            <tr>
              {columns.map((col) => (
                <th key={col.accessor} className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">{col.header}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 bg-white dark:divide-slate-900 dark:bg-slate-950">
            {pageData.map((row, i) => (
              <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-900">
                {columns.map((col) => (
                  <td key={col.accessor} className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">
                    {typeof col.cell === 'function' ? col.cell(row[col.accessor], row) : row[col.accessor]}
                  </td>
                ))}
              </tr>
            ))}
            {pageData.length === 0 && (
              <tr>
                <td colSpan={columns.length} className="px-4 py-6 text-center text-sm text-slate-500">Sem dados</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-between gap-3 border-t border-slate-200 bg-slate-50/60 p-3 text-sm dark:border-slate-800 dark:bg-slate-900/50">
        <div className="text-slate-500">Página {page} de {totalPages}</div>
        <div className="flex gap-2">
          <button disabled={page === 1} onClick={() => setPage((p) => Math.max(1, p - 1))} className="rounded-md border border-slate-200 bg-white px-3 py-1.5 disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950">Anterior</button>
          <button disabled={page === totalPages} onClick={() => setPage((p) => Math.min(totalPages, p + 1))} className="rounded-md border border-slate-200 bg-white px-3 py-1.5 disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950">Próxima</button>
        </div>
      </div>
    </div>
  )
}


