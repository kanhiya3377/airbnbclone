import { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import { Navigate, useParams } from "react-router-dom";
import axios from "axios";
import PlacesPage from "./PlacesPage";
import AccountNav from "./AccountNav";

export default function ProfilePage() {
  const [redirect, setRedirect] = useState(null);
  const { user, ready, setUser } = useContext(UserContext);
  let { subpage } = useParams();
  console.log(subpage);

  if (!ready) return "Loading...";

  if (ready && !user && !redirect) {
    return <Navigate to={"/login"} />;
  }

  if (subpage === undefined) {
    subpage = "profile";
  }

  const logout = async () => {
    await axios.post("/logout");
    setRedirect("/");
    setUser(null);
  };

  if (redirect) {
    return <Navigate to={redirect} />;
  }

  return (
    <div>
      
      <AccountNav />

      {subpage === "profile" && (
        <div className="text-center max-w-lg mx-auto">
          Logged in as {user.name} ({user.email}) <br />
          <button onClick={logout} className="primary text-white mt-2 max-w-sm">
            Logout
          </button>
        </div>
      )}

      {subpage === "places" && (
        <div className="">
          <PlacesPage />
        </div>
      )}
    </div>
  );
}
