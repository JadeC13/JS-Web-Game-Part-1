//here I am going to create a function that will do everything i did for the green character and pine tree
function newImage(url, left, bottom) { //these are the paramaters for this function
let newImage = document.createElement('img') //this is creating an img
newImage.src = url
newImage.style.position = 'fixed'
newImage.style.left = left + 'px' //here im saying that whatever i put in for 'left' will have 'px' added to it. aka making it b the desired amount of pixels
newImage.style.bottom = bottom + 'px'
document.body.append(newImage) //this actually adds the image onto the page
return newImage 
}

function newItem(url, left, bottom) { //here im creating a function that creates a new item. i use my new image function inside of this function too
    let object = newImage(url, left, bottom) //here i am "letting" newImage function be called object instead

    object.addEventListener('dblclick', function () { //here is another function inside a function. im adding an event listener to the object so that it is user responsive
        object.remove()
    })
}

newImage('assets/green-character.gif', 100, 100)
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 435)

newItem('assets/sword.png', 500, 405)
newItem('assets/shield.png', 165, 185)
newItem('assets/staff.png', 600, 100)

document.body.style.backgroundImage = 'assets/sky.png';

// let sword = document.createElement('img')
// sword.src = 'assets/sword.png'
// sword.position = 'fixed'
// sword.left = '500px'
// sword.bottom = '405px'
// document.body.append(sword)



// sword.addEventListener('click', function () {
//     sword.remove()
// })