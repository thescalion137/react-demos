import LoginButton from "./components/LoginButton";
import "./App.css";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";
import { useAuth0 } from "@auth0/auth0-react";
function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>loading...</div>;
  return (
    <div>
      <LoginButton />
      <LogoutButton />
      <Profile />
    </div>
  );
}

export default App;
