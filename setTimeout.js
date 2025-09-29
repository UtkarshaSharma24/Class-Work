const bookTicket = () =>{
    printMessage("welcome!");
    setTimeout(()=>{
        printMessage("Login has Sucessfull");
        setTimeout(()=>{
           printMessage("seat has choosen Sucessfull");
           setTimeout(()=>{
              printMessage("payment has done Sucessfull");
              setTimeout(()=>{
                printMessage("ticket has done confirmed");
              },2000);
           },4000);
        },3000);
    },2000);
    printMessage("thank you!")
}