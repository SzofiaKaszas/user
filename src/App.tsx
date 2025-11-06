import { Link, Outlet } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="min-vh-100 d-flex flex-column">
      <nav className="navbar navbar-expand-lg" style={{ background: "grey" }}>
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  to="/"
                  className={`nav-link fw-semibold text-white`}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/support"
                  className={`nav-link fw-semibold text-white`}
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main className="flex-grow-1 container py-5">
        <div
          className="p-4 rounded-4 shadow-sm"
          style={{ background: "lightgrey" }}
        >
          <Outlet />
        </div>
      </main>

      <footer
        className="text-center py-4 mt-auto"
        style={{
          background: "grey",
          color: "white",
        }}
      >
        <div className="container d-flex flex-column flex-md-row justify-content-center align-items-center gap-3">
          <a
            href="https://github.com/SzofiaKaszas"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-decoration-none fw-semibold"
          >
            Kaszás Szófia
          </a>
          <a
            href="https://petrik.hu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-decoration-none fw-semibold"
          >Petrik Lajos technikum</a>
        </div>
      </footer>
    </div>
  );
}
