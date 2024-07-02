import { useEffect } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import { fetchContacts } from "./redux/contactsOps";
import { useDispatch, useSelector } from "react-redux";
import { selectError, selectLoading } from "./redux/contactsSlice";
import toast, { Toaster } from "react-hot-toast";
import Loader from "./components/Loader/Loader";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      toast.error(error, {
        icon: "❌",
        style: {
          minWidth: "250px",
          borderRadius: 15,
        },
      });
    }
  }, [error]);

  return (
    <div>
      <div>
        <Toaster />
      </div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && <Loader />}
      <ContactList />
    </div>
  );
}

export default App;
