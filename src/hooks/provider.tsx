import React, { createContext, FunctionComponent, useMemo, useState } from 'react'
import { IPosition, ISuggestion } from './types';

export type GetStateType = {
    city: string
    temp: string
    icon: string
    desc: string
    position: number[]
    suggestions: ISuggestion[]
};

export type SetStateType = {
    setTemp: (value: string) => void
    setIcon: (value: string) => void
    setDesc: (value: string) => void
    setCity: (value: string) => void
    setPosition: (value: number[]) => void
    setSuggestions: (value: ISuggestion[]) => void
}

const getContext = createContext<GetStateType>({
    city: '',
    temp: '',
    icon: '',
    desc: '',
    position: [],
    suggestions: []
});
const setContext = createContext<SetStateType>({
    setTemp: () => {},
    setIcon: () => {},
    setDesc: () => {},
    setCity: () => {},
    setPosition: () => {},
    setSuggestions: () => {}
});

const WeatherProvider: FunctionComponent = ({ children }) => {
    const [city, setCity] = useState<string>('')
    const [temp, setTemp] = useState<string>('')
    const [icon, setIcon] = useState<string>('')
    const [desc, setDesc] = useState<string>('')
    const [position, setPosition] = useState<number[]>([])
    const [suggestions, setSuggestions] = useState<ISuggestion[]>([])

  return (
    <getContext.Provider value={{ suggestions, position, city, icon, desc, temp }}>
        <setContext.Provider value={{ setSuggestions, setPosition, setCity, setIcon, setDesc, setTemp }}>
            {children}
        </setContext.Provider>
    </getContext.Provider>
  )
};

export { getContext, setContext,  WeatherProvider };
