// Pic a name
function pickName(name1=0){
    const Names = ['Liam', 'Olivia', 'Noah', 'Emma', 'Oliver', 'Ava', 'William', 'Sophia', 'Elijah', 'Isabella', 'James', 'Charlotte',
                  'Benjamin', 'Amelia', 'Lucas', 'Mia', 'Mason', 'Harper', 'Ethan', 'Evelyn']
    const muNames = Names.filter(element => element != name1) // makes sure you don't have the same name twice
    return muNames[Math.floor(Math.random() * muNames.length)] 
}

const clothingItems = () =>{
}

function clothesAdjectve(){
    const adjectives =['professional', 'casual', 'smart', 'clingy', 'trendy', 'close-fitting', 'scruffy', 'unfashionable', 'elegant',
                      'sophistcated', 'loose-fiiting', 'baggy', 'dressy', 'brief', 'oversized', 'long', 'short', 'ugly', 'ill-fitting']
    return adjectives[Math.floor(Math.random() * adjectives.length)] 
}

function adjective(){
    const adjectives = []
    return adjectives[Math.floor(Math.random() * adjectives.length)] 
}
function adverbs(){
    const adverbs = []
    return adverbs[Math.floor(Math.random() * adverbs.length)]
}

function noun(){
    const nouns = []
    return nouns[Math.floor(Math.random() * nouns.length)]
}

function plnouns(){
    const nouns = []
    return nouns[Math.floor(Math.random() * nouns.length)]
}




const name1 = pickName()
const name2 = pickName(name1)

console.log(`${name1} and ${name2} went shopping for ${plnouns()} at the mall. Everywhere they looked the saw ${adjective()} signs 
and ${} people. ${name1} Saw a man selling ${plnouns()} from a cart and decided to buy one because ${name2} was hungry.
${name2} wanted to see the other ${plnouns()} stores. One store had a seletion of ${adjective()} ${plnouns()}. A shop owner brought 
out a ${noun()} that ${name2} liked but ${name1} said it looked too ${clothesAdjectve()}. At the next shop ${name1} found the perfect ${} 
but noticed it was missing a ${noun()}. Meanwhile ${name2} found a ${clothesAdjectve()} ${} that fit ${adverbs()}! After a 
long day ofshopping theyboth rested their${} near a ${adjective()} ${noun()} by the busy side walk.`)
