import { Toaster, toast } from 'sonner'

export function ToastProvider() {
  return <Toaster position="top-right" richColors closeButton />
}

export { toast }


