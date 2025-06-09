import ContactImg from '../../../assets/photos/contact.png';

export default function Contact() {
  return (
    <div className="contact">
      <div className="contact-one">
        <h3>SKINSAVAGE.AI</h3>
      <h1>Get in Touch</h1>
      <img src={ContactImg} alt="Contact Us" />
      </div>
      <div className='contact-two'>
     <ul>
  <li>
    <h3>Mailing Address</h3>
    <p>
      <a 
        href="https://www.google.com/maps/place/Nation+Centre,+Nairobi,+Kenya" 
        target="_blank" 
        rel="noopener noreferrer" 
        title="View location on Google Maps"
      >
        Nation Centre, CBD Nairobi - Kenya.
      </a>
    </p>
  </li>

  <li>
    <h3>Email Address</h3>
    <p>
      <a 
        href="mailto:skinsavage@gmail.com" 
        target="_blank" 
        rel="noopener noreferrer" 
        title="Send us an email"
      >
        skinsavage@gmail.com
      </a>
    </p>
  </li>

  <li>
    <h3>Phone Number</h3>
    <p>
      <a 
        href="tel:+254794582576" 
        target="_blank" 
        rel="noopener noreferrer" 
        title="Call us via phone"
      >
        (254) 794 582576
      </a>
    </p>
  </li>
</ul>


      </div>
    </div>
  )
}