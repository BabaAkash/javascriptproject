
function mysubmit(){
    var  body = {
        fullname : document.getElementById("fullname").value,
        mobile_number : document.getElementById("mobile_number").value,
        passyear : document.getElementById("passyear").value,
        email : document.getElementById("email").value,
        password : document.getElementById("password").value
    }
  console.log(axios)
   axios.post('https://crudcrud.com/api/d4ddc38bf2474c1fb6ad97efd7dfc1b7/post',body).then(res =>{
    console.log(res,"hii")
  })
}

