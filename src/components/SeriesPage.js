import "../style/seriesPage.css";
const SeriesPage = (props) => {
  return (
    <div className="seriesContainer">
      <div className="titlePage">
        <h2>Popular Series</h2>
      </div>
      <div className="content">{props.getSeries(props.getSeriesList)}</div>
    </div>
  );
};

export default SeriesPage;
