import toast from 'react-hot-toast';

const SearchForm = ({ setQuery, reset }) => {
  const handleSubmit = evt => {
    evt.preventDefault();
    const value = evt.target.elements.input.value.trim();
    if (!value) {
      toast.error('The search field cannot be empty', {
        position: 'top-center',
        duration: 2000,
      });
    } else {
      reset();
      setQuery(value);
      evt.target.reset();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="input" placeholder="Search movies" />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
