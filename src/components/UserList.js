import React, { useEffect, useState } from 'react'
import { Table,Spinner,Button, Container,Modal } from 'react-bootstrap'

function UserList() {

    const [loading,setLoading] = useState(true)
    const[data,setData] = useState([])
    const [show, setShow] = useState(false);
    const[name,setName] = useState('')
    const[email,setEmail] = useState('')
    const[phone,setPhone] = useState('')
    const[id,setId] = useState(null)


    const handleClose = () => setShow(false);

    useEffect(()=>{
        fetchData()
    },[])

    
    // fetch data from api function
    function fetchData(){
        URL ='http://localhost:5000/users'
        fetch(URL)
        .then(resp =>{
            if(!resp.ok){
                throw new Error(`Https response status ${resp.status}`)
            }
            return resp.json()
        })
        .then(data =>{
            // console.log(data)
            setLoading(false)
            setData(data)
        })
        .catch(err => console.warn(err))
    }
    // Delete User function
    function deleteUser(id){
        URL =`http://localhost:5000/users/${id}`
        fetch(URL,{
            method:'DELETE'
        })
        .then(resp =>{
            if(!resp.ok){
                throw new Error(`Https response status ${resp.status}`)
            }
            return resp.json()
            
        })
        .then(data =>{
            console.log("Data deleted")
            fetchData()
          
        })
        .catch(err => console.warn(err))

    }
    // Edit user data function
    function EditUser(index){
        setShow(true);
        setId(data[index].id)
        setName(data[index].name)
        setEmail(data[index].email)
        setPhone(data[index].phone)


    }
    // Update User function
    function UpdateUser(){
        let updateData = {name,email,phone}
        URL =`http://localhost:5000/users/${id}`
        fetch(URL,{
            method:'PUT',
            headers:{
                'Accept': "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updateData)
        })
        .then(resp =>{
            if(!resp.ok){
                throw new Error(`Https response status ${resp.status}`)
            }
            return resp.json()
            
        })
        .then(data =>{
            console.log("Data updated")
            fetchData()
          
        })
        .catch(err => console.warn(err))
        handleClose()


    }
  return (
    <Container>
    {
        loading?
        <Spinner className='mt-5' animation="grow" />
        :
        <Table striped bordered hover >
            <thead>
            <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th colSpan={2}>Options</th>
            </tr>
            </thead>
            <tbody>
            {
                data.map((item,index)=>(
                    <tr key={index}>
                        <td >{index+1}</td>
                        <td >{item.name}</td>
                        <td >{item.email}</td>
                        <td >{item.phone}</td>
                        <td ><Button onClick ={()=>deleteUser(item.id)}>Delete</Button></td>
                        <td ><Button onClick ={()=>EditUser(index)}>Edit</Button></td>
                    </tr>
                ))
            }
            </tbody>
        </Table>
        
    }
    <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Update User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <label>User Name</label><input onChange={(e)=>setName(e.target.value)} value={name}/><br/>
            <label>User Email</label><input onChange={(e)=>setEmail(e.target.value)} value={email}/><br/>
            <label>User Phone</label><input onChange={(e)=>setPhone(e.target.value)} value={phone}/><br/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={UpdateUser}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  )
}

export default UserList