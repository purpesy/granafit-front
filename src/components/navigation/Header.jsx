import { useTheme } from '../../theme/ThemeProvider'
import { CircleDollarSign, Moon, Sun, Bell, Search, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import CommandPalette from '../overlays/CommandPalette'

export default function Header() {
  const { theme, toggleTheme } = useTheme()
  const [openCommand, setOpenCommand] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/70 backdrop-blur dark:border-slate-800 dark:bg-slate-950/50">
      <div className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center rounded-lg bg-blue-50 px-3 py-2 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300">
            <CircleDollarSign className="h-5 w-5" />
            <div className="ml-2 text-sm">
              <div className="text-slate-500 dark:text-slate-400">Saldo Total</div>
              <div className="font-semibold">R$ 12.450,90</div>
            </div>
          </div>
          <button onClick={() => setOpenCommand(true)} className="group hidden items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-500 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 md:flex">
            <Search className="h-4 w-4" />
            <span>Buscar... </span>
            <kbd className="ml-2 rounded border border-slate-200 bg-slate-50 px-1.5 text-xs dark:border-slate-700 dark:bg-slate-800">Ctrl K</kbd>
          </button>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={toggleTheme} className="rounded-md p-2 text-slate-500 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-900" aria-label="Toggle theme">
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <button className="rounded-md p-2 text-slate-500 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-900" aria-label="Notificações">
            <Bell className="h-5 w-5" />
          </button>
          <div className="ml-2 flex items-center gap-2 rounded-full border border-slate-200 bg-white px-2 py-1 dark:border-slate-800 dark:bg-slate-900">
            <img src="https://i.pravatar.cc/40?img=12" alt="avatar" className="h-8 w-8 rounded-full" />
            <div className="hidden text-left text-sm md:block">
              <div className="font-medium">Lucas</div>
              <div className="text-slate-500 dark:text-slate-400">Premium</div>
            </div>
            <ChevronDown className="h-4 w-4 text-slate-400" />
          </div>
        </div>
      </div>
      <CommandPalette open={openCommand} onOpenChange={setOpenCommand} />
    </header>
  )
}


