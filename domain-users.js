export const checkPassword = (input) => {
    if(input !== "hellothere"){
        return false;
    }   
    else{
        return true;
    }
}

export const adminValidation = (input) => {
    if(checkPassword(input)){
        window.location.href = "admin.html"
    }
}