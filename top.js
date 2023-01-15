'use strict' ;
Chart.register(ChartDataLabels);


const open = document.getElementById('open');
const open2 = document.getElementById('open2');
const modal = document.getElementById('modal');
const close = document.getElementById('close'); 
const share = document.getElementById('share'); 
const record = document.getElementById('record'); 
const modal2 = document.getElementById('modal2');
const close2 = document.getElementById('close2');
const modal3 = document.getElementById('modal3'); 
const close3 = document.getElementById('close3'); 

const animation = document.querySelector('.circle');

open.addEventListener('click',()=>{
  modal.classList.remove('hidden');
  mask.classList.remove('hidden');
})

open2.addEventListener('click',()=>{
  modal.classList.remove('hidden');
  mask.classList.remove('hidden');
})

close.addEventListener('click',()=>{
  modal.classList.add('hidden');
  mask.classList.add('hidden');
})

record.addEventListener('click',()=>{
  modal.classList.add('hidden');
  modal2.classList.remove('hidden');
  if(share.checked){
    const twitterContent = document.getElementById('twitterContent');
    const tweetContent = `${twitterContent.value}`;
    window.open(`http://twitter.com/intent/tweet?&text=${tweetContent}`);
  }
})

close2.addEventListener('click',()=>{
  modal2.classList.add('hidden');
  mask.classList.add('hidden');
})

close3.addEventListener('click',()=>{
  modal3.classList.add('hidden');
  mask.classList.add('hidden');
})

animation.addEventListener('animationend',()=>{
  modal2.classList.add('hidden');
  modal3.classList.remove('hidden');
})








const study_data = 'http://posse-task.anti-pattern.co.jp/1st-work/study_time.json'
fetch(study_data)
  .then((response)=>{
    return response.json();
  })
  .then((jsonData)=>{
    createBarChart(jsonData);
  })


function createBarChart(jsonData){
  const DayData = jsonData.map((a)=>{
    return a.day;
  });
  const TimeData = jsonData.map((a)=>{
    return a.time;
  });

  let context1 = document.getElementById("myChart1").getContext('2d')

  new Chart(context1,{
    type:'bar' ,
    data: {
      labels:DayData,
      datasets: [{
        // label: "日本の人口推移",
        data: TimeData,
        backgroundColor: ["#1e90ff"]
      }],
    },
    options: {
      responsive:true,
      maintainAspectRatio:false,
      scales: {
        x: {
          grid: {
            display: false,
            drawBorder: false
          },
          ticks: {
            maxRotation: 0,
            minRotation: 0,

            // stepSize:2,
            // min:1,
            // max:30,
            color: "#97b9d1",
            // callback:function(index,value){
            //   return index%2 !== 0 ? this.getLabelForValue(value) : "";
            // }
          }
        },
        yAxes: {                      //y軸設定
          grid: {
            display: false,
            drawBorder: false
          },
          display: true,             //表示設定
          scaleLabel: {              //軸ラベル設定
             display: true,          //表示設定
             labelString: '縦軸ラベル',  //ラベル
             fontSize: 18               //フォントサイズ
          },
          ticks: {     
            stepSize:2,                 //最大値最小値設定
            callback:function(value){
              return value+'h';
              }
          },
      }
      },
      
    }
  })
}


  const lang_data = 'http://posse-task.anti-pattern.co.jp/1st-work/study_language.json'
  fetch(lang_data)
    .then((response)=>{
      return response.json();
    })
    .then((jsonData)=>{
      createLangChart(jsonData);
    })

function createLangChart(jsonData){
  let context2 = document.getElementById("myChart2").getContext('2d');

  const langData = Object.keys(jsonData[0]);
  const langRatioData = Object.values(jsonData[0]);

  new Chart(context2,{
    type: 'doughnut',
    data: {
      labels: langData,
      datasets: [{
          backgroundColor: [
                "#0d33ff",
                "#4682b4",
                "#0090a8",
                "#00ffff",
                "#bfbed3",
                "#9fa0d7",
                "#704cbc",
                "#730099",

          ],
          data: langRatioData
      }]
    },
    options: {
      responsive:true,
      maintainAspectRatio:false,
      
      title: {
        display: true,
        text: '割合'
      },
      plugins: {
        labels: {
          render: 'percentage',
          fontColor: 'white',
          fontSize: 20
        },
        legend: {
          position: 'bottom'
        },
        datalabels: {
          color: '#000',
          font: {
              // weight: 'bold',
              // size: 20,
          },
          formatter: (value, ctx) => {
              return value + '%';
          },
      }
      }
    }
  })
}

  
const content_data = 'http://posse-task.anti-pattern.co.jp/1st-work/study_contents.json'
fetch(content_data)
  .then((response)=>{
    return response.json();
  })
  .then((jsonData)=>{
    createContentChart(jsonData);
  })

function createContentChart(jsonData){
  let context3 = document.getElementById("myChart3").getContext('2d')

  const schoolData = Object.keys(jsonData[0]);
  const schoolRatioData = Object.values(jsonData[0]);

  new Chart(context3,{
    type: 'doughnut',
    data: {
      labels: schoolData,
      datasets: [{
          backgroundColor: [
            "#0d33ff",
            "#4682b4",
            "#0090a8",
          ],
          data: schoolRatioData 
      }]
    },
    options: {
      responsive:true,
      maintainAspectRatio:false,
      title: {
        display: true,
        text: '割合'
      },
      plugins: {
        labels: {
          render: 'percentage',
          fontColor: 'white',
          fontSize: 20
        },
        legend: {
          position: 'bottom'
        },
        datalabels: {
          color: '#000',
          font: {
              // weight: 'bold',
              // size: 20,
          },
          formatter: (value, ctx) => {
              return value + '%';
          },
      }
      }
    }
  })
}


