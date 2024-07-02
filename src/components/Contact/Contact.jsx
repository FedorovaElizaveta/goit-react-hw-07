import css from "./Contact.module.css";
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

const Contact = ({ contact: { name, number, id } }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.contactCardItem}>
      <div className={css.contactCardContainer}>
        <div className={css.contactCardInfo}>
          <FaUser size={30} />
          <p>{name}</p>
        </div>
        <div className={css.contactCardInfo}>
          <FaPhoneAlt size={30} />
          <p>{number}</p>
        </div>
      </div>
      <button
        onClick={handleDelete}
        type="button"
        className={css.contactCardBtn}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
