let count=0;

function id(){
    count++;
    console.log(new Date());
    if(count==10)
    clearInterval(iid);
}

let iid = setInterval(id,1000);