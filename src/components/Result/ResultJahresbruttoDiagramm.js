import React from 'react'
import ReactEcharts from 'echarts-for-react'

function ResultJahresbruttoDiagramm() {
  const option = {
    title: {
      text: 'Jahresbrutto',
      subtext: 'Fake Data',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        name: 'Jahresbrutto',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 1048, name: 'Lohnsteuer' },
          { value: 735, name: 'Sozialversicherung' },
          { value: 580, name: 'Netto' }
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

export default ResultJahresbruttoDiagramm