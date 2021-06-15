import { getWeatherIcon } from "../../../utils"

const toolTip = (point: any) => `
  <div class="p-4 flex flex-col text-black">
      <span>${point.time}</span>
      <img class="inline h-8 p-0 m-0" src="${getWeatherIcon(point.icon)}" />
      <div class="relative text-center info-celsius point-celsius border-black">${point.celsius}</div>
    </div>
  </div>
`

export const options = {
    lang: {
      thousandsSep: '.'
    },
    chart: {
      type: 'spline',
      panning: true,
      backgroundColor: 'transparent',
      borderRadius: 8,
      marginTop: 200,
      animation: {
        duration: 1500,
        easing: 'easeOutBounce'
      }
    },
    credits: {
      enabled: false
    },
    colors: ['#FFFFFF'],
    xAxis: {
      type: 'datetime',
      dateTimeLabelFormats: {
        day: '%d'
      },
      labels: {
        style: {
          color: '#FFFFFF'
        }
      },
      tickInterval: 24 * 3600 * 1000,
      tickLength: 0,
      lineWidth: 0,
      endOnTick: false
    },
    title: {
      text: null
    },
    yAxis: {
      labels: {
        enabled: false
      },
      title: false,
      tickLength: 0,
      lineWidth: 0,
      endOnTick: false,
      gridLineWidth: 0,
      height: '70%'
    },
    legend: {
      enabled: true,
      itemMarginBottom: 30,
      useHTML: true,
      symbolWidth: 0,
      symbolHeight: 0,
      verticalAlign: 'top',
      floating: true,
      y: 50,
      labelFormatter() {
        return `<span></span>`
      },
      itemStyle: {
        fontFamily: 'Poppins',
        color: '#181C32',
      },
      itemDistance: 8,
      padding: 0,
      align: 'left'
    },
    tooltip: {
      shared: true,
      formatter(): string {
        const { points } = this as any
        return toolTip(points[0].point)
      },
      padding: 0,
      borderRadius: 4,
      borderWidth: 0,
      shadow: true,
      useHTML: true,

      outside: true
    },
    scrollbar: {
      enabled: true
    },
    navigator: {
      enabled: true
    },

    plotOptions: {
      series: {    
        pointWidth: 350,
        pointPadding: 0
      },

      spline: {
        events: {
          legendItemClick() {
            return false;
          }
        },
        marker: {
          enabled: false,
          symbol: 'circle'
        }
      }
    }
  }