import "./ToComeIn.css";
import tmeIcon from "../../assets/Images/telegramIcons.svg";
import tmeNoot from "../../assets/Images/tmeNot.svg";
import { Link } from "react-router-dom";
interface ToComeInProps {
  closeModal: () => void;
}
const ToComeIn: React.FC<ToComeInProps> = ({ closeModal }) => {
  return (
    <>
      <div id="toComeIn">
        <div className="container">
          <div className="toComeIn">
            <div className="toComeIn-block">
              <h3>Войти через Telegram:</h3>
              <Link to="https://oauth.telegram.org/auth?bot_id=488180547&origin=https%3A%2F%2Fdevkg.com&embed=1&request_access=write&return_to=https%3A%2F%2Fdevkg.com%2Fru%2Fevents">
                <button className="tme-btn">
                  <img src={tmeIcon} alt="" />
                  Войти через Telegram
                </button>
              </Link>
            </div>
            <div className="tme-not-img">
              <img src={tmeNoot} alt="" />
            </div>
          </div>
          <p>*Если в вашей стране заблокирован телеграм, используйте VPN</p>
        </div>
      </div>
    </>
  );
};

export default ToComeIn;
