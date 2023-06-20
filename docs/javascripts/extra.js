
function ex1() {
  alert("É preciso fazer todos os exercícios para aprender");
}


function ex2() {
  let result = confirm("Deseja continuar a realizar os exercícios?");

  if (result) {
    alert("Bem escolhido");
  } else {
    alert("Já chega de JavaScript");
  }
}

function ex3() {
  var nome = prompt("Insira o nome do formando:");

  if (nome !== null && nome !== "") {
    let mensagem = "O Formando " + nome + " está aprovado.";
    document.getElementById("ex3").innerHTML = mensagem;
  }
}


function ex4() {
  let nome = document.getElementById("ex4Nome").value;
  let idade = document.getElementById("ex4Idade").value;

  if (nome == "" && idade == "") {
    var mensagem = "Os campos estão vazios.";
  }
  else {
    var mensagem = "O Formando " + nome + " tem " + idade + " anos.";
  }

  document.getElementById("ex4").innerHTML = mensagem;
}


function ex5() {
  let nome = prompt("Insira o seu nome:");
  let clube = prompt("Insira o seu clube de futebol:");

  console.log("Eu sou o " + nome + " e sou adepto do " + clube + ".");
}

function ex6() {
  let nome = document.getElementById("ex6Nome").value;
  let civil = document.getElementById("ex6Civil").value;
  let idade = document.getElementById("ex6Idade").value;
  let altura = document.getElementById("ex6Altura").value;
  let socio = document.getElementById("ex6Socio").value;
  let email = document.getElementById("ex6Email").value;

  let mensagem = "Nome: " + nome + ".<br/>" +
    "Estado Civil: " + civil + ".<br/>" +
    "Idade: " + idade + ".<br/>" +
    "Altura: " + altura + ".<br/>" +
    "Sócio: " + socio + ".<br/>" +
    "Email: " + email + ".";

  document.getElementById("ex6").innerHTML = mensagem;
}


function ex7() {
  var data = new Date();
  var dia = data.getDate();
  var mes = data.getMonth() + 1;
  var ano = data.getFullYear();

  var dataFormatada = "<b>Data atual:</b> " + dia + "/" + mes + "/" + ano;
  document.getElementById("ex7").innerHTML = dataFormatada;
}

function ex8() {
  var hora = new Date().getHours();
  var x;

  if (hora >= 0 && hora < 12) {
    x = "Bom dia";
  } else if (hora >= 12 && hora < 18) {
    x = "Boa Tarde";
  } else {
    x = "Boa Noite";
  }

  document.getElementById("ex8").innerHTML = x;
}


function ex9() {
  window.print();
}


function ex10() {
  let URL = document.URL;

  document.getElementById("ex10").innerHTML = "<b>URL:</b> " + URL;
}

function ex11() {
  var nr = document.getElementById('nr').value;
  var result = document.getElementById('ex11Result');

  if (nr > 0) {
    result.textContent = "O número é positivo.";
  } else if (nr < 0) {
    result.textContent = "O número é negativo.";
  } else {
    result.textContent = "O número é zero.";
  }
}

function ex12() {
  let nr1 = document.getElementById('nr1').value;
  let nr2 = document.getElementById('nr2').value;
  let result = document.getElementById('ex12Result');

  if (nr1 > nr2) {
    result.textContent = "Primeiro número é maior.";
  } else if (nr1 < nr2) {
    result.textContent = "Primeiro número é menor.";
  } else {
    result.textContent = "Os números são iguais.";
  }
}

var palpiteCorreto = 0;
var palpiteIncorreto = 0;

