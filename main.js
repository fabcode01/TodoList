var userInput = document.getElementById('add')
var list = document.getElementById('list')
var seta = document.getElementById('seta')
var completas = document.getElementById('divCompletes')
var adicionar = document.getElementById('container')



function newAba(){
    var guia = window.open('https://github.com/fabcode01', '_blank')
}


document.addEventListener("keypress",function(e){
    if(e.key === 'Enter'){
        var btn = document.getElementById('submit')

        btn.click()

    }

})


function addList(){
    
    
   
    
    
    if (userInput.value.length == 0){
        userInput.placeholder = 'Erro! Campo em branco'
    } else {
        if (list.length == 0){
            userInput.placeholder = 'adicione uma tarefa!'
        }
        var ListID = Math.random()
        userInput.placeholder = 'adicione outra tarefa!'
        list.innerHTML += `<ul id='${ListID}'>
        
        <li>${userInput.value}</li>
        
        <div class="material-symbols-outlined"  onclick='check(${ListID})'>check</div>
        
        </ul>`
        userInput.focus()
        
        
        userInput.value = ''
    }
    
   
}


function check(ul_Id){

    userInput.placeholder = 'adicione uma tarefa!'
    var check = document.getElementById(`${ul_Id}`)
    check.remove()

    var ListID = Math.random()
    completas.innerHTML +=  `<ul id='${ListID}'><li>${check.innerText.replace('check', '')}</li><abbr title='apagar'><span id='remove'class="material-symbols-outlined"  onclick='remove(${ListID})'>do_not_disturb_on</span></abbr></ul>`
    
    
    
}

function remove(c_Id){
    document.getElementById(`${c_Id}`).remove()
}



 




function nav(opcao){

    if (opcao == 'adicionar'){


        completas.style.display = 'none'

        document.getElementById('completas').style.backgroundColor = '#dff7fd'
        document.getElementById('completas').style.color = 'black'

        document.getElementById('adicionar').style.backgroundColor = '#183b44'
        document.getElementById('adicionar').style.color = 'white'


        
        adicionar.style.display = 'block'
    } 
    
    if (opcao == 'completas'){
        adicionar.style.display = 'none'

        document.getElementById('adicionar').style.backgroundColor = '#dff7fd'
        document.getElementById('adicionar').style.color = 'black'

        document.getElementById('completas').style.backgroundColor = '#183b44'
        document.getElementById('completas').style.color = 'white'

        completas.style.display = 'block'
            
    }
    
}


  


