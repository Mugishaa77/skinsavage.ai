import SelOne from '../../../assets/photos/sel-one.png'
import SelTwo from '../../../assets/photos/sel-two.png'
import SelThree from '../../../assets/photos/sel-three.png'

export default function Selection() {
  return (
    <div className="selection">
     <h2>Selection Process</h2>
     <ul>
        <li>
          <img src={SelOne} alt="Step 1" />
            <h4>
                User Data Input
            </h4>
            <p>
              Provide us details of your skin tone, skin
type , budget and preferences.
            </p>
        </li>
         <li>
          <img src={SelTwo} alt="Step 2" />
            <h4>
            Matching Process
            </h4>
            <p>
               Our AI powered system performs a match
of your preferences with our products. 
            </p>
        </li>
         <li>
            <img src={SelThree} alt="Step 3" />
            <h4>
              Recommendations
            </h4>
            <p>
                We then recommend the best products for
your skin and budget! 
            </p>
        </li>
     </ul>
    </div>
  )
}