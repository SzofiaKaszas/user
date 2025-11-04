import { useParams } from "react-router";
import type { User } from "./interface";
import { useEffect, useState } from "react";

export function User() {
  const [chosenUser, setChosenUser] = useState<User>();
  const [isLoaded, setIsLoaded] = useState(false);

  const params = useParams();
  const id: number = parseInt(params.id!);

  useEffect(() => {
    async function fetchUser(id: number) {
      const url = `https://retoolapi.dev/MdNxO2/data/${id}`;
      try {
        const response = await fetch(url);
        const result: User = await response.json();
        setChosenUser(result);
        setIsLoaded(true);
        console.log("user successfully fetched");
        console.log(result);
      } catch (error) {
        console.log(error);
        setIsLoaded(false);
      }
    }

    fetchUser(id);
  }, [id]);

  return (
    <>
      {isLoaded ? (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{chosenUser?.name}</h5>
                <p>{chosenUser?.email} - {chosenUser?.job}</p>
            </div>
        </div>
      ) : (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
    </>
  );
}
