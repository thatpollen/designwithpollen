import { Arrow } from '@/components/icons/Icons'
import NextLink from 'next/link'

export default function FloatingEl() {
  return(
    <section className="flex flex-col items-center justify-start w-full fixed left-0 right-0 bottom-[48px] z-10">
      <div className="flex justify-center items-center gap-10 mx-auto px-6 py-5 text-darkBlue bg-white rounded-[80px] shadow-[4px_4px_0px_2px_#292929]">
        <div className='font-bold text-charcoal text-xl'>$750/Weekly</div>
        <div className='text-charcoal opacity-[64%]'>Cancel anytime</div>
        <NextLink href="/contact" className='flex justify-start items-center gap-2 font-medium text-DarkLimeGreen text-xl'>Hire me <span className='w-6 h-6'><Arrow/></span></NextLink>
      </div>
    </section>
  )
}