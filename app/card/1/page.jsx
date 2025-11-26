'use client'

import Wrapper from '@/components/Wrapper'
import CopyButton from '@/components/CopyButton'
import Inspired from '@/components/Inspired'

const page = () => {
    const codeToCopy = `
                <div className='w-xs flex flex-col gap-1 border border-neutral-200 p-2 rounded-3xl'>
                    <div className='border border-neutral-200 rounded-2xl overflow-hidden'>
                        <img
                            src='https://www.guhrodrigues.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finput-otp-light.04c9de26.png&w=1080&q=100'
                            alt=''
                        />
                    </div>
                    <div className='flex-col gap-1 p-2.5'>
                        <div className='text-black font-medium'>Animated Input OTP</div>
                        <div className='text-neutral-500'>June 2025</div>
                    </div>
                </div>
`

    return (
        <Wrapper>
            <div className='flex items-center justify-center h-screen'>
                <div className='w-xs flex flex-col gap-1 border border-neutral-200 p-2 rounded-3xl'>
                    <div className='border border-neutral-200 rounded-2xl overflow-hidden'>
                        <img
                            src='https://www.guhrodrigues.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finput-otp-light.04c9de26.png&w=1080&q=100'
                            alt=''
                        />
                    </div>
                    <div className='flex-col gap-1 p-2.5'>
                        <div className='text-black font-medium'>Animated Input OTP</div>
                        <div className='text-neutral-500'>June 2025</div>
                    </div>
                </div>
            </div>

             <div className='fixed top-4 right-4 cursor-pointer'>
                <CopyButton code={codeToCopy} />
            </div>

            <Inspired title='Gustavo Rodrigues' href='https://www.guhrodrigues.com/' />
        </Wrapper>
    )
}

export default page


