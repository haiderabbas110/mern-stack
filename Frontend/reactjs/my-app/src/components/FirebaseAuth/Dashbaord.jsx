import { getAuth } from "firebase/auth";

let Dashbaord = () => {


    const auth = getAuth();
    
    const user = auth.currentUser;

    if (user !== null) {
        user.providerData.forEach((profile) => {
            console.log("Sign-in provider: " + profile.providerId);
            console.log("  Provider-specific UID: " + profile.uid);
            console.log("  Name: " + profile.displayName);
            console.log("  Email: " + profile.email);
            console.log("  Photo URL: " + profile.photoURL);
        });
    }

    return (
        <>
            <div>
                <h1>Dashbaord</h1>


            </div>
        </>
    )
}

export default Dashbaord;