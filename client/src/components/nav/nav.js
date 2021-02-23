import './nav.css'


const Nav = () => {
    return(
        <div className='nav-container'>
            <h2 className='header'>&#60;TaskManager<span className='slash'>/</span>&#62;</h2>
            <svg  className='menu-open' xmlns="http://www.w3.org/2000/svg" width="25" height="21" viewBox="0 0 31.508 26.59">
            <g id="hamburger" transform="translate(-1765.5 -36)">
                <line id="Line_1" data-name="Line 1" x2="31.508" transform="translate(1765.5 38.5)" fill="none" stroke="#555" stroke-width="5"/>
                <line id="Line_2" data-name="Line 2" x2="31.508" transform="translate(1765.5 60.091)" fill="none" stroke="#555" stroke-width="5"/>
                <line id="Line_3" data-name="Line 3" x2="31.508" transform="translate(1765.5 49.295)" fill="none" stroke="#555" stroke-width="5"/>
            </g>
            </svg>
        </div>

    )
}


export default Nav