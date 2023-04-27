import { Save } from 'lucide-react'
import Image from 'next/image'

export function AppBar() {
  return (
    <div className='bg-slate-300 h-14 border-b border-white/5 w-screen flex flex-row justify-between items-center p-2 px-4'>
      <Image src='/logo.webp' alt='logo' width={150} height={50} />
      {/* <div className='w-1/3 flex flex-row items-center justify-end'>
        <button className='bg-slate-500 text-neutral-200 p-2 rounded '>
          <Save size={28} strokeWidth={2} />
        </button>
      </div> */}
    </div>
  )
}
