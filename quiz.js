'use strict' ;

{
  /*document.querySelectorAll('.select-1').forEach(function(element){
    element.addEventListener('click', ()=>{
      const trueNode = document.querySelector('.true');
  
      trueNode.classList.remove('hidden');
      console.log('あ');
  });*/

  document.querySelectorAll('.select-1')[0].addEventListener('click', ()=>{
      const falseNode = document.querySelector('.false');
  
      falseNode.classList.remove('hidden');
      console.log('あ');
  });

  // console.log(document.querySelectorAll('.select-1')[0]);

  document.querySelectorAll('.select-1')[1].addEventListener('click', ()=>{
    const trueNode = document.querySelector('.true');

    trueNode.classList.remove('hidden');
    console.log('あ');
});
}