function ex13() {
  var palpite = parseInt(document.getElementById('palpite').value);
  var resultElement = document.getElementById('ex13Result');
  var guessCountElement = document.getElementById('ex13GuessCount');
  var randomNumber = Math.floor(Math.random() * 6) + 1;

  if (palpite >= 1 && palpite <= 6) {
    if (palpite === randomNumber) {
      resultElement.textContent = "Palpite correto! O número aleatório era " + randomNumber + ".";
      palpiteCorreto++;
    } else {
      resultElement.textContent = "Palpite Incorreto! O número aleatório era " + randomNumber + ".";
      palpiteIncorreto++;
    }

    guessCountElement.textContent = "Palpites corretos: " + palpiteCorreto + ", Palpites Incorretos: " + palpiteIncorreto + ".";
  } else {
    resultElement.textContent = "Palpite Inválido. Por favor insira um número entre 1 e 6";
  }
}


function ex14() {
  var number1Input = document.getElementById('ex14Nr1').value.trim();
  var number2Input = document.getElementById('ex14Nr2').value.trim();
  var number3Input = document.getElementById('ex14Nr3').value.trim();
  var resultElement = document.getElementById('ex14Result');

  if (number1Input === "" || number2Input === "" || number3Input === "") {
    resultElement.textContent = "Por favor insira todos os números.";
    return;
  }

  var number1 = parseFloat(number1Input);
  var number2 = parseFloat(number2Input);
  var number3 = parseFloat(number3Input);

  if (isNaN(number1) || isNaN(number2) || isNaN(number3)) {
    resultElement.textContent = "Por favor insira valores válidos.";
    return;
  }

  var numbers = [number1, number2, number3];
  numbers.sort(function (a, b) {
    return a - b;
  });

  resultElement.textContent = "Ordem crescente: " + numbers.join(", ");
}


function ex15() {
  var number1Input = document.getElementById('ex15Nr1').value.trim();
  var number2Input = document.getElementById('ex15Nr2').value.trim();
  var number3Input = document.getElementById('ex15Nr3').value.trim();
  var resultElement = document.getElementById('ex15Result');

  if (number1Input === "" || number2Input === "" || number3Input === "") {
    resultElement.textContent = "Por favor insira todos os números.";
    return;
  }

  var number1 = parseFloat(number1Input);
  var number2 = parseFloat(number2Input);
  var number3 = parseFloat(number3Input);

  if (isNaN(number1) || isNaN(number2) || isNaN(number3)) {
    resultElement.textContent = "Por favor insira valores válidos.";
    return;
  }

  var closestNumber = findClosestTo100(number1, number2, number3);

  resultElement.textContent = "O número mais perto de 100 é: " + closestNumber;
}

function findClosestTo100(num1, num2, num3) {
  var diff1 = Math.abs(100 - num1);
  var diff2 = Math.abs(100 - num2);
  var diff3 = Math.abs(100 - num3);

  if (diff1 <= diff2 && diff1 <= diff3) {
    return num1;
  } else if (diff2 <= diff1 && diff2 <= diff3) {
    return num2;
  } else {
    return num3;
  }
}


function ex16() {
  var numberInput = parseFloat(document.getElementById('ex16Nr1').value);
  var resultElement = document.getElementById('ex16Result');

  if (isNaN(numberInput) || numberInput < 0 || numberInput > 20) {
    resultElement.textContent = "Por favor insira um valor válido entre 0 e 20.";
    return;
  }

  var evaluation = "";

  if (numberInput >= 0 && numberInput < 5) {
    evaluation = "Muito insuficiente";
  } else if (numberInput >= 5 && numberInput < 9.5) {
    evaluation = "Insuficiente";
  } else if (numberInput >= 9.5 && numberInput < 14) {
    evaluation = "Suficiente";
  } else if (numberInput >= 14 && numberInput < 16) {
    evaluation = "Bom";
  } else if (numberInput >= 16 && numberInput <= 20) {
    evaluation = "Muito bom";
  }

  resultElement.textContent = "Avaliação: " + evaluation;
}

function ex17() {
  var sentence = document.getElementById('ex17input').value.trim();
  var resultElement = document.getElementById('ex17Result');

  if (sentence === "") {
    resultElement.textContent = "Escreva uma frase.";
    return;
  }

  var modifiedSentence = ex17_2(sentence);

  resultElement.textContent = "Frase modificada: " + modifiedSentence;
}

