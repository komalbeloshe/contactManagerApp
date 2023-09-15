import * as ContactService from "../Service/contactService.js"

window.addEventListener('DOMContentLoaded',()=>{
    ContactService.getAllcontacts().then((respose)=>{
        const contacts=respose.data
        DisplayContacts(contacts)
    })
    .catch((error)=>{
        console.log(error)
    })
})

const DisplayContacts=(contacts)=>{
    const contactsRowElement =document.querySelector('#contacts-row')

    let contactCards=""

    for(let a of contacts){
        contactCards +=`
        <div class="col-sm-3">
            <div class="card shadow-lg">
                <div class="card-header text-center">
                    <a href="../pages/view-contact.html?contactId=${a.id}">
                        <img alt="" class="img-fluid w-50 rounded-circle shadow-lg" src="${a.imageUrl}">
                    </a>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">
                            Name : <span class="fw-bold">${a.name}</span>
                        </li>
                        <li class="list-group-item">
                            Mobile : <span class="fw-bold">${a.mobile}</span>
                        </li>
                        <li class="list-group-item">
                            Title : <span class="fw-bold">${a.title.toUpperCase()}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>` 
    }

    contactsRowElement.innerHTML= contactCards
}
