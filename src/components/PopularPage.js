import "../style/popularPage.css";

const PopularPage = (props) => {
  return (
    <div className="popularContainer">
      <div className="titlePage">
        <h2>Popular Movies</h2>
      </div>
      <div className="content">{props.getPopular(props.getPopularList)}</div>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam ipsa esse nulla, accusantium enim minima.
    </div>
  );
};

export default PopularPage;
