//폭탄 게임 제작 스크립트

//DOM이 로드가 되면 반복문을 이용하여 [0,0,0,0,0,0,0,0,1]로 초기화
//폭탄이 있는 위치를 나타내는 배열
let num=[];
// let num = [0,0,0,0,0,0,0,0,1];
document.addEventListener("DOMContentLoaded", () => {
    for(let i=0;i<8;i++){
     num.push(0);
    }
    num.push(1);
    console.log(num);
 });

//셔플 함수
const Shuffle = (num) => {
    // for(let i=0; i<num.length; i++){
    //     let idx1 = Math.floor(Math.random()*9);
    //     let idx2 = Math.floor(Math.random()*9);
        
    //     if(idx1 == idx2) continue;

    //     let temp = num[idx1];
    //     num[idx1] = num[idx2];
    //     num[idx2] = temp;
    //     return num;
    // }
    return num.sort(() => Math.random() - 0.5);
}

//성공,실패 메세지 함수
const msgText = (m) => {
    document.getElementById("msg").innerHTML = `${m}`;
}

// 초기화 함수
// const init = () => {
//     msgText('');
//     for(let i=1;i<=9;i++){
//         document.querySelector(`#box${i}`).innerHTML = '';
//     }
// }

//폭탄섞기
const boxShuffle = () => {  
    successFlag = true;
    shuffleFlag = true;
    cnt = 0;    //flag 및 cnt 초기화
    Shuffle(num);
    console.log(num);
    // init();
    for(let i=0;i<num.length;i++){  //섞기버튼으로 버튼을 빈칸으로 만듬.
        document.querySelector(`#box${i+1}`).innerHTML = '';
    }
    msgText('');
    // selNum = [];
}

//번호 선택
const show = (n) =>{
    if (!shuffleFlag){
        msgText("<h2>폭탄을 섞어주세요.</h2>");
        return;
    }
    if (!successFlag){  //successFlag = false일때 클릭 이벤트가 등장하기 전에 함수를 종료(클릭하지 못하는 효과)
        return;
    }
    if(num[n-1] == 1){
        if(cnt==8){     //cnt가 8이면 마지막 남은 칸이 폭탄이기 때문에 성공
            document.querySelector(`#box${n}`).innerHTML = '<img src="./images/hart.png">';
            msgText("성공");
        } else{
            document.querySelector(`#box${n}`).innerHTML = '<img src="./images/boom.png">';
            msgText("실패");
            successFlag = false;
        }
    } else {
        if(!document.querySelector(`#box${n}`).innerHTML){     //클릭한 버튼에 아무 값이 없을 때만 cnt 증가
            document.querySelector(`#box${n}`).innerHTML = '<img src="./images/hart.png">';
            cnt++;    
        } else {
            return;
        }        
    }

    // selNum을 활용해 마지막 남은 버튼 클릭하지 않아도 성공 메세지 띄우는 방법
    // selNum.push(n);
    // if (selNum.length == 8){
    //     let fn = [1,2,3,4,5,6,7,8,9].filter((i)=>!selNum.includes(i));
    //     console.log(fn[0]);
    //     document.getElementById(`box${fn[0]}`).innerHTML = `<img src = ./images/hart.png>`;
    //     msgText('성공');
    //     shuffleFlag = false;
    //   }
}


//박스를 선택한 순서를 기록하는 배열
// let selNum = [];

//박스를 선택한 개수를 기록하는 변수
let cnt = 0 ;

//폭탄이 섞였는지 체크하는 flag변수
let shuffleFlag = false;

//실패 체크 플레그(실패시 클릭 못하게 하기 위해)
let successFlag = true;
