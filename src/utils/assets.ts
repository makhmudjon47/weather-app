import BrokenCloudsDay from '../assets/broken_clouds_day.jpg'
import BrokenCloudsNight from '../assets/broken_clouds_night.jpg'
import ClearSkyDay from '../assets/clear_sky_day.png'
import ClearSkyNight from '../assets/clear_sky_night.jpg'
import FewCloudsDay from '../assets/few_clouds_day.jpg'
import FewCloudsNight from '../assets/few_clouds_night.jpg'
import Mist from '../assets/mist.jpg'
import Rain from '../assets/rain.jpg'
import ScatteredCloudsDay from '../assets/scattered_clouds_day.jpg'
import ScatteredCloudsNight from '../assets/scattered_clouds_night.jpg'
import ShowerRain from '../assets/shower_rain.jpg'
import Snow from '../assets/snow.jpg'
import Thunderstorm from '../assets/thunderstorm.jpg'
import Loading from '../assets/loading.gif'

interface IProps {
    [key: string]: any
}

export const assets = new Proxy({
    '01d': ClearSkyDay,
    '01n': ClearSkyNight,
    '02d': FewCloudsDay,
    '02n': FewCloudsNight,
    '03d': ScatteredCloudsDay,
    '03n': ScatteredCloudsNight,
    '04d': BrokenCloudsDay,
    '04n': BrokenCloudsNight,
    '09d': ShowerRain,
    '09n': ShowerRain,
    '10d': Rain,
    '10n': Rain,
    '11d': Thunderstorm,
    '11n': Thunderstorm,
    '13d': Snow,
    '13n': Snow,
    '50d': Mist,
    '50n': Mist
}, {
    get(object: IProps, prop: string) {
        return object.hasOwnProperty(prop) ? object[prop] : Loading
    }
})