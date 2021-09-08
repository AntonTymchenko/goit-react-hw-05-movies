import Container from "../Container/Container";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="footer-bg">
          <div className="copyright">
            <p>&copy; Anton Tymchenko</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
export { Footer };
