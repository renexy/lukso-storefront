import logo from "../assets/react.svg";
import { usePrivy } from "@privy-io/react-auth";
import { CircularProgress } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";

function AuthButton() {
  const { login, user, logout, ready } = usePrivy();

  if (!ready) return <CircularProgress color="secondary" />;

  return user ? (
    <LogoutIcon className="cursor-pointer" onClick={logout} color="secondary"/>
  ) : (
    <LoginIcon className="cursor-pointer" onClick={login} color="secondary"/>
  );
}

function Header() {
  return (
    <div className="global-main-grid-layout relative">
      <div className="col-content h-10 w-full items-center justify-between flex">
        <img src={logo} alt="logo" width={56} height="auto" />
        <AuthButton />
      </div>
    </div>
  );
}

export default Header;
