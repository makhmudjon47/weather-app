const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "November", "Dec"];

export function getMonthName(date: Date): string {
    return monthNames[date.getMonth()]
}

export function getWeekName(date: Date): string {
    return dayNames[date.getDay()]
}

export function getWeatherIcon(code: string, quality?: string) {
    return `http://openweathermap.org/img/wn/${code}@${quality || '2x'}.png`
}