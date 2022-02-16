import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HeartHealth from "./HeartHealth";
const API_URL = process.env.REACT_APP_API_URL;
console.log(API_URL)


function Snacks() {
  const [snacks, setSnacks] = useState([]);
  useEffect(() => {
    axios
      .get(`${API_URL}/snacks`)
      .then((res) => setSnacks(res.data.payload))
      .catch((e) => console(e));
  }, []);

  console.log(snacks)

   return (
    <div className="Snacks">
      <article>
        {snacks.map((snack) => (
          <div key={snack.id} className="Snack">
            <img src={snack.image} alt={snack.name} />
            <Link to={`/snacks/${snack.id}`}>
              <h3>{snack.name}</h3>
              <h3>
                <HeartHealth snackHealth={snack.is_healthy} />
              </h3>
            </Link>
          </div>
        ))}
      </article>
    </div>
  );
}

export default Snacks;