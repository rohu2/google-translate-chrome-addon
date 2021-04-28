// with the english words if they are more than 1 word they need to be processed with + 
// eg see+you+soon


console.log('addon working');

let button1 = document.createElement('button')
let button2 = document.createElement('button')

let addTextNode = document.createTextNode('ADD')
let printTextNode = document.createTextNode('PRINT')

button1.setAttribute('id','add-to-list')
button2.setAttribute('id','print-the-list')

button1.appendChild(addTextNode)
button2.appendChild(printTextNode)


document.getElementsByClassName("hgbeOc")[0].append(button1, button2)




let words = [  ]


button1.addEventListener('click', addWord)
button2.addEventListener('click', printWords)







function addWord() {


    let english = document.getElementsByClassName('er8xn')[0].value

    let cyrillic = document.getElementsByClassName("J0lOec")[0].children[0].innerText
    
    let latin = document.getElementsByClassName("kO6q6e")[1].innerText
    
const note = [ cyrillic , latin , english]


words.push(note)
console.log(words)

}



function printWords() {
    


    let string = ''

    for (let i = 0; i < words.length; i++) {
      
    string += `{cyrillic: "${words[i][0]}" , latin: "${words[i][1]}", english: "${words[i][2]}"}, <br>` 
       
                  
    
        }
    
        document.body.innerHTML =  string  




    }








// ADDON USING INDEXED DB

// let db;
// const request = indexedDB.open('words')

// request.onupgradeneeded = e => {
// alert('upgrade called')
// db = e.target.result
// const pNotes = db.createObjectStore('cyrillic' )
// //{keyPath: 'russian' }
// }


// request.onsuccess = e => {
//     alert('success called')
//     db = e.target.result
// }

// request.onerror = e => {
//     alert('error called')
   
// }







// const tx = db.transaction('words','readwrite')
// const pNotes = tx.objectStore('words')
// pNotes.add(note)

    // console.log(english)
    // console.log(cyrillic)
    // console.log(latin)
   // document.execCommand('copy')

// console.log(db)

// console.log(arr)




// document.body.innerHTML = "hello"







