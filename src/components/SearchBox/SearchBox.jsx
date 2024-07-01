import { useDispatch } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const inputValue = event.target.value.toLowerCase().trim();
    dispatch(changeFilter(inputValue));
  };

  return (
    <>
      <p className={css.searchBoxText}>Find contact by name</p>
      <input
        onChange={handleChange}
        type="text"
        placeholder="Enter name..."
        className={css.searchBoxInput}
      />
    </>
  );
};

export default SearchBox;
