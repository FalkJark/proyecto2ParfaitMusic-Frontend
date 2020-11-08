//console.log('Hola mundo')

var formNewUser = document.getElementById('newUser')

formNewUser.addEventListener('submit', function(e){
    e.preventDefault();
    //console.log('Diste click bb')

    var data = new FormData(formNewUser)
    console.log(data)
    
    var newU = {
        name : data.get('name'),
        lastName:data.get('lastName'),
        nickName:data.get('nickName'),
        password: data.get('password'),
        type: 'client'
    }

    fetch('http://localhost:5000/users/register',{
        method:'POST',
        body: JSON.stringify(newU),
        cache: "no-cache",
        headers: new Headers({
        "content-type": "application/json" })
    }) // end of fetch send
    .then(res => res.json())
    .then(res => {
        if(res['answer']== 'ok'){
            alert("Te has registrado con exito");
            location.href = "Login.html"
        }else{
            alert(res['answer']);
        }

    })

   
}) //fin del action listener