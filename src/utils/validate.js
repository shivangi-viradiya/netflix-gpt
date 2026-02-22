
export const checkValidData = (email, password) => {

    //Regex
    const isEmailvalid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/.test(email);
    const isPasswordvalid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

    if (!isEmailvalid) return "Email is not Valid";
    if (!isPasswordvalid) return "Password is not Valid";

    return null;

}