import { useState, useRef } from "react";
import Card from "./Card";

const originalCards = [
  {
    id: 0,
    name: "santa",
    status: "",
    img: "src/images/01.webp",
  },
  {
    id: 0,
    name: "santa",
    status: "",
    img: "src/images/01.webp",
  },
  {
    id: 1,
    name: "snowman",
    status: "",
    img: "src/images/02.webp",
  },
  {
    id: 1,
    name: "snowman",
    status: "",
    img: "src/images/02.webp",
  },
  {
    id: 2,
    name: "reindeer",
    status: "",
    img: "src/images/03.webp",
  },
  {
    id: 2,
    name: "reindeer",
    status: "",
    img: "src/images/03.webp",
  },
  {
    id: 3,
    name: "gingerbread",
    status: "",
    img: "src/images/04.webp",
  },
  {
    id: 3,
    name: "gingerbread",
    status: "",
    img: "src/images/04.webp",
  },
  {
    id: 4,
    name: "present",
    status: "",
    img: "src/images/05.webp",
  },
  {
    id: 4,
    name: "present",
    status: "",
    img: "src/images/05.webp",
  },
  {
    id: 10,
    name: "candy cane",
    status: "",
    img: "src/images/06.webp",
  },
  {
    id: 10,
    name: "candy cane",
    status: "",
    img: "src/images/06.webp",
  },
  {
    id: 11,
    name: "bell",
    status: "",
    img: "src/images/07.webp",
  },
  {
    id: 11,
    name: "bell",
    status: "",
    img: "src/images/07.webp",
  },
  {
    id: 12,
    name: "holly",
    status: "",
    img: "src/images/08.webp",
  },
  {
    id: 12,
    name: "holly",
    status: "",
    img: "src/images/08.webp",
  },
  {
    id: 13,
    name: "ornament",
    status: "",
    img: "src/images/09.webp",
  },
  {
    id: 13,
    name: "ornament",
    status: "",
    img: "src/images/09.webp",
  },
  {
    id: 14,
    name: "star",
    status: "",
    img: "src/images/10.webp",
  },
  {
    id: 14,
    name: "star",
    status: "",
    img: "src/images/10.webp",
  },
  {
    id: 15,
    name: "tree",
    status: "",
    img: "src/images/11.webp",
  },
  {
    id: 15,
    name: "tree",
    status: "",
    img: "src/images/11.webp",
  },
  {
    id: 16,
    name: "wreath",
    status: "",
    img: "src/images/12.webp",
  },
  {
    id: 16,
    name: "wreath",
    status: "",
    img: "src/images/12.webp",
  },
  {
    id: 17,
    name: "candle",
    status: "",
    img: "src/images/13.webp",
  },
  {
    id: 17,
    name: "candle",
    status: "",
    img: "src/images/13.webp",
  },
  {
    id: 18,
    name: "mistletoe",
    status: "",
    img: "src/images/14.webp",
  },
  {
    id: 18,
    name: "mistletoe",
    status: "",
    img: "src/images/14.webp",
  },
  {
    id: 19,
    name: "fireplace",
    status: "",
    img: "src/images/15.webp",
  },
  {
    id: 19,
    name: "fireplace",
    status: "",
    img: "src/images/15.webp",
  },
  {
    id: 20,
    name: "snowflake",
    status: "",
    img: "src/images/16.webp",
  },
  {
    id: 20,
    name: "snowflake",
    status: "",
    img: "src/images/16.webp",
  },
];

function getRandomPairs(cards) {
  // Create a set of unique ids
  let ids = [...new Set(cards.map((card) => card.id))];

  // Shuffle the ids
  for (let i = ids.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [ids[i], ids[j]] = [ids[j], ids[i]];
  }

  // Get the first 8 ids
  let selectedIds = ids.slice(0, 8);

  // Get the pairs corresponding to the selected ids
  let pairs = cards.filter((card) => selectedIds.includes(card.id));

  // Shuffle the pairs
  for (let i = pairs.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pairs[i], pairs[j]] = [pairs[j], pairs[i]];
  }

  return pairs;
}

