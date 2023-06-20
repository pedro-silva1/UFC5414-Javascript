# Algoritmos

## Exercício 58

Crie um programa que ordene um array de 100 números aleatórios através do algoritmo Bubble Sort.

=== "Javascript"

    ```js
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
    ```

=== "HTML"

    ```html
    <p id="ex58Result"></p>

    <p id="ex58Result2"></p>

    <button onclick="ex58()" class="md-button md-button--primary" style="margin-top: 10px">Testar</button>
    ```

<p id="ex58Result"></p>

<p id="ex58Result2"></p>

<button onclick="ex58()" class="md-button md-button--primary" style="margin-top: 10px">Testar</button>

---

## Exercício 59

Crie um programa que ordene um array de 100 números aleatórios através do algoritmo “Insertion Sort”.

=== "Javascript"

    ```js
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
    ```

=== "HTML"

    ```html
    <p id="ex59Result"></p>

    <p id="ex59Result2"></p>

    <button onclick="ex59()" class="md-button md-button--primary" style="margin-top: 10px">Testar</button>
    ```

<p id="ex59Result"></p>

<p id="ex59Result2"></p>

<button onclick="ex59()" class="md-button md-button--primary" style="margin-top: 10px">Testar</button>

---

## Exercício 60

Crie uma função que ordene um array de 100 números aleatórios através do algoritmo “Selection Sort”.

=== "Javascript"

    ```js
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
    ```

=== "HTML"

    ```html
    <p id="ex60Result"></p>

    <p id="ex60Result2"></p>

    <button onclick="ex60()" class="md-button md-button--primary" style="margin-top: 10px">Testar</button>
    ```

<p id="ex60Result"></p>

<p id="ex60Result2"></p>

<button onclick="ex60()" class="md-button md-button--primary" style="margin-top: 10px">Testar</button>

---