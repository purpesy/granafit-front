import * as DialogPrimitive from '@radix-ui/react-dialog'

export default function Dialog({ open, onOpenChange, title, description, children, footer, size = 'md' }) {
  const sizeClass = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
  }[size] || 'max-w-lg'

  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm" />
        <DialogPrimitive.Content className={`fixed left-1/2 top-1/2 z-50 w-[95vw] -translate-x-1/2 -translate-y-1/2 rounded-xl border border-slate-200 bg-white p-0 shadow-2xl dark:border-slate-800 dark:bg-slate-950 ${sizeClass}`}>
          <div className="border-b border-slate-200 p-4 dark:border-slate-800">
            {title && <DialogPrimitive.Title className="text-base font-semibold text-slate-900 dark:text-slate-100">{title}</DialogPrimitive.Title>}
            {description && <DialogPrimitive.Description className="mt-1 text-sm text-slate-500 dark:text-slate-400">{description}</DialogPrimitive.Description>}
          </div>
          <div className="p-4">
            {children}
          </div>
          {footer && (
            <div className="border-t border-slate-200 p-3 dark:border-slate-800">
              {footer}
            </div>
          )}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
}