function ex17_2(sentence) {
  var words = sentence.split(" ");
  var modifiedWords = [];

  for (var i = 0; i < words.length; i++) {
    if (words[i].toLowerCase() !== "não") {
      modifiedWords.push(words[i]);
    }
  }

  return modifiedWords.join(" ");
}

function ex18() {
  var phrase = document.getElementById('ex18input').value;
  var resultElement = document.getElementById('ex18Result');
  var digitCount = 0;

  for (var i = 0; i < phrase.length; i++) {
    if (!isNaN(parseInt(phrase[i]))) {
      digitCount++;
    }
  }

  resultElement.textContent = 'Número de digitos: ' + digitCount;
}

function ex19() {
  var phrase = document.getElementById('ex19input').value;
  var invertedPhrase = '';

  for (var i = phrase.length - 1; i >= 0; i--) {
    invertedPhrase += phrase[i];
  }

  document.getElementById('ex19Result').textContent = 'Frase invertida: ' + invertedPhrase;
}

function ex20() {
  var euroValue1 = parseFloat(document.getElementById('ex20input2').value);
  ex20_2(euroValue1);
}

function ex20_2(euroValue2) {
  var conversionRate = parseFloat(document.getElementById('ex20input1').value);

  var dollarValue = euroValue2 * conversionRate;

  document.getElementById('ex20Result').textContent = 'Value in Dollars: $' + dollarValue.toFixed(2);
}

function ex21() {

  var number = document.getElementById('ex21input').value;

  ex21_2(number)
}

function ex21_2(number2) {


  if (isNaN(number2)) {
    document.getElementById('ex21Result').textContent = 'Número inválido.';
    return;
  }


  if (number2 < 0) {
    document.getElementById('ex21Result').textContent = 'O número já é negativo: ' + number2;
    return;
  }

  var negativeNumber = -number2;

  document.getElementById('ex21Result').textContent = 'Número negativo: ' + negativeNumber;
}

function ex22() {
  var valueWithTax = parseFloat(document.getElementById('ex22input').value);
  var taxPercentage = parseFloat(document.getElementById('ex22input2').value);

  ex22_2(valueWithTax, taxPercentage)

}

function ex22_2(valueWithTax, taxPercentage) {

  var taxAmount = (valueWithTax * taxPercentage) / 100;
  var valueWithoutTax = valueWithTax - taxAmount;

  document.getElementById('ex22Result').textContent = 'Valor sem imposto: ' + valueWithoutTax.toFixed(2);
  document.getElementById('ex22Result2').textContent = 'Valor do imposto: ' + taxAmount.toFixed(2);
}



function ex23() {
  var value = parseFloat(document.getElementById('ex23input').value);
  var taxPercentage = parseFloat(document.getElementById('ex23input2').value);

  ex23_2(value, taxPercentage)

}

function ex23_2(value, taxPercentage) {

  var taxAmount = (value * taxPercentage) / 100;
  var valueWithTax = value + taxAmount;

  document.getElementById('ex23Result').textContent = 'Valor com imposto: ' + valueWithTax.toFixed(2);
  document.getElementById('ex23Result2').textContent = 'Valor do imposto: ' + taxAmount.toFixed(2);
}

function ex24() {
  var characterList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var passwordLength = parseInt(document.getElementById('ex24input').value);

  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * characterList.length);
    password += characterList.charAt(randomIndex);
  }

  document.getElementById('ex24Result').textContent = 'Password Gerada: ' + password;
}


function ex25() {
  var numbers = [];

  // gerar array
  for (var i = 0; i < 100; i++) {
    var randomNumber = Math.floor(Math.random() * 1000) + 1;
    numbers.push(randomNumber);
  }

  var maxNumber = Math.max(...numbers);
  document.getElementById('ex25Result').textContent = 'O maior número é: ' + maxNumber;
}

