import { Wrapper } from "../assets/wrappers/Partnership"

const Partnership = ({activity='App Development',place,image}) => {
  return (
    <Wrapper>
      <p>{activity}</p>
      <h5>{place}</h5>
      <img src={image} alt="Partnership image" />
    </Wrapper>
  )
}
export default Partnership