import { useEffect, useState } from "react";
import type { User } from "./interface";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [userData, setUserData] = useState<User[]>([]);

  useEffect(() => {
    fetchApi();
  }, []);

  async function fetchApi() {
    const url = "https://retoolapi.dev/MdNxO2/data";
    try {
      const response = await fetch(url);
      const result: User[] = await response.json();
      setUserData(result);
      setIsLoaded(true);
      console.log("data successfully fetched");
      console.log(result);
    } catch (error) {
      console.log(error);
      setIsLoaded(false);
    }
  }

  return (
    <>
    {isLoaded ? (<table className="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Job</th>
          <th scope="col">Email</th>
        </tr>
      </thead>
      <tbody>
        {userData.map((user) => (
          <tr>
            <td><Link to="/">{user.name}</Link></td>
            <td>{user.job}</td>
            <td>{user.email}</td>
          </tr>
        ))}
        ;
      </tbody>
    </table>) : (<div className="spinner-border" role="status">
  <span className="visually-hidden">Loading...</span>
</div>)}
    </>
  );
}

export default App;
