import * as ContactService from "../Service/contactService.js"

window.addEventListener('DOMContentLoaded',()=>{
    ContactService.getAllcontacts().then((respose)=>{
        const contacts=respose.data

        adminContact(contacts)
        
    })
    .catch((error)=>{
        console.log(error)
    })

})

const adminContact=(contacts)=>{
    const contactTableElement=document.querySelector('#contact-table-body')
    
    let tableRowElement=""

    contacts.forEach((b,index)=>{

        tableRowElement +=`
        
        <tr> 
            <td>${index + 1}</td>
                <td>
                    <img src="${b.imageUrl}" width="50" height="50" class="rounded-circle shadow-lg">
                </td>
                    <td>${b.name}</td>
                    <td>${b.mobile}</td>
                    <td>${b.title}</td>
                    <td>${b.company}</td>
                    <td>
                        <a class="btn btn-primary mt-2" href="../Pages/edit-contact.html?id=${b.id}">
                            UPDATE
                        </a>
                        <a class="btn btn-danger mt-2" href="../Pages/delete-contact.html?id=${b.id}">
                             DELETE
                        </a>
                    </td>
        </tr>`
    })  

    contactTableElement.innerHTML = tableRowElement
}