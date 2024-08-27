import WorkItem from "../components/WorkItem";
import OurWorkImg1 from "../assets/images/our-work__1.jpg";
import OurWorkImg2 from "../assets/images/our-work__2.jpg";
import OurWorkImg3 from "../assets/images/our-work__3.jpg";
import OurWorkImg4 from "../assets/images/our-work__4.jpg";
import { Wrapper } from "../assets/wrappers/WorkList";

const WorkList = () => {
  return (
    <Wrapper className='fixed-width'>
      <div className="our-work__list">
        <WorkItem
          img={OurWorkImg1}
          title="Eyetelligence – AI-based Eye Health"
          description="Eyetelligence is a medtech company using AI based software to recognise eye diseases. Appello software developed their website which has just been released."
        />
        <WorkItem
          img={OurWorkImg2}
          title="Give + Get – Charity Challenger App"
          description="Give + Get is a modern charity app. “Give”, while joining a community of active people who complete challenges and reap the rewards they offer; “Get”."
        />

        <WorkItem
          img={OurWorkImg3}
          title="Voken – Shared Childcare App"
          description="Voken lets people arrange childcare with families they trust, earn tokens and use for your own requests."
        />

        <WorkItem
          img={OurWorkImg4}
          title="Chattii – Disability Dating App"
          description="Chattii is born from the need to provide a space for people living with disabilities to connect, chat, and explore their love life."
        />
      </div>
      <button className="our-work__button">See more</button>
    </Wrapper>
  );
};
export default WorkList;
