import AppLayout from '../../layout/AppLayout'
import Card from '../../components/ui/Card'
import { useTheme } from '../../theme/ThemeProvider'

export default function Configuracoes() {
  const { theme, toggleTheme } = useTheme()

  return (
    <AppLayout>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Card title="Perfil do usuário">
          <form className="grid gap-3">
            <input placeholder="Nome" className="rounded-md border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-200 dark:border-slate-800 dark:bg-slate-950" />
            <input placeholder="E-mail" type="email" className="rounded-md border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-200 dark:border-slate-800 dark:bg-slate-950" />
            <button type="button" className="justify-self-start rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">Salvar</button>
          </form>
        </Card>
        <Card title="Preferências">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium">Tema</div>
              <div className="text-sm text-slate-500">Atualmente: {theme}</div>
            </div>
            <button onClick={toggleTheme} className="rounded-md border border-slate-200 bg-white px-4 py-2 text-sm dark:border-slate-800 dark:bg-slate-950">Alternar</button>
          </div>
        </Card>
      </div>
    </AppLayout>
  )
}


