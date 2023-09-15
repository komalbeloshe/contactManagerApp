
import * as ContactService from "../Service/contactService.js"

window.addEventListener('DOMContentLoaded', () => {
    populateGroupDataFromServer()
    populateFormDataFromServer()
})

const formElement = document.querySelector('#edit-contact-form')

formElement.addEventListener('submit', (event) => {
    event.preventDefault()
    sendFormToServe()
})

const populateGroupDataFromServer = () => {
    ContactService.getAllgroup().then((res) => {
        const groups = res.data
        if (groups) {
            displayData(groups)
        }
    }).catch((error) => {
        console.log(error)
    })
}

const displayData = (groups) => {

    const selectElement = document.querySelector('#group-select-input')

    let optionElement = `<option> Select A Group </option>`

    for (let k of groups) {
        optionElement += `<option value="${k.id}">${k.name} </option>`
    }

    selectElement.innerHTML = optionElement

}

const populateFormDataFromServer = () => {

    const id = window.location.href.split("=")[1]

    console.log(id)
   
    if (id) {
    ContactService.getContact(id).then((res)=>{
    const contact = res.data

    if(contact){
        populateDataToForm(contact)
    }
})

    } else {
        console.log('error')
        
    }
}

const populateDataToForm = (contact) => {
    document.querySelector('#name-input').value = contact.name;
    document.querySelector('#image-input').value = contact.imageUrl;
    document.querySelector('#mobile-input').value = contact.mobile;
    document.querySelector('#email-input').value = contact.email;
    document.querySelector('#company-input').value = contact.company;
    document.querySelector('#title-input').value = contact.title;
    document.querySelector('#group-select-input').value = contact.groupId;

}

const sendFormToServe = () => {
    const contact = {
        name: document.querySelector('#name-input').value,
        imageUrl: document.querySelector('#image-input').value,
        mobile: document.querySelector('#mobile-input').value,
        email: document.querySelector('#email-input').value,
        company: document.querySelector('#company-input').value,
        title: document.querySelector('#title-input').value,
        groupId: document.querySelector('#group-select-input').value,
       
    }

    const id = window.location.href.split('=')[1]

    if (contact && id) {
        ContactService.updateData(contact, id).then((res) => {
            if (res && res.data) {
                window.location.href = "../Pages/admin-contact.html"
            }
        }).catch((error) => {
            console.log(error);
        })
    }
}