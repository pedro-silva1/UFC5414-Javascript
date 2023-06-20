# Funções

## Exercício 20

Crie um programa que leia uma frase do utilizador e mostre a frase com os caracteres invertidos.

=== "Javascript"

    ```js
    function ex20() {
      var euroValue1 = parseFloat(document.getElementById('ex20input2').value);
      ex20_2(euroValue1);
    }

    function ex20_2(euroValue2) {
      var conversionRate = parseFloat(document.getElementById('ex20input1').value);

      var dollarValue = euroValue2 * conversionRate;

      document.getElementById('ex20Result').textContent = 'Value in Dollars: $' + dollarValue.toFixed(2);
    }
    ```

=== "HTML"

    ```html
    <label for="ex20input1">Taxa de câmbio:</label><br>
    <input type="number" id="ex20input1">

    <label for="ex20input2">Valor em Euros a ser convertido:</label><br>
    <input type="number" id="ex20input2">

    <p id="ex20Result"></p>

    <button onclick="ex20()" class="md-button md-button--primary" style="margin-top: 10px">Testar</button>
    ```


<label for="ex20input1">Taxa de câmbio:</label><br>
<input type="number" id="ex20input1">

<label for="ex20input2">Valor em Euros a ser convertido:</label><br>
<input type="number" id="ex20input2">

<p id="ex20Result"></p>

<button onclick="ex20()" class="md-button md-button--primary" style="margin-top: 10px">Testar</button>

---

## Exercício 21

Crie uma função que receba um número e converta-o num número negativo.

=== "Javascript"

    ```js
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
    ```

=== "HTML"

    ```html
    <label for="ex21input">Insira um número:</label><br>
    <input type="number" id="ex21input">

    <p id="ex21Result"></p>

    <button onclick="ex21()" class="md-button md-button--primary" style="margin-top: 10px">Testar</button>
    ```


<label for="ex21input">Insira um número:</label><br>
<input type="number" id="ex21input">

<p id="ex21Result"></p>

<button onclick="ex21()" class="md-button md-button--primary" style="margin-top: 10px">Testar</button>

---

## Exercício 22

Crie uma função receba um valor (com imposto) e a percentagem de imposto e devolva o valor sem o imposto assim como o valor do imposto.

=== "Javascript"

    ```js
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
    ```

=== "HTML"

    ```html
    <label for="ex22input">Insira o valor total:</label><br>
    <input type="number" id="ex22input">

    <label for="ex22input2">Insira o valor do imposto em percentagem:</label><br>
    <input type="number" id="ex22input2">

    <p id="ex22Result"></p>
    <p id="ex22Result2"></p>
    ```


<label for="ex22input">Insira o valor total:</label><br>
<input type="number" id="ex22input">

<label for="ex22input2">Insira o valor do imposto em percentagem:</label><br>
<input type="number" id="ex22input2">

<p id="ex22Result"></p>
<p id="ex22Result2"></p>

<button onclick="ex22()" class="md-button md-button--primary" style="margin-top: 10px">Testar</button>

---

## Exercício 23

Crie uma função que receba um valor e a percentagem de imposto e devolva o valor com o imposto.

=== "Javascript"

    ```js
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
    ```

=== "HTML"

    ```html
    <label for="ex23input">Insira o valor:</label><br>
    <input type="number" id="ex23input">

    <label for="ex23input2">Insira o valor do imposto em percentagem:</label><br>
    <input type="number" id="ex23input2">

    <p id="ex23Result"></p>
    <p id="ex23Result2"></p>

    <button onclick="ex23()" class="md-button md-button--primary" style="margin-top: 10px">Testar</button>
    ```


<label for="ex23input">Insira o valor:</label><br>
<input type="number" id="ex23input">

<label for="ex23input2">Insira o valor do imposto em percentagem:</label><br>
<input type="number" id="ex23input2">

<p id="ex23Result"></p>
<p id="ex23Result2"></p>

<button onclick="ex23()" class="md-button md-button--primary" style="margin-top: 10px">Testar</button>

---

## Exercício 24

Crie uma função que gere uma password com letras aleatórias. A quantidade de caracteres deverá ser definida pelo utilizador.

=== "Javascript"

    ```js
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
    ```

=== "HTML"

    ```html
    <label for="ex24input">Insira o valor:</label><br>
    <input type="number" id="ex24input">

    <p id="ex24Result"></p>

    <button onclick="ex24()" class="md-button md-button--primary" style="margin-top: 10px">Testar</button>
    ```


<label for="ex24input">Insira o valor:</label><br>
<input type="number" id="ex24input">

<p id="ex24Result"></p>

<button onclick="ex24()" class="md-button md-button--primary" style="margin-top: 10px">Testar</button>

---

## Exercício 25

Crie uma função que devolva o maior número de um array com 100 números aleatórios.

=== "Javascript"

    ```js
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
    ```

=== "HTML"

    ```html
    <p id="ex25Result"></p>

    <button onclick="ex25()" class="md-button md-button--primary" style="margin-top: 10px">Testar</button>
    ```

<p id="ex25Result"></p>

<button onclick="ex25()" class="md-button md-button--primary" style="margin-top: 10px">Testar</button>

---

## Exercício 26

Crie uma função que devolva o menor número de um array com 100 números aleatórios.

=== "Javascript"

    ```js
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
    ```

=== "HTML"

    ```html
    <p id="ex26Result"></p>

    <button onclick="ex26()" class="md-button md-button--primary" style="margin-top: 10px">Testar</button>
    ```

<p id="ex26Result"></p>

<button onclick="ex26()" class="md-button md-button--primary" style="margin-top: 10px">Testar</button>

---

## Exercício 27

Crie uma função que receba a distância total (em km) percorrida por um automóvel e a quantidade de combustível (em litros) consumida para percorrê-la, e devolva o consumo médio de combustível.

=== "Javascript"

    ```js
    function ex27() {
      var totalDistance = parseFloat(document.getElementById('ex27input').value);
      var fuelSpent = parseFloat(document.getElementById('ex27input2').value);

      var averageConsumption = fuelSpent / totalDistance;

      document.getElementById('ex27Result').textContent = 'Consumo médio de combustível: ' + averageConsumption.toFixed(2) + ' L/km';
    }
    ```

=== "HTML"

    ```html
    <label for="ex27input">Insira a distancia percorrida:</label><br>
    <input type="number" id="ex27input">

    <label for="ex27input2">Insira os litros gastos na viagem:</label><br>
    <input type="number" id="ex27input2">

    <p id="ex27Result"></p>

    <button onclick="ex27()" class="md-button md-button--primary" style="margin-top: 10px">Testar</button>
    ```


<label for="ex27input">Insira a distancia percorrida:</label><br>
<input type="number" id="ex27input">

<label for="ex27input2">Insira os litros gastos na viagem:</label><br>
<input type="number" id="ex27input2">

<p id="ex27Result"></p>

<button onclick="ex27()" class="md-button md-button--primary" style="margin-top: 10px">Testar</button>

---

## Exercício 28

Crie uma função que receba dois valores inteiros e apresente a diferença do maior pelo menor.

=== "Javascript"

    ```js
    function ex28() {
      var number1 = parseInt(document.getElementById('ex28input').value);
      var number2 = parseInt(document.getElementById('ex28input2').value);

      var difference = Math.abs(number1 - number2);

      document.getElementById('ex28Result').textContent = 'Diferença: ' + difference;
    }
    ```

=== "HTML"

    ```html
    <label for="ex28input">Insira o primeiro número:</label><br>
    <input type="number" id="ex28input">

    <label for="ex28input2">Insira o segundo número:</label><br>
    <input type="number" id="ex28input2">

    <p id="ex28Result"></p>

    <button onclick="ex28()" class="md-button md-button--primary" style="margin-top: 10px">Testar</button>
    ```


<label for="ex28input">Insira o primeiro número:</label><br>
<input type="number" id="ex28input">

<label for="ex28input2">Insira o segundo número:</label><br>
<input type="number" id="ex28input2">

<p id="ex28Result"></p>

<button onclick="ex28()" class="md-button md-button--primary" style="margin-top: 10px">Testar</button>

---

## Exercício 29

Crie um programa que simule o lançamento de um dado 35000 vezes e exiba a quantidade de vezes que saiu cada número.

=== "Javascript"

    ```js
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
    ```

=== "HTML"

    ```html
    <p id="ex29Result"></p>

    <button onclick="ex29()" class="md-button md-button--primary" style="margin-top: 10px">Testar</button>
    ```

<p id="ex29Result"></p>

<button onclick="ex29()" class="md-button md-button--primary" style="margin-top: 10px">Testar</button>

---
