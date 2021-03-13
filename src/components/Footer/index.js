import { DiHtml5, DiCss3, DiJavascript1, DiReact, DiStackoverflow, DiGithubBadge } from 'react-icons/di';
import { AiFillLinkedin } from 'react-icons/ai';
const Footer = () => {
    return (
        <footer>
          <div>
            <DiReact style={iconStyle} size={42} />
            <DiHtml5 style={iconStyle} size={42} />
            <DiCss3 style={iconStyle} size={42} />
            <DiJavascript1 style={iconStyle} size={42} />
          </div>
          <div>
            <DiStackoverflow style={iconStyle} size={42} />
            <AiFillLinkedin style={iconStyle} size={42} />
            <DiGithubBadge style={iconStyle} size={42} />
          </div>
        </footer>
    )
}

const iconStyle = {
    margin: '10px'
}

export default Footer
