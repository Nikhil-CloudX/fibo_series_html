document.addEventListener('DOMContentLoaded', function() {
    const generateBtn = document.getElementById('generateBtn');
    const numInput = document.getElementById('numInput');
    const outputDiv = document.getElementById('output');
  
    generateBtn.addEventListener('click', function() {
      const n = parseInt(numInput.value);
  
      if (isNaN(n) || n < 1) {
        alert('Please enter a valid positive number.');
        return;
      }
  
      let fibonacciSeries = generateFibonacci(n);
      if (fibonacciSeries === null) {
        alert('Cannot generate Fibonacci series for the given input.');
        return;
      }
  
      displayFibonacciSeries(fibonacciSeries);
      alert('Fibonacci series generated successfully!');
    });
  
    function generateFibonacci(n) {
      if (n <= 0) {
        return null; // Invalid input, cannot generate series
      }
  
      let fibonacciSeries = [0, 1];
  
      for (let i = 2; i < n; i++) {
        fibonacciSeries.push(fibonacciSeries[i - 1] + fibonacciSeries[i - 2]);
      }
  
      return fibonacciSeries;
    }
  
    function displayFibonacciSeries(series) {
      let outputText = 'Fibonacci Series: ' + series.join(', ');
      outputDiv.textContent = outputText;
    }
  });
  