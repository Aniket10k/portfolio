import Typography from "@mui/material/Typography";
import SocialMedia from "../SocialMedia/SocialMedia";
import WorkIcon from "@mui/icons-material/Work";
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import image from "../me.png";
import "./NavigationBar.css";

function NavigationBar() {
  return (
    <div className="Navigation-bar">
      <img src={image} alt="Aniket Kulkarni" width="150" height="150" />
      <Typography variant={"h5"}>Aniket Kulkarni</Typography>
      <Typography>Software Engineer</Typography>
      <div className={"horizontal"}>
        <WorkIcon />
        <Typography>Amazon</Typography>
      </div>
      <div className={"horizontal"}>
        <HomeIcon />
        <Typography>Bengaluru, India</Typography>
      </div>
      <div className={"horizontal"}>
        <EmailIcon />
        <Typography>kulkarni10aniket@gmail.com</Typography>
      </div>
      <div className={"horizontal"}>
        <PhoneIcon />
        <Typography>+91 XXXXXXXXXX</Typography>
      </div>
      <SocialMedia />
    </div>
  );
}

export default NavigationBar;
