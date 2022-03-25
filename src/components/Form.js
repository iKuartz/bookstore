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
      <input
        className="form-book-author"
        type="text"
        required
        placeholder="Author"
      />
      <button className="add-btn" type="submit">
        Click to Add
      </button>
    </form>
  </div>
);

export default Form;
