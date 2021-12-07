export const validPhonenumber = (phonenumber: string) => {
    console.log(phonenumber.slice(0,1));
    
    if(phonenumber.slice(0,1) !== '0')
    return true
    else return false
}

