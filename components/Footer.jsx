// Server component — static content.
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <h2 className="footer-big">
          Let's<span className="i">&nbsp;build</span>
        </h2>
        <div className="footer-meta d-flex flex-wrap align-items-center justify-content-between gap-3">
          <span>© 2026 Charan Kumar · Developed by Me.</span>
          <nav className="footer-links d-flex flex-wrap">
            <Link href="/#home">Home</Link>
            <Link href="/#work">Work</Link>
            <Link href="/#contact">Contact</Link>
            <a href="/images/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
          </nav>
          <span>Made with care · Hyderabad, IN</span>
        </div>
      </div>
    </footer>
  );
}
