declare namespace NodeJS {
  interface ProcessEnv {
    PORT: number
    NODE_ENV: 'development' | 'production' | 'test'
    API_KEY_OPENWEATHER: string
    API_KEY_GEOLOCATION: string
    TAILWIND_MODE: boolean
  }
}