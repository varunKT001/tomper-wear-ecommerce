import { toast } from 'react-toastify';

//firebaseAuthErrorHandler is a centralized firebase error handler that handles all types of firebase auth errors.
function firebaseAuthErrorHandler(errorCode) {
    switch (errorCode) {
        case "auth/user-not-found":
            toast.error(`User not found. Please register first or use different email.`);
            break;
        case "auth/wrong-password":
            toast.error(`Incorrect Password`);
            break;
        case "auth/invalid-email":
            toast.error(`Invalid Email`);
            break;
        case "auth/user-disabled":
            toast.error(`User disabled`);
            break;
        case "auth/email-already-in-use":
            toast.error(`This email is already in use.`);
            break;
        case "auth/expired-action-code":
            toast.error(`Password reset code is expired.`);
            break;
        case "auth/invalid-action-code":
            toast.error(`Password reset code is invalid.`);
            break;
        case "auth/weak-password":
            toast.error(`Password should contain atleast 6 characters.`);
            break;
        case "auth/account-exists-with-different-credential":
            toast.error(`Account exists with different credentials.`);
            break;
        case "auth/cancelled-popup-request":
            toast.error(`Pop requests cancelled. Please try again.`);
            break;
        case "auth/popup-blocked":
            toast.error(`Popup is blocked by the browser.`);
            break;
        case "auth/popup-closed-by-user":
            toast.error(`Popup closed by the user.`);
            break;
        default:
            break;
    }
}

export const authErrorHandler = firebaseAuthErrorHandler;