<a href='https://weather.makhmudjon.uz' target="_blank"><img src='https://aux.iconspalace.com/uploads/18114440851139460815.png' height='60' alt='Weather Logo' aria-label='weather.makhmudjon.uz' /></a>
<h1>Weather App</h1>
You can easely see what your weather is currently, and any time through the week.
This app is not only helps with detecting your current weather despite where you are located, it shows the current time also.
Which means that you can see the time where your friend lives in the world. Additionally, you can see overall graph of daily weather change forecasts.

## Installation

First thing you must do is clonning the repository, make sure that you have installed <a href="https://nodejs.org/en/download" target="_blank">nodle</a> latest version and <a href="https://git-scm.com/downloads" target="_blank">git</a>
```
git clone https://github.com/makhmudjon47/weather-app.git
```

Go to the directory

```
cd weather-app
```

Install dependencies

```
npm install
```

Now create a new file named .env

```
touch .env
```
For the development purpose you can set PORT, NODE_ENV and TAILWIND_MODE environment variables as shown bellow,
then you should register and get access tokens from <a href="https://openweathermap.org/" target="_blank">Open Weather</a>, <a href="https://developers.google.com/maps/documentation/geocoding/get-api-key" target="_blank">Google API</a>, <a href="https://timezonedb.com/api" target="_blank">TimezoneDB</a> and paste the keys bellow respectively
```
PORT=8080
NODE_ENV=development
TAILWIND_MODE=watch
API_KEY_OPENWEATHER=
API_KEY_GEOLOCATION=
API_KEY_TIMEZONE=
```

That's all for development setup, now you can test, run or build for production releases serving any static content servers.
You can test with `test` command
```
npm run test
```
You can start development by `start` command
```
npm run start
```
And finally if you want, you can build for static files
```
npm run build
```
