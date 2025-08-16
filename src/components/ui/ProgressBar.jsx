import { animated, useSpring } from 'react-spring'

export default function ProgressBar({ value = 0, color = 'blue' }) {
  const clamped = Math.max(0, Math.min(100, value))
  const styles = useSpring({ width: `${clamped}%`, from: { width: '0%' } })
  const colorClass = {
    blue: 'bg-blue-600',
    green: 'bg-emerald-600',
    slate: 'bg-slate-600',
  }[color] || 'bg-blue-600'

  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
      <animated.div style={styles} className={`h-full ${colorClass}`} />
    </div>
  )
}


