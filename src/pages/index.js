import React, { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    addDivs(20, 20);
  }, []);

  const addDivs = (rows, columns) => {
    const container = document.getElementById("container");

    if (container) {
      for (let i = 0; i < rows; i++) {
        const row = document.createElement("div");
        row.className = "";

        for (let j = 0; j < columns; j++) {
          const column = document.createElement("div");
          column.className = "bg-blue-200 border border-black p-4 w-[120px] h-[60px]";

          // プルダウンメニューを追加
          const selectMenu = document.createElement("select");
          
          // カテゴリ1
          const optgroup1 = document.createElement("optgroup");
          optgroup1.label = "カテゴリ1";
          const option1 = document.createElement("option");
          option1.text = "選択肢1-1";
          const option2 = document.createElement("option");
          option2.text = "選択肢1-2";
          const option3 = document.createElement("option");
          option3.text = "選択肢1-3";
          optgroup1.appendChild(option1);
          optgroup1.appendChild(option2);
          optgroup1.appendChild(option3);

          // カテゴリ2
          const optgroup2 = document.createElement("optgroup");
          optgroup2.label = "カテゴリ2";
          const option4 = document.createElement("option");
          option4.text = "選択肢2-1";
          const option5 = document.createElement("option");
          option5.text = "選択肢2-2";
          const option6 = document.createElement("option");
          option6.text = "選択肢2-3";
          optgroup2.appendChild(option4);
          optgroup2.appendChild(option5);
          optgroup2.appendChild(option6);

          selectMenu.appendChild(optgroup1);
          selectMenu.appendChild(optgroup2);
          column.appendChild(selectMenu);

          row.appendChild(column);
        }

        container.appendChild(row);
      }
    }
  };

  return (
    <div id="container"></div>
  );
}
