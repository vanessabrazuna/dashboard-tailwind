import { LogOut } from 'lucide-react'
import { Button } from '../Button'

export function Profile() {
  return (
    <div className="flex items-center gap-3 grid-cols-profile">
      <img
        src="https://github.com/vanessabrazuna.png"
        className="w-10 h-10 rounded-full"
        alt=""
      />
      <div className="flex flex-1 flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">
          Vanessa Brazuna
        </span>
        <span className="truncate text-sm text-zinc-500">
          teste.teste@gmail.com
        </span>
      </div>
      <Button type="button" variant="ghost">
        <LogOut className="w-5 h-5 text-zinc-500" />
      </Button>
    </div>
  )
}
