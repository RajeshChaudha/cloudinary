import React,{useState} from 'react'

function App() {
const [firstName, setFirstName]=useState("");
const handleNameChange=event=>{
  setFirstName(event.target.value);
}

// const [description, setDescription]=useState("");
// const handleDescriptionChange=event=>{
//   setFirstName(event.target.value);
// }

  const [image ,setImage]=useState("");

  const submitImage=()=>{
    const data=new FormData()
    data.append("file",image)
    data.append("upload_preset","gagandemoapp")
    data.append("cloud_name","dxxvi1ac9")

    fetch("https://api.cloudinary.com/v1_1/dxxvi1ac9/image/upload",{
      method:"post",
      body:data
    })
  .then((res)=>res.json())
  .then((data)=>{
    console.log(data);

  }).catch((err)=>{
      console.log(err);
    })
  }

  const [video ,setVideo]=useState("");

  const submitVideo=()=>{
    const data=new FormData()
    data.append("file",video)
    data.append("upload_preset","gagandemoapp")
    data.append("cloud_name","dxxvi1ac9")

    fetch("https://api.cloudinary.com/v1_1/dxxvi1ac9/video/upload",{
      method:"post",
      body:data
    })
  .then((res)=>res.json())
  .then((data)=>{
    console.log(data);

  }).catch((err)=>{
      console.log(err);
    })
  }
  return (
    <>
     
    <div>
      <div>
       
      <h4>Input Field</h4>
        <input maxLength={50}
        type="text"
        id="first_name"
        value={firstName}
        onChange={handleNameChange}/><br/>

     {/* <h4>Description</h4>
        <input maxLength={200}
        type="text"
        id="description"
        value={description}
        onChange={handleDescriptionChange}/><br/> */}

        <input type="file"  onChange={(e)=>setImage(e.target.files[0])} />
        <button onClick={submitImage}>upload</button><br/>
        <input type="file"  onChange={(e)=>setVideo(e.target.files[0])} />
        <button onClick={submitVideo}>uploadVedio</button>
      </div>
    </div>
    </>
  )
}

export default App