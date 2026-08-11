import "../Components/CharactersListVampire.css";
import Rating from "./RatingModule/RatingComponents.jsx";

function CharactersListVampire() {
  return (
    <main className="vanmpire-list">
      <header className="header-list">
        <h1 className="name-of-list">vampire the masquerade</h1>
        <ul className="header-character-list">
          <li className="header-character-item">
            Имя <input type="text" className="character-input" />
          </li>
          <li className="header-character-item">
            Амбиции <input type="text" className="character-input" />
          </li>
          <li className="header-character-item">
            Клан <input type="text" className="character-input" />
          </li>
          <li className="header-character-item">
            Концепт <input type="text" className="character-input" />
          </li>
          <li className="header-character-item">
            Желание <input type="text" className="character-input" />
          </li>
          <li className="header-character-item">
            Поколение <input type="text" className="character-input" />
          </li>
          <li className="header-character-item">
            Хроника <input type="text" className="character-input" />
          </li>
          <li className="header-character-item">
            Стиль охоты <input type="text" className="character-input" />
          </li>
          <li className="header-character-item">
            Сир <input type="text" className="character-input" />
          </li>
          <li className="header-character-item rating-item">
            Сила крови <Rating />
          </li>
        </ul>
      </header>

      <section className="attributes-section">
        <h1 className="attributes-title-section">Атрибуты</h1>
        <div className="attributes">
          <div className="attribute-group">
            <h4 className="attribute-group-title">Физические</h4>
            <ul className="attribute-list">
              <li className="attribute-item">
                <span className="attribute-name">Атлетика</span>
                <Rating />
              </li>

              <li className="attribute-item">
                <span className="attribute-name">Ловкость</span> <Rating />
              </li>

              <li className="attribute-item">
                <span className="attribute-name">Выносливость</span> <Rating />
              </li>
            </ul>
          </div>

          <div className="attribute-group">
            <h4 className="attribute-group-title">Социальные</h4>
            <ul className="attribute-list">
              <li className="attribute-item">
                Харизма <Rating />
              </li>
            </ul>
            <ul className="attribute-list">
              <li className="attribute-item">
                Манипулирование <Rating />
              </li>
            </ul>
            <ul className="attribute-list">
              <li className="attribute-item">
                Самообладание <Rating />
              </li>
            </ul>
          </div>

          <div className="attribute-group">
            <h4 className="attribute-group-title">Ментальные</h4>
            <ul className="attribute-list">
              <li className="attribute-item">
                Интеллект <Rating />
              </li>
            </ul>
            <ul className="attribute-list">
              <li className="attribute-item">
                Смекалка <Rating />
              </li>
            </ul>
            <ul className="attribute-list">
              <li className="attribute-item">
                Решительность <Rating />
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="skill-section">
        <h1 className="skill-title-section">Навыки</h1>
        <div className="skill">
          <div className="skill-group">
            <ul className="skill-list">
              <li className="skill-item">
                <span className="skill-name">Атлетика</span>
                <Rating />
              </li>
              <li className="skill-item">
                <span className="skill-name">Драка</span>
                <Rating />
              </li>
              <li className="skill-item">
                <span className="skill-name">Ремесла</span>
                <Rating />
              </li>
              <li className="skill-item">
                <span className="skill-name">Вождение</span>
                <Rating />
              </li>
              <li className="skill-item">
                <span className="skill-name">Огнестрел</span>
                <Rating />
              </li>
              <li className="skill-item">
                <span className="skill-name">Воровство</span>
                <Rating />
              </li>
              <li className="skill-item">
                <span className="skill-name">Холодное оружие</span>
                <Rating />
              </li>
              <li className="skill-item">
                <span className="skill-name">Скрытность</span>
                <Rating />
              </li>
              <li className="skill-item">
                <span className="skill-name">Выживание</span>
                <Rating />
              </li>
            </ul>
          </div>
          <div className="skill-group">
            <ul className="skill-list">
              <li className="skill-item">
                <span className="skill-name">Знание животных</span>
                <Rating />
              </li>
              <li className="skill-item">
                <span className="skill-name">Этикет</span>
                <Rating />
              </li>
              <li className="skill-item">
                <span className="skill-name">Эмпатия</span>
                <Rating />
              </li>
              <li className="skill-item">
                <span className="skill-name">Запугивание</span>
                <Rating />
              </li>
              <li className="skill-item">
                <span className="skill-name">Лидерство</span>
                <Rating />
              </li>
              <li className="skill-item">
                <span className="skill-name">Выступление</span>
                <Rating />
              </li>
              <li className="skill-item">
                <span className="skill-name">Убеждение</span>
                <Rating />
              </li>
              <li className="skill-item">
                <span className="skill-name">Улицы </span>
                <Rating />
              </li>
              <li className="skill-item">
                <span className="skill-name">Обман</span>
                <Rating />
              </li>
            </ul>
          </div>
          <div className="skill-group">
            <ul className="skill-list">
              <li className="skill-item">
                <span className="skill-name">Знания</span>
                <Rating />
              </li>
              <li className="skill-item">
                <span className="skill-name">Внимательность</span>
                <Rating />
              </li>
              <li className="skill-item">
                <span className="skill-name">Финансы</span>
                <Rating />
              </li>
              <li className="skill-item">
                <span className="skill-name">Раследование</span>
                <Rating />
              </li>
              <li className="skill-item">
                <span className="skill-name">Медицина</span>
                <Rating />
              </li>
              <li className="skill-item">
                <span className="skill-name">Оккультизм</span>
                <Rating />
              </li>
              <li className="skill-item">
                <span className="skill-name">Политика</span>
                <Rating />
              </li>
              <li className="skill-item">
                <span className="skill-name">Наука</span>
                <Rating />
              </li>
              <li className="skill-item">
                <span className="skill-name">Технологии</span>
                <Rating />
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="discipline">
        <h1 className="discipline-title">Дисциплины</h1>
        <table className="disciplines-table">
          <tbody>
            {/* Строка 1 */}
            <tr>
              <td>
                <Rating />
              </td>
              <td>
                <Rating />
              </td>
              <td>
                <Rating />
              </td>
            </tr>
            {/* Строка 2 */}
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            {/* Строка 3 */}
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            {/* Строка 4 */}
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            {/* Строка 5 */}
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            {/* Строка 6 */}
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            {/* Строка 7 */}
            <tr>
              <td>
                <Rating />
              </td>
              <td>
                <Rating />
              </td>
              <td>
                <Rating />
              </td>
            </tr>
            {/* Строка 8 */}
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            {/* Строка 9 */}
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            {/* Строка 10 */}
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            {/* Строка 11 */}
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            {/* Строка 12 */}
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            {/* Строка 13 */}
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="pros-cons">
        <h1 className="pros-cons-title">Достоинства/Недостатки</h1>
        <table className="pros-cons-table">
          <tbody>
            {/* Строка 1 */}
            <tr>
              <td>
                <Rating />
              </td>
              <td>
                <Rating />
              </td>
              <td>
                <Rating />
              </td>
            </tr>
            {/* Строка 2 */}
            <tr>
              <td>
                <Rating />
              </td>
              <td>
                <Rating />
              </td>
              <td>
                <Rating />
              </td>
            </tr>
            {/* Строка 3 */}
            <tr>
              <td>
                <Rating />
              </td>
              <td>
                <Rating />
              </td>
              <td>
                <Rating />
              </td>
            </tr>
            {/* Строка 4 */}
            <tr>
              <td>
                <Rating />
              </td>
              <td>
                <Rating />
              </td>
              <td>
                <Rating />
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </section>
      <footer className="footer-vampire">
        <div className="footer-container">
          <ul className="footer-list">
            <li className="footer-item">
              <span className="footer-item-name">Здоровье</span>
              <Rating/>
            </li>
            <li className="footer-item">
              <span className="footer-item-name">Голод</span>
              <Rating/>
            </li>
            <li className="footer-item">
              <span className="footer-item-name">Воля</span>
              <Rating/>
            </li>
            <li className="footer-item">
              <span className="footer-item-name">Человечность</span>
              <Rating/>
            </li>
          </ul>
        </div>
      </footer>
    </main>
  );
}
export default CharactersListVampire;
