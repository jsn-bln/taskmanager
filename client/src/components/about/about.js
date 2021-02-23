import './about.css'

const About = () => {
    return(
        <div className='about-container'>
            <div className='card'>
                <h4><span>02</span> WHO ARE WE</h4>
                <h2>&#10100;FOR <span className='eng'>ENGINEERS</span> : BY <span className='eng'>ENGINEERS</span>&#10101;</h2>
                <p>We are a team of engineers with years of experience on various technologies that are focused on building optimal and cost effective solutions that you desire!</p>
                <h5>OUR STACK</h5>
                <div className='stack'>
                    <div className='logo-group'>
                        <div className='cad'></div>
                        <div className='blender'></div>
                    </div>
                    <div className='icon-group'>
                        <div className='adobe'></div>
                        <div className='js'></div>
                        <div className='python'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default About