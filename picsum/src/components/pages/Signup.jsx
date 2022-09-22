import {React , useState , useEffect} from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import SignupImg from '../../assets/images/signup.jpg';  
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'; 
import { useScript } from "../../hooks/useScript";
import jwt_decode from 'jwt-decode';  

import { createAvatar } from '@dicebear/avatars';
import * as style from "@dicebear/micah";



const Signup = () => { 
const navigate = useNavigate();




useEffect(()=> {
        const token = localStorage.getItem('token');
        if(token !== null)
        {
          navigate('/user'); 
        }
        
},[])  
const MySwal = withReactContent(Swal);
const [loading, setLoading] = useState(false);
const [data, setData] = useState({
  name : "",
  email:"",
  password:""

})
 
const handleChange = (e) => {
  setData({...data, [e.target.name] : e.target.value}); 
}


const blobCreationFromURL =  (dataURI) => {
  let byteString;
  if (dataURI.split(',')[0].indexOf('base64') >= 0)
      byteString = atob(dataURI.split(',')[1]);
  else
      byteString = unescape(dataURI.split(',')[1]); 
  let mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]; 
  let ia = new Uint8Array(byteString.length);
  for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
  }

  return new Blob([ia], {type:mimeString});
}


const handleSubmit = (e) => {
e.preventDefault();
setLoading(true);
const formData = new FormData();
const config = {
  "Content-type": "multipart/form-data"
};

const imageURI = createAvatar(style, { 
  dataUri: true
}); 
const  blobObject = blobCreationFromURL(imageURI); 
let file = new File( [blobObject], 'avatar.svg', { type: 'image/svg' } ); 
formData.append('image', file); 
formData.append('name', data.name); 
formData.append('email', data.email); 
formData.append('password', data.password);  
 
   axios.post('http://localhost:8888/api/signup.php',formData,config).then((result)=>{ 
    
        if(result.data.message == 'success')
        { 
                setData({name : "",email:"",password:""}) 
                const Toast = MySwal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 1500,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                          toast.addEventListener('mouseenter', MySwal.stopTimer)
                          toast.addEventListener('mouseleave', MySwal.resumeTimer)
                        }
                      })
                      
                      Toast.fire({
                        icon: 'success',
                        title: 'Signed in successfully'
                      })  
                setLoading(false);
                navigate('/login'); 
        }
        else
        {      
             MySwal.fire({
                icon: 'error',
                title: 'Oops...',
                text: result.data.message
              }) 
                setLoading(false);
                console.log(result);
        }
   })    
 
} 

function handleCallbackResponse(res){
  const userObject = jwt_decode(res.credential); 
  const sendData = {
        image:userObject.picture,
        name:userObject.name,
        email:userObject.email
       }
          axios.post('http://localhost:8888/api/oauth.php',sendData).then((result)=>{  
            window.localStorage.setItem('token', result.data.token);
            navigate('/user'); 
          })
} 

 
useScript("https://accounts.google.com/gsi/client", () => {
    window.google.accounts.id.initialize({
      client_id: "925771794516-c41uu1tbkianfjig93kqomqkbffpsbgg.apps.googleusercontent.com", 
      callback: handleCallbackResponse,
      auto_select: false,
    });

    window.google.accounts.id.renderButton(document.getElementById('googleBtn'), {
      size: "large",width:'400px',shape:'circle'
    }); 
});

 

 


    return (
       <>
        <div className='flex '>
            <div className='w-1/2 flex flex-col items-center justify-center h-screen'>
            <NavLink to="/">
            <svg fill='#c00' height="44" width="44" viewBox="0 0 24 24" aria-hidden="true" aria-label="" role="img"><path d="M0 12c0 5.123 3.211 9.497 7.73 11.218-.11-.937-.227-2.482.025-3.566.217-.932 1.401-5.938 1.401-5.938s-.357-.715-.357-1.774c0-1.66.962-2.9 2.161-2.9 1.02 0 1.512.765 1.512 1.682 0 1.025-.653 2.557-.99 3.978-.281 1.189.597 2.159 1.769 2.159 2.123 0 3.756-2.239 3.756-5.471 0-2.861-2.056-4.86-4.991-4.86-3.398 0-5.393 2.549-5.393 5.184 0 1.027.395 2.127.889 2.726a.36.36 0 0 1 .083.343c-.091.378-.293 1.189-.332 1.355-.053.218-.173.265-.4.159-1.492-.694-2.424-2.875-2.424-4.627 0-3.769 2.737-7.229 7.892-7.229 4.144 0 7.365 2.953 7.365 6.899 0 4.117-2.595 7.431-6.199 7.431-1.211 0-2.348-.63-2.738-1.373 0 0-.599 2.282-.744 2.84-.282 1.084-1.064 2.456-1.549 3.235C9.584 23.815 10.77 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12"></path></svg>
            </NavLink>
            <h1 className='text-3xl font-Emilys font-semibold mt-4'>Continue With Signup</h1>
            <form autoComplete='off' className='flex flex-col' onSubmit={handleSubmit}>
                    <label className='mt-8 ml-2'>Name</label>
                    <input type='text' placeholder='Enter Name' name='name' className='w-[25rem] mt-2.5 bg-[#efefef] outline-none py-3 px-4 rounded-full font-Poppins 
                    text-sm' onChange={handleChange} value={data.name} />

                    <label className='mt-5 ml-2'>Email</label>
                    <input type='text' name='email' placeholder='Enter Email Address' className='w-[25rem] mt-2.5 bg-[#efefef] outline-none py-3 px-4 rounded-full font-Poppins 
                    text-sm' onChange={handleChange} value={data.email} />
 
                    <label className='mt-5 ml-2'>Password</label>
                    <input type='text' name='password' placeholder='Create Password' className='w-[25rem] mt-2.5 bg-[#efefef] outline-none py-3 px-4 rounded-full font-Poppins 
                    text-sm' onChange={handleChange} value={data.password} />

                    <button className='w-[25rem] mt-8 bg-[#e60022] text-white outline-none py-2.5 px-4 rounded-full font-Poppins 
                    text-md ' disabled={loading}>
                        {loading && <Progressing />}
                        {!loading && 'Signup'}
                    </button> 
                
            </form> 
            <h3 className='text-sm font-semibold mt-4'>OR</h3>
           

 
    
            <div id="googleBtn"  className='mt-5 flex'></div>  
                    <NavLink to="/login">
                    <h4 className='text-sm mt-4'>Already have an account ? <span className='cursor-pointer font-semibold'>Login</span></h4>
                    </NavLink>
            </div>
  
            <div className='w-1/2 flex bg-[#e60022] items-center h-screen overflow-hidden'>
            <img src={SignupImg} className='relative -left-1/2 object-contain' />  
            </div>
            
        </div>
       </>
    )

 
   }
   const Progressing = () => {
        return (
                <>
                <i className="fad fa-spinner-third fa-spin"></i> Processing
                </>
        )
    }


   export default Signup;