import About from "../components/IndexComponents/About"
import Achievment from "../components/IndexComponents/Achievment"
import BrandWorks from "../components/IndexComponents/BrandWorks"
import FirstSection from "../components/IndexComponents/FirstSection"
import OurProject from "../components/IndexComponents/OurProject"
import OurServices from "../components/IndexComponents/OurServices"
import Testimonial from "../components/IndexComponents/Testimonial"



function Index() {

  return (
    <div>
        <FirstSection />
        <BrandWorks />
        <About />
        <Achievment />
        <OurServices />
        <OurProject />
        <Testimonial />
    </div>
  )
}

export default Index