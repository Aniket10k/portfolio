import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from '@mui/material/Link';
import "./SocialMedia.css";
function SocialMedia() {
    return(
        <div className="Social-media">
          <Link color="inherit" href="https://www.linkedin.com/in/aniket10k/" target="_blank"><LinkedInIcon /></Link>
          <Link color="inherit" href="https://github.com/Aniket10k" target="_blank"><GitHubIcon /></Link>
        </div>
    )
}

export default SocialMedia;