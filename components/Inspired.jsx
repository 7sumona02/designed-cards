import Link from 'next/link'

const Inspired = ({title,href}) => {
    return (
        <div className='text-xs text-neutral-400 pb-4 uppercase'>
            inspired by <Link href={href}>{title}</Link>
        </div>
    )
}

export default Inspired