
import '../../styles/Achievment.css'
import videoImg from '../../assets/videoImg.webp'


function Achievment(){
    return(
        <div className='Achievment'>
            <div>
                <h1>Achieving growth relies on taking straightforward & automated measures.</h1>
            </div>
            <img src={videoImg} alt="" />
            <div className='nth2'>
                <h1>Empowering Growth Through Strategic Excellence: A Decade of Expertise at StratEdge Consultancy</h1>
                <p>At StratEdge Consultancy, we believe in the power of strategic thinking and the impact of insightful consulting. With [number] years of experience, we have honed our skills to provide tailored solutions that address the unique challenges of today's dynamic business landscape. <br /><br />
                    Our commitment goes beyond delivering exceptional services – it extends to building lasting partnerships with our clients. We take pride in being a catalyst for your growth, offering unparalleled expertise across various industries.</p>
            </div>
        </div>
    )
}
export default Achievment