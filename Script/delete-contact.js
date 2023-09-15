import * as ContactService from "../Service/contactService.js"

window.addEventListener('DOMContentLoaded',()=>{
    const id = window.location.href.split('=')[1]

    console.log(id)

    if(id){
        ContactService.deleteData(id).then((res)=>{
            if(res && res.data){
                window.location.href="../Pages/admin-contact.html"
            }
        }).cathe((error)=>{
            console.log(error)
        })
    }
})