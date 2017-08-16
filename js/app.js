const dog_api = 'https://dog.ceo/api/'
$.ajax({
  url: dog_api + "breeds/list/all"
}).done(function(response) {
  console.log(response);
  const breeds = Object.keys(response.message)
  console.log(breeds);
  for (let i = 0; i < breeds.length; i++) {
    selectBreed.innerHTML += `<option>${breeds[i]}</option>`
  }
})

viewDog.onclick = function() {
  const breedName = selectBreed.value
  console.log(breedName);
  $.ajax({
    url: dog_api + `breed/${breedName}/images/random`

  })
  .done(function(response) {
    console.log(response);

    breedImage.setAttribute("src", response.message)

  })
}
