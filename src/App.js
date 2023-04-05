import './App.css';
import pic from "../src/Images/logo.jpeg";
import pic1 from "../src/Images/5.jpeg";
import pic2 from "../src/Images/1.jpeg"
import Armors from './pages/Guns';
import Contact from './pages/Contact';
function App() {
  return (
    <div>
      <section id="header">
    <nav>
        <a href=""><img src={pic}/> </a>
            <div class="nav-links"><br/><br/>
                <ul>
                    <li><a href="/" >Home</a></li>
                    <li><a href="#header1">About</a></li>
                    <li><a href="#header3">Purchase</a></li>
                    <li><a href="#header4">Contact</a></li>
                </ul>
           </div>
    </nav>
<div class ="title">
    <br/><br/><h1>D's Shoes</h1><br/>
    <p>
        The shop holds variety of shoes
    </p><br/><br/><br/><br/>
    <a href="https:/www.google.com" target="_blank" >VISIT US TO KNOW MORE</a>
</div>
    
</section>
{/* About Section */}
<section id="header1">
    <nav>
        <div class="headertext">
               <h2>
                Know about us here 
                </h2><br/>
                <div class="img2">
                    <img src={pic1} alt="" /><img src={pic1} alt="" /><br/><br/>
                    <img src={pic2} alt=""/> <img src={pic2 } alt=""/>
                </div>
                <h6>Here you know about what are the variety of shoes available
                and book for delivery.<br/>      
                </h6><br/>
          <h6> <i>NOTE : Cash on Delivery only</i><br/><br/></h6> 
            <div>
                <a class="slots" href="https:/www.google.com" target="_blank">BOOK SLOTS NOW </a>
            </div> 
        </div>
    </nav>
</section>
    <Armors/>    
    <Contact/>
    </div>
  );
}

export default App;
