const checkButton = document.getElementById('check-btn');
const input = document.getElementById('text-input');
const result = document.getElementById('result');

checkButton.addEventListener('click', () => {
  const inputValue = input.value.trim();
  if(inputValue === ''){
    alert("Please input a value")
  } else{
    const isPalindrome = checkPalindrome(inputValue);
    const resultElement = document.createElement('div');
    resultElement.innerHTML = isPalindrome
      ? `${inputValue} is a palindrome.`
      : `${inputValue} is not a palindrome.`;
    result.textContent = '';
    result.appendChild(resultElement);
  }
})


function checkPalindrome(str) {
  const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  return cleanStr === cleanStr.split('').reverse().join('');
}