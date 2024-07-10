import { useState, useContext, useEffect } from "react";
import { SocketContext } from "../../context/SocketContext";
import rock_right_hand_img from "../../images/rock_right_hand.png";
import paper_right_hand_img from "../../images/paper_right_hand.png";
import scissors_right_hand_img from "../../images/scissors_right_hand.png";
import styles from "./styles.module.css";

function Controls() {
  const [option, setOption] = useState("");
  const { socket, room } = useContext(SocketContext);

  useEffect(() => {
    if (room.players[socket.id]?.optionLock) {  // vérifier si room.players[socket.id] est défini
      setOption(room.players[socket.id].option);
    } else {
      setOption("");
    }
  }, [socket.id, room]);  // Inclure socket.id dans le tableau de dépendances

  const handleChange = ({ currentTarget: input }) => {
    setOption(input.value);
    room.players[socket.id].option = input.value;
    room.players[socket.id].optionLock = true;
    socket.emit("room:update", room);
  };

  return (
    <div className={styles.container}>
      <button
        disabled={room.players[socket.id]?.optionLock}  // vérifier si room.players[socket.id] est défini
        className={
          option === "rock"
            ? `${styles.option_btn} ${styles.option_btn_active}`
            : styles.option_btn
        }
        onClick={handleChange}
        value="rock"
      >
        <img
          src={rock_right_hand_img}
          alt="rock_hand"
          className={styles.option_btn_img}
        />
      </button>
      <button
        disabled={room.players[socket.id]?.optionLock}  // vérifier si room.players[socket.id] est défini
        className={
          option === "paper"
            ? `${styles.option_btn} ${styles.option_btn_active}`
            : styles.option_btn
        }
        onClick={handleChange}
        value="paper"
      >
        <img
          src={paper_right_hand_img}
          alt="rock_hand"
          className={styles.option_btn_img}
        />
      </button>
      <button
        disabled={room.players[socket.id]?.optionLock}  // vérifier si room.players[socket.id] est défini
        className={
          option === "scissors"
            ? `${styles.option_btn} ${styles.option_btn_active}`
            : styles.option_btn
        }
        onClick={handleChange}
        value="scissors"
      >
        <img
          src={scissors_right_hand_img}
          alt="rock_hand"
          className={styles.option_btn_img}
        />
      </button>
    </div>
  );
}

export default Controls;
