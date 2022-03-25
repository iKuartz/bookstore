const Form = () => (
  <div className="form-container">
    <h2 className="form-title">Add a book to our collection</h2>
    <form>
      <input
        className="form-book-title"
        type="text"
        required
        placeholder="Title"
      />
      <input
        className="form-book-category"
        type="text"
        required
        placeholder="Category"
      />
      <button className="add-btn" type="submit">
        ADD BOOK
      </button>
    </form>
  </div>
);

export default Form;
