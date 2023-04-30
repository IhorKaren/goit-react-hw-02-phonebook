const Contacts = ({ options }) => {
  return (
    <>
      <ul>
        {options.map(option => {
          return (
            <li key={option.id}>
              <p>
                {option.name}: {option.number}
              </p>
              <button type="button">Delete</button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Contacts;
