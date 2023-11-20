function getSum(a, b, c) {
    const sum = a + b / c;
    return sum;
}
const result = getSum(10, 40, 20);
console.log(result);

//------------------------

function getGreetingMessage(userName, companyName) {
    return "Hello," + userName + "! Welcome " + companyName;
}

const message = getGreetingMessage('Valeri', 'it-incubator');
console.log(message);