function ex26() {
  var numbers = [];

  // gerar array
  for (var i = 0; i < 100; i++) {
    var randomNumber = Math.floor(Math.random() * 1000) + 1;
    numbers.push(randomNumber);
  }

  var minNumber = Math.min(...numbers);
  document.getElementById('ex26Result').textContent = 'O menor número é: ' + minNumber;
}

function ex27() {
  var totalDistance = parseFloat(document.getElementById('ex27input').value);
  var fuelSpent = parseFloat(document.getElementById('ex27input2').value);

  var averageConsumption = fuelSpent / totalDistance;

  document.getElementById('ex27Result').textContent = 'Consumo médio de combustível: ' + averageConsumption.toFixed(2) + ' L/km';
}


function ex28() {
  var number1 = parseInt(document.getElementById('ex28input').value);
  var number2 = parseInt(document.getElementById('ex28input2').value);

  var difference = Math.abs(number1 - number2);

  document.getElementById('ex28Result').textContent = 'Diferença: ' + difference;
}

function ex29() {
  var diceCounts = [0, 0, 0, 0, 0, 0];


  for (var i = 0; i < 35000; i++) {
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    diceCounts[diceNumber - 1]++;
  }

  var output = '';

  for (var i = 0; i < diceCounts.length; i++) {
    output += '<b>Número ' + (i + 1) + ': </b>' + diceCounts[i] + '<br>';
  }

  document.getElementById('ex29Result').innerHTML = output;
}


function ex30() {
  var userInput = document.getElementById('ex30input').value;
  var resultText = document.getElementById('ex30Result');

  if (userInput.trim() === "") {
    resultText.textContent = 'Erro! Input está vazio!';
  } else if (isNaN(userInput)) {
    resultText.textContent = 'Erro! Input não é um número!';
  } else {
    resultText.textContent = 'Input é um número.';
  }
}

function ex31() {
  var password = document.getElementById('ex31input').value;
  var confirmPassword = document.getElementById('ex31input2').value;
  var resultText = document.getElementById('ex31Result');

  if (password !== confirmPassword) {
    resultText.textContent = 'Erro! Passwords são diferentes!';
  } else {
    resultText.textContent = 'Passwords validadas.';
  }
}

function ex32() {
  var canvas = document.getElementById('ex32Canvas');
  var ctx = canvas.getContext('2d');

  ctx.fillStyle = 'blue';
  ctx.fillRect(50, 50, 200, 100);

  canvas.style.display = 'block';
}

function ex33() {
  var canvas = document.getElementById('ex33Canvas');
  var ctx = canvas.getContext('2d');

  ctx.fillStyle = 'red';
  ctx.beginPath();
  ctx.arc(150, 100, 50, 0, 2 * Math.PI);
  ctx.fill();

  canvas.style.display = 'block';
}

function ex34() {
  var emailInput = document.getElementById('ex34input').value;
  var resultText = document.getElementById('ex34Result');

  var result = "";

  const atIndex = emailInput.indexOf("@");

  if (atIndex > 1) {
    const emailFirstPart = emailInput.substr(0, atIndex);
    const domain = emailInput.substr(atIndex);

    const halfHiddenEmail = emailFirstPart.substr(0, emailFirstPart.length / 2) + "......";
    result += halfHiddenEmail + domain;
  }
  else {
    result = "Endereço de email inválido"
  }

  resultText.textContent = result;
}

function ex35() {
  var nameInput = document.getElementById('ex35input').value;
  var resultText = document.getElementById('ex35Result');

  var wholeName = nameInput;

  var firstLetter = nameInput.charAt(0);

  var lastLetter = nameInput.charAt(nameInput.length - 1);

  var firstToThird = nameInput.substring(0, 3);

  var allExceptFirst = nameInput.substring(1);

  var lastTwoLetters = nameInput.slice(-2);

  var namesSeparatedBySpaces = nameInput.split("");

  var output = "Nome completo: " + wholeName + "<br>";
  output += "Primeira letra do nome: " + firstLetter + "<br>";
  output += "Ultima letra do nome: " + lastLetter + "<br>";
  output += "Da primeira letra até à 3ª: " + firstToThird + "<br>";
  output += "Todas as letras menos a primeira: " + allExceptFirst + "<br>";
  output += "Duas ultimas letras: " + lastTwoLetters + "<br>";
  output += "odos os nomes separados por espaços: " + namesSeparatedBySpaces.join(" ");

  resultText.innerHTML = output;
}

