import React from "react";
import { useState } from "react";
import { Container, Button,Alert } from "react-bootstrap";

function ContactUs() {
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
      <Container>
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
