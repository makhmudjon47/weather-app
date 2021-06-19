import { useEffect, useState } from "react";
import { useSetData } from "../../hooks";
import whereAmIService from '../../services/whereAmI';

export function useData() {
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string>('')
    const { setPosition, setCity } = useSetData()

    useEffect(() => {
        let mounted = false

        async function worker() {
            setLoading(true)
            try {
                const { data: where } = await whereAmIService.whereAmI()
                if(!mounted) {
                    setPosition([where.latitude, where.longitude])
                    setCity(`${where.city}, ${where.country}`)
                }
            } catch(error) {
                if(!mounted) {
                    setError(error.message)
                }
            } finally {
                if(!mounted) {
                    setLoading(false)
                }
            }
        }
        worker()
        return () => { mounted = true }
    }, [])

    return {
        loading,
        error,
    }
}