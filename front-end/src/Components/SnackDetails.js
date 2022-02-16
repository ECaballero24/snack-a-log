import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";


function SnackDetails() {
  const [snack, setSnack] = useState([]);

  const API_URL = process.env.REACT_APP_API_URL;
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API_URL}/snacks/${id}`)
      .then((res) => {
        setSnack(res.data.payload);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [API_URL, id]);

return (
    <article>
      
      
    </article>
  );
}


  export default SnackDetails;