import Saved from "../assets/Saved.svg";

const SavedTaskAnimation = ({ show }) => {
  return (
    <div className={`saved-task-animation ${show ? "on" : ""}`}>
      <img src={Saved} alt="" />
    </div>
  );
};

export default SavedTaskAnimation;
