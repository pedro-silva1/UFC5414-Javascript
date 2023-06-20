# Input/Output

## Exercício 1

Crie um programa que mostre numa caixa de diálogo “Alert” a mensagem: “É preciso fazer todos os exercícios para aprender”.  
A caixa “Alert” será exibida depois do utilizador clicar no botão.

```js
function mostrarAlerta() {
  alert("É preciso fazer todos os exercícios para aprender");
}mkdo
```

<button onclick="ex1()" class="md-button md-button--primary" style="margin-top: 10px">Testar</button>

---

## Exercício 2

Crie um programa que mostre uma caixa de diálogo “Confirm” a mensagem: “Deseja continuar a realizar os exercícios?”.

1. Se o utilizador clicar “Ok” mostre a mensagem “Bem escolhido”.
1. Se o utilizador clicar “Cancelar” mostre a mensagem “Já chega de JavaScript”.

```js
function ex2() {
  let result = confirm("Deseja continuar a realizar os exercícios?");

  if (result) {
    alert("Bem escolhido");
  } else {
    alert("Já chega de JavaScript");
  }
}
```

<button onclick="ex2()" class="md-button md-button--primary" style="margin-top: 10px">Testar</button>

---

## Exercício 3

Crie um programa que leia o nome do utilizador através de uma caixa de diálogo “Prompt” e mostre na página Web a mensagem:

“O Formando” + [nome formando] + ” está aprovado”.
Se o utilizador clicar em “Cancelar” não deverá ser exibido a mensagem.

??? Tip "Dica"
    Utilize o `innerHTML`

=== "Javascript"

    ```js
    function ex3() {
      var nome = prompt("Insira o nome do formando:");

      if (nome !== null && nome !== "") {
        let mensagem = "O Formando " + nome + " está aprovado.";
        document.getElementById("ex3").innerHTML = mensagem;
      }
    }
    ```

=== "HTML"

    ```html
    <p id="ex3"></p>
    ```

<p id="ex3"></p>

<button onclick="ex3()" class="md-button md-button--primary" style="margin-top: 10px">Testar</button>

---

## Exercício 4

Crie um programa que leia o nome e idade do utilizador através de caixas de texto e mostre na página Web a mensagem:

“O Formando ” + [nome formando] + ” tem ” + [idade formando ] + “ anos”.

??? Tip "Dica"
    Utilize o `innerHTML`

=== "Javascript"

    ```js
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
    ```

=== "HTML"

    ```html
    <p id="ex4"></p>
    ```

<form>
  <label for="ex4Nome">Nome:</label><br>
  <input type="text" id="ex4Nome" name="ex4Nome"><br>
  <label for="ex4Idade">Idade:</label><br>
  <input type="text" id="ex4Idade" name="ex4Idade">
</form>

<p id="ex4"></p>

<button onclick="ex4()" class="md-button md-button--primary" style="margin-top: 10px">Testar</button>

---

## Exercício 5

Crie um programa que mostre na “console” a mensagem: 

“Eu sou o “ [nome formando] “ e sou adepto do ” [clube de futebol]

```js
function ex5() {
  let nome = prompt("Insira o seu nome:");
  let clube = prompt("Insira o seu clube de futebol:");

  console.log("Eu sou o " + nome + " e sou adepto do " + clube + ".");
}
```

<button onclick="ex5()" class="md-button md-button--primary" style="margin-top: 10px">Testar</button>

---

## Exercício 6

Crie um programa que leia do utilizador os seguintes dados e de seguida mostre-os num parágrafo `<p>`

-	Nome: [Nome do formando]
-	Estado civil: (Casado; Solteiro; Divorciado; Viúvo)
-	Idade: [Idade formando]
-	Altura: [Altura do formando]
-	Sócio: [Sim/Não]
-	Email: [Email do formando]


```js
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
```

<label for="ex6Nome">Nome:</label><br/>
<input type="text" id="ex6Nome">

<label for="ex6Civil">Estado Civil:</label><br/>
<select id="ex6Civil">
  <option value="Casado">Casado</option>
  <option value="Solteiro">Solteiro</option>
  <option value="Divorciado">Divorciado</option>
  <option value="Viúvo">Viúvo</option>
</select>

<label for="ex6Idade">Idade:</label><br/>
<input type="text" id="ex6Idade">

<label for="ex6Altura">Altura:</label><br/>
<input type="text" id="ex6Altura">

<label for="ex6Socio">Sócio:</label><br/>
<select id="ex6Socio">
  <option value="Sim">Sim</option>
  <option value="Não">Näo</option>
</select>

<label for="ex6Email">Email</label><br/>
<input type="email" id="ex6Email">

<p id="ex6"></p>

<button onclick="ex6()" class="md-button md-button--primary" style="margin-top: 10px">Testar</button>

---

## Exercício 7

Crie um programa que mostre na página Web a data atual do sistema:

??? Tip "Dica"
    Utilize a Class “Date”

```js
function ex7() {
  var data = new Date();
  var dia = data.getDate();
  var mes = data.getMonth() + 1;
  var ano = data.getFullYear();

  var dataFormatada = "<b>Data atual:</b> " + dia + "/" + mes + "/" + ano;
  document.getElementById("ex7").innerHTML = dataFormatada;
}
```

<p id="ex7"></p>

<button onclick="ex7()" class="md-button md-button--primary" style="margin-top: 10px">Testar</button>

---

## Exercício 8

Crie um programa que mostre na página Web a mensagem “Bom dia”, “Boa tarde”, “Boa noite” em conformidade com a hora do sistema.

```js
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
```

<p id="ex8"></p>

<button onclick="ex8()" class="md-button md-button--primary" style="margin-top: 10px">Testar</button>

---

## Exercício 9

Crie um programa com um botão que permita imprimir (na impressora) a página Web.

??? Tip "Dica"
    Utilize o objeto "Window"

=== "Javascript"

    ```js
    function ex9() {
      window.print();
    }
    ```

=== "HTML"

    ```html
    <button onclick="ex9()" class="md-button md-button--primary" style="margin-top: 10px">Testar</button>
    ```
   

<button onclick="ex9()" class="md-button md-button--primary" style="margin-top: 10px">Testar</button>

---

## Exercício 10

Crie um programa com um botão que mostre o endereço (URL) da página Web.

??? Tip "Dica"
    Utilize o objeto "Document"

```js
function ex10() {
  let URL = document.URL;

  document.getElementById("ex10").innerHTML = "<b>URL:</b> " + URL;
}
```
<p id="ex10"></p>

<button onclick="ex10()" class="md-button md-button--primary" style="margin-top: 10px">Testar</button>

---