import { useEffect, useMemo, useState } from "react";
import { useGetData, useSetData } from "../../../hooks";
import { ISuggestion } from "../../../hooks/types";

declare global {
    interface Window {
      GoogleAutocompleteService: any;
    }
}

function  getPredictions(input: string): Promise<ISuggestion[]> {
    return new Promise((res, rej) => {
      window.GoogleAutocompleteService.getQueryPredictions({ input }, function(places: any[], status: any) {
        if(status === 'OK') {
          const result = places.map(place => ({
            text: place.description,
            placeId: place.place_id,
            matched_substrings: place.matched_substrings
          }))
          res(result)
        }
        else if(status === 'NOT_FOUND' || status === 'ZERO_RESULTS') res([])
        else rej('ERROR OCCURED')
      })
    });
  }  

function debounce(delay: number) {
    let id: NodeJS.Timeout | undefined;
    return function(callBack: Function) {
        if(id) {
            clearTimeout(id)
        }
        id = setTimeout(() => {
            if(id) clearTimeout(id)
            id = undefined
            callBack()
        }, delay);
    }
}

export function useData() {
    const [text, setText] = useState<string>('')
    const { setSuggestions } = useSetData()
    const { suggestions } = useGetData()
    const handleSearch = useMemo(() => debounce(300), [])

    useEffect(() => {
        let mounted = false;
        if(text) {
            handleSearch(() => {
                getPredictions(text)
                .then((value) => {
                    if(!mounted) {
                      setSuggestions(value)
                    }
                })
                .catch(console.error)
            })
        } else {
          if(!mounted) {
            setSuggestions([])
          }
        }
        return () => { mounted = true }
    }, [text])

    useEffect(() => {
      if(!suggestions.length) {
        setText('')
      }
    }, [suggestions])

    return {text, setText}
}