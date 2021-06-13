import { useEffect, useState } from "react";
import weatherService from '../../services/weather';
import whereAmIService from '../../services/whereAmI';

export function useData() {
    const [loading, setLoading] = useState<boolean>(true)
    const [city, setCity] = useState<string>('')
    const [country, setCountry] = useState<string>('')
    const [error, setError] = useState<string>('')

    useEffect(() => {
    }, [])
}