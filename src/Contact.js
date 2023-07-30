import React,{ useState} from 'react';
import './Home.css' ;

const  Contact = () => {
    
  const [user, setUser] = useState(
    {
      name: "" ,
      email: "" ,
      phone: "" ,
      message: "" ,


    }
  );

 let name, value;

  const getUserData = (event) => {
name = event.target.name;
value = event.target.value;
setUser({  ...user, [name]: value });
  };

  const postData = async (e) => {
e.preventDefault();

const{
  name,
      email,
      phone ,
      message
} = user;

if(name && email && phone && message){
  const res = await fetch(
    "https://reactcontactform-9a33e-default-rtdb.firebaseio.com/reactcontactform.json",
    {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(
      {
        name,
        email,
        phone,
        message,
      }
    )
  
  }
  );
  if(res){
    setUser({
    name: "" ,
    email: "" ,
    phone: "" ,
    message: "" ,
  
    });
    alert("Form submit Successfully");
  
    }
  } else{
alert("Plz Fill All Data")
};

const res = await fetch(
  "https://reactcontactform-9a33e-default-rtdb.firebaseio.com/reactcontactform.json",
  {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(
    {
      name,
      email,
      phone,
      message,
    }
  )

}
);
if(res){
  setUser({
  name: "" ,
  email: "" ,
  phone: "" ,
  message: "" ,

  });
  alert("Form submit Successfully");
}
  };
return(
    <>
    
 <div className="container">
 <h1 className="contact text-center">Contact Page </h1>
 <div class="text-center">
 <img  src="https://shorturl.at/gswGP" alt="contact_page" />
 </div>
 <div className="contactpage">
<form action="" method="POST">
<div class="mb-3 pt-5">
  <label for="name" class="form-label">Full Name</label>
  <input type="text" class="form-control" name="name"  required autoComplete="off" 
  
  value={user.name}
  onChange={getUserData}
  placeholder="your name"/>
</div>
<div class="mb-4">
  <label for="email" class="form-label">Email address</label>
  <input type="email" class="form-control" name="email"   required autoComplete="off" 
  
  value={user.email}
  onChange={getUserData}
  placeholder="name@example.com"/>
</div>
<div class="mb-4">
  <label for="phone" class="form-label">Phone Number</label>
  <input type="text" class="form-control" name="phone"   required autoComplete="off" 
  
  value={user.phone}
  onChange={getUserData}
  placeholder="Your Phone number"/>
</div>
<div class="mb-4">
  <label for="messages" class="form-label">Your Messages</label>
  <textarea class="form-control" name="message" rows="4" 
  
  value={user.message}
  onChange={getUserData}
  placeholder="write messages...."></textarea>
  <div class="col-auto pt-5 text-center ">
    <button type="submit" class="btn btn-style btn-style-border"  onClick={postData}>Submiit</button>
  </div>
</div>
</form>
</div>
</div>
</>
);
};

export default Contact;