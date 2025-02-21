import './css/contact.css';

const Contact = () =>{

  return (
    <div className='contact'>
      <div className='contact-header'>
        <h1>Send Us a Message</h1>
      </div>
      
      <form className='contact-form' action='/contact' method='POST'>
        <label>Name</label>
        <input type="text" />
        <label>Email</label>
        <input type="email" placeholder='example@gmail.com'/>
        <label>Subject</label>
        <select>
          <option>Consultation</option>
          <option>Payment Issues</option>
          <option>Product Complaints</option>
          <option>Other</option>
        </select>
        <label>Message</label>
        <textarea placeholder='Start typing'></textarea>

        <button>Submit</button>
      </form>
      <section>
         <address className='contact-address'>
           <span><strong>Careplexus Pharmacy</strong><br/>
           50, Unity Crescent,
           Akobo, Ibadan, Oyo State
           Nigeria</span>
           <span>Phone: <a href='tel:+2347055905756'>07055905756</a></span>
           <span>website: <a href='https://careplexus.com'>careplexus.com</a></span>
         </address>
      </section>
    </div>
  )
}

export default Contact;