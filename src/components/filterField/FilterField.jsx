const FilterField = ({ handleChangeFilterField }) => (
  <>
    <h2>Find contacts by name</h2>
    <input type="text" name="filter" onChange={handleChangeFilterField}></input>
  </>
);

export default FilterField;
