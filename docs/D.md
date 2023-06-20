# Drawing

## Exercício 32

Crie um programa que desenhe um retângulo azul.

=== "Javascript"

    ```js
    function ex32() {
      var canvas = document.getElementById('ex32Canvas');
      var ctx = canvas.getContext('2d');

      ctx.fillStyle = 'blue';
      ctx.fillRect(50, 50, 200, 100);

      canvas.style.display = 'block';
    }
    ```

=== "HTML"

    ```html
    <canvas id="ex32Canvas" width="400" height="200" style="display: none"></canvas>

    <button onclick="ex32()" class="md-button md-button--primary" style="margin-top: 10px">Testar</button>
    ```

<canvas id="ex32Canvas" width="400" height="200" style="display: none"></canvas>

<button onclick="ex32()" class="md-button md-button--primary" style="margin-top: 10px">Testar</button>

---

## Exercício 33

Crie um programa que desenhe um círculo vermelho.

=== "Javascript"

    ```js
    function ex33() {
      var canvas = document.getElementById('ex33Canvas');
      var ctx = canvas.getContext('2d');

      ctx.fillStyle = 'red';
      ctx.beginPath();
      ctx.arc(150, 100, 50, 0, 2 * Math.PI);
      ctx.fill();

      canvas.style.display = 'block';
    }
    ```

=== "HTML"

    ```html
    <canvas id="ex33Canvas" width="300" height="200" style="display: none"></canvas>

    <button onclick="ex33()" class="md-button md-button--primary" style="margin-top: 10px">Testar</button>
    ```

<canvas id="ex33Canvas" width="300" height="200" style="display: none"></canvas>

<button onclick="ex33()" class="md-button md-button--primary" style="margin-top: 10px">Testar</button>

---