var userInput = document.getElementById('add')
var list = document.getElementById('list')
var seta = document.getElementById('seta')


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
        list.innerHTML += `<ul id='${ListID}'><li>${userInput.value}</li><div class="material-symbols-outlined"  onclick='check(${ListID})'>check</div></ul>`
        userInput.focus()
        
        console.log(ListID)
        userInput.value = ''
    }
    
   
}


function check(ul_Id){
    userInput.placeholder = 'adicione uma tarefa!'
    document.getElementById(`${ul_Id}`).remove()
    
}
 


  


