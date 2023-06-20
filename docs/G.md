# Funções de Data

## Exercício 39

Crie um programa que leia uma data e mostre o mês por extenso.

=== "Javascript"

    ```js
    function ex39() {
      var dateInput = document.getElementById('ex39input').value;
      var resultText = document.getElementById('ex39Result');

      var date = new Date(dateInput);
      var month = date.toLocaleString('default', { month: 'long' });

      resultText.textContent = "O mês é: " + month;
    }
    ```

=== "HTML"

    ```html
    <label for="ex39input">Insira um número inteiro:</label><br>
    <input type="date" id="ex39input">

    <p id="ex39Result"></p>

    <button onclick="ex39()" class="md-button md-button--primary" style="margin-top: 10px">Testar</button>
    ```

<label for="ex39input">Insira um número inteiro:</label><br>
<input type="date" id="ex39input">

<p id="ex39Result"></p>

<button onclick="ex39()" class="md-button md-button--primary" style="margin-top: 10px">Testar</button>

---

## Exercício 40

Crie um programa que leia a hora de entrada e saída de um funcionário sabendo que a hora de entrada será sempre inferior a data de saída caso contrário deverá ser exibido uma mensagem de erro.

=== "Javascript"

    ```js
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
    ```

=== "HTML"

    ```html
    <label for="ex40input">Hora de entrada:</label><br>
    <input type="time" id="ex40input">

    <label for="ex40input2">Hora de saída:</label><br>
    <input type="time" id="ex40input2">

    <p id="ex40Result"></p>

    <button onclick="ex40()" class="md-button md-button--primary" style="margin-top: 10px">Testar</button>
    ```

<label for="ex40input">Hora de entrada:</label><br>
<input type="time" id="ex40input">

<label for="ex40input2">Hora de saída:</label><br>
<input type="time" id="ex40input2">

<p id="ex40Result"></p>

<button onclick="ex40()" class="md-button md-button--primary" style="margin-top: 10px">Testar</button>

---

## Exercício 41

Crie um programa que leia uma data e mostre o respetivo dia da semana.

=== "Javascript"

    ```js
    function ex41() {
      var dateInput = document.getElementById('ex41input').value;
      var resultText = document.getElementById('ex41Result');

      var date = new Date(dateInput);
      var dayOfWeek = date.toLocaleDateString(undefined, { weekday: 'long' });

      resultText.textContent = "Dia da semana: " + dayOfWeek;
    }
    ```

=== "HTML"

    ```html
    <label for="ex41input">Data:</label><br>
    <input type="date" id="ex41input">

    <p id="ex41Result"></p>

    <button onclick="ex41()" class="md-button md-button--primary" style="margin-top: 10px">Testar</button>
    ```

<label for="ex41input">Data:</label><br>
<input type="date" id="ex41input">

<p id="ex41Result"></p>

<button onclick="ex41()" class="md-button md-button--primary" style="margin-top: 10px">Testar</button>

---

## Exercício 42

Crie um programa que leia a data de nascimento e mostre a respetiva idade.

=== "Javascript"

    ```js
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
    ```

=== "HTML"

    ```html
    <label for="ex42input">Data de nascimento:</label><br>
    <input type="date" id="ex42input">

    <p id="ex42Result"></p>

    <button onclick="ex42()" class="md-button md-button--primary" style="margin-top: 10px">Testar</button>
    ```

<label for="ex42input">Data de nascimento:</label><br>
<input type="date" id="ex42input">

<p id="ex42Result"></p>

<button onclick="ex42()" class="md-button md-button--primary" style="margin-top: 10px">Testar</button>

---

## Exercício 43

Crie um programa que simule o concurso do “Preço Certo em Euros”. O programa recebe três valores dados pelos concorrentes e o valor do artigo e mostra o valor mais aproximado que não ultrapassou o valor do artigo.

=== "Javascript"

    ```js

    ```

=== "HTML"

    ```html

    ```

<label for="ex43input">Jogador 1:</label><br>
<input type="number" id="ex43input">

<label for="ex43input2">Jogador 2:</label><br>
<input type="number" id="ex43input2">

<label for="ex43input3">Jogador 3:</label><br>
<input type="number" id="ex43input3">

<label for="ex43input4">Valor do artigo:</label><br>
<input type="number" id="ex43input4">

<p id="ex43Result"></p>

<button onclick="ex43()" class="md-button md-button--primary" style="margin-top: 10px">Testar</button>

---

## Exercício 44

Crie um programa que simule as eleições para o cargo de Presidente da Junta sabendo que concorrem 3 candidatos com os respetivos votos 

=== "Javascript"

    ```js

    ```

=== "HTML"

    ```html

    ```

<label for="ex44input">Candidato 1:</label><br>
<input type="number" id="ex44input">

<label for="ex44input2">Candidato 2:</label><br>
<input type="number" id="ex44input2">

<label for="ex44input3">Candidato 3:</label><br>
<input type="number" id="ex44input3">

<p id="ex44Result"></p>

<button onclick="ex44()" class="md-button md-button--primary" style="margin-top: 10px">Testar</button>

---