const waitForSomeTime = (sec) =>{
    setTimeout(()=>{
        console.log("inside");
    },sec);
}
const asyncFun = ()=>{
    waitForSomeTime(5000);
    console.log("wait")
}
asyncFun();
console.log("after invocation");