<a href='https://weather.makhmudjon.uz' target="_blank"><img src='https://aux.iconspalace.com/uploads/18114440851139460815.png' height='60' alt='Weather Logo' aria-label='weather.makhmudjon.uz' /></a>
# Weather App
You can easily see what your weather is currently, and for any time through the week. This app not only helps with detecting your current weather despite where you are located but also shows the current time. This means that you can see the time where your friend lives in the world. Additionally, you can see the overall graph of daily weather change forecasts.
# Installation

## With source code 😬
The first thing you must do is cloning the repository, make sure that you have installed the <a href="https://nodejs.org/en/download" target="_blank">node</a> latest version, and <a href="https://git-scm.com/downloads" target="_blank">git</a>
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
For the development purpose, you can set PORT, NODE_ENV, and TAILWIND_MODE environment variables as shown below, then you should register and get access tokens from <a href="https://openweathermap.org/" target="_blank">Open Weather</a>, <a href="https://developers.google.com/maps/documentation/geocoding/get-api-key" target="_blank">Google API</a>, <a href="https://timezonedb.com/api" target="_blank">TimezoneDB</a> and paste the keys bellow respectively in the .env file
```
PORT=8080
NODE_ENV=development
TAILWIND_MODE=watch
API_KEY_OPENWEATHER=
API_KEY_GEOLOCATION=
API_KEY_TIMEZONE=
```

That's all for development setup, now you can test, run or build for production releases serving any static content servers.
You can test with the `test` command
```
npm run test
```
You can start development by `start` command
```
npm run start
```
And finally, if you want, you can `build` for static files
```
npm run build
```

## With docker 😐
Clone the project
```
git clone https://github.com/makhmudjon47/weather-app.git
```

Go to the directory

```
cd weather-app
```

Create a new file named .env

```
touch .env
```

You should register and get access tokens from <a href="https://openweathermap.org/" target="_blank">Open Weather</a>, <a href="https://developers.google.com/maps/documentation/geocoding/get-api-key" target="_blank">Google API</a>, <a href="https://timezonedb.com/api" target="_blank">TimezoneDB</a> and paste the keys below respectively in the .env file
```
API_KEY_OPENWEATHER=
API_KEY_GEOLOCATION=
API_KEY_TIMEZONE=
```

Build docker image
```
docker build -t weather-app .
```

Lastly, run your container with a specified port number
```
docker run --rm -d -p 80:80 weather-app
```

## With docker 🥳
If you want to run the project locally, the easiest way is to run with docker. Make sure that you have installed docker first and port 80 is free than just run the command bellow

```
docker run --rm -d -p 80:80 998994287668/weather-app:latest
```

