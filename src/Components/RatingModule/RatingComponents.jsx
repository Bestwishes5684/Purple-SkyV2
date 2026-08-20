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
 * @param {string} mode - режим работы: 'simple' (1 клик = 1) или 'accumulate' (накопление)
 * @param {number} clicksToFull - количество кликов для полного заполнения (только для 'accumulate')
 */
function Rating({
  max = 5,
  value = 0,
  onChange,
  label = "",
  size = "sm",
  color = "#f31010",
  readOnly = false,
  mode = "simple", // 'simple' или 'accumulate'
  clicksToFull = 3, // для режима accumulate
}) {
  // ===== СОСТОЯНИЯ =====
  const [internalValue, setInternalValue] = useState(value);
  const [fillLevels, setFillLevels] = useState(
    Array(max).fill(0).map((_, index) => {
      if (value > 0) {
        return index < value ? clicksToFull : 0;
      }
      return 0;
    })
  );

  // Используем внешнее значение если передано, иначе внутреннее
  const currentValue = onChange !== undefined ? value : internalValue;

  // ===== ОБРАБОТЧИК КЛИКА =====
  const handleClick = (index) => {
    if (readOnly) return;

    if (mode === "simple") {
      // ===== ПРОСТОЙ РЕЖИМ: 1 клик = 1 кружок =====
      const newValue = index + 1;
      const finalValue = newValue === currentValue ? 0 : newValue;

      if (onChange) {
        onChange(finalValue);
      } else {
        setInternalValue(finalValue);
      }
    } else {
      // ===== РЕЖИМ НАКОПЛЕНИЯ: несколько кликов для заполнения =====
      const newLevels = [...fillLevels];
      const currentLevel = newLevels[index];

      // Определяем новый уровень
      let newLevel;
      if (currentLevel === 0) {
        newLevel = 1; // первый клик → 33%
      } else if (currentLevel < clicksToFull) {
        newLevel = currentLevel + 1; // второй клик → 66%, третий → 100%
      } else {
        newLevel = 0; // сброс
      }

      newLevels[index] = newLevel;
      setFillLevels(newLevels);

      // Вычисляем общее значение (для onChange)
      const fullCount = newLevels.filter((level) => level >= clicksToFull).length;
      const partialSum = newLevels.reduce((sum, level) => {
        if (level > 0 && level < clicksToFull) {
          return sum + level / clicksToFull;
        }
        return sum;
      }, 0);
      const finalValue = fullCount + partialSum;

      if (onChange) {
        onChange(Math.round(finalValue * 100) / 100);
      }
    }
  };

  // ===== ПОЛУЧАЕМ СТИЛЬ ДЛЯ ЭЛЕМЕНТА =====
  const getFillStyle = (index) => {
    if (mode === "simple") {
      // Простой режим: закрашен или нет
      const isFilled = index < currentValue;
      return {
        backgroundColor: isFilled ? color : "transparent",
        borderColor: isFilled ? color : "#0c0101",
        opacity: isFilled ? 1 : 0.5,
      };
    } else {
      // Режим накопления: уровень заливки
      const level = fillLevels[index] || 0;
      const progress = level / clicksToFull; // 0, 0.33, 0.66, 1.0

      return {
        backgroundColor: level > 0 
          ? `${color}${Math.round(progress * 60 + 10).toString(16).padStart(2, '0')}`
          : "transparent",
        borderColor: level > 0 ? color : "#0c0101",
        opacity: 0.3 + progress * 0.7,
        transform: level > 0 && level < clicksToFull ? 'scale(0.9)' : 'scale(1)',
      };
    }
  };

  // ===== РАЗМЕРЫ =====
  const getSize = () => {
    switch (size) {
      case "sm": return 14;
      case "lg": return 44;
      default: return 34;
    }
  };

  const dotSize = getSize();

  // ===== РЕНДЕРИМ =====
  return (
    <div className={styles.ratingWrapper}>
      {label && <span className={styles.ratingLabel}>{label}</span>}

      <div
        className={styles.ratingContainer}
        role="radiogroup"
        aria-label={`Рейтинг ${label || ""}`}
      >
        {Array.from({ length: max }, (_, index) => {
          const isFilled = mode === "simple" 
            ? index < currentValue 
            : fillLevels[index] > 0;
          
          const fillStyle = getFillStyle(index);
          const level = fillLevels[index] || 0;
          const progress = level / clicksToFull;

          return (
            <button
              key={index}
              type="button"
              className={`
                ${styles.ratingDot}
                ${isFilled ? styles.filled : styles.empty}
                ${readOnly ? styles.readOnly : ""}
                ${!readOnly ? styles.interactive : ""}
                ${mode === "accumulate" && level > 0 && level < clicksToFull ? styles.partial : ""}
              `}
              onClick={() => handleClick(index)}
              role="radio"
              aria-checked={isFilled}
              aria-label={`${index + 1}: ${mode === 'simple' ? (isFilled ? 'заполнено' : 'пусто') : Math.round(progress * 100) + '%'}`}
              disabled={readOnly}
              style={{
                width: dotSize,
                height: dotSize,
                ...fillStyle,
                transition: "all 0.3s ease",
              }}
            >
              {/* Показываем процент для режима накопления */}
              {mode === "accumulate" && level > 0 && level < clicksToFull && (
                <span className={styles.progressLabel}>
                  {Math.round(progress * 100)}%
                </span>
              )}
            </button>
          );
        })}

        {/* Показываем значение */}
        <span className={styles.ratingValue}>
          {mode === "simple" 
            ? currentValue 
            : fillLevels.filter(l => l >= clicksToFull).length + 
              fillLevels.reduce((s, l) => s + (l > 0 && l < clicksToFull ? l / clicksToFull : 0), 0)
          }
        </span>
      </div>
    </div>
  );
}

export default Rating;
