"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

import {
  LuUser,
  LuMail,
  LuShield,
  LuLock,
  LuSave,
  LuX
} from "react-icons/lu";

export default function AdminProfileSettings() {

const DEMO_EMAIL = "admin@system.com";


/* PROFILE */

const [formData,setFormData]=useState({
name:"Admin User",
email:DEMO_EMAIL
});


/* MODAL STATES */

const [openModal,setOpenModal]=useState(false);
const [step,setStep]=useState(1);

const [email,setEmail]=useState("");
const [code,setCode]=useState("");

const [generatedCode,setGeneratedCode]=useState(null);

const [timer,setTimer]=useState(60);

const [verified,setVerified]=useState(false);

const [newPassword,setNewPassword]=useState("");



/* PROFILE FORM */

const handleChange=(e)=>{

setFormData({
...formData,
[e.target.name]:e.target.value
});

};



const handleSave=()=>{
alert("Profile Saved");
};



const handleCancel=()=>{

setFormData({
name:"Admin User",
email:DEMO_EMAIL
});

};



/* SEND OTP */

const sendCode=()=>{

if(email!==DEMO_EMAIL){

alert("Use demo email: admin@system.com");

return;

}

/* Generate OTP */

const otp=Math.floor(100000+Math.random()*900000);

setGeneratedCode(String(otp));

alert("Demo OTP: "+otp);

setStep(2);
setTimer(60);

};



/* VERIFY OTP */

const verifyCode=()=>{

if(!generatedCode){

alert("Generate code first");

return;

}

if(code===generatedCode){

setVerified(true);

alert("Code Verified");

}else{

alert("Wrong Code");

}

};



/* SAVE PASSWORD */

const savePassword=()=>{

if(newPassword.length<4){

alert("Password too short");

return;

}

alert("Password Changed");

closeModal();

};



/* CLOSE MODAL */

const closeModal=()=>{

setOpenModal(false);

setStep(1);

setVerified(false);

setEmail("");

setCode("");

setGeneratedCode(null);

setNewPassword("");

};



/* COUNTDOWN */

useEffect(()=>{

if(step!==2) return;

if(timer<=0) return;

const interval=setInterval(()=>{

setTimer(prev=>prev-1);

},1000);

return()=>clearInterval(interval);

},[timer,step]);



return(

<div className="max-w-[1000px] mx-auto space-y-8 pb-10">


{/* HEADER */}

<div className="bg-slate-900 p-8 rounded-[3rem] text-white shadow-xl">

<h1 className="text-3xl font-black">
Admin Profile & Settings
</h1>

<p className="text-slate-400 text-sm mt-2">
Manage profile and account settings
</p>

</div>



{/* PROFILE */}

<div className="bg-white p-10 rounded-[3rem] border shadow-sm">


<div className="flex flex-col items-center text-center">

<Image
src="https://i.pravatar.cc/150?img=12"
width={120}
height={120}
alt="Profile"
className="rounded-full border-4 border-gray-200"
/>

<h2 className="text-2xl font-black mt-4">
{formData.name}
</h2>

<p className="text-gray-500">
{formData.email}
</p>

</div>



<div className="grid md:grid-cols-3 gap-4 mt-8">

<div className="border p-4 rounded-xl flex gap-3">
<LuUser/>
{formData.name}
</div>

<div className="border p-4 rounded-xl flex gap-3">
<LuMail/>
{formData.email}
</div>

<div className="border p-4 rounded-xl flex gap-3">
<LuShield/>
Admin
</div>

</div>



<div className="mt-10 space-y-6">


{/* NAME */}

<div>

<label className="text-sm font-bold">
Admin Name
</label>

<div className="border p-3 rounded-xl flex gap-3 mt-2">

<LuUser/>

<input
name="name"
value={formData.name}
onChange={handleChange}
className="w-full outline-none"
/>

</div>

</div>



{/* EMAIL */}

<div>

<label className="text-sm font-bold">
Email
</label>

<div className="border p-3 rounded-xl flex gap-3 mt-2">

<LuMail/>

<input
name="email"
value={formData.email}
onChange={handleChange}
className="w-full outline-none"
/>

</div>

</div>



{/* BUTTONS */}

<div className="flex gap-4 flex-wrap">


<button
onClick={handleSave}
className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold flex gap-2"
>
<LuSave/>
Save
</button>


<button
onClick={handleCancel}
className="bg-gray-200 px-6 py-3 rounded-xl font-bold flex gap-2"
>
<LuX/>
Cancel
</button>


<button
onClick={()=>setOpenModal(true)}
className="bg-black text-white px-6 py-3 rounded-xl font-bold flex gap-2"
>
<LuLock/>
Change Password
</button>

</div>


</div>

</div>



{/* MODAL */}

{openModal&&(

<div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">

<div className="bg-white p-8 rounded-3xl w-[420px] space-y-6 shadow-xl">

<h2 className="text-xl font-black">
Reset Password
</h2>



{/* EMAIL */}

{step===1&&(

<>

<p className="text-sm text-gray-500">
Demo Email: admin@system.com
</p>

<div className="border p-3 rounded-xl flex gap-3">

<LuMail/>

<input
value={email}
onChange={(e)=>setEmail(e.target.value)}
placeholder="Enter Email"
className="w-full outline-none"
/>

</div>

<button
onClick={sendCode}
className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold"
>
Get Code
</button>

</>

)}



{/* OTP */}

{step===2&&!verified&&(

<>

<div className="border p-3 rounded-xl flex gap-3">

<LuLock/>

<input
value={code}
onChange={(e)=>setCode(e.target.value)}
placeholder="Enter OTP"
className="w-full outline-none"
/>

</div>


<div className="text-center text-sm">

{timer>0?

<>Resend in {timer}s</>

:

<button onClick={sendCode} className="text-blue-600">
Resend Code
</button>

}

</div>


<button
onClick={verifyCode}
className="w-full bg-green-600 text-white py-3 rounded-xl font-bold"
>
Verify Code
</button>

</>

)}



{/* PASSWORD */}

{verified&&(

<>

<div className="border p-3 rounded-xl flex gap-3">

<LuLock/>

<input
type="password"
value={newPassword}
onChange={(e)=>setNewPassword(e.target.value)}
placeholder="Enter New Password"
className="w-full outline-none"
/>

</div>

<button
onClick={savePassword}
className="w-full bg-black text-white py-3 rounded-xl font-bold"
>
Save Password
</button>

</>

)}



<button
onClick={closeModal}
className="w-full bg-gray-200 py-3 rounded-xl font-bold"
>
Close
</button>


</div>

</div>

)}



</div>

);

}