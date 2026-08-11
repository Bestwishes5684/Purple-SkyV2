import { useState } from "react";
import styles from "./RatingComponents.module.css";

/**
 * Компонент рейтинга в виде кружочков
 *
 * @param {number} max - максимальное количество (по умолчанию 5)
 * @param {number} value - текущее значение (0 - ничего не выбрано)
 * @param {function} onChange - callback при изменении (принимает число)
 * @param {string} label - текстовая подпись (опционально)
 * @param {string} size - 'sm', 'md', 'lg' (размер кружков)
 * @param {string} color - цвет заполнения (css цвет)
 * @param {boolean} readOnly - режим только для чтения
 * @param {boolean} showValue - показывать ли цифру (по умолчанию true)
 */
function Rating({
  max = 5,
  value = 0,
  onChange,
  label = "",
  size = "sm",
  color = "#f31010",
  readOnly = false,
  showValue = true,
}) {
  // Внутреннее состояние для неуправляемого режима
  const [internalValue, setInternalValue] = useState(value);

  // Используем внешнее значение если передано, иначе внутреннее
  const currentValue = onChange !== undefined ? value : internalValue;

  const handleClick = (index) => {
    if (readOnly) return;

    const newValue = index + 1;
    // Если кликнули на уже активный кружок - сбрасываем до 0
    const finalValue = newValue === currentValue ? 0 : newValue;

    if (onChange) {
      onChange(finalValue);
    } else {
      setInternalValue(finalValue);
    }
  };

  // Размеры кружков
  const getSize = () => {
    switch (size) {
      case "sm":
        return 14;
      case "lg":
        return 44;
      default:
        return 34;
    }
  };

  const dotSize = getSize();

  return (
    <div className={styles.ratingWrapper}>
      {label && <span className={styles.ratingLabel}>{label}</span>}

      <div
        className={styles.ratingContainer}
        role="radiogroup"
        aria-label={`Рейтинг ${label || ""}`}
      >
        {Array.from({ length: max }, (_, index) => {
          const isFilled = index < currentValue;
          const ratingValue = index + 1;

          return (
            <button
              key={index}
              type="button"
              className={`
                ${styles.ratingDot}
                ${isFilled ? styles.filled : styles.empty}
                ${readOnly ? styles.readOnly : ""}
                ${!readOnly ? styles.interactive : ""}
              `}
              onClick={() => handleClick(index)}
              role="radio"
              aria-checked={isFilled}
              aria-label={`${ratingValue} из ${max}`}
              disabled={readOnly}
              style={{
                width: dotSize,
                height: dotSize,
                borderColor: isFilled ? color : "#d0d0d0",
                backgroundColor: isFilled ? color : "transparent",
              }}
            />
          );
        })}

       
      </div>
    </div>
  );
}

export default Rating;