function ex36() {
  var numLines = parseInt(document.getElementById('ex36input').value);
  var resultText = document.getElementById('ex36Result');
  var pattern = '';

  for (var i = 1; i <= numLines; i++) {
    for (var j = 1; j <= i; j++) {
      pattern += '* ';
    }
    pattern += '<br>';
  }

  resultText.innerHTML = pattern;
}

function ex37() {
  var numInput = parseInt(document.getElementById('ex37input').value);
  var resultText = document.getElementById('ex37Result');
  var sum = 0;

  for (var i = 1; i <= numInput; i++) {
    sum += i;
  }

  resultText.textContent = "A soma é: " + sum;
}

function ex38() {
  var resultText = document.getElementById('ex38Result');
  var multiples = '';

  for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
      multiples += i + ', ';
    }
  }

  multiples = multiples.slice(0, -2);

  resultText.innerHTML = "Múltiplos de 3 entre 1 e 100: <br>" + multiples;
}

function ex39() {
  var dateInput = document.getElementById('ex39input').value;
  var resultText = document.getElementById('ex39Result');

  var date = new Date(dateInput);
  var month = date.toLocaleString('default', { month: 'long' });

  resultText.textContent = "O mês é: " + month;
}

function ex40() {
  var entryTimeValue = document.getElementById('ex40input').value;
  var exitTimeValue = document.getElementById('ex40input2').value;
  var resultText = document.getElementById('ex40Result');

  if (entryTimeValue < exitTimeValue) {
    resultText.textContent = "Horas válidas";
  } else {
    resultText.textContent = "Erro! Horas inválidas";
  }
}

function ex41() {
  var dateInput = document.getElementById('ex41input').value;
  var resultText = document.getElementById('ex41Result');

  var date = new Date(dateInput);
  var dayOfWeek = date.toLocaleDateString(undefined, { weekday: 'long' });

  resultText.textContent = "Dia da semana: " + dayOfWeek;
}

function ex42() {
  var dobInput = document.getElementById('ex42input').value;
  var resultText = document.getElementById('ex42Result');

  var dob = new Date(dobInput);
  var today = new Date();
  var age = today.getFullYear() - dob.getFullYear();

  // Check if the birthday hasn't occurred yet this year
  if (
    today.getMonth() < dob.getMonth() ||
    (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())
  ) {
    age--;
  }

  resultText.textContent = "Idade: " + age;
}

function ex43() {
  var competitor1Value = parseFloat(document.getElementById('ex43input').value);
  var competitor2Value = parseFloat(document.getElementById('ex43input2').value);
  var competitor3Value = parseFloat(document.getElementById('ex43input3').value);
  var articleValue = parseFloat(document.getElementById('ex43input4').value);
  var resultText = document.getElementById('ex43Result');

  // Calculate the differences between competitor values and article value
  var diff1 = articleValue - competitor1Value;
  var diff2 = articleValue - competitor2Value;
  var diff3 = articleValue - competitor3Value;

  // Initialize the closest value to a large negative number
  var closestValue = -Infinity;

  // Find the closest value that does not exceed the article value
  if (diff1 >= 0 && diff1 > closestValue) {
    closestValue = competitor1Value;
  }
  if (diff2 >= 0 && diff2 > closestValue) {
    closestValue = competitor2Value;
  }
  if (diff3 >= 0 && diff3 > closestValue) {
    closestValue = competitor3Value;
  }

  // Display the closest value
  resultText.textContent = "Closest value: " + closestValue;
}

function ex44() {

}

