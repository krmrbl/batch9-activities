const downButton = document.querySelector('#down')
const upButton = document.querySelector('#up')
const buyListDisplay = document.querySelector('#first-list')
const fridgeListDisplay = document.querySelector('#second-list')

const buyList = ['chicharon', 'buko pie', 'mango', 'bacon']
const fridge = ['eggs', 'kimchi', 'softdrinks', 'mayonnaise']

//Challenge: Please fill the fridge array with 5 items of your choice. 


//Challenge 2: You have bought some chicharon.
//Please remove it from the buyList and add it to the items in fridge.


//Challenge 3: Write a function that will remove an item from the fridge,
//and put it in the buyList, on the press of the moveUp button.

function moveUp(){
    if(fridge.length > 0) {
        buyList.push(fridge[0]);
        fridge.shift();
        buyListDisplay.innerHTML = buyList;
        fridgeListDisplay.innerHTML = fridge;
    }
}

upButton.addEventListener('click', moveUp)

//Challenge 4: Write a function that will remove the last item in the buyList, 
//and put it in the fridge.

function moveDown(){
    if(buyList.length > 0) {
        fridge.push(buyList[buyList.length-1]);
        buyList.pop(fridge[0]);
        buyListDisplay.innerHTML = buyList;
        fridgeListDisplay.innerHTML = fridge;
    }
}

downButton.addEventListener('click', moveDown)

buyListDisplay.innerHTML = buyList
fridgeListDisplay.innerHTML = fridge