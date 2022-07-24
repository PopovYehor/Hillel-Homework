import "./style.scss"
import Chart from 'chart.js/auto'
import {labels, data, config} from './chartConfig'
import {url, token} from "../table/index.js"


const renderChart = ()=>{


const API = `${url}?access_token=${token}`
fetch(API).then(res=>res.json()).then(json =>{
  let {user} = json
  user.forEach(element => {
    labels.push(element.name)
    data.datasets[0].data.push(element.rating)
  })
  const root = document.getElementById('root')
  const charts = document.createElement('canvas')
  charts.className = 'myChart'
  root.append(charts)
  const myChart = new Chart(charts, config);
})
}
export {renderChart}

  
  