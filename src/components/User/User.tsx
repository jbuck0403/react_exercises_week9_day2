import { useState } from "react";
import InputForm from "../InputForm/InputForm";

interface Player {
  name: string;
  playerID?: number;
}

interface Game {
  id: number;
  player: Player;
}

const User = () => {
  const [game, setGame] = useState<Game>({
    id: 1,
    player: {
      name: "Dylan",
    },
  });

  const createGame = (name: string) => {
    const newGame = game.id + 1;
    setGame({
      id: newGame,
      player: {
        name: name,
      },
    });
  };
  return (
    <div>
      <div>
        <InputForm
          defaultPlaceholder="Enter your name"
          updateName={createGame}
        />
      </div>
      <h1 className="game-display">
        Game {game.id}:{" "}
        {game.player.name.slice(0, 1).toUpperCase() + game.player.name.slice(1)}
      </h1>
    </div>
  );
};
export default User;
