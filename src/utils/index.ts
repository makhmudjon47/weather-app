export function getWeatherIcon(code: string, quality?: string) {
    return `http://openweathermap.org/img/wn/${code}@${quality || '2x'}.png`
}