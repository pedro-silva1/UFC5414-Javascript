# Validações

## Exercício 30

Crie um programa que leia do utilizador uma string e verifique se é um número. Se não for um número mostre uma mensagem de erro.

=== "Javascript"

    ```js
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
    ```

=== "HTML"

    ```html
    <label for="ex30input">Insira uma string:</label><br>
    <input type="text" id="ex30input">

    <p id="ex30Result"></p>

    <button onclick="ex30()" class="md-button md-button--primary" style="margin-top: 10px">Testar</button>
    ```

<label for="ex30input">Insira uma string:</label><br>
<input type="text" id="ex30input">

<p id="ex30Result"></p>

<button onclick="ex30()" class="md-button md-button--primary" style="margin-top: 10px">Testar</button>

---

## Exercício 31

Crie um programa que leia do utilizador duas strings (password, confirmação da password) e verifique se são iguais. Se não for mostre uma mensagem de erro.

=== "Javascript"

    ```js

    ```

=== "HTML"

    ```html

    ```

<label for="ex31input">Insira a password:</label><br>
<input type="password" id="ex31input">

<label for="ex31input2">Confirme a password:</label><br>
<input type="password" id="ex31input2">

<p id="ex31Result"></p>

<button onclick="ex31()" class="md-button md-button--primary" style="margin-top: 10px">Testar</button>

---