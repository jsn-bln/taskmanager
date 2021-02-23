import './services.css'


const Services = () => {
    return(
        <div className='services-container'>
           <h4><span>01</span> WHAT WE DO</h4>
           <div className='blender-service'>
               <div>
                    <h2>BLENDER</h2>
                    <p>We create high quality 3d models that fits what you need!</p>
                    <button>Learn more</button>
                </div>
                <div className='blender-svg'></div>
           </div>
           <div className='code-service'>
               <div>
                    <h2>PROGRAMMING</h2>
                    <p>We write code in various languages that you require!</p>
                    <button>Learn more</button>
                </div>
                <div className='code-svg'></div>
           </div>
           <div className='graphic-service'>
               <div className='gd'>
                    <h2>GRAPHIC DESIGN</h2>
                    <p>We help you design a mockup for your project with experienced UI/UX designers you can trust!</p>
                    <button>Learn more</button>
                </div>
                <div className='graphic-svg'></div>
           </div>
           <div className='cad-service'>
               <div>
                    <h2>CAD DESIGN</h2>
                    <p>We create Computer Aided Design with your specific measurements!</p>
                    <button>Learn more</button>
                </div>
                <div className='cad-svg'></div>
           </div>
        </div>
    )
}


export default Services