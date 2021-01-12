import './Footer.css';

const Footer = () => {
  const date = new Date();
  const current = date.getFullYear();
  return (
    <footer className="footer">
      <p>
        All &copy;copyrights are reserved to Market Industries {current}
      </p>
    </footer>
  )
};

export default Footer;