import Typography from "@mui/material/Typography";
import SocialMedia from "../SocialMedia/SocialMedia";
import "./Header.css";
function Header() {
    return (
        <div className={"Header"}>
            <Typography variant={"h4"}>Aniket Kulkarni</Typography>
            <SocialMedia />
        </div>
    )
}

export default Header;