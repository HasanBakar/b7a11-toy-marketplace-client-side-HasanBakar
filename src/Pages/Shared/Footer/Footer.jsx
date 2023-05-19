import { Link } from "react-router-dom";
const Footer = () => {
    return (
     <>
     <footer className="footer p-10 mt-8 bg-base-200 text-base-content">
  <div>
    <span className="footer-title">Services</span> 
    <Link className="link link-hover">Sell Toys</Link> 
    <Link className="link link-hover">Design Toys</Link> 
    <Link className="link link-hover">Conservation traditional toys</Link> 
  </div> 
  <div>
    <span className="footer-title">Address</span> 
    <Link className="link link-hover">Street: 319/ Ka, North Jatrabari, P.O. Box: 1204</Link> 
    <Link className="link link-hover">City: Dhaka</Link> 
    <Link className="link link-hover">Zip code: 1204</Link> 
  </div> 
  <div>
    <span className="footer-title">Contact Us</span> 
    <Link className="link link-hover">Email: demo@gmail.com</Link> 
    <Link className="link link-hover">Contact: +880 13XXXXXX </Link> 
    <form className="flex">
        <input type="text" name="email" id="email" placeholder="Accept our Newsletters" className="w-full border px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:outline-pink-600" />
        <button type="submit" className="block w-20 p-3 text-center rounded-sm text-gray-50 hover:bg-blue-600 bg-pink-500">Subscribe</button>
    </form> 
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <Link className="link link-hover">Terms of use</Link> 
    <Link className="link link-hover">Privacy policy</Link> 
    <Link className="link link-hover">Cookie policy</Link>
  </div>
</footer> 
<footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
  <div className="items-center grid-flow-col">
   <img className="h-16 w-16" src="toys.png" alt="" />
    <p>ToyQuest Ltd. <br/>Copyright © 2023 - All right reserved by ToyQuest Ltd.</p>
  </div> 
  <div className="md:place-self-center md:justify-self-end">
    <div className="grid grid-flow-col gap-4">
      <Link><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-blue-400"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></Link> 
      <Link><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-red-500"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></Link>
      <Link><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-blue-600"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></Link>
    </div>
  </div>
</footer>

     </>
    );
};

export default Footer;