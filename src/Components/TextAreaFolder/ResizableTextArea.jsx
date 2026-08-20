import React, { useState } from "react";
import "../TextAreaFolder/ResizavleTextArea.css";

const ResizableTextArea = ({
  title = "ИСТОРИЯ", // Заголовок (можно менять)
  placeholder = "▸ напишите историю вашего персонажа...",
  minRows = 3,
  maxRows = 20,
  defaultRows = 8,
  className = "",
  onChange,
  value = "",
  ...props
}) => {
  const [rows, setRows] = useState(defaultRows);
  const [text, setText] = useState(value);

  const handleIncrease = () => {
    if (rows < maxRows) {
      setRows(rows + 1);
    }
  };

  const handleDecrease = () => {
    if (rows > minRows) {
      setRows(rows - 1);
    }
  };

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);
    if (onChange) {
      onChange(newText);
    }
  };

  return (
    <div className={`resizable-textarea-wrapper ${className}`}>
      {/* Основное поле */}
      <div className="textarea-container">
        <textarea
          rows={rows}
          value={text}
          onChange={handleTextChange}
          placeholder={placeholder}
          className="resizable-textarea"
          {...props}
        />

        {/* Счетчик строк */}
        <div className="row-counter">
          {rows} из {maxRows}
        </div>
      </div>

      {/* Нижняя панель: заголовок + кнопки */}
      <div className="textarea-footer">
        <div className="footer-title">{title}</div>

        <div className="footer-buttons">
          <button
            className="btn-row btn-plus"
            onClick={handleIncrease}          
            disabled={rows >= maxRows}
            title="Добавить строку"
          >
            +
          </button>
          <button
            className="btn-row btn-minus"
            onClick={handleDecrease}
            disabled={rows <= minRows}
            title="Убрать строку"
          >
            −
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResizableTextArea;
