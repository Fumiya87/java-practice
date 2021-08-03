const quiz =[
  {
    question: '日曜の8時から放映されている番組はなに？',
    answers:[
      '志村どうぶつ園',
      '行ってQ!!',
      '青空レストラン',
      '行列のできる法律相談所'
    ],
    correct:'行ってQ!!'
  }, 
   {
    question: '北京オリンピックで競泳の金メダルを獲得した選手は？',
    answers:[
      '北島康介',
      '松岡修造',
      '瀬戸大也',
      '香川真司'
    ],
    correct:'北島康介'
  },
  {
    question: '2010年のサッカーW杯の優勝国は？',
    answers:[
      'ブラジル',
      'イタリア',
      'アルゼンチン',
      'スペイン'
    ],
    correct:'スペイン'
  }
];

const quizLength = quiz.length
let quizIndex =0;
let score = 0;




const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

//定数の文字列をHTMLに反映させる
const setupQuiz = () =>{
  document.getElementById('js-question').textContent =quiz[quizIndex].question;
  let buttonIndex = 0;
  let  buttonLength = $button.length;
  while(buttonIndex < buttonLength){
   $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
   buttonIndex++;
}
}

setupQuiz();



const clickHandler =(e) =>{
 
  if(quiz[quizIndex].correct === e.target.textContent){
　window,alert('正解')
  score++;
  }else{
　window.alert('不正解')
}
quizIndex++;
if(quizIndex < quizLength){
　setupQuiz();
}else{
  window.alert('終了 あなたの正解数は'+　score　+　'/'　+　quizLength　+　'です。')
}
};

//ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while(handlerIndex < buttonLength){
  $button[handlerIndex].addEventListener('click', (e)=> {
    clickHandler(e);
   });
   handlerIndex++;
}

