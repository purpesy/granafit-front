import AppLayout from '../../layout/AppLayout'
import Card from '../../components/ui/Card'
import ProgressBar from '../../components/ui/ProgressBar'

export default function Metas() {
  const goals = [
    { name: 'Reserva de emergência', current: 3200, target: 10000 },
    { name: 'Viagem', current: 1800, target: 5000 },
    { name: 'Curso', current: 600, target: 1200 },
  ]

  return (
    <AppLayout>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {goals.map((g) => {
          const percent = Math.round((g.current / g.target) * 100)
          return (
            <Card key={g.name} title={g.name} subtitle={`${percent}%`}> 
              <div className="text-sm text-slate-500 dark:text-slate-400">R$ {g.current.toFixed(2)} de R$ {g.target.toFixed(2)}</div>
              <div className="mt-3">
                <ProgressBar value={percent} color="green" />
              </div>
            </Card>
          )
        })}
      </div>
    </AppLayout>
  )
}


