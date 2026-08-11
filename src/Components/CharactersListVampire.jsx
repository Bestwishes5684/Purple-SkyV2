import "../Components/CharactersListVampire.css";
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
          <li className="header-character-item">
            Сила крови <input type="text" className="character-input" />
          </li>
        </ul>
      </header>
    </main>
  );
}
export default CharactersListVampire;
