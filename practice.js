'use strict' ;

{
  /*document.querySelectorAll('.select-1').forEach(function(element){
    element.addEventListener('click', ()=>{
      const trueNode = document.querySelector('.true');
  
      trueNode.classList.remove('hidden');
      console.log('あ');
  });*/

//   document.querySelectorAll('.select-1')[0].addEventListener('click', ()=>{
//       const falseNode = document.querySelector('.false');
  
//       falseNode.classList.remove('hidden');
//       console.log('あ');
//   });

//   // console.log(document.querySelectorAll('.select-1')[0]);

//   document.querySelectorAll('.select-1')[1].addEventListener('click', ()=>{
//     const trueNode = document.querySelector('.true');

//     trueNode.classList.remove('hidden');
//     console.log('あ');
// });

  const quizNumber = ["Q1","Q2","Q3","Q4","Q5","Q6"];  //文字列だからクオテーションマーク必要
  const quizTextSet = ['日本のIT人材が2030年にはどれくらい不足していると言われているでしょうか？','既存業界のビジネスと、先進的なテクノロジーを結び付けて生まれた、新しいビジネスのことをなんと言うでしょう？','IoTとは何の略でしょう？','日本が目指すサイバー空間とフィジカル空間を高度に融合させたシステムによって開かれる未来社会のことを何と言うでしょうか？','イギリスのコンピューター科学者であるギャビン・ウッド氏が提唱した、ブロックチェーン技術を活用した「次世代分散型インターネット」のことをなんと言うでしょう？','先進テクノロジー活用企業と出遅れた企業の収益性の差はどれぐらいと言われているでしょうか？'];
  const imgSet = ['quiz/img-quiz01.png','quiz/img-quiz02.png',,'quiz/img-quiz03.png',,'quiz/img-quiz04.png',,'quiz/img-quiz05.png',,'quiz/img-quiz06.png'];
  const choicesSet = [
    {c:['約28万人','約79万人','約183万人'],a:1},
    {c:['INTECH','BIZTECH','X-TECH'],a:2},
    {c:['INTECH','BIZTECH','X-TECH'],a:0},
    {c:['INTECH','BIZTECH','X-TECH'],a:0},
    {c:['INTECH','BIZTECH','X-TECH'],a:0},
    {c:['INTECH','BIZTECH','X-TECH'],a:1},
  ];
  const answerDataset = [1,2,0,0,0,1];         //使いどころ未定

  
  let isAnswered;

  


  for(let u=0;u<6;u++){

    function checkAnswer(aaa){
      if(isAnswered){
        return;
      }
      isAnswered = true;
      if(aaa === String(choicesSet[u].a)){
        console.log('正解');
        const trueNode = document.getElementById('TBox');
        trueNode.classList.remove('hidden');
      } else{
        console.log('不正解');
        const falseNode = document.getElementById('FBox');
        falseNode.classList.remove('hidden');
      }
    }

  //セクション1つ作ってmainに追加
  const content = document.querySelector('.content');
  const createQuizsec = document.createElement('section');
  content.appendChild(createQuizsec);
  

  const Quiznum = document.createElement('div');
  Quiznum.className ='q-box';                   //className = 'ほにゃほにゃ'
  Quiznum.innerText= quizNumber[u];             //innerHTML = 'ほにゃほにゃ'
  createQuizsec.appendChild(Quiznum);  


  const QuizText = document.createElement('h1');
  QuizText.innerText = quizTextSet[u];
  createQuizsec.appendChild(QuizText);


  const Quizimgbox = document.createElement('div');
  Quizimgbox.className ='keyimg-1';
  createQuizsec.appendChild(Quizimgbox);
  const Quizimg    = document.createElement('img');
  Quizimg.src = imgSet[u];
  Quizimgbox.appendChild(Quizimg);


  const A_box = document.createElement('div');
  A_box.className = 'a-box';
  A_box.innerText = 'A';
  createQuizsec.appendChild(A_box);


  const selectBoxes = document.createElement('div');
  selectBoxes.className = 'select-boxes';
  createQuizsec.appendChild(selectBoxes);


  for(let i=0; i<3; i++){
    


    const selectBox = document.createElement('div');
    selectBox.className = 'select-1';
    selectBox.id = i ;                                //className  のIDバージョン
    selectBoxes.appendChild(selectBox);
    
    const selectText = document.createElement('div');
    selectText.className = 'select-text';
    selectText.innerHTML = choicesSet[u].c[i];
    selectBox.appendChild(selectText);

    const triangle = document.createElement('div')
    triangle.className = 'triangle';
    selectBox.appendChild(triangle);
    
    selectBox.addEventListener('click',e =>{
      const choiceNum = e.target.id ;                   //idを取得して変数に出来る
      console.log(choiceNum);
      checkAnswer(choiceNum);
    })
  }
  

  const trueBox = document.createElement('div');
  trueBox.id = 'TBox';
  trueBox.className = 'true hidden';
  createQuizsec.appendChild(trueBox);

  const trueShow = document.createElement('div');
  trueShow.className = 'true-show';
  trueShow.innerHTML = '正解！';
  trueBox.appendChild(trueShow);

  const answerText = document.createElement('div');
  answerText.className = 'answer-text';
  trueBox.appendChild(answerText);

  const answerA    = document.createElement('div');
  answerA.className = 'answer-A';
  answerA.innerHTML = 'A';
  answerText.appendChild(answerA);

  const answerData  = document.createElement('div');
  answerData.className = 'answer-data';
  answerData.innerHTML = '約79万人';
  answerText.appendChild(answerData);


  const falseBox = document.createElement('div');
  falseBox.id = 'FBox';
  falseBox.className = 'false hidden';
  createQuizsec.appendChild(falseBox);

  const falseShow = document.createElement('div');
  falseShow.className = 'false-show';
  falseShow.innerHTML = '不正解！';
  falseBox.appendChild(falseShow);

  const answerText_f = document.createElement('div');
  answerText_f.className = 'answer-text';
  falseBox.appendChild(answerText_f);

  const answerA_f    = document.createElement('div');
  answerA_f.className = 'answer-A';
  answerA_f.innerHTML = 'A';
  answerText_f.appendChild(answerA_f);

  const answerData_f  = document.createElement('div');
  answerData_f.className = 'answer-data';
  answerData_f.innerHTML = '約28万人';
  answerText_f.appendChild(answerData_f);


  }


}