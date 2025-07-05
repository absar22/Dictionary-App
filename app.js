document.querySelector('#searchBtn').addEventListener('click', getMeaning)

function getMeaning(){
  const meaning = document.querySelector('input').value
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${meaning}`
 
 
  // console.log(meaning)



  fetch(url)
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    // console.log(data[0].phonetics)
    // console.log(data[0].meanings[0].definitions.map(d => d.definition))
    document.querySelector('#word').innerHTML = data[0].meanings[0].definitions.map(d => d.definition)

    
  
  document.querySelector('#word').innerHTML = `
  <strong>Word:</strong> ${data[0].word} <br>
  <strong>Phonetics:</strong> ${data[0].phonetics[0]?.text || 'N/A'} <br>
  <strong>Part of Speech:</strong> ${data[0].meanings[0].partOfSpeech} <br>
  <strong>Definition:</strong> ${data[0].meanings[0].definitions[0].definition} <br>
  <strong>Example:</strong> ${data[0].meanings[0].definitions[0].example || 'N/A'}
`    
  })

  
  .catch(err => {
      // console.log(`error ${err}`)
      const wordElement = document.querySelector('#word')
      wordElement.innerText = "Word not found or an error occurred."
      wordElement.classList.add('warning-red') //add the css file
      console.error(err)
    
  });
    
  

}

document.querySelector('input').addEventListener('keypress',function(e){
  if(e.key === 'Enter') getMeaning()
  }
)
