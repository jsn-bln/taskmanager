import './footer.css'

const Footer = () =>{
    return(
        <div className='footer-container'>
            <h4 className='company'>&#60;TaskManager/&#62;|&copy; 2021</h4>
            <div className='newsletter'>
                <label>Stay up to date with our promo's</label>
                <div className='inp-group'>
                    <input placeholder=' EMAIL'/>
                    <button>SUBSCRIBE</button>
                </div>
            </div>
            <div className='soc-med'>
                <h4>Social Media</h4>
                <div className='icon-group'>
                    <div className='twitter'></div>
                    <div className='viber'></div>
                    <div className='linkin'></div>
                </div>
            </div>
        </div>
    )
}

export default Footer