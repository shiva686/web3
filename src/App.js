import React , { useEffect } from 'react';
import logo from './logo.svg';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import menu from './icons/open-menu.png';
import {Link , Element } from 'react-scroll'
import bastei from './photos/bastei-3728708_1920.jpg';
import birds from './photos/birds-in-flight-5366034_1920.jpg';
import camera from './photos/camera-581126_1920.jpg';
import dog from './photos/dog-5357794_1920.jpg';
import drone from './photos/drone-1245980_1920.jpg';
import eye from './photos/eye-4559763_1920.jpg';
import lens from './photos/lens-3046269_1920.jpg';
import monkey from  './photos/monkey-4360298_1920.jpg';
import photography1 from './photos/photography-1850469_1920.jpg';
import photography2 from './photos/photography-3749383_1920.jpg';
import profile_pic from './photos/profilepic.jpg';
const App = () => {

const banner = './photos/woman-407168_1920';
const album = [
      bastei,
      birds,
      camera,
      dog,
      drone,
      eye,
      lens,
      monkey,
      photography1,
      photography2
  ];
  

 useEffect(() =>{



   
   let menu = document.getElementById('addmenu');
   let width = window.innerWidth ;
   document.getElementById('iconbar').onclick = () =>{
      menu.classList.remove('stick');
     if(menu.className === 'menu mb'){
          menu.classList.remove('mb');
       }
     else{
          menu.classList.add('mb');
       }
       
   }
 
    
      
    window.addEventListener('scroll' , () =>{
          
        let stick = menu.offsetTop;
         if(width > 600){
          
            if(window.pageYOffset >= stick)
            {
             menu.classList.add('stick');
            }
            else
            {
             menu.classList.remove('stick');
            }
         }
         else{
            menu.classList.remove('stick');
         }
      
    });

   window.addEventListener('resize' , () =>{
        
         menu.classList.remove('stick');
   });

    
 });

  return (
    <>
    <div className = "container-fluid">
    <div id = "home" className="bg-m"></div>
    <div id = "addmenu" className = "menu">
      <a id="iconbar"><i className=" img fas fa-bars"></i></a>
      <ul className ="un-order-list">
       <li className = "text-capitalize list"><Link className = "ct"  spy={true} duration={500} smooth={true} href = "#" to ="home">home</Link></li>
       <li className = "text-capitalize list"><Link className = "ct"  spy={true} duration={500} smooth={true} href = "#" to ="photos">photos</Link></li>
       <li className = "text-capitalize list"><Link className = "ct"  spy={true} duration={500} smooth={true} href = "#" to ="about">about</Link></li>
       <li className = "text-capitalize list"><Link className = "ct"  spy={true} duration={500} smooth={true} href = "#" to ="contact">contact</Link></li>
      </ul>
     </div>
    <br/>
     <div>
       <Element name = "photos">
       <h1 className="text-capitalize text-center mt-50">photos</h1>
       <div className="container mt-50">
         <div className ="row">
            {
              album.map((value , index ) =>{
                return (<div key = {index} className = "col-xl-3 col-lg-4 col-md-6 col-sm-12">
                           <img className = "imgr" src={value} />
                        </div>);
                       })
            }
         </div>    
        </div>
       </Element>
   </div>
     <div>
     <br/>
       <Element name = "about">
       <h1 className = "text-capitalize text-center mt-50">about</h1>
        <div className ="container mt-50">
         <div className ="row">
           <div className = "col-md-6 about">
              <img className = "profile-pic" src={profile_pic}/>
           </div>
           <div className = "col-md-6 mt-50 about-us">
               <h2 className = "text-center text-capitalize">Your name</h2>
               <h2 className="text-center text-capitalize tf"> caption</h2>
               <p>Irure aute aliquip ullamco in proident adipisicing non dolor velit elit ea exercitation sunt in irure laboris ullamco cillum mollit dolore duis deserunt quis quis aliquip duis nulla ut esse in dolor eu culpa aliqua velit velit minim adipisicing mollit aliqua occaecat duis ex veniam nostrud magna quis consequat ex dolore id sint pariatur eu sit eu ea esse deserunt sed dolore aute nisi est dolor consequat nulla ut culpa magna mollit ex mollit in esse do culpa irure consequat sit excepteur consequat id laboris in dolor aliqua reprehenderit reprehenderit dolore commodo quis culpa voluptate qui magna enim ex dolor aute adipisicing sit do esse deserunt deserunt duis et in excepteur laboris excepteur consequat exercitation sunt ea in do officia ea consectetur nulla aute proident labore minim pariatur exercitation pariatur sunt aliqua dolore enim nulla culpa sit reprehenderit cillum dolor incididunt magna culpa sint labore sed ut id laboris dolor minim.</p>
           </div>
           </div>
         </div>     
       </Element>
   </div>
     <div>
       <Element name = "contact">
         <h1 className ="text-capitalize text-center">contact us</h1>
          <div className ="row">
            <div className = "col-md-6">
                 <form className = "con-g">
                   <label className = "text-capitalize">email</label>
                   <br/>
                   <input type="email" name="email" className="email"/>
                   <br/>
                   <br/>
                   <label className = "text-capitalize">passoword</label>
                   <br/>
                   <input type="passoword" name="passoword" className="passoword"/>
                   <br/>
                   <br/>
                   <label className = "text-capitalize">message</label>
                   <br/>
                   <textarea type="textarea" name="meassage" className="textarea"/>
                   <br/>
                   <br/>
                   <button type="button" className = "btn-primary">submit</button>
                 </form>
            </div>
            <div className = "col-md-6 mt-cu">

               <h2 className = "font-weight-bold text-capitalize">Feel Free To Contact</h2>
                <br/>
                <br/>
               <p className = "text-capitalize">
                email         : youremail@gmail.com
                <br/>
                <br/>
                phone number  : your number:
                <br/>
                <br/>
                website       : website name
              </p>
            </div>
          </div> 
       </Element>
   </div>
    </div>
     </>
  );
}

export default App;
