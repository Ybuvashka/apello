import { Wrapper } from "../assets/wrappers/WorkItem"

const WorkItem = ({img,title, description}) => {
  return (
    <Wrapper>
      <img className="work-image" src={img} alt="our work image" />
      <h4 className="work-title">{title}</h4>
      <p className="work-description">{description}</p>
    </Wrapper>
  )
}
export default WorkItem