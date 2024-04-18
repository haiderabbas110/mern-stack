import { getAuth } from "firebase/auth";


let Dashbaord = () => {


  

    const auth = getAuth();

    const user = auth.currentUser;


    return (
        <>
            <div>
                <h1>Dashbaord</h1>

                {user !== null && (
                    user.providerData.map((profile, index) => (
                        <div key={index}>
                            <p>Sign-in provider: {profile.providerId}</p>
                            <p>Provider-specific UID: {profile.uid}</p>
                            <p>Name: {profile.displayName}</p>
                            <p>Email: {profile.email}</p>
                            <p>Photo URL: {profile.photoURL}</p>
                        </div>
                    ))
                )}

            </div>


        </>
    )
}

export default Dashbaord;