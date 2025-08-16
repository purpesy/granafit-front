export default function Card({ title, subtitle, icon: Icon, color = 'blue', children, footer, className = '' }) {
  const colorMap = {
    blue: {
      ring: 'ring-blue-100 dark:ring-blue-900/40',
      header: 'text-blue-700 dark:text-blue-300',
      badge: 'bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300'
    },
    green: {
      ring: 'ring-emerald-100 dark:ring-emerald-900/30',
      header: 'text-emerald-700 dark:text-emerald-300',
      badge: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-300'
    },
    slate: {
      ring: 'ring-slate-100 dark:ring-slate-800',
      header: 'text-slate-700 dark:text-slate-300',
      badge: 'bg-slate-50 text-slate-700 dark:bg-slate-900 dark:text-slate-300'
    }
  }

  const c = colorMap[color] || colorMap.blue

  return (
    <div className={`rounded-xl border border-slate-200 bg-white ring-1 ${c.ring} dark:border-slate-800 dark:bg-slate-950 ${className}`}>
      {(title || subtitle || Icon) && (
        <div className="flex items-center justify-between gap-3 border-b border-slate-100 p-4 dark:border-slate-800">
          <div className="flex items-center gap-3">
            {Icon && (
              <div className={`grid h-9 w-9 place-content-center rounded-lg ${c.badge}`}>
                <Icon className="h-5 w-5" />
              </div>
            )}
            <div>
              {title && <div className={`text-sm font-semibold ${c.header}`}>{title}</div>}
              {subtitle && <div className="text-xs text-slate-500 dark:text-slate-400">{subtitle}</div>}
            </div>
          </div>
        </div>
      )}
      <div className="p-4">
        {children}
      </div>
      {footer && (
        <div className="border-t border-slate-100 p-3 text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">{footer}</div>
      )}
    </div>
  )
}


