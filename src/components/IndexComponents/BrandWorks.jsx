
import { useEffect } from 'react';
import '../../styles/BrandWorks.css'
import brand from '../../assets/brand.png'
import brand1 from '../../assets/brand1.png'
import brand2 from '../../assets/brand2.png'
import brand3 from '../../assets/brand3.png'
import brand4 from '../../assets/brand4.png'


function BrandWorks(){

    useEffect(() => {
        const scrollContainer = document.querySelector('.scrollbar');
        const content = document.querySelector('.scroll');
      
        // Dupliquer le contenu pour un effet de défilement sans fin
        content.innerHTML += content.innerHTML;
      
        // Ajuster la vitesse du défilement
        let scrollSpeed = 1; // Exemple : 0.5 pixels par frame
      
        function scroll() {
          // Utiliser la vitesse de défilement décimale
          if (scrollContainer.scrollLeft >= content.scrollWidth / 2) {
            scrollContainer.scrollLeft -= content.scrollWidth / 2;
          } else {
            scrollContainer.scrollLeft += scrollSpeed;
          }
          requestAnimationFrame(scroll);
        }
      
        scroll();
      }, []);
      
      


    return(
        <div className="BrandWorks">
            <div className="BrandFirst">
                <span>OUR TRUSTED PARTNER</span>
                <h2>The Brands We Work With <br /> And Believe In Us</h2>
            </div>
            <div className="scrollbar">
                    <div className="scroll">
                        <img src={brand} alt="image sortie detante bobo" />
                        <img src={brand1} alt="image sortie detante bobo" />
                        <img src={brand2} alt="image sortie detante bobo" />
                        <img src={brand3} alt="image sortie detante bobo" />
                        <img src={brand4} alt="image sortie detante bobo" />
                        <img src={brand} alt="image sortie detante bobo" />
                        <img src={brand1} alt="image sortie detante bobo" />
                        <img src={brand2} alt="image sortie detante bobo" />
                        <img src={brand3} alt="image sortie detante bobo" />
                        <img src={brand4} alt="image sortie detante bobo" />
                        <img src={brand} alt="image sortie detante bobo" />
                        <img src={brand1} alt="image sortie detante bobo" />
                        <img src={brand2} alt="image sortie detante bobo" />
                        <img src={brand3} alt="image sortie detante bobo" />
                        <img src={brand4} alt="image sortie detante bobo" />
                    </div>
                </div>
        </div>
    )
}
export default BrandWorks