import { Wrapper } from "../assets/wrappers/Resouces";
import Resouce from "../components/Resouce";
import Resource1 from "../assets/images/resource1.jpg";
import Resource2 from "../assets/images/resource2.jpg";
import Resource3 from "../assets/images/resource3.jpg";

const Resources = () => {
  return (
    <Wrapper className="fixed-width">
      <h2 className="resources__header">Resources</h2>
      <p className="resources__subtitle">
        Sharing the latest and greatest from industry trends, insights,
        inspiration and successful Appello ventures.
      </p>
      <div className="resources__list">
        <Resouce
          image={Resource1}
          title="Meet our Chief Design Officer, Pharaoh Woghiren"
          description="Meet our Chief Design Officer, Pharaoh Woghiren."
        />
        <Resouce
          image={Resource2}
          title="Refreshing Mobile Applications: How to Know When a Mobile App Redesign is Necessary?"
          description="When to consider a mobile app redesign and signs to look out for to make sure your app captures user attention and loyalty."
        />
        <Resouce
          image={Resource3}
          title="Your Guide to Developing the Best People Management Software Solution"
          description="Custom employee management software or people management software solutions will be extremely beneficial to not only your HR department but the entire company."
        />
      </div>
    </Wrapper>
  );
};
export default Resources;
