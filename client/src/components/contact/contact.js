import './contact.css'


const Contact = () => {
    return(
        <div className='contact-container'>
            <h2>HAVE A CHALLENGE?</h2>
            <h2>TALK TO US</h2>
            <form>
                <div className='inp-group'>
                    <input placeholder=' FULL NAME' />
                    <input placeholder=' EMAIL' />
                </div>
                <textarea placeholder=' MESSAGE'/>
                <button type="submit">SEND MESSAGE</button>
            </form>
        </div>
    )
}


export default Contact