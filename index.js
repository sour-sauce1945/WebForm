function sendMail(){
    
    var params = {
        firstname: document.getElementById("fname").value,
        lastname: document.getElementById("lname").value,
        email: document.getElementById("email").value,
        gender: document.querySelector('input[name="gender"]:checked').value,
        dateofbirth: document.getElementById("birthday").value,
        academicyear: document.querySelector('input[name="Year"]:checked').value,
        contact1: document.getElementById("snumber").value,
        contact2: document.getElementById("pnumber").value,
        residence: document.getElementById("address").value,
    };
    
    const serviceID = "service_9zysyu4";
const templateID = "template_fkd2kvn";

emailjs.send(serviceID,templateID,params)
.then(
    res =>{
        document.getElementById("fname").value="";
        document.getElementById("lname").value="";
        
        console.log(res);
        alert("message sent successfully")
    }
)
.catch(err=>console.log(err));
}

