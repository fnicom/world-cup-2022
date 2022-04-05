import React, { useState } from "react";
import Modal from 'react-modal';

Modal.setAppElement('#root')

const Groups = () => {
  const [selectGroup, setSelectGroup] = useState("grupo_A");
  const [modalIsOpen, setIsOpen] = useState(false);
  console.log(selectGroup);

  function handleOpenModal() {
      setIsOpen(true)
  }

  function handleCloseModal() {
      setIsOpen(false)
  }

  const customStyles = {
      content: {
          top: '50%',
          left: '50%',
          right: 'auto',
      }
  }

  let grupos = {
    grupo_A: [
      { id: "grupo_A", time: "Qatar", flag: "🇶🇦" },
      { id: "grupo_A", time: "Equador", flag: "🇪🇨" },
      { id: "grupo_A", time: "Senegal", flag: "🇸🇳" },
      { id: "grupo_A", time: "Holanda", flag: "🌍" },
    ],
    grupo_B: [
      { id: "grupo_B", time: "Inglaterra", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
      { id: "grupo_B", time: "Irã", flag: "🇮🇷" },
      { id: "grupo_B", time: "Estados Unidos", flag: "🇺🇸" },
      { id: "grupo_B", time: "Vaga UEFA", flag: "🌍" },
    ],
    grupo_C: [
      { id: "grupo_C", time: "Argentina", flag: "🇦🇷" },
      { id: "grupo_C", time: "Arábia Saudita", flag: "🇸🇦" },
      { id: "grupo_C", time: "México", flag: "🇲🇽" },
      { id: "grupo_C", time: "Polônia", flag: "🇵🇱" },
    ],
    grupo_D: [
      { id: "grupo_D", time: "França", flag: "🇫🇷" },
      { id: "grupo_D", time: "Vaga FIFA 1", flag: "🌍" },
      { id: "grupo_D", time: "Dinamarca", flag: "🇩🇰" },
      { id: "grupo_D", time: "Tunísia", flag: "🇹🇳" },
    ],
    grupo_E: [
      { id: "grupo_E", time: "Espanha", flag: "🇪🇸" },
      { id: "grupo_E", time: "Vaga FIFA 2", flag: "🌍" },
      { id: "grupo_E", time: "Alemanha", flag: "🇩🇪" },
      { id: "grupo_E", time: "Japão", flag: "🇯🇵" },
    ],
    grupo_F: [
      { id: "grupo_F", time: "Bélgica", flag: "🇧🇪" },
      { id: "grupo_F", time: "Canadá", flag: "🇨🇦" },
      { id: "grupo_F", time: "Marrocos", flag: "🇲🇦" },
      { id: "grupo_F", time: "Croácia", flag: "🇭🇷" },
    ],
    grupo_G: [
      {
        id: "grupo_G",
        time: "Brazil",
        flag: "🇧🇷",
        infos: ["Neymar", "5 Titulos"],
      },
      { id: "grupo_G", time: "Sérvia", flag: "🇷🇸" },
      { id: "grupo_G", time: "Suíça", flag: "🇨🇭" },
      { id: "grupo_G", time: "Camarões", flag: "🇨🇲" },
    ],
    grupo_H: [
      { id: "grupo_H", time: "Portugal", flag: "🇵🇹" },
      { id: "grupo_H", time: "Gana", flag: "🇬🇭" },
      { id: "grupo_H", time: "Uruguai", flag: "🇺🇾" },
      { id: "grupo_H", time: "Coreia do Sul", flag: "🇰🇷" },
    ],
  };

  console.log(grupos);

  return (
    <div className="standings-container">
      <div className="select-fields">
        <select
          name="select-league"
          id="select-league"
          defaultValue={selectGroup}
          onChange={(e) => setSelectGroup(e.target.value)}
        >
          <option value="grupo_A">GRUPO A</option>
          <option value="grupo_B">GRUPO B</option>
          <option value="grupo_C">GRUPO C</option>
          <option value="grupo_D">GRUPO D</option>
          <option value="grupo_E">GRUPO E</option>
          <option value="grupo_F">GRUPO F</option>
          <option value="grupo_G">GRUPO G</option>
          <option value="grupo_H">GRUPO H</option>
        </select>
      </div>

      <div className="groups-div">
        {selectGroup === "grupo_A" &&
          grupos.grupo_A.map((item) => (
              <p className="country">
                {item.time} {item.flag}
                <span className="seeMore" onClick={handleOpenModal}>ver mais</span>
                <Modal
                 isOpen={modalIsOpen}
                 onRequestClose={handleCloseModal}
                >
                    <h1>Sou um Modal</h1>
                    <button onClick={handleCloseModal}>Close</button>
                </Modal>
              </p>
          ))}
        {selectGroup === "grupo_B" &&
          grupos.grupo_B.map((item) => (
            <p className="country">
              {item.time} {item.flag}
              <span className="seeMore" onClick={handleOpenModal}>ver mais</span>
            </p>
          ))}
        {selectGroup === "grupo_C" &&
          grupos.grupo_C.map((item) => (
            <p className="country">
              {item.time} {item.flag}
              <span className="seeMore" onClick={handleOpenModal}>ver mais</span>
            </p>
          ))}
        {selectGroup === "grupo_D" &&
          grupos.grupo_D.map((item) => (
            <p className="country">
              {item.time} {item.flag}
              <span className="seeMore" onClick={handleOpenModal} >ver mais</span>
            </p>
          ))}
        {selectGroup === "grupo_E" &&
          grupos.grupo_E.map((item) => (
            <p className="country">
              {item.time} {item.flag}
              <span className="seeMore" onClick={handleOpenModal}>ver mais</span>
            </p>
          ))}
        {selectGroup === "grupo_F" &&
          grupos.grupo_F.map((item) => (
            <p className="country">
              {item.time} {item.flag}
              <span className="seeMore" onClick={handleOpenModal}>ver mais</span>
            </p>
          ))}
        {selectGroup === "grupo_G" &&
          grupos.grupo_G.map((item) => (
            <p className="country">
              {item.time} {item.flag}
              <span className="seeMore" onClick={handleOpenModal}>ver mais</span>
            </p>
          ))}
        {selectGroup === "grupo_H" &&
          grupos.grupo_H.map((item) => (
            <p className="country">
              {item.time} {item.flag}
              <span className="seeMore" onClick={handleOpenModal}>ver mais</span>
            </p>
          ))}
      </div>
    </div>
  );
};

export default Groups;
