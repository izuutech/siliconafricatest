import '../Header.css';

export default function Header() {
    
    return (
        <div className='header'>
            <div className='headerLeft'>
                <div className='headerLogo'>
                    <img src="https://source.unsplash.com/random" alt="hh"  className='headerLogoImg'/>
                </div>
                <div className='headerTitle'>
                    The Home Depot Blog
                </div>
            </div>
            <div className='headerRight'>
                <div className='aheaderRight'>Kitchen Ideas</div>
                <div className='aheaderRight'>Style Challenges</div>
                <div className='aheaderRight'>Room Ideas</div>
                <input className='aheaderRight' type="text" />
                <div className='aheaderRight'>Search</div>
            </div>
        </div>
    )
}