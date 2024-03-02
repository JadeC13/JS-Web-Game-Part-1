let greenCharacter = document.createElement('img') //this code is adding the green character img onto the html document
greenCharacter.src = 'assets/green-character.gif'
greenCharacter.style.position = 'fixed'
greenCharacter.style.left = '100px'
greenCharacter.style.bottom = '100px'
document.body.append(greenCharacter) //this code here adds the image to the page. wihthout this, the img tag would be created but it wouldn't be visible in the browser

//here im going to duplicate the above code, and add a pine tree
let pineTree = document.createElement('img')
pineTree.src = 'assets/pine=tree.png'
pineTree.style.position = 'fixed'
pineTree.style.left = '450px'
pineTree.style.bottom = '200px'
document.body.append(pineTree)