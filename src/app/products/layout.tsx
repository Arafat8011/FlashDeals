import Dropdown from '@/components/Dropdown'
import { ReactNode } from 'react'

export default function ProductLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Dropdown />
      <section className=''>
        {children}
      </section>
    </div>
  )
}