function ex45() {
  var numeros = [];
  for (var i = 0; i < 100; i++) {
    numeros.push(Math.floor(Math.random() * 10) + 1);
  }

  var ocorrencias = {};

  for (var i = 0; i < numeros.length; i++) {
    var numero = numeros[i];

    if (ocorrencias[numero]) {
      ocorrencias[numero]++;
    } else {
      ocorrencias[numero] = 1;
    }
  }

  var arrayAExibir = "<table><tbody>";
  var contador = 0;

  for (var i = 0; i < numeros.length; i++) {
    if (contador == 0) {
      arrayAExibir += "<tr>"
    }

    arrayAExibir += "<td>" + numeros[i] + "</td>";

    contador++;

    if (contador == 10) {
      arrayAExibir += "</tr>"
      contador = 0;
    }
  }

  arrayAExibir += "</tbody></table>";
  var resultado = arrayAExibir;

  for (var numero in ocorrencias) {
    resultado += "O número " + numero + " ocorre " + ocorrencias[numero] + " vezes.<br/>";
  }

  document.getElementById("ex45Result").innerHTML = resultado;
}

function ex46() {
  var array = [];
  for (var i = 0; i < 100; i++) {
    array.push(Math.floor(Math.random() * 50) + 1);
  }

  var unicNrs = [];

  for (var i = 0; i < array.length; i++) {
    var number = array[i];

    if (unicNrs.indexOf(number) === -1) {
      unicNrs.push(number);
    }
  }

  var result = "Array original:<br/> " + array.join(", ") + "<br/><br/>" +
    "Array sem números repetidos:<br/> " + unicNrs.join(", ");

  document.getElementById("ex46Result").innerHTML = result;
}

function ex47() {
  var array = [];
  for (var i = 0; i < 100; i++) {
    array.push(Math.floor(Math.random() * 100) + 1);
  }

  var count = {};
  var nrMoreFrequent;
  var maxFrequency = 0;

  for (var i = 0; i < array.length; i++) {
    var nr = array[i];
    count[nr] = (count[nr] || 0) + 1;
  }

  for (var nr in count) {
    if (count[nr] > maxFrequency) {
      maxFrequency = count[nr];
      nrMoreFrequent = nr;
    }
  }

  var result = "Array original:<br/> " + array.join(", ") + "<br/><br/>" +
    "Número mais frequente: " + nrMoreFrequent;

  document.getElementById("ex47Result").innerHTML = result;
}

function ex48() {
  var number = parseInt(prompt("Insira um número maior que 1000:"));
  var result = "Resultado: ";

  if (isNaN(number) || number < 1000) {
    result = "Valor inválido. <br/>" +
      "O número deve ser maior que 1000.";
  } else {
    var nrString = number.toString();

    for (var i = 0; i < nrString.length; i++) {
      result += nrString[i];

      if (nrString[i] % 2 === 0 && nrString[i + 1] % 2 === 0) {
        result += "-";
      }
    }
  }

  document.getElementById("ex48Result").innerHTML = result;
}

function ex49() {
  var array1 = [];
  var array2 = [];

  for (var i = 0; i < 10; i++) {
    array1.push(Math.floor(Math.random() * 50) + 1);
    array2.push(Math.floor(Math.random() * 50) + 1);
  }

  var arraySum = [];

  for (var i = 0; i < array1.length; i++) {
    arraySum.push(array1[i] + array2[i]);
  }

  var result = "Array 1 = [" + array1.join(", ") + "] <br/>" +
    "Array 2 = [" + array2.join(", ") + "] <br/>" +
    "Resultado = [" + arraySum.join(", ") + "]";

  document.getElementById("ex49Result").innerHTML = result;
}

function ex50() {
  var matrix = [];
  var count = 0;

  for (var i = 0; i < 10; i++) {
    var row = [];
    for (var j = 0; j < 10; j++) {
      var randomNumber = Math.floor(Math.random() * 100) + 1;
      row.push(randomNumber);

      if (randomNumber >= 10 && randomNumber <= 20) {
        count++;
      }
    }
    matrix.push(row);
  }

  var matrixDiv = document.getElementById("matrixEx50");
  matrixDiv.innerHTML = "Matrix:<br>" + JSON.stringify(matrix);

  var countDiv = document.getElementById("countEx50");
  countDiv.innerHTML = "Count of elements between 10 and 20: " + count;
}

