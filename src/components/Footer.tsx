import './css/footer.css';
//import { footerLinks } from '../data';

const Footer = () => {
  return (
    <div className='footer-container'>
      <h2>Careplexus</h2>
      <div>
        <ul>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Terms of Use</li>
        </ul>
        <p>Copyright &copy; 2024 Careplexus Pharmacy</p>
      </div>
      <div>
        <!-- Facebook -->
<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 8H7V12H9V21H13V12H16L17 8H13V6.5C13 5.6 13.2 5 14.5 5H17V1H14C10.9 1 9 2.9 9 6V8Z"/>
</svg>

<!-- Twitter -->
<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.46 6C21.69 6.36 20.86 6.6 20 6.72C20.88 6.16 21.54 5.33 21.88 4.36C21.05 4.86 20.14 5.21 19.17 5.39C18.39 4.57 17.28 4 16 4C13.66 4 11.66 6 11.66 8.33C11.66 8.69 11.7 9.04 11.77 9.38C7.72 9.16 4.1 7.24 1.67 4.32C1.26 5.02 1.03 5.81 1.03 6.63C1.03 8.2 1.85 9.59 3.12 10.36C2.4 10.35 1.73 10.12 1.13 9.77V9.83C1.13 11.94 2.61 13.67 4.48 14.06C4.11 14.16 3.7 14.2 3.3 14.2C3.02 14.2 2.75 14.17 2.48 14.12C3.04 15.81 4.6 17 6.45 17C5 18.12 3.2 18.74 1.27 18.74C0.84 18.74 0.42 18.71 0 18.65C1.88 19.8 4.11 20.44 6.48 20.44C16 20.44 20.67 14 20.67 8.67V8.22C21.5 7.6 22.18 6.84 22.74 6Z"/>
</svg>
      </div>
    </div>
  )
}

export default Footer;