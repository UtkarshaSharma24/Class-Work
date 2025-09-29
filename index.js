const waitForSomeTime = () =>{
    const start = Date.now();
    while(Date.now()-start < sec){
       
    }
}
const syncFun = ()=>{
    waitForSomeTime(5000);
    console.log("wait")
}
syncFun();
console.log("after invocation");