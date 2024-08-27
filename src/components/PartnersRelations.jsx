import Relationship1 from "../assets/images/relationships-eyetelligence.png";
import Relationship2 from "../assets/images/relationships-oxyee.png";
import Relationship3 from "../assets/images/relationships-f45.png";
import Relationship4 from "../assets/images/relationships-walker.png";
import Relationship5 from "../assets/images/relationships-foxo.png";
import Relationship6 from "../assets/images/relationships-hst.png";
import Relationship7 from "../assets/images/relationships-kitcho.png";
import Relationship8 from "../assets/images/relationships-vidya.png";
import Sydney from "../assets/images/Sydney.svg";
import Brisbane from "../assets/images/Brisbane.svg";
import Goldcoast from "../assets/images/Goldcoast.svg";
import Adelaide from "../assets/images/Adelaide.svg";
import Melbourne from "../assets/images/Melbourne.svg";
import Canberra from "../assets/images/Canberra.svg";
import Partnership from "../components/Partnership";

import { Wrapper } from "../assets/wrappers/PartnersRelations";

const PartnersRelations = () => {
  return (
    <Wrapper className="fixed-width">

    <div className="relationships">
        <h2 className="relationships__title">We value our relationships</h2>
        <p className="relationships__description">
          Over the past decade, Appello has established itself as a leader in
          the IT industry. Along the way, we have formed a number of valued
          relationships with both clients and business partners.
        </p>
        <div className="relationships__list">
          <img src={Relationship1} alt="relationship image" />
          <img src={Relationship2} alt="relationship image" />
          <img src={Relationship3} alt="relationship image" />
          <img src={Relationship4} alt="relationship image" />
          <img src={Relationship5} alt="relationship image" />
          <img src={Relationship6} alt="relationship image" />
          <img src={Relationship7} alt="relationship image" />
          <img src={Relationship8} alt="relationship image" />
        </div>
      </div>
      <div className="partnerhips">
        <h2 className="partnerhips__title">Regional partnerships</h2>
        <div className="partnerships__list">
          <Partnership place="Sydney" image={Sydney} />
          <Partnership place="Brisbane" image={Brisbane} />
          <Partnership place="Goldcoast" image={Goldcoast} />
          <Partnership place="Adelaide" image={Adelaide} />
          <Partnership place="Melbourne" image={Melbourne} />
          <Partnership place="Canberra" image={Canberra} />
        </div>
      </div>
    </Wrapper>
  )
}
export default PartnersRelations