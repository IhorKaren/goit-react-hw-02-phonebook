const Contacts = ({ options }) => {
  return (
    <>
      <ul>
        {options.map(option => {
          return (
            <li key={option.id}>
              {option.name}: {option.number}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Contacts;
