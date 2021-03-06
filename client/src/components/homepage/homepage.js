import './homepage.css'

const Homepage = () => {
    return(
        <div className='homepage-container'>
            <div className='upper-section'>
                <div className='headline-container'>
                    <h1>We are your new bestfriend</h1>
                    <p>a cost efficient team with high experience on technologies that matters!</p>
                </div>
                <div className='banner-container'>
                </div>
            </div>
            <div className='lower-section'>
            <svg className='scroll-icon' xmlns="http://www.w3.org/2000/svg" width="30" height="50" viewBox="0 0 53 88">
                <g id="scroll" transform="translate(-891 -854)">
                    <g id="Rectangle_1" data-name="Rectangle 1" transform="translate(891 854)" fill="none" stroke="#555" stroke-width="3">
                    <rect width="53" height="88" rx="26.5" stroke="none"/>
                    <rect x="1.5" y="1.5" width="50" height="85" rx="25" fill="none"/>
                    </g>
                    <line id="Line_4" data-name="Line 4" x1="0.024" y2="10.122" transform="translate(917.5 871.378)" fill="none" stroke="#555" stroke-linecap="round" stroke-width="4"/>
                </g>
                </svg>
            </div>

        </div>
    )
}

export default Homepage