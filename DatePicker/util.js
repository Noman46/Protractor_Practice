getCurrentDate = () =>{
    const myDate = new Date().toLocaleDateString('en-UK',{year:'numeric',month:'long',day:'numeric'});
    console.log('The date is: ',myDate);
    return myDate;
}
module.exports = getCurrentDate();