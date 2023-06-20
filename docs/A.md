# Instruções de Decisão

## Exercício 11

Escreva um programa que leia um número inteiro do utilizador e mostre se é positivo ou negativo. 

```js
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
```

<label for="nr">Insira um número inteiro:</label><br>
<input type="number" id="nr">

<p id="ex11Result"></p>

<button onclick="ex11()" class="md-button md-button--primary" style="margin-top: 10px">Testar</button>

---

## Exercício 12

Escreva um programa que leia dois números ao utilizador e mostre qual deles é o maior. 

```js
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
```

<label for="nr1">Insira o primeiro número inteiro:</label><br>
<input type="number" id="nr1">

<label for="nr2">Insira o primeiro número inteiro:</label><br>
<input type="number" id="nr2">

<p id="ex12Result"></p>

<button onclick="ex12()" class="md-button md-button--primary" style="margin-top: 10px">Testar</button>

---

## Exercício 13

Crie um programa que gera um número aleatório entre 1 e 6 e pergunte ao utilizador qual é o seu palpite. Mostre a quantidade de palpites certos/errados.

=== "Javascript"

    ```js
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
    ```

=== "HTML"

    ```html
    <label for="palpite">Insira um número entre 1 e 6:</label><br>
    <input type="number" id="palpite">

    <p id="ex13Result"></p>
    <p id="ex13GuessCount"></p>

    <button onclick="ex13()" class="md-button md-button--primary" style="margin-top: 10px">Testar</button>
    ```


<label for="palpite">Insira um número entre 1 e 6:</label><br>
<input type="number" id="palpite">

<p id="ex13Result"></p>
<p id="ex13GuessCount"></p>

<button onclick="ex13()" class="md-button md-button--primary" style="margin-top: 10px">Testar</button>

---

## Exercício 14

Crie um programa que leia 3 números do utilizador e mostre-os por ordem crescente.

=== "Javascript"

    ```js
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
    ```

=== "HTML"

    ```html
    <label for="ex14Nr1">Insira o primeiro número:</label><br>
    <input type="number" id="ex14Nr1">

    <label for="ex14Nr2">Insira o segundo número:</label><br>
    <input type="number" id="ex14Nr2">

    <label for="ex14Nr3">Insira o terceiro número:</label><br>
    <input type="number" id="ex14Nr3">

    <p id="ex14Result"></p>

    <button onclick="ex14()" class="md-button md-button--primary" style="margin-top: 10px">Testar</button>
    ```


<label for="ex14Nr1">Insira o primeiro número:</label><br>
<input type="number" id="ex14Nr1">

<label for="ex14Nr2">Insira o segundo número:</label><br>
<input type="number" id="ex14Nr2">

<label for="ex14Nr3">Insira o terceiro número:</label><br>
<input type="number" id="ex14Nr3">

<p id="ex14Result"></p>

<button onclick="ex14()" class="md-button md-button--primary" style="margin-top: 10px">Testar</button>

---

## Exercício 15

Crie um programa que leia 3 números do utilizador e mostre o que está mais perto de 100.

=== "Javascript"

    ```js
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
    ```

=== "HTML"

    ```html
    <label for="ex15Nr1">Insira o primeiro número:</label><br>
    <input type="number" id="ex15Nr1">

    <label for="ex15Nr2">Insira o segundo número:</label><br>
    <input type="number" id="ex15Nr2">

    <label for="ex15Nr3">Insira o terceiro número:</label><br>
    <input type="number" id="ex15Nr3">

    <p id="ex15Result"></p>

    <button onclick="ex15()" class="md-button md-button--primary" style="margin-top: 10px">Testar</button>
    ```


<label for="ex15Nr1">Insira o primeiro número:</label><br>
<input type="number" id="ex15Nr1">

<label for="ex15Nr2">Insira o segundo número:</label><br>
<input type="number" id="ex15Nr2">

<label for="ex15Nr3">Insira o terceiro número:</label><br>
<input type="number" id="ex15Nr3">

<p id="ex15Result"></p>

<button onclick="ex15()" class="md-button md-button--primary" style="margin-top: 10px">Testar</button>

---

## Exercício 16

Crie um programa que leia a nota quantitativa de um teste e mostre a nota qualitativa.

- 0..5 - Muito insuficiente
- 5..9,5 – Insuficiente
- 9,5..14 - Suficiente
- 14..16 – Bom
- 16..20 – Muito bom

=== "Javascript"

    ```js
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
    ```

=== "HTML"

    ```html
    <label for="ex16Nr1">Insira a nota do teste (0 a 20):</label><br>
    <input type="number" id="ex16Nr1">

    <p id="ex16Result"></p>

    <button onclick="ex16()" class="md-button md-button--primary" style="margin-top: 10px">Testar</button>
    ```


<label for="ex16Nr1">Insira a nota do teste (0 a 20):</label><br>
<input type="number" id="ex16Nr1">

<p id="ex16Result"></p>

<button onclick="ex16()" class="md-button md-button--primary" style="margin-top: 10px">Testar</button>

---

## Exercício 17

Crie um programa que leia uma frase do utilizador e mostre a mensagem sem a palavra “não” caso esta exista.

??? Tip "Dica"
    Utilize o método split

=== "Javascript"

    ```js
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
    ```

=== "HTML"

    ```html
    <label for="ex17input">Escreva uma frase:</label><br>
    <input type="text" id="ex17input">

    <p id="ex17Result"></p>

    <button onclick="ex17()" class="md-button md-button--primary" style="margin-top: 10px">Testar</button>
    ```


<label for="ex17input">Escreva uma frase:</label><br>
<input type="text" id="ex17input">

<p id="ex17Result"></p>

<button onclick="ex17()" class="md-button md-button--primary" style="margin-top: 10px">Testar</button>

---

## Exercício 18

Crie um programa que leia uma frase do utilizador e mostre a quantos caracteres numéricos existem na frase.

=== "Javascript"

    ```js
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
    ```

=== "HTML"

    ```html
    <label for="ex18input">Escreva uma frase:</label><br>
    <input type="text" id="ex18input">

    <p id="ex18Result"></p>

    <button onclick="ex18()" class="md-button md-button--primary" style="margin-top: 10px">Testar</button>
    ```


<label for="ex18input">Escreva uma frase:</label><br>
<input type="text" id="ex18input">

<p id="ex18Result"></p>

<button onclick="ex18()" class="md-button md-button--primary" style="margin-top: 10px">Testar</button>

---

## Exercício 19

Crie um programa que leia uma frase do utilizador e mostre a frase com os caracteres invertidos.

=== "Javascript"

    ```js
    function ex19() {
      var phrase = document.getElementById('ex19input').value;
      var invertedPhrase = '';

      for (var i = phrase.length - 1; i >= 0; i--) {
        invertedPhrase += phrase[i];
      }

      document.getElementById('ex19Result').textContent = 'Frase invertida: ' + invertedPhrase;
    }
    ```

=== "HTML"

    ```html
    <label for="ex19input">Escreva uma frase:</label><br>
    <input type="text" id="ex19input">

    <p id="ex19Result"></p>

    <button onclick="ex19()" class="md-button md-button--primary" style="margin-top: 10px">Testar</button>
    ```


<label for="ex19input">Escreva uma frase:</label><br>
<input type="text" id="ex19input">

<p id="ex19Result"></p>

<button onclick="ex19()" class="md-button md-button--primary" style="margin-top: 10px">Testar</button>

---