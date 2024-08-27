import TextField from "@mui/material/TextField";
import { Wrapper } from "../assets/wrappers/Callback";

const Callback = () => {
  return (
    <Wrapper className="full-width">
      <div className="callback__form">
        <h3 className="callback__header">
          Request a callback from our <br /> expert team
        </h3>
        <TextField
          required
          fullWidth
          id="outlined-basic"
          label="Required sevice"
          variant="outlined"
          sx={{ mb: "20px" }}
        />
        <TextField
          required
          fullWidth
          id="outlined-multiline-static"
          label="Details"
          multiline
          rows={4}
          sx={{ mb: "40px" }}
        />
        <button className="callback__button">Send request</button>
      </div>
    </Wrapper>
  );
};
export default Callback;
