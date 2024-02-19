const myButtons = document.querySelectorAll('.button')

const body = document.querySelector("body")

const title = document.querySelector("h1")

myButtons.forEach(  function(button) {
    console.log(button)
    button.addEventListener("click", function(e) {
        console.log(e)
        console.log(e.target)

        if (e.target.id === 'grey') {
            body.style.backgroundColor = 'grey'
        }

        if (e.target.id === "blue") {
            body.style.backgroundColor = "blue"
        }

        if (e.target.id === "yellow") {
            body.style.backgroundColor = "yellow"
            title.style.color = "white"
        }

        if (e.target.id === "white") {
            body.style.backgroundColor = e.target.id
        }


    })

}  );

