import "../style/footer.css";
const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="listOptions">
        <a href="#">Popular</a>
        <a href="#">Upcoming</a>
        <a href="#">Series</a>
        <a href="#">Search</a>
      </div>
      <div className="webName">
        <p>Movie Alone</p>
      </div>
      <div className="contactList">
        <a href="#">Instagram</a>
        <a href="#">Facebook</a>
        <a href="#">Twitter</a>
      </div>
    </div>
  );
};

export default Footer;
