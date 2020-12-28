// Pic a name
function pickName(name1=0){
    const Names = ['Liam', 'Olivia', 'Noah', 'Emma', 'Oliver', 'Ava', 'William', 'Sophia', 'Elijah', 'Isabella', 'James', 'Charlotte',
                  'Benjamin', 'Amelia', 'Lucas', 'Mia', 'Mason', 'Harper', 'Ethan', 'Evelyn']
    const muNames = Names.filter(element => element != name1) // makes sure you don't have the same name twice
    return muNames[Math.floor(Math.random() * muNames.length)] 
}

const clothingItems = () =>{
    const clothes = ['belt', 'boots', 'cap', 'coat', 'dress', 'gloves', 'hat', 'jacket', 'jeans', 'pajamas', 'pants', 'raincoat',
                    'scarf', 'shirt', 'shoes', 'skirt', 'slacks', 'slipper', 'socks', 'stockings', 'suit', 'sweater', 'sweatshirt',
                    't-shirt', 'tie', 'trousers', 'underclothes', 'underpants', 'undershirt', 'boxers']
    return clothes[Math.floor(Math.random() * clothes.length)] 
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
    const adverbs = ['superbly', 'stylishly', 'properly', 'perfectly', 'tastefully', 'splendidly', 'oddly', 'nattily', 
                    'lightly', 'lavishly', 'impeccably', 'ill', 'horribly', 'formally', 'fine', 'elaborately', 'comfortably', 'appallingly']
    return adverbs[Math.floor(Math.random() * adverbs.length)]
}

function noun(){
    const nouns = ['hairspray', 'knife', 'cheese', 'books', 'bag', 'shoe', 'laptop', 'phone', 'laptop', 'pasta', 'remote',
                  ' piano', 'parfume', 'pouch', 'pen', 'pencil', 'headphone', 'earphone' ]
    return nouns[Math.floor(Math.random() * nouns.length)]
}

function plnouns(){
    const nouns = ['hairsprays', 'knives', 'cheeses', 'books', 'bags', 'shoes', 'laptops', 'phones', 'laptops', 'pasta', 'remotes',
    ' piano', 'parfumes', 'pouches', 'pens', 'pencils', 'headphones', 'earphones' ]
    return nouns[Math.floor(Math.random() * nouns.length)]
}

function parts(){
    const parts = ['arms', 'legs', 'feet', 'eyes', 'buts', 'body', 'hands', 'ears']
    return parts[Math.floor(Math.random() * parts.length)]
}



const name1 = pickName()
const name2 = pickName(name1)

console.log(`${name1} and ${name2} went shopping for ${plnouns()} at the mall. Everywhere they looked the saw ${adjective()} signs 
and ${adjective()} people. ${name1} Saw a man selling ${plnouns()} from a cart and decided to buy one because ${name2} was hungry.
${name2} wanted to see the other ${plnouns()} stores. One store had a seletion of ${adjective()} ${plnouns()}. A shop owner brought 
out a ${noun()} that ${name2} liked but ${name1} said it looked too ${clothesAdjectve()}. At the next shop ${name1} found the perfect
 ${clothingItems()} but noticed it was missing a ${noun()}. Meanwhile ${name2} found a ${clothesAdjectve()} ${clothingItems()} that fit
  ${adverbs()}! After a long day ofshopping theyboth rested their${parts()} near a ${adjective()} ${noun()} by the busy side walk.`)
