import React from 'react'
import ReactEcharts from 'echarts-for-react'

function ResultDienstgeberkostenDiagramm() {
  const option = {
    title: {
      text: 'Dienstgeberkosten',
      subtext: 'Fake Data',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'bottom'
    },
    series: [
      {
        name: 'Jahresbrutto',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 1048, name: 'Lohnsteuer' },
          { value: 735, name: 'Sozialversicherung' },
          { value: 580, name: 'Netto' },
          { value: 900, name: 'DB + DZ + Kommunalsteuer + BMVK' }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };

  return (
    <div>
      <ReactEcharts option={option} />
    </div>
  )
}

export default ResultDienstgeberkostenDiagramm