import Sidebar from '../components/navigation/Sidebar'
import Header from '../components/navigation/Header'

export default function AppLayout({ children }) {
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-100">
      <div className="flex">
        <Sidebar />
        <div className="flex min-h-screen flex-1 flex-col">
          <Header />
          <main className="mx-auto w-full max-w-screen-2xl flex-1 p-4 md:p-6">
            {children}
          </main>
        </div>
      </div>
    </div>
  )
}


