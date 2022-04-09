import './style.css';

const inputSalary = document.querySelector('#input-salary');
const input50 = document.querySelector('#input-50');
const input20 = document.querySelector('#input-20');
const input30 = document.querySelector('#input-30');

inputSalary.addEventListener('input', () => {
  const salary = inputSalary.value;

  if (salary > 0) {
    const value50 = salary * 0.5;
    const value30 = salary * 0.3;
    const value20 = salary * 0.2;

    input20.value = value20;
    input30.value = value30;
    input50.value = value50;
  }
});
