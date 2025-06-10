document.querySelector('#searchBtn').addEventListener('click', getMeaning)

function getMeaning(){
  const meaning = document.querySelector('input').value
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${meaning}`
 
 
  // console.log(meaning)



  fetch(url)
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    // console.log(data[0].meanings[0].definitions.map(d => d.definition))
    document.querySelector('#word').innerHTML = data[0].meanings[0].definitions.map(d => d.definition)

    
  })
  .catch(err => {
      console.log(`error ${err}`)
  });
    
  

}