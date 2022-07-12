import '../Main.css';
import Posts from "./Posts"

export default function Main() {
    
    return (
        <div className='main'>
            <div className='mainText'>
                <div className='mainTextWrite'>
                    <h4>WELCOME TO</h4>
                    <h2>THE HOME DEPOT BLOG</h2>
                    <span>Do tempor consequat ipsum laboris incididunt ex. Ea mollit ex adipisicing cupidatat. In eiusmod commodo proident ex velit dolore duis adipisicing pariatur.</span>
                    <div className='getStarted'>GET STARTED</div>
                </div>
                <div className='mainTextCover'>
                </div>
            </div>
            <div className='postComp'>
                <Posts />
            </div>
        </div>
    )
}