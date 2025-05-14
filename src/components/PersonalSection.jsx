import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export function PersonalSection({ personalItem }) {
  return (
    <header>
      <h2>{personalItem.name}</h2>
      <div className="personal-bottom">
        <div className="personal-bottom-group">
          <MdEmail fill="black" size={20} className="personal-bottom-icon" />
          <p>{personalItem.email}</p>
        </div>
        <div className="personal-bottom-group">
          <FaPhoneAlt fill="black" size={20} className="personal-bottom-icon" />
          <p>{personalItem.phone}</p>
        </div>
        <div className="personal-bottom-group">
          <FaLocationDot
            fill="black"
            size={20}
            className="personal-bottom-icon"
          />
          <p>{personalItem.location}</p>
        </div>
      </div>
    </header>
  );
}
