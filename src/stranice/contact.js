import React from 'react'
import FormaKontakt from '../Komponente/FormaKontakt';

function Contact(){
    const kontakt={
        email: "yamifood@gmail.com"
    }
    return(
        <div className="container" style={{marginTop: 2 + 'em'}}>
            <h3>U sledećoj formi možete ostaviti Vaš komentar</h3>            
            <FormaKontakt/>
            <p>Za bilo kakve dodatne informacije možete nam pisati na mejl  {kontakt.email} </p>
            <br></br>
        </div>
    )
}
  
  export default Contact;
  
