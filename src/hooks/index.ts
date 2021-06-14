import { useContext } from 'react'
import { getContext, setContext } from './provider'

export function useGetData() {
  return useContext(getContext)
}

export function useSetData() {
    return useContext(setContext)
  }
  
