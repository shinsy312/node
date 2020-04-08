let persons=[];
let p={}

//객체를 persons 배열에 대입
for(let i=0;i<10;i++){
    p={name:"홍길동",age:16+i};
    persons[i]=p;
}

//persons 출력
for(let i=0;i<persons.length;i++){
    console.log(persons[i]);
}
