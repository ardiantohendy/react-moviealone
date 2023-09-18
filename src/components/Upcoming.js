import "../style/upcomingPage.css";
const UpcomingPage = (props) => {
  return (
    <div className="upcomingContainer">
      <div className="titlePage">
        <h2>Upcoming Movies</h2>
      </div>
      <div className="content">{props.getUpcoming(props.getUpcomingList)}</div>
    </div>
  );
};

export default UpcomingPage;
