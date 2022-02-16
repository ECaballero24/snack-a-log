import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;



function SnackEditForm() {
  const [snack, setSnack] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  
  useEffect(() => {
    axios
      .get(`${API_URL}/snacks/${id}`)
      .then((res) => setSnack(res.data.payload))
      .catch((e) => console.log(e));
  }, [id]);
  
  const handleChange = (e) => {
    setSnack({ ...snack, [e.target.id]: e.target.value });
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`${API_URL}/snacks/${id}`, snack)
      .then(() => navigate("/snacks"))
      .catch((e) => console.log(e));
  };
  return (
    <form onSubmit={handleSubmit}>
     
    </form>
  );
}

export default SnackEditForm;