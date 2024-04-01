
const expression = document.querySelector("#expression");
const output = document.querySelector("#answer")
const historyList = document.getElementById("history-list");





let exp = "";
function makeExp(i) {
    const lastChar = exp.charAt(exp.length - 1);
    const lastNumber = exp.split(/[\+\-\*\/]/).pop();

    if ((i === '+' || i === '-' || i === '*' || i === '/') && (lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/')) {
        return;
    }
    else if (i === '.' && (lastChar === '.' || lastNumber.includes('.'))) {
        return;
    }
    exp = exp + i;
    expression.textContent = exp;
    
}


function calculate() {
    if (exp.endsWith('+') || exp.endsWith('-') || exp.endsWith('*') || exp.endsWith('/')) {
        output.textContent = 'Syntax Error';
        return;
        
    }
    const result = eval(exp);
    if (result !== undefined) {
        output.textContent = result;
        saveHistory(exp, result);
    } else {
        output.textContent = "_";
    }

}

function clearAll() {
    expression.textContent = "0";
    output.textContent = "_";
    exp = "";

}


function sqRoot() {
    const root = Math.sqrt(exp);
    output.textContent = root;
    const listItem = document.createElement("li");
    listItem.textContent = `sqrt of ${exp} = ${root}`;
    historyList.appendChild(listItem);


}
function backSpace() {
    exp = exp.slice(0, -1);
    expression.textContent = exp;
}

function calculatePercentage() {
    const percentage = eval(exp) / 100;
    output.textContent = percentage;
    const listItem = document.createElement("li");
    listItem.textContent = `${exp}% = ${percentage}`;
    historyList.appendChild(listItem);
}

function saveHistory(expression, result) {
    const listItem = document.createElement("li");
    listItem.textContent = `${expression} = ${result}`;
    historyList.appendChild(listItem);
}

function clearRecent() {
    const clear = historyList;
    clear.textContent = "";
}


