import "./CharactersListVampire.css";
import Rating from "./RatingModule/RatingComponents.jsx";
import AvatarUploader from "./AvatarModule/AvatarUploader.jsx";
import ResizableTextArea from "./TextAreaFolder/ResizableTextArea.jsx";
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
              <li className="skill-item">
                <input />
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
              <li className="skill-item">
                <input />
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
              <li className="skill-item">
                <input />
                <Rating />
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="discipline">
        <div className="discipline-container">
          <ResizableTextArea
            title="Дисциплины"
            placeholder="ТУ-ТУ-ТУТ ВАШИ ДИСциплины"
            defaultRows={8}
            minRows={5}
            maxRows={14}
            onChange={(text) => console.log("Текст:", text)}
          />
        </div>
      </section>

      <section className="pros-cons">
        <div className="pros-cons-container">
          <ResizableTextArea
            title="Достоинства/Недостатки"
            placeholder="Доистоинства? Недостатки?"
            defaultRows={8}
            minRows={5}
            maxRows={14}
            onChange={(text) => console.log("Текст:", text)}
          />
        </div>
      </section>
      <section className="section-vampire-stats">
        <div className="container-stats">
          <ul className="stats-list">
            <li className="stats-item">
              <Rating
                label="Голод"
                mode="accumulate" // ← накопление
                clicksToFull={3} // ← 3 клика = 100%
                max={5}
                value={0}
                color="#ee1919"
                size="md"
              />
            </li>
            <li className="stats-item">
              <Rating
                label="Голод"
                mode="accumulate" // ← накопление
                clicksToFull={3} // ← 3 клика = 100%
                max={5}
                value={0}
                color="#ee1919"
                size="md"
              />
            </li>
            <li className="stats-item">
              <Rating
                label="Голод"
                mode="accumulate" // ← накопление
                clicksToFull={3} // ← 3 клика = 100%
                max={5}
                value={0}
                color="#ee1919"
                size="md"
              />
            </li>
            <li className="stats-item">
              <Rating
                label="Голод"
                mode="accumulate" // ← накопление
                clicksToFull={3} // ← 3 клика = 100%
                max={5}
                value={0}
                color="#ee1919"
                size="md"
              />
            </li>
          </ul>
        </div>
      </section>

      <section className="about-section">
        <h1 className="section-title">О персонаже</h1>
        <div className="history-container-and-goals">
          <div className="history">
            <ResizableTextArea
              title="История"
              placeholder="Расскажите историю своего персонажа"
              defaultRows={3}
              minRows={3}
              maxRows={10}
              onChange={(text) => console.log("Текст:", text)}
            />
          </div>
          <div className="goals">
            <ResizableTextArea
              title="Цели"
              placeholder="Напишите цели своего персонажа"
              defaultRows={3}
              minRows={3}
              maxRows={10}
              onChange={(text) => console.log("Текст:", text)}
            />
          </div>
        </div>
        <div className="alies-andequpment-conteiner">
          <div className="allies-and-contacst">
            <ResizableTextArea
              title="Союзники и связи"
              placeholder="Тут находятся ваши социальные связи идрузья"
              defaultRows={3}
              minRows={3}
              maxRows={5}
              onChange={(text) => console.log("Текст:", text)}
            />
          </div>
          <div className="property-and-equipment">
            <ResizableTextArea
              title="Имущество и снаряжение"
              placeholder="ПУШКИ ДЕНЬГИ КАРТЫ"
              defaultRows={5}
              minRows={3}
              maxRows={10}
              onChange={(text) => console.log("Текст:", text)}
            />
          </div>
        </div>
      </section>

      <section className="appearance-section">
        <h1 className="apperance-title"> Внешность персонажа</h1>
        <div className="avatar-and-notes">
          <div className="avatar">
            <AvatarUploader />
          </div>
          <div className="notes">
            <ResizableTextArea
              title="Заметки"
              placeholder="ТУ-ТУ-ТУТ ВАШИ ЗАМЕТКИ"
              defaultRows={8}
              minRows={3}
              maxRows={20}
              onChange={(text) => console.log("Текст:", text)}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
export default CharactersListVampire;