export default function Cards() {
  const [cards, setCards] = useState(getRandomPairs(originalCards));
  const [gameStarted, setGameStarted] = useState(false);

  function startNewGame() {
    let resetCards = originalCards.map((card) => ({ ...card, status: "" }));
    setCards(getRandomPairs(resetCards));
    setGameStarted(true);
  }
  [
    {
      id: 0,
      name: "santa",
      status: "",
      img: "src/images/01.webp",
    },
    {
      id: 0,
      name: "santa",
      status: "",
      img: "src/images/01.webp",
    },
    {
      id: 1,
      name: "snowman",
      status: "",
      img: "src/images/02.webp",
    },
    {
      id: 1,
      name: "snowman",
      status: "",
      img: "src/images/02.webp",
    },
    {
      id: 2,
      name: "reindeer",
      status: "",
      img: "src/images/03.webp",
    },
    {
      id: 2,
      name: "reindeer",
      status: "",
      img: "src/images/03.webp",
    },
    {
      id: 3,
      name: "gingerbread",
      status: "",
      img: "src/images/04.webp",
    },
    {
      id: 3,
      name: "gingerbread",
      status: "",
      img: "src/images/04.webp",
    },
    {
      id: 4,
      name: "present",
      status: "",
      img: "src/images/05.webp",
    },
    {
      id: 4,
      name: "present",
      status: "",
      img: "src/images/05.webp",
    },
    {
      id: 10,
      name: "candy cane",
      status: "",
      img: "src/images/06.webp",
    },
    {
      id: 10,
      name: "candy cane",
      status: "",
      img: "src/images/06.webp",
    },
    {
      id: 11,
      name: "bell",
      status: "",
      img: "src/images/07.webp",
    },
    {
      id: 11,
      name: "bell",
      status: "",
      img: "src/images/07.webp",
    },
    {
      id: 12,
      name: "holly",
      status: "",
      img: "src/images/08.webp",
    },
    {
      id: 12,
      name: "holly",
      status: "",
      img: "src/images/08.webp",
    },
    {
      id: 13,
      name: "ornament",
      status: "",
      img: "src/images/09.webp",
    },
    {
      id: 13,
      name: "ornament",
      status: "",
      img: "src/images/09.webp",
    },
    {
      id: 14,
      name: "star",
      status: "",
      img: "src/images/10.webp",
    },
    {
      id: 14,
      name: "star",
      status: "",
      img: "src/images/10.webp",
    },
    {
      id: 15,
      name: "tree",
      status: "",
      img: "src/images/11.webp",
    },
    {
      id: 15,
      name: "tree",
      status: "",
      img: "src/images/11.webp",
    },
    {
      id: 16,
      name: "wreath",
      status: "",
      img: "src/images/12.webp",
    },
    {
      id: 16,
      name: "wreath",
      status: "",
      img: "src/images/12.webp",
    },
    {
      id: 17,
      name: "candle",
      status: "",
      img: "src/images/13.webp",
    },
    {
      id: 17,
      name: "candle",
      status: "",
      img: "src/images/13.webp",
    },
    {
      id: 18,
      name: "mistletoe",
      status: "",
      img: "src/images/14.webp",
    },
    {
      id: 18,
      name: "mistletoe",
      status: "",
      img: "src/images/14.webp",
    },
    {
      id: 19,
      name: "fireplace",
      status: "",
      img: "src/images/15.webp",
    },
    {
      id: 19,
      name: "fireplace",
      status: "",
      img: "src/images/15.webp",
    },
    {
      id: 20,
      name: "snowflake",
      status: "",
      img: "src/images/16.webp",
    },
    {
      id: 20,
      name: "snowflake",
      status: "",
      img: "src/images/16.webp",
    },
  ];

  const [previousCardState, setPreviousCardState] = useState(-1);
  const previousIndex = useRef(-1);

  const matchCheck = (currentCard) => {
    if (cards[currentCard].id === cards[previousCardState].id) {
      cards[previousCardState].status = "active matched";
      cards[currentCard].status = "active matched";
      setPreviousCardState(-1);
    } else {
      cards[currentCard].status = "active";
      setCards([...cards]);
      setTimeout(() => {
        setPreviousCardState(-1);
        cards[currentCard].status = "unmatch";
        cards[previousCardState].status = "unmatch";
        setCards([...cards]);
      }, 1000);
    }
  };

  const clickhandler = (index) => {
    if (index !== previousIndex.current) {
      if (cards[index].status === "active matched") {
        alert("already matched");
      } else {
        if (previousCardState === -1) {
          previousIndex.current = index;
          cards[index].status = "active";
          setCards([...cards]);
          setPreviousCardState(index);
        } else {
          matchCheck(index);
          previousIndex.current = -1;
        }
      }
    } else {
      alert("card currently seleted");
    }
  };

  return (
    <>
      <div className="menu">
        <button onClick={startNewGame}>Start New Game</button>
      </div>
      <div className="container">
        {gameStarted &&
          cards.map((card, index) => {
            return (
              <Card
                key={index}
                card={card}
                index={index}
                clickhandler={clickhandler}
              />
            );
          })}
      </div>
    </>
  );
}
