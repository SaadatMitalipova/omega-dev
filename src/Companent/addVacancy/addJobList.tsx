import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddJobList() {
  const navigate = useNavigate();
  const [organizatioName, setOrganizatioName] = useState('');
  const [type, setType] = useState('');
  const [position, setPosition] = useState('');
  const [priceFrom, setPriceFrom] = useState('');
  const [priceTo, setPriceTo] = useState('');
  const [city, setCity] = useState('');
  const [currency, setCurrency] = useState('');
  const [salary, setSalary] = useState('');
  const [description, setDescription] = useState('');
  const [telegram, setTelegram] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');


  
  async function handleAddVacancy() {
    try {
      const response = await axios.post("http://3.38.98.134/jobs", {
        organization_name: organizatioName,
        price_from: priceFrom,
        price_to: priceTo,
        currency: currency,
        position: position,
        city: city,
        salary: salary,
        phone: phone,    
        type: type,
      });

      if (response.data.success) {
        console.log(response.data);
        navigate("/");
      }
      alert(response.data.message);
    } catch (error) {
      console.error("Ошибка при добавлении вакансии", error);
      alert("Не удалось добавить вакансию");
    }
  }

  return (
    <>
      <div className="addVacancy-content">
        <h1 className="addVacancy-title">Добавить новую вакансию</h1>
        <p className="addVacancy-text">
          Вакансия должна относиться к сфере информационных технологий и будет
          опубликована после проверки модератором
        </p>
        <form id="vacancy-form">
          <label htmlFor="organizationName">Компании*</label>
          <input
            type="text"
            id="organizationName"
            placeholder="Компания"
            required
            value={organizatioName}
            onChange={(e) => setOrganizatioName(e.target.value)}
          />

          <label htmlFor="position">Должность*</label>
          <input
            className="add-input"
            type="text"
            id="position"
            placeholder="Например “Junior C# Developer”"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />

          <label htmlFor="price_from">Oт*</label>
          <input
            className="add-input"
            type="text"
            id="price_from"
            value={priceFrom}
            onChange={(e) => setPriceFrom(e.target.value)}
          />

          <label htmlFor="price_to">До*</label>
          <input
            className="add-input"
            type="text"
            id="price_to"
            value={priceTo}
            onChange={(e) => setPriceTo(e.target.value)}
          />        

          <label htmlFor="currency">Валюта*</label>
          <input
            className="add-input"
            type="text"
            id="currency"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          />

          <label htmlFor="salary">Оклад*</label>
          <input
            className="add-input"
            type="text"
            id="salary"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />

          <label htmlFor="description">Описание вакансии*</label>
          <textarea
            id="description"
            placeholder="Здесь необходимо указать условия труда, требования и обязанности. Также вы можете указать краткое описание компании, например: 'В дружный отдел дизайна игровой студии 'Bloody Fun' требуется проект менеджер со стажем'"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <span id="description-length">
            Длина текста: {description.length} символов, минимально допустимое значение 200 символов
          </span>

          <label htmlFor="telegram">Телеграмм*</label>
          <input
            className="add-input"
            type="text"
            id="telegram"
            placeholder="uzenbaevaa"
            value={telegram}
            onChange={(e) => setTelegram(e.target.value)}
          />

          
          <label htmlFor="city">Город*</label>
          <input
            className="add-input"
            type="tel"
            id="phone"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />



          <label htmlFor="email">E-Mail*</label>
          <input
            className="add-input"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="phone">Телефон*</label>
          <input
            className="add-input"
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <label htmlFor="type">Тип*</label>
          <select
              id="type"
              required
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="" disabled>
                Выберите тип работы
              </option>
              <option value="full-time">Полная занятость</option>
              <option value="part-time">Частичная занятость</option>
              <option value="remote">Удаленная работа</option>
          </select>

          <div className="buttons">
            <button onClick={handleAddVacancy} className="btn1" type="button" id="save-button">
              Сохранить
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddJobList;
