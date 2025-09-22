const student = {
    rollNo:  123,
    name: "uhf"
}

const jsonObj = JSON.stringify(student);
console.log(jsonObj);
console.log("type of jsonObj", string);

const jsonToObj = JSON.parse(objToJSON);
console.log(jsonToObj);