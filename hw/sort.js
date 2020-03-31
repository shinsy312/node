let a =[];

for(let i=0;i<100;i++)
    a[i] = Math.random()*100+1;
    
 a.sort(function(a,b){
 return a-b;});


for(let i=0;i<a.length;i++)
    console.log(Math.floor(a[i]));