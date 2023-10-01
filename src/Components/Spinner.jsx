import spinner from "../Images/spinner.gif";

export const Spinner = () => {
  return (
    <img
      src={spinner}
      alt="loading"
      style={{
        width: "200px",
        margin: "auto",
        display: "block",
      }}
    />
  );
};
