const subject = ["Andi", "Mariana", "Lllame"];
const verb = ["ama", "olvidó", "perdió", "compró"];
const object = ["chela", "pizza", "fiesta"];

function select(array){
    const element = Math.floor(Math.random() * array.length);
    return array[element];
};

function chain(){
    const phrase = select(subject) + " " + select(verb) + " " + select(object);
    console.log(phrase);
};

chain();