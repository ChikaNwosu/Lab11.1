"use strict";

document.addEventListener('DOMContentLoaded', function() {
  const inputField = document.getElementById('input');
  const operators = document.querySelectorAll('.operators div');
  const numbers = document.querySelectorAll('.numbers div');
  const clearButton = document.getElementById('clear');
  const resultButton = document.getElementById('result');

  let currentInput = '';
  let previousInput = '';
  let operator = '';

  numbers.forEach(number => {
      number.addEventListener('click', () => {
          currentInput += number.innerText;
          inputField.innerText = currentInput;
      });
  });

  operators.forEach(op => {
      op.addEventListener('click', () => {
          if (currentInput === '') return;
          operator = op.innerText;
          previousInput = currentInput;
          currentInput = '';
      });
  });

  clearButton.addEventListener('click', () => {
      currentInput = '';
      previousInput = '';
      operator = '';
      inputField.innerText = '';
  });

  resultButton.addEventListener('click', () => {
      if (previousInput === '' || currentInput === '') return;

      let result;
      const prev = parseFloat(previousInput);
      const curr = parseFloat(currentInput);

      if (isNaN(prev) || isNaN(curr)) return;

      switch (operator) {
          case '+':
              result = prev + curr;
              break;
          case '-':
              result = prev - curr;
              break;
          case 'x':
              result = prev * curr;
              break;
          case '/':
              result = prev / curr;
              break;
          default:
              return;
      }

      inputField.innerText = result;
      currentInput = result.toString();
      operator = '';
      previousInput = '';
  });

  // Optional: Update name and ID dynamically
  document.getElementById('nameId').innerText = "Chika Nwosu - CT1002485";
});
