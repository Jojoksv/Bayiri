
import '../../styles/OurServices.css'
import body from '../../assets/body.webp'
import circle from '../../assets/circle.webp'
import heart from '../../assets/heart.webp'
import graph from '../../assets/graph.webp'


function OurServices(){
    return(
        <div className='OurServices'>
            <div className='OurServicesFirst'>
                <span>SERVICES</span>
                <h1>Discover a range of services designed to empower your business</h1>
                <button>Book a service</button>
            </div>
            <div className='serviceItem'>
                <div className='itemsService'>
                    <img src={body} alt="" />
                    <div>
                        <h1>Strategic Consulting</h1>
                        <p>
                        Embark on a transformative journey with our strategic consulting services, where we specialize in guiding businesses through the intricacies of today&apos;s dynamic landscape. Our seasoned experts bring a wealth of experience to the table, strategically aligning your business with sustainable growth trajectories. By delving deep into the complexities unique to your industry,
                        </p>
                    </div>
                </div>
                
                <div className='itemsService'>
                    <img src={graph} alt="" />
                    <div>
                        <h1>Market Research</h1>
                        <p>
                        Embark on a transformative journey with our strategic consulting services, where we specialize in guiding businesses through the intricacies of today&apos;s dynamic landscape. Our seasoned experts bring a wealth of experience to the table, strategically aligning your business with sustainable growth trajectories. By delving deep into the complexities unique to your industry,
                        </p>
                    </div>
                </div>

                <div className='itemsService'>
                    <img src={heart} alt="" />
                    <div>
                        <h1>Business Process</h1>
                        <p>
                        Embark on a transformative journey with our strategic consulting services, where we specialize in guiding businesses through the intricacies of today&apos;s dynamic landscape. Our seasoned experts bring a wealth of experience to the table, strategically aligning your business with sustainable growth trajectories. By delving deep into the complexities unique to your industry,
                        </p>
                    </div>
                </div>

                <div className='itemsService'>
                    <img src={circle} alt="" />
                    <div>
                        <h1>Digital Transformation</h1>
                        <p>
                        Embark on a transformative journey with our strategic consulting services, where we specialize in guiding businesses through the intricacies of today&apos;s dynamic landscape. Our seasoned experts bring a wealth of experience to the table, strategically aligning your business with sustainable growth trajectories. By delving deep into the complexities unique to your industry,
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default OurServices