import { NavLink } from 'react-router-dom'
import { LayoutDashboard, Wallet, CreditCard, TrendingUp, CalendarRange, Target, ListTodo, Settings, PieChart, Bell } from 'lucide-react'
import { useState } from 'react'

function SidebarItem({ to, icon: Icon, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (
        `group flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-blue-50 hover:text-blue-700 dark:hover:bg-blue-950/30 dark:hover:text-blue-300 ${isActive ? 'text-blue-700 bg-blue-50 dark:bg-blue-950/40 dark:text-blue-300' : 'text-slate-600 dark:text-slate-300'}`
      )}
    >
      <Icon className="h-5 w-5" />
      <span className="truncate">{label}</span>
    </NavLink>
  )
}

export default function Sidebar() {
  const [expanded, setExpanded] = useState(true)

  return (
    <aside className={`border-r border-slate-200 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/40 ${expanded ? 'w-64' : 'w-20'} transition-[width] duration-300`}> 
      <div className="flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-blue-600 text-white grid place-content-center font-bold">G</div>
          {expanded && <span className="font-semibold text-slate-900 dark:text-slate-100">GranaFit</span>}
        </div>
        <button aria-label="Expandir sidebar" onClick={() => setExpanded((e) => !e)} className="rounded-md p-2 text-slate-500 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-900">
          <Bell className="h-5 w-5" />
        </button>
      </div>
      <nav className="px-3 pb-6">
        <div className="mb-2 px-2 text-xs font-semibold uppercase tracking-wider text-slate-400">Principal</div>
        <div className="grid gap-1">
          <SidebarItem to="/app" icon={LayoutDashboard} label="Visão Geral" />
          <SidebarItem to="/app/transacoes" icon={Wallet} label="Transações" />
          <SidebarItem to="/app/contas" icon={CreditCard} label="Contas & Salários" />
          <SidebarItem to="/app/categorias" icon={PieChart} label="Categorias" />
          <SidebarItem to="/app/metas" icon={Target} label="Metas" />
          <SidebarItem to="/app/planejamento" icon={TrendingUp} label="Planejamento" />
          <SidebarItem to="/app/investimentos" icon={CalendarRange} label="Investimentos" />
          <SidebarItem to="/app/despesas" icon={ListTodo} label="Despesas Pendentes" />
        </div>
        <div className="mt-4 mb-2 px-2 text-xs font-semibold uppercase tracking-wider text-slate-400">Sistema</div>
        <div className="grid gap-1">
          <SidebarItem to="/app/configuracoes" icon={Settings} label="Configurações" />
        </div>
      </nav>
    </aside>
  )
}

export { SidebarItem }


