import * as ContactService from "../Service/contactService.js"

window.addEventListener('DOMContentLoaded',()=>{
    ContactService.getAllgroup().then((res)=>{
        const groups  =res.data
        if(groups){
            DisplayGroups(groups)
        }
    })
    .catch((error)=>{
        console.log(error)
    })
})

const DisplayGroups = (groups)=>{
    const selectElement = document.querySelector("#group-select-input");
    let optionElement = `<option value=""> Select a Group </option> `;
    for (let k of groups){
        optionElement += `<option value="${k.id}">${k.name}</option> `

    }

    selectElement.innerHTML = optionElement
}

// form submit data goes to backend 

const formElement = document.querySelector("#add-contact-form")

formElement.addEventListener("submit",(event)=>{

    event.preventDefault();

    const formBody = {
        name:document.querySelector("#name-input").value,
        imageUrl:document.querySelector("#image-input").value, 
        mobile:document.querySelector("#mobile-input").value, 
        email:document.querySelector("#email-input").value, 
        company:document.querySelector("#company-input").value, 
        title:document.querySelector("#title-input").value, 
        groupsId:document.querySelector("#group-select-input").value,

    }

    if (formBody){
        ContactService.createData(formBody).then((respone)=>{
            if(respone && respone.data){
                window.location.href="../Pages/admin-contact.html"
            }
        }).catch((error)=>{
            console.log(error)
        })
    }
})


