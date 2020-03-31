let a=[];

for(let i=0;i<100;i++){
    a[i] = Math.random()*100+1;}

for(let i=0;i<a.length;i++){ 
    if(a[i]%2==0)
    a.pop();}

for(let i=0;i<a.length;i++){
     console.log(Math.floor(a[i]));
    }

