import "./modalWilderNew.scss";

// Import Packages
import { useState } from "react";
import axios from "axios";

const ModalWilderNew = ({
  reveleWilderNew,
  cache,
  changeReveleWilderNew,
  setWilders,
  wilders,
}) => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [title, setTitle] = useState("");
  const [votes, setVotes] = useState("");

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      const response = await axios.post(
        "http://localhost:3000/api/wilder/create",
        {
          name: name,
          city: city,
          skills: [
            {
              title: title,
              votes: votes,
            },
          ],
        }
      );

      setName("");
      setCity("");
      setTitle("");
      setVotes("");
      changeReveleWilderNew(!reveleWilderNew);
      setWilders([...wilders, response.data]);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      {reveleWilderNew ? (
        <div className="overlayNew">
          <div className="wrapperNew">
            <div className="modaleNew">
              <div className="modaleTop">
                <span>Add Wilder</span>
                <button type="button" className="close" onClick={cache}>
                  X
                </button>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="addName">
                  <span>Name</span>
                  <input
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(event) => {
                      setName(event.target.value);
                    }}
                  />
                </div>
                <div className="addCity">
                  <span>City</span>
                  <input
                    name="city"
                    type="text"
                    placeholder="Your City"
                    value={city}
                    onChange={(event) => {
                      setCity(event.target.value);
                    }}
                  />
                </div>
                <div className="addSkills">
                  <span>Skills</span>
                  <input
                    name="skills"
                    type="text"
                    placeholder="Your Skills"
                    value={title}
                    onChange={(event) => {
                      setTitle(event.target.value);
                    }}
                  />
                </div>
                <div className="addVotes">
                  <span>Votes</span>
                  <input
                    name="votes"
                    type="number"
                    placeholder="Your Votes"
                    value={votes}
                    onChange={(event) => {
                      setVotes(event.target.value);
                    }}
                  />
                </div>

                <button className="buttonValider">Valider</button>
              </form>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ModalWilderNew;
