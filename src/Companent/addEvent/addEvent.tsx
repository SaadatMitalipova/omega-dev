import React, { useState } from "react";
import "..//addEvent/addEvent.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddEvent() {
  const navigate = useNavigate();
  const [eventsName, setEventsName] = useState("");
  const [date, setDate] = useState("");
  const [eventsType, setEventsType] = useState("");
  const [organizatioName, setOrganizatioName] = useState("");
  const [buttonType, setButtonType] = useState("");
  const [location, setLocation] = useState("");
  const [cover, setCover] = useState("");

  async function handleAddEvents() {
    try {
      const response = await axios.post("http://3.38.98.134/events", {
        name: eventsName,
        date: date,
        event_type: eventsType,
        button_type: buttonType,
        organization_name: organizatioName,
        location: location,
        cover: cover,

      });

      if (response.data.success) {
        console.log(response.data);
        navigate("/events");
      }
      alert(response.data.message);
    } catch (error) {
      console.error("Ошибка при добавлении вакансии", error);
      alert("Не удалось добавить вакансию");
    }
  }
  return (
    <>
      <div className="container">
        <div className="addEvent-content">
          <h1 className="addVacancy-title">Добавить новое мероприятие</h1>
          <p className="addVacancy-text">
            Мероприятие будет опубликовано на сайте и в телеграм канале после
            проверки модератором. Мероприятия откровенно рекламного характера
            или не связанные с IT и смежными темами будут отклоненны.
          </p>
          <form id="eventForm">
            <div className="form-group">
              <label>Изображение</label>
              <input
                type="file"
                id="imageUpload"
                className="file-input"
                value={cover}
                onChange={(e) => setCover(e.target.value)}
              />
              <small>
                Тут можно загрузить фоновое изображение карточки для привлечения
                внимания.
              </small>
              <small>
                Не используйте изображения с текстом, вся необходимая информация
                будет добавлена автоматически.
              </small>
            </div>
            {/* <div className="form-group">
              <label>Организация</label>
              <button type="button" id="selectOrganization" className="btn">
                Создать или выбрать организацию
              </button>
            </div> */}
            <div className="form-group">
              <label>Название</label>
              <input
                type="text"
                id="name"
                className="input addEvent-inputs"
                placeholder="Например 'Bishkek Dev Community Fest'"
                required
                value={eventsName}
                onChange={(e) => setEventsName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Тип</label>
              <select id="type" className="input addEvent-inputs">
                <option value="online">Онлайн</option>
                <option value="offline">Офлайн</option>
              </select>
            </div>
            <div className="form-group">
              <label>Описание</label>
              <textarea
                id="description"
                className="textarea addEvent-inputs"
                placeholder="Здесь вы можете описать мероприятие, что будет происходить, кто будет выступать, какие темы будут подняты."
                required
              ></textarea>
            </div>
            <div className="form-group">
              <label>Дата</label>
              <input
                type="date"
                id="date"
                className="input addEvent-inputs"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Имя кнопки</label>
              <select id="buttonName" className="input addEvent-inputs">
                <option value="website">Веб-сайт</option>
                <option value="registration">Трансляция</option>
              </select>
            </div>
            <div className="form-group">
              <label>Веб-сайт</label>
              <input
                type="url"
                id="website"
                className="input addEvent-inputs"
              />
            </div>
            <div className="form-group">
              <label>Ссылка на регистрацию</label>
              <input
                type="url"
                id="registrationLink"
                className="input addEvent-inputs"
              />
            </div>
            <div className="form-group">
              <label>Организатор</label>
              <input
                type="url"
                id="registrationLink"
                className="input addEvent-inputs"
                value={organizatioName}
                onChange={(e) => setOrganizatioName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Локация</label>
              <input
                type="url"
                id="registrationLink"
                className="input addEvent-inputs"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className="buttons">
              <button
                onClick={handleAddEvents}
                className="btn1"
                type="button"
                id="save-button"
              >
                Сохранить
              </button>
            </div>
            <small className="required-fields">
              Не заполнены обязательные поля: Название, Описание, Дата,
              Организация
            </small>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddEvent;
