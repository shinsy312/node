//persons1 배열
let persons1=[];
let e={}
for(let i=0;i<10;i++){
    e={name:"홍길동",age:16+i};
    persons1[i]=e;
}

//persons1 배열의 값들을 persons2로 복사
let persons2=[];
for(let i=0;i<persons1.length;i++){
    persons2[i]=persons1[i];
}

//persons2 출력
for(let i=0;i<persons2.length;i++){
    console.log(persons2[i]);
}
