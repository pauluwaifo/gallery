import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";


function NavBar({search, setSearch, setCurrentEmail}) {

    // HANDLE SIGN OUT FUNCTION
    const handleSignOut = async () => {
        try {
            await signOut(auth)
            console.log("user signed out successfully")
            setCurrentEmail(null)
            console.log(auth?.currentUser?.email)
        } catch(err) {
          console.error(err)
        } 
    };

    return ( 
        <div className="nav">
            {/* SITE LOGO */}
            <div className="logo">
                <Link className="" to="/">
                    LAKAD
                </Link>
            </div>
            {/* SEARCH */}
            <div className="search">
                <form>
                <input 
                type="search" 
                value={search}
                onChange={(e) => setSearch(e.target.value.toLowerCase())} 
                placeholder="Search.."/>

                <button 
                className="m-btn">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>

                </form>
            </div>
            <div className="sign">
                {/* SIGN OUT LINK */}
                <Link to="/" onClick={handleSignOut}>
                    SignOut
                </Link>
            </div>
        </div>
     );
}

export default NavBar;