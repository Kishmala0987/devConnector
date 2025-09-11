import "bootstrap/dist/css/bootstrap.min.css";
const Spinner = () => {
  return (
    <center>
      <div className="spinner-border" role="status" style={{width: "3rem", height: "3rem"}}>
      <span className="sr-only">Loading...</span>
    </div>
    </center>
    
  );
};
export default Spinner;
