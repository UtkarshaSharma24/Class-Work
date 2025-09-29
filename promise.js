const printMessage = (msg) => {
    console.log(msg);
};

const waitFun = (msg, time) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            printMessage(msg);
            resolve();
        }, time);
    });
};

const bookTicket = () => {
    printMessage("welcome");
    waitFun("login has been done successfully", 2000)
        .then(() => waitFun("seat has been chosen successfully", 3000))
        .then(() => waitFun("payment has been done successfully", 4000))
        .then(() => waitFun("ticket has been confirmed", 2000))
        .then(() => waitFun("thank you", 1000));
};

bookTicket();
