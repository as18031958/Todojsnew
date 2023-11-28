var shadow = document.querySelector('div')
var todosection = document.querySelector('section')
var addlist = document.querySelector('.addlist')
var Input = document.querySelector('#Input')
var header = document.querySelector('header')
var NoText = document.querySelector('.noText')
//variable add for second popup on add button on todocard
var addItem = document.querySelector('.addItem')
var addItemhead = document.querySelector('#InputText')


// variable take for popup not repeat first popup
var todocount = 0;
// variable take for popup not repeat second popup
var newtodocount = 0;

//popup1 function for add button on homescreen
function popup1(){
    shadow.classList.add('shadow')
    addlist.style.display = 'block'
    NoText.style.display  = 'none'
}

//popup list close button
document.querySelector('.Deletebtn').addEventListener('click',()=>{
    shadow.classList.remove('shadow') 
    addlist.style.display = 'none'
})
document.querySelector('.Deletebtn2').addEventListener('click',()=>{
    shadow.classList.remove('shadow') 
    addItem.style.display = 'none'
})


//popup2 button for addlist items
 function popup2(){
    console.log("popup2")
    todocount++;
    shadow.classList.remove('shadow')
    addlist.style.display = 'none'
    

// create the dyanamic cards
 var todoCard = document.createElement('div')
 var heading = document.createElement('div')
 var boxline = document.createElement('hr')
//  var parentad = document.createElement('div')
 var addBtn1 = document.createElement('div')
 var deleteBtn = document.createElement('div')

 //into section add todocard
 todosection.appendChild(todoCard)
 
 //assign uniqueid to each box add class into it
 todoCard.setAttribute('id',`box${todocount}`)
 todoCard.classList.add('box')

 //todocard append child heading
 todoCard.appendChild(heading)

 //for hr in Each box
 todoCard.appendChild(boxline)
 
// assign input heading value for each card
heading.innerHTML = `${Input.value}`;
heading.classList.add('heading')
console.log(heading.innerHTML)

//value not enter into input field
if (Input.value === '') {
    alert('Please enter a value!')
     addlist.style.display = 'block'
     todoCard.style.display = 'none'
}

//card heading click to perform
heading.addEventListener('click',()=>{
    var allitems = document.querySelectorAll('.box')
    
    //card heading call todocard as a parentnode
    var card1 = heading.parentNode;
    var carval = heading.innerHTML;

    //hide the header
    header.style.display = 'none'
    card1.style.display = 'block'
    todosection.style.justifyContent = 'center'
    
    // for all card remove only single card show 
    allitems.forEach((cards)=>{
        if(cards !== card1)
        cards.style.display = 'none'
    })
    //heading show above back button show
    document.querySelector('.upparbar').style
    .display = 'flex'
    document.querySelector('.Text').innerHTML =
    `${carval}`

    //back button working function
    document.querySelector('.backbtn').addEventListener('click',()=>{
        header.style.display = 'flex'
        todosection.style.display = 'flex'
        todosection.style.justifyContent = 'space-between'
        
        //upparbar notshow
        document.querySelector('.upparbar').style
        .display = 'none'
        
        //active the other card which is inactive
        allitems.forEach((cards)=>{
            cards.style.display = 'block' 

        })

    })

    })
    var parentad = document.createElement('div')
    parentad.classList.add('parentcard')
    //add deletebutton append parenetnode toddocard
    //  todoCard.appendChild(deleteBtn)
    todoCard.appendChild(parentad)
    parentad.appendChild(deleteBtn)
    deleteBtn.classList.add('delete')
    deleteBtn.innerHTML = '<i class="fa-sharp fa-solid fa-person-circle-minus fa-beat fa-lg" style="color: #f40101;"></i>'
    
    
    deleteBtn.addEventListener('click',()=>{
        var cardDelete = deleteBtn.closest('.box');
        cardDelete.style.display = 'none'
        cardDelete.remove();
        todocount--;
        
        //no itemd in todolist
        if(todocount === 0){
            document.querySelector('.noText').style.display = 'block'
        }
   })
   


         //todocard addbutton
         todoCard.appendChild(parentad)
         parentad.appendChild(addBtn1)
        //   todoCard.appendChild(addBtn1);
         addBtn1.classList.add('addBtnclass')
         addBtn1.innerHTML = '<i class="fa-solid fa-person-circle-plus fa-beat fa-lg" style="color: #057a1d;"></i>'
        
    
         //add blur and popup jenerate
         addBtn1.addEventListener('click',()=>{
            shadow.classList.add('shadow')
            addItem.style.display = 'block'
            card = addBtn1.closest('.box')
            //   card = addBtn1.parentNode
            
            

         })
        }
        
        
        var ItemBtn = document.querySelector('.ItemBtn')

         ItemBtn.addEventListener
         ('click',()=>{
            newtodocount++;
            shadow.classList.remove('shadow')
            addItem.style.display = 'none'
            if (addItemhead.value === '') {
                alert('Please enter a value!')
             return
            }
            
            
            
            //create a new div for text,button,tododiv for append child of card
            var tododiv = document.createElement('div')
            var rowtext = document.createElement('div')
            var markdown = document.createElement('div')
            
            // append child for main card
            card.appendChild(tododiv)
            // parentad.appendChild(tododiv)
            tododiv.appendChild(rowtext)
            tododiv.appendChild(markdown)

            tododiv.setAttribute('id',`tododiv${newtodocount}`);
            //add classlist for style purpose
            tododiv.classList.add('tododiv')
            markdown.classList.add('markdown')
            rowtext.classList.add('rowtext')

            //add innerhtml
            rowtext.innerHTML = `${addItemhead.value}`
            markdown.innerText = 'Mark'
            

            //markdown button working function
            markdown.addEventListener('click',()=>{
                //call parent node tododiv
                var tododivtext = markdown.parentNode
                tododivtext.classList.add('linethrough')
                markdown.style.display = 'none'

            })

         })

        


