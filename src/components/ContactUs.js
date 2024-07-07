import React from "react";
import { useState } from "react";
import { useContext } from "react";
import CommonContext from "../context/CommonContext";
import { Container, Button } from "react-bootstrap";

function ContactUs() {
  // context values
  const {theme} = useContext(CommonContext)
  const {value,setValue} = useContext(CommonContext)


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState(null);
  const [alertType, setAlertType] = useState('');

  function sendData() {
    let data = { name, email, phone };

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        'Accept': "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data),
    })
    .then(resp =>{
        if(!resp.ok){
            throw new Error(`HTTP error! status: ${resp.status}`)
        }
        return resp.json()
    })
    .then(data =>{
        setMessage("Successfully posted data!!")
        setAlertType("success")
    })
    .catch(error =>{
        setMessage(`Error: ${error.message}`)
        setAlertType("warning")
    })
  }
  return (
    <>
      <Container className= {`bg-${theme} text-${theme==='light'?'dark':'light'}`}>
        <div>ContactUs</div>
        <div className="fields">
          <div className="label">User Name</div>
          <div className="input-box">
            <input type="text" onChange={(e) => setName(e.target.value)} />
          </div>
        </div>
        <div className="fields">
          <div className="label">Email</div>
          <div className="input-box">
            <input type="text" onChange={(e) => setEmail(e.target.value)} />
          </div>
        </div>
        <div className="fields">
          <div className="label">Phone</div>
          <div className="input-box">
            <input type="text" onChange={(e) => setPhone(e.target.value)} />
          </div>
        </div>

        <Button onClick={sendData}>Submit</Button>
        <p>The Shared value is {value}</p>
        <Button onClick={()=>{setValue(Math.floor(Math.random()*10))}} >Change Value</Button>
      </Container>

      {
        
        message && (
            
            <div className={`alert alert-${alertType} mt-3` } >
              {message}
            </div>
        )
      }
    </>
  );
}

export default ContactUs;
