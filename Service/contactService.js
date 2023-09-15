// import axios from "axios";

export const serverUrl='http://localhost:3000/'



// get all contact (method get)
export const getAllcontacts=()=>{
    const data=`${serverUrl}contacts`;
    return axios.get(data)
}

// get one contact 

export const getContact=(id)=>{
    const data = `${serverUrl}contacts/${id}`;
    return axios.get(data)
}

// get create data (method post)

export const createData=(contact)=>{
    const data = `${serverUrl}contacts`;
    return axios.post(data,contact)
}

// get update data (method Put)

export const updateData=(contact,id)=>{
    const data = `${serverUrl}contacts/${id}`;
    return axios.put(data,contact)
}

//  get delete contact (method delete)

export const deleteData=(id)=>{
    const data = `${serverUrl}contacts/${id}`;
    return axios.delete(data)
}


// get all group 

export const getAllgroup=()=>{
    const data = `${serverUrl}groups`;
    return axios.get(data)
}

// get one group

export const getgroup=(groupId)=>{
    const data = `${serverUrl}groups/${groupId}`;
    return axios.get(data)
}





