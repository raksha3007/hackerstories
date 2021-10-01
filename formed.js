import React,{useState} from "react";

const Formed = () => {
    const [fullName, setFullName] = useState({
        
        phone:"",
    });

    const inputEvent = (event) => {
        console.log(event.target.value);
        console.log(event.target.name);

        const { value, name } = event.target;

        setFullName((preValue) => {
            if  (name ==="phone"){
                return {
                    uname:preValue.uname,
                    email:preValue.email,
                    phone:value,

                };
            }
        });
        
    };

    const onSubmit = (event) => {
        event.preventDefault();
        alert("form submitted");
    };

    return(
       <>
         <div>
            <form onSubmit={onSubmit}>
           
              <div className="main_div">
                 
              <h1>{fullName.phone}</h1>
             
                <input 
             type="number"  
             placeholder="enter phone number"
             name="phone"
             onChange={inputEvent}
             value={fullName.phone}
                /> 
            
           <button type="submit"> Submit</button>
        </div>
        </form>
        </div>
        </>
    );
};
export default Formed;