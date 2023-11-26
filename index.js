function sendMail(){
    
    var params = {
        firstname :document.getElementById("fname").value ,
        lastname : document.getElementById("lname").value,
        email : document.getElementById("email").value,
        gender: document.getElementById("gender").value,
        dateofbirth : document.getElementById("birthday").value,
        academicyear: document.getElementById("year").value,
        contact1 : document.getElementById("snumber").value,
        contact2 : document.getElementById("pnumber").value,
        residence : document.getElementById("address").value
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

