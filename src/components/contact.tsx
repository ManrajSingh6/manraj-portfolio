import "./contacts.css"
import { RiMailSendLine } from "react-icons/ri"

export default function Contact(){

    function submitForm(){
        console.log("hello")
    }

    return(
        <div className="contacts-main">
            <div className="contacts-parent">
                <p>Get in touch with me.</p>
                <div className="section-header-container">
                    <h1>Contact</h1>
                    <div className="line"></div>
                </div>
                <div className="contact-form-container">
                    <form onSubmit={submitForm}>
                        <label htmlFor="name" style={{marginTop: "0"}}>Name</label>
                        <input
                            required 
                            id="name" 
                            type="text" 
                            placeholder="Name"
                        />
                        <label htmlFor="email">Email</label>
                        <input
                            required 
                            id="email" 
                            type="email" 
                            placeholder="Email"
                        />
                        <label htmlFor="message">Message</label>
                        <textarea
                            required 
                            rows={5} 
                            cols={10} 
                            id="message" 
                            placeholder="Message"
                        />
                        <button type="submit">
                            <RiMailSendLine fontSize="1.5rem"/>
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}