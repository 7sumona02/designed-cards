'use client'

import { Button } from '@/components/ui/button'
import { CopyIcon } from 'lucide-react'
import { toast } from 'sonner'

const CopyButton = ({ code }) => {

    const handleCopy = async () => {
        await navigator.clipboard.writeText(code)
        toast("Code copied!")
    }

    return (
        <Button onClick={handleCopy} variant="outline" size="icon">
            <CopyIcon className="h-4 w-4" />
        </Button>
    )
}

export default CopyButton
