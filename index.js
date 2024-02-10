function separateWordsByCase(array) {
    const lowercaseWords = [];
    const uppercaseWords = [];
  
    for (let i = 0; i < array.length; i++) {
      const word = array[i];
      if (/^[a-z]/.test(word)) {
        lowercaseWords.push(word);
      } else if (/^[A-Z]/.test(word)) {
        uppercaseWords.push(word);
      }
    }
  
    return [lowercaseWords, uppercaseWords];
  }
  
  function separateWords() {
    const input = document.getElementById('input').value;
    const wordsArray = input.split(' ').filter(Boolean);
    const separatedArrays = separateWordsByCase(wordsArray);
    const output = document.getElementById('output');
    output.innerHTML = `
      <div>Words starting with lowercase letter: ${separatedArrays[0].join(', ')}</div>
      <div>Words starting with uppercase letter: ${separatedArrays[1].join(', ')}</div>
    `;
  }
  