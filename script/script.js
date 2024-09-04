

const allImages = ["./images/orange-candy.png", "./images/blue-candy.png", "./images/green-candy.png", "./images/red-candy.png", "./images/yellow-candy.png"]

const square = []

let draggedCandy = null
let endCandy = null
function createElement(container, id)
{
    const ele = document.createElement("div")
    square.push(ele)
    ele.setAttribute("class", "cell")
    const img = document.createElement("img")
    ele.setAttribute("draggable", true)
    ele.setAttribute("id", id)
    ele.addEventListener('mousedown', dragStart);
    ele.addEventListener('touchstart', dragStart);
    img.src= allImages[Math.floor(Math.random() * allImages.length )]
    img.setAttribute("draggable", false)
    ele.appendChild(img)

    container.appendChild(ele)
}


function dragStart(e) {
    document.addEventListener('mousemove', dragMove); //To track the movement of the candy as it is being dragged.
    // document.addEventListener('touchmove', dragMove);//To track the movement of the candy as it is being dragged.
    // document.addEventListener('mouseup', dragEnd); // To detect when the user releases the candy, which is when you
    document.addEventListener('touchend', dragEnd); // To detect when the user releases the candy, which is when you
}


function dragMove(e){
    console.log("touchmove", e.target )
    draggedCandy = e.target
    // draggedCandy.src = "./images/purple-candy.png"
}

function dragEnd(e){
    console.log("touchend", e.target )
    // endCandy = e.target
    // console.log(draggedCandy)
    // console.log(endCandy)
    // // console.log('Drag ended for:', e.target.src);
    // document.removeEventListener('mousemove', dragMove);
    // document.removeEventListener('touchmove', dragMove);
    // document.removeEventListener('mouseup', dragEnd);
    // document.removeEventListener('touchend', dragEnd);
    // e.target.src = "./images/purple-candy.png"
}
const container = document.getElementById("Game_container")
const width_ele = 50
const height_ele = 50

// for(let j = 0; j < 400 ; j +=50)
//     {
        for(let i = 0; i <( 70 * 8 ) ; i++ )
        {
           createElement(container, i)
        } 
        // i = 0;
    // }
    
// console.log(window.innerHeight)
// console.log()