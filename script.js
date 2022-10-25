/*let button = document.querySelector("#bass-drum")

function PlaySound(id)
{
    var audio = new Audio("Assets/"+id+".wav")

    button.addEventListener("click", () => {
            audio.play();    
    })
}

PlaySound("bass-drum")*/

const onClick = (event) => {
    var audio = new Audio("Assets/"+event.target.id+".wav")
    audio.play(); 
    
  }
  window.addEventListener('click', onClick);
  