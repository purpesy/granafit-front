import * as React from 'react'
import { Command } from 'cmdk'
import { useHotkeys } from 'react-hotkeys-hook'
import { useNavigate } from 'react-router-dom'

export default function CommandPalette({ open, onOpenChange }) {
  const navigate = useNavigate()

  useHotkeys('ctrl+k, meta+k', (e) => {
    e.preventDefault()
    onOpenChange(true)
  })

  React.useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onOpenChange(false)
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [onOpenChange])

  const go = (path) => {
    navigate(path)
    onOpenChange(false)
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 grid place-items-start bg-black/20 p-4 pt-24 backdrop-blur-sm">
      <div className="mx-auto w-full max-w-2xl overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl dark:border-slate-800 dark:bg-slate-950">
        <Command label="Busca global">
          <div className="border-b border-slate-200 p-3 dark:border-slate-800">
            <Command.Input placeholder="Buscar páginas, ações..." className="w-full bg-transparent text-base outline-none placeholder:text-slate-400" />
          </div>
          <Command.List className="max-h-[60vh] overflow-auto">
            <Command.Empty className="p-4 text-sm text-slate-500">Nenhum resultado</Command.Empty>
            <Command.Group heading="Páginas" className="p-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
              <div className="grid gap-1 p-2">
                <Command.Item onSelect={() => go('/app')} className="cursor-pointer rounded-md px-2 py-2 hover:bg-slate-100 dark:hover:bg-slate-900">Visão Geral</Command.Item>
                <Command.Item onSelect={() => go('/app/transacoes')} className="cursor-pointer rounded-md px-2 py-2 hover:bg-slate-100 dark:hover:bg-slate-900">Transações</Command.Item>
                <Command.Item onSelect={() => go('/app/contas')} className="cursor-pointer rounded-md px-2 py-2 hover:bg-slate-100 dark:hover:bg-slate-900">Contas & Salários</Command.Item>
                <Command.Item onSelect={() => go('/app/categorias')} className="cursor-pointer rounded-md px-2 py-2 hover:bg-slate-100 dark:hover:bg-slate-900">Categorias</Command.Item>
                <Command.Item onSelect={() => go('/app/metas')} className="cursor-pointer rounded-md px-2 py-2 hover:bg-slate-100 dark:hover:bg-slate-900">Metas</Command.Item>
                <Command.Item onSelect={() => go('/app/planejamento')} className="cursor-pointer rounded-md px-2 py-2 hover:bg-slate-100 dark:hover:bg-slate-900">Planejamento Mensal</Command.Item>
                <Command.Item onSelect={() => go('/app/investimentos')} className="cursor-pointer rounded-md px-2 py-2 hover:bg-slate-100 dark:hover:bg-slate-900">Investimentos</Command.Item>
                <Command.Item onSelect={() => go('/app/despesas')} className="cursor-pointer rounded-md px-2 py-2 hover:bg-slate-100 dark:hover:bg-slate-900">Despesas Pendentes</Command.Item>
                <Command.Item onSelect={() => go('/app/configuracoes')} className="cursor-pointer rounded-md px-2 py-2 hover:bg-slate-100 dark:hover:bg-slate-900">Configurações</Command.Item>
              </div>
            </Command.Group>
          </Command.List>
        </Command>
      </div>
    </div>
  )
}