function ex51() {
  var input = prompt("Insira uma frase/palavra:");

  var specialCharsRegex = /[!@#$%^&*(),.?":{}|<>]/g;

  var result = input.replace(specialCharsRegex, "");

  alert("Resultado: " + result);
}

function ex52() {

  var numDecimal = parseFloat(document.getElementById("ex52input").value);
  var numBinary = numDecimal.toString(2);

  var result = "Decimal: " + numDecimal + "<br/>" +
    "Binário: " + numBinary;

  document.getElementById("ex52Result").innerHTML = result;
}

function ex53() {
  var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

  var bodyElement = document.body;
  bodyElement.style.backgroundColor = randomColor;
}

function ex54() {
  var color = document.getElementById("ex54input").value;
  var paragraph = document.getElementById("ex54Result");
  paragraph.style.background = color;
}

function ex55() {
  rn = window.prompt("Insira número de linhas", 1);
  cn = window.prompt("Insira número de colunas", 1);

  for (var r = 0; r < parseInt(rn, 10); r++) {
    var x = document.getElementById('myTableEx55').insertRow(r);
    for (var c = 0; c < parseInt(cn, 10); c++) {
      var y = x.insertCell(c);
      y.innerHTML = "Linha-" + r + " Coluna-" + c;
    }
  }
}

function ex57() {
  document.body.setAttribute("onresize", "getSize()");

  var height = window.innerHeight;
  var width = window.innerWidth;

  var resultElement = document.getElementById("ex57Result");
  resultElement.innerHTML = "Altura: " + height + "px <br>" + "Largura: " + width + "px";
}

function bubbleSort(arr) {
  var len = arr.length;
  for (var i = 0; i < len - 1; i++) {
    for (var j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

function ex58() {
  var numbers = [];
  for (var i = 0; i < 100; i++) {
    numbers.push(Math.floor(Math.random() * 1000));
  }

  var arr = [...numbers];

  var sortedNumbers = bubbleSort(arr);
  var resultElement = document.getElementById("ex58Result");
  var resultElement2 = document.getElementById("ex58Result2");

  resultElement.innerHTML = "Array original:<br> " + numbers.join(", ");
  resultElement2.innerHTML = "Array ordenado:<br> " + sortedNumbers.join(", ");
}

function insertionSort(arr) {
  var len = arr.length;
  for (var i = 1; i < len; i++) {
    var key = arr[i];
    var j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
  return arr;
}

function ex59() {
  var numbers = [];
  for (var i = 0; i < 100; i++) {
    numbers.push(Math.floor(Math.random() * 1000));
  }

  var arr = [...numbers];

  var sortedNumbers = insertionSort(arr);
  var resultElement = document.getElementById("ex59Result");
  var resultElement2 = document.getElementById("ex59Result2");

  resultElement.innerHTML = "Array original:<br> " + numbers.join(", ");
  resultElement2.innerHTML = "Array ordenado:<br> " + sortedNumbers.join(", ");

}

function selectionSort(arr) {
  var len = arr.length;
  for (var i = 0; i < len - 1; i++) {
    var minIndex = i;
    for (var j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    var temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  return arr;
}

function ex60() {
  var numbers = [];
  for (var i = 0; i < 100; i++) {
    numbers.push(Math.floor(Math.random() * 1000));
  }

  var arr = [...numbers];

  var sortedNumbers = selectionSort(arr);
  var resultElement = document.getElementById("ex60Result");
  var resultElement2 = document.getElementById("ex60Result2");

  resultElement.innerHTML = "Array original:<br> " + numbers.join(", ");
  resultElement2.innerHTML = "Array ordenado:<br> " + sortedNumbers.join(", ");
}