const divide=(firstnumber,secondnumber) =>{
    return new Promise((resolve,reject) => {

        if(secondnumber === 0){
            reject("Division by Zero.");
        }else{
            resolve(firstnumber / secondnumber);
        }
    });
};

const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const btn = document.getElementById("btn");
const result = document.getElementById("result");
const testCases = document.getElementById("testCases");

btn.addEventListener("click", () =>{
    const firstnumber = Number(num1.value);
    const secondnumber = Number(num2.value);

    if(num1.value === "" || num2.value === ""){
        result.textContent = "Please enter both numbers";
        return;
    }

    console.log(`Dividing ${firstnumber} by ${secondnumber}...`);

    divide(firstnumber,secondnumber)
    .then(answer => {
        result.textContent = "Result: "+answer;
    })
    .catch(error => {
        result.textContent = "Error: "+error;
    });
});

const cases = [
    [10,2],
    [20,4],
    [15,3],
    [7,2],
    [10,0],
];

cases.forEach(([firstnumber,secondnumber]) =>{

    const testCase = document.createElement("div");
    testCase.className = "test-case";

    divide(firstnumber,secondnumber)
    .then(answer => {
        testCase.textContent = 
        `Dividing ${firstnumber} by ${secondnumber}: Result: ${answer}`;
    })
    .catch(error => {
        testCase.textContent = 
        `Dividing ${firstnumber} by ${secondnumber}: Error: ${error}`;
    });
    testCases.appendChild(testCase);
});