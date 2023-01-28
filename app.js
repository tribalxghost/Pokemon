document.querySelector("#buttn").addEventListener('click', pokemon);
let thelist = ["fire", "water", "fairy", "dragon", "poison", "flying", "ghost", "bug", "dark", "grass", "rock", "ground", "steel", "ice", "normal", "fighting", "psychic", "electric"]



 function pokemon(e) {
    const name = document.querySelector('#uinp')
    console.dir(name)
    // name.charAt(0).toUpperCase() + string.slice(1)
    let pokemon = document.querySelector(".pfig")
     fetch('https://pokeapi.co/api/v2/pokemon/' + name.value.toLowerCase())
        .then((response) => response.json())
        .then((data) => {

            let pkmN = data.name.charAt(0).toUpperCase() + data.name.slice(1)
            let pkmN2 = data.types[0].type.name.charAt(0).toUpperCase() + data.types[0].type.name.slice(1)
            let pkmName = document.querySelector(".pkmName")
            pkmName.innerText = `Name: ${pkmN} `
            let pkmWeight = document.querySelector(".pkmWeight")
            pkmWeight.innerText = `${data.weight}`
            let pkmType = document.querySelector('.pkmType')
            pkmType.innerText = `${pkmN2}`
            let pkmImg = document.querySelector('.pkmImg')
            pkmImg.src = `${data.sprites.other["home"].front_default}`
            let pokemonColor = document.querySelectorAll(".theColor")
            pokemonColor.forEach(
                (color) =>{
                    color.style.backgroundImage = "var(--" + data.types[0].type.name + ")"
                }

            )
                
        })
        .catch((err) => {
            console.log(err)
        });
        name.value = ""
        
    return e.preventDefault()
}


