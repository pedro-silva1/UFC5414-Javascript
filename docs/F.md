# Strings

## Exercício 34

Crie um programa que leia um endereço de email e mostre metade escondido  
Exemplo: mailncarvalho@gmail.com resultado mailnc…….@gmail.com

=== "Javascript"

    ```js
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
    ```

=== "HTML"

    ```html
    <label for="ex34input">Insira um email:</label><br>
    <input type="email" id="ex34input">

    <p id="ex34Result"></p>

    <button onclick="ex34()" class="md-button md-button--primary" style="margin-top: 10px">Testar</button>
    ```

<label for="ex34input">Insira um email:</label><br>
<input type="email" id="ex34input">

<p id="ex34Result"></p>

<button onclick="ex34()" class="md-button md-button--primary" style="margin-top: 10px">Testar</button>

---

## Exercício 35

Crie um programa que leia do utilizador o nome e imprimir:

-	Todo o nome:
-	Primeira Letra do Nome:
-	Ultima letra do nome:
-	Da primeira letra até à 3ª:
-	Todas as letras menos a primeira:
-	Duas ultimas letras:
-	Todos os nomes separados por espaços (split): 

=== "Javascript"

    ```js
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
    ```

=== "HTML"

    ```html
    <label for="ex35input">Insira o seu nome:</label><br>
    <input type="email" id="ex35input">

    <p id="ex35Result"></p>

    <button onclick="ex35()" class="md-button md-button--primary" style="margin-top: 10px">Testar</button>
    ```

<label for="ex35input">Insira o seu nome:</label><br>
<input type="email" id="ex35input">

<p id="ex35Result"></p>

<button onclick="ex35()" class="md-button md-button--primary" style="margin-top: 10px">Testar</button>

---

## Exercício 36

Crie um programa que mostre o seguinte padrão utilizando ciclos encadeados. O número de linhas deverá ser introduzido pelo utilizador (Exemplo para 5 linhas).

<p>
*<br>
* *<br>
* * *<br>
* * * *<br>
* * * * *
</p>

=== "Javascript"

    ```js
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
    ```

=== "HTML"

    ```html
    <label for="ex36input">Insira o nr de linhas:</label><br>
    <input type="number" id="ex36input">

    <p id="ex36Result"></p>

    <button onclick="ex36()" class="md-button md-button--primary" style="margin-top: 10px">Testar</button>
    ```

<label for="ex36input">Insira o nr de linhas:</label><br>
<input type="number" id="ex36input">

<p id="ex36Result"></p>

<button onclick="ex36()" class="md-button md-button--primary" style="margin-top: 10px">Testar</button>

---

## Exercício 37

Crie um programa que leia um número do utilizador e mostre a soma dos números de 1 até ao valor introduzido pelo utilizador.

=== "Javascript"

    ```js
    function ex37() {
      var numInput = parseInt(document.getElementById('ex37input').value);
      var resultText = document.getElementById('ex37Result');
      var sum = 0;

      for (var i = 1; i <= numInput; i++) {
        sum += i;
      }

      resultText.textContent = "A soma é: " + sum;
    }
    ```

=== "HTML"

    ```html
    <label for="ex37input">Insira um número inteiro:</label><br>
    <input type="number" id="ex37input">

    <p id="ex37Result"></p>

    <button onclick="ex37()" class="md-button md-button--primary" style="margin-top: 10px">Testar</button>
    ```

<label for="ex37input">Insira um número inteiro:</label><br>
<input type="number" id="ex37input">

<p id="ex37Result"></p>

<button onclick="ex37()" class="md-button md-button--primary" style="margin-top: 10px">Testar</button>

---

## Exercício 38

Crie um programa que imprima todos os múltiplos de 3, entre 1 e 100.

=== "Javascript"

    ```js
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
    ```

=== "HTML"

    ```html
    <p id="ex38Result"></p>

    <button onclick="ex38()" class="md-button md-button--primary" style="margin-top: 10px">Testar</button>
    ```

<p id="ex38Result"></p>

<button onclick="ex38()" class="md-button md-button--primary" style="margin-top: 10px">Testar</button>

---