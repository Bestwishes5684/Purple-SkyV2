import React, { useState, useRef, useEffect } from "react";
import "./AvatarUploader.css";

const AvatarUploader = () => {
  const [avatar, setAvatar] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  // Загрузка аватара из localStorage при монтировании
  useEffect(() => {
    const savedAvatar = localStorage.getItem("userAvatar");
    if (savedAvatar) {
      setAvatar(savedAvatar);
    }
  }, []);

  // Обработчик выбора файла
  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file && file.type.startsWith("image/")) {
      setSelectedFile(file);

      const reader = new FileReader();
      reader.onload = (e) => {
        const imageData = e.target.result;
        setAvatar(imageData);
        // Сохраняем в localStorage
        localStorage.setItem("userAvatar", imageData);
      };
      reader.readAsDataURL(file);
    } else {
      alert("Пожалуйста, выберите изображение");
    }
  };

  // Клик по аватарке
  const handleAvatarClick = () => {
    fileInputRef.current.click();
  };

  // Сохранение (уже сохранено в localStorage, просто показываем уведомление)
  const handleSave = () => {
    if (!avatar) {
      alert("Сначала выберите изображение!");
      return;
    }
    alert("✅ Аватар сохранен в браузере!");
  };

  // Удаление аватара
  const handleRemove = () => {
    setAvatar(null);
    setSelectedFile(null);
    localStorage.removeItem("userAvatar");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="avatar-wrapper">
      <div className="avatar-container" onClick={handleAvatarClick}>
        {avatar ? (
          <img src={avatar} alt="Аватар" className="avatar-image" />
        ) : (
          <div className="avatar-placeholder">
            <p>Загрузить фото</p>
          </div>
        )}
      </div>

      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="avatar-input"
      />

      <div className="avatar-actions">
        <button onClick={handleSave} className="save-btn" disabled={!avatar}>
          💾 Сохранить
        </button>

        {avatar && (
          <button onClick={handleRemove} className="remove-btn">
            🗑️ Удалить
          </button>
        )}
      </div>

      {/* Информация о размере */}
      {avatar && (
        <div className="avatar-info">
          <small>✅ Аватар сохранен в localStorage</small>
        </div>
      )}
    </div>
  );
};

export default AvatarUploader;
