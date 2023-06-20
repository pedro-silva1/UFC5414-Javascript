# Arrays

## Exercício 45

Crie um programa conte quantas vezes ocorre cada numero de um array de 100 números positivos aleatórios.

=== "Javascript"

    ```js
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

      var arrayAExibir = "<table class='table table-sm table-borderless text-center'><tbody>";
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
    ```

=== "HTML"

    ```html
    <p id="ex45Result"></p>

    <button onclick="ex45()" class="md-button md-button--primary" style="margin-top: 10px">Testar</button>
    ```

<p id="ex45Result"></p>

<button onclick="ex45()" class="md-button md-button--primary" style="margin-top: 10px">Testar</button>

---

## Exercício 46

Crie um programa remova os números duplicados de um array de 100 números positivos aleatórios

=== "Javascript"

    ```js
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
    ```

=== "HTML"

    ```html
    <button onclick="ex46()" class="md-button md-button--primary" style="margin-top: 10px">Testar</button>
    ```

<p id="ex46Result"></p>

<button onclick="ex46()" class="md-button md-button--primary" style="margin-top: 10px">Testar</button>

---

## Exercício 47

Crie um programa mostre qual o número que ocorre mais vezes num um array de 100 números positivos aleatórios

=== "Javascript"

    ```js
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
    ```

=== "HTML"

    ```html
    <p id="ex47Result"></p>

    <button onclick="ex47()" class="md-button md-button--primary" style="margin-top: 10px">Testar</button>
    ```

<p id="ex47Result"></p>

<button onclick="ex47()" class="md-button md-button--primary" style="margin-top: 10px">Testar</button>

---

## Exercício 48

Crie um programa que leia um número maior que 1000 e adicione “-“ entre cada dois números pares (Exemplo: 025468 o resultado deverá ser 0-254-6-8).  

=== "Javascript"

    ```js
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
    ```

=== "HTML"

    ```html
    <p id="ex48Result"></p>

    <button onclick="ex48()" class="md-button md-button--primary" style="margin-top: 10px">Testar</button>
    ```

<p id="ex48Result"></p>

<button onclick="ex48()" class="md-button md-button--primary" style="margin-top: 10px">Testar</button>

---

## Exercício 49

Crie um programa que tenha 2 arrays com 10 valores aleatórios cada. some os valores de cada índice.

Exemplo: 	array1 = [1,1,2,3,4,0…]  
          array2 = [3,5,6,7,8,13…]  
Resultado esperado:  
Resultado = [4, 6, 8, 10, 12, 13…]

=== "Javascript"

    ```js
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
    ```

=== "HTML"

    ```html
    <p id="ex49Result"></p>

    <button onclick="ex49()" class="md-button md-button--primary" style="margin-top: 10px">Testar</button>
    ```

<p id="ex49Result"></p>

<button onclick="ex49()" class="md-button md-button--primary" style="margin-top: 10px">Testar</button>

---

## Exercício 50

Crie um programa que guarde em memória uma matriz (bidimensional) 10linhas x 10colunas com números inteiros aleatórios e mostre a quantidade de elementos entre 10 e 20.

=== "Javascript"

    ```js
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
    ```

=== "HTML"

    ```html
    <div id="matrixEx50"></div>
    <div id="countEx50"></div>

    <button onclick="ex50()" class="md-button md-button--primary" style="margin-top: 10px">Testar</button>
    ```

<div id="matrixEx50"></div>
<div id="countEx50"></div>

<button onclick="ex50()" class="md-button md-button--primary" style="margin-top: 10px">Testar</button>

---

## Exercício 51

Crie um programa que leia do utilizador uma palavra/frase e remova todos os caracteres especiais.

=== "Javascript"

    ```js
    function ex51() {
      var input = prompt("Insira uma frase/palavra:");

      var specialCharsRegex = /[!@#$%^&*(),.?":{}|<>]/g;

      var result = input.replace(specialCharsRegex, "");

      alert("Resultado: " + result);
    }
    ```

=== "HTML"

    ```html
    <button onclick="ex51()" class="md-button md-button--primary" style="margin-top: 10px">Testar</button>
    ```

<button onclick="ex51()" class="md-button md-button--primary" style="margin-top: 10px">Testar</button>

---

## Exercício 52

Crie um programa que converta um número decimal em binário.

=== "Javascript"

    ```js
    function ex52() {

      var numDecimal = parseFloat(document.getElementById("ex52input").value);
      var numBinary = numDecimal.toString(2);

      var result = "Decimal: " + numDecimal + "<br/>" +
        "Binário: " + numBinary;

      document.getElementById("ex52Result").innerHTML = result;
    }
    ```

=== "HTML"

    ```html
    <label for="ex52input">Insira um número decimal:</label><br>
    <input type="number" id="ex52input">

    <p id="ex52Result"></p>

    <button onclick="ex52()" class="md-button md-button--primary" style="margin-top: 10px">Testar</button>
    ```

<label for="ex52input">Insira um número decimal:</label><br>
<input type="number" id="ex52input">

<p id="ex52Result"></p>

<button onclick="ex52()" class="md-button md-button--primary" style="margin-top: 10px">Testar</button>

---

## Exercício 53

Crie um programa que coloca uma cor aleatória no fundo da página

??? Tip "Dica"
    Utilize o `document.body.style.background`

=== "Javascript"

    ```js
    function ex53() {
      var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

      var bodyElement = document.body;
      bodyElement.style.backgroundColor = randomColor;
    }
    ```

=== "HTML"

    ```html
    <button onclick="ex53()" class="md-button md-button--primary" style="margin-top: 10px">Testar</button>
    ```

<button onclick="ex53()" class="md-button md-button--primary" style="margin-top: 10px">Testar</button>

---

## Exercício 54

Crie um programa que coloca uma cor aleatória no fundo da página.

=== "Javascript"

    ```js
    function ex54() {
      var color = document.getElementById("ex54input").value;
      var paragraph = document.getElementById("ex54Result");
      paragraph.style.background = color;
    }
    ```

=== "HTML"

    ```html
    <label for="">Escolha uma cor:</label>
    <input type="color" oninput="ex54()" id="ex54input" value="#ff0000">
    <p id="ex54Result">Paragrafo que a cor será alterada.</p>
    ```

<label for="">Escolha uma cor:</label>
<input type="color" oninput="ex54()" id="ex54input" value="#ff0000">
<p id="ex54Result">Paragrafo que a cor será alterada.</p>
---

## Exercício 55

Crie um programa que leia o número de linhas e colunas e mostre uma tabela com o respetivo número de linhas e colunas.

=== "Javascript"

    ```js
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
    ```

=== "HTML"

    ```html
    <table id="myTableEx55" border="1"> 
    </table>

    <button onclick="ex55()" class="md-button md-button--primary" style="margin-top: 10px">Criar tabela</button>
    ```

<table id="myTableEx55" border="1"> 
</table>

<button onclick="ex55()" class="md-button md-button--primary" style="margin-top: 10px">Criar tabela</button>

---

## Exercício 56

Crie um programa que mostre uma tabela de 3x3. O programa deve de ler o número da linha, coluna e texto e mostre o texto na respetiva linha e coluna da tabela.

=== "Javascript"

    ```js

    ```

=== "HTML"

    ```html

    ```

---

## Exercício 57

Crie um programa que mostre a altura e largura de uma janela sempre que esta for alterada.

=== "Javascript"

    ```js
    function ex57() {
      document.body.setAttribute("onresize", "getSize()");

      var height = window.innerHeight;
      var width = window.innerWidth;

      var resultElement = document.getElementById("ex57Result");
      resultElement.innerHTML = "Altura: " + height + "px <br>" + "Largura: " + width + "px";
    }
    ```

=== "HTML"

    ```html
    <p id="ex57Result"></p>

    <button onclick="ex57()" class="md-button md-button--primary" style="margin-top: 10px">Testar</button>
    ```

<p id="ex57Result"></p>

<button onclick="ex57()" class="md-button md-button--primary" style="margin-top: 10px">Testar</button>

---