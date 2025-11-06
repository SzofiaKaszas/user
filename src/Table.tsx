import { useEffect, useState } from "react";
import { Link } from "react-router";
import type { User } from "./interface";

export function Table() {
  const [userData, setUserData] = useState<User[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    async function fetchApi() {
      const response = await fetch("https://retoolapi.dev/MdNxO2/data");
      const result: User[] = await response.json();
      setUserData(result);
      setIsLoaded(true);
    }
    fetchApi();
  }, []);

  if (!isLoaded) {
    return (
      <div className="d-flex justify-content-center mt-5">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <table className="table table-hover align-middle text-center rounded-3 overflow-hidden shadow-sm">
            <thead
              className="text-white"
              style={{
                background: "linear-gradient(90deg, #0d6efd, #6610f2)",
              }}
            >
              <tr>
                <th scope="col">Név</th>
                <th scope="col">Foglalkozás</th>
                <th scope="col">E-mail</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((user) => (
                <tr key={user.id}>
                  <td>
                    <Link
                      to={`/user/${user.id}`}
                      className={`nav-link fw-semibold text-black`}
                    >
                      {user.name}
                    </Link>
                  </td>
                  <td>{user.job}</td>
                  <td>
                    <a
                      href={`mailto:${user.email}`}
                      className="text-decoration-none text-secondary"
                    >
                      {user.email}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
  );
}
