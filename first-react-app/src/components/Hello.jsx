function Hello(){
    let myName =  'Aakash';
    let fullName = () =>{
        return 'Aakash Tiwari';
    }
    let num = 456;

    return <p>
        Message: {num}<br></br>
        Hello! This is from the future. I am your master {fullName()} !
    </p>
}

export default Hello;