import BrokenCloudsDay from '../assets/original/broken_clouds_day.jpg'
import BrokenCloudsNight from '../assets/original/broken_clouds_night.jpg'
import ClearSkyDay from '../assets/original/clear_sky_day.jpg'
import ClearSkyNight from '../assets/original/clear_sky_night.jpg'
import FewCloudsDay from '../assets/original/few_clouds_day.jpg'
import FewCloudsNight from '../assets/original/few_clouds_night.jpg'
import Mist from '../assets/original/mist.jpg'
import Rain from '../assets/original/rain.jpg'
import ScatteredCloudsDay from '../assets/original/scattered_clouds_day.jpg'
import ScatteredCloudsNight from '../assets/original/scattered_clouds_night.jpg'
import ShowerRain from '../assets/original/shower_rain.jpg'
import Snow from '../assets/original/snow.jpg'
import Thunderstorm from '../assets/original/thunderstorm.jpg'
import ThumbnailBrokenCloudsDay from '../assets/thumbnails/broken_clouds_day.jpg'
import ThumbnailBrokenCloudsNight from '../assets/thumbnails/broken_clouds_night.jpg'
import ThumbnailClearSkyDay from '../assets/thumbnails/clear_sky_day.jpg'
import ThumbnailClearSkyNight from '../assets/thumbnails/clear_sky_night.jpg'
import ThumbnailFewCloudsDay from '../assets/thumbnails/few_clouds_day.jpg'
import ThumbnailFewCloudsNight from '../assets/thumbnails/few_clouds_night.jpg'
import ThumbnailMist from '../assets/thumbnails/mist.jpg'
import ThumbnailRain from '../assets/thumbnails/rain.jpg'
import ThumbnailScatteredCloudsDay from '../assets/thumbnails/scattered_clouds_day.jpg'
import ThumbnailScatteredCloudsNight from '../assets/thumbnails/scattered_clouds_night.jpg'
import ThumbnailShowerRain from '../assets/thumbnails/shower_rain.jpg'
import ThumbnailSnow from '../assets/thumbnails/snow.jpg'
import ThumbnailThunderstorm from '../assets/thumbnails/thunderstorm.jpg'


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
        return object.hasOwnProperty(prop) ? object[prop] : ClearSkyDay
    }
})

export const thumbnails = new Proxy({
    '01d': ThumbnailClearSkyDay,
    '01n': ThumbnailClearSkyNight,
    '02d': ThumbnailFewCloudsDay,
    '02n': ThumbnailFewCloudsNight,
    '03d': ThumbnailScatteredCloudsDay,
    '03n': ThumbnailScatteredCloudsNight,
    '04d': ThumbnailBrokenCloudsDay,
    '04n': ThumbnailBrokenCloudsNight,
    '09d': ThumbnailShowerRain,
    '09n': ThumbnailShowerRain,
    '10d': ThumbnailRain,
    '10n': ThumbnailRain,
    '11d': ThumbnailThunderstorm,
    '11n': ThumbnailThunderstorm,
    '13d': ThumbnailSnow,
    '13n': ThumbnailSnow,
    '50d': ThumbnailMist,
    '50n': ThumbnailMist
}, {
    get(object: IProps, prop: string) {
        return object.hasOwnProperty(prop) ? object[prop] : ThumbnailClearSkyDay
    }
})