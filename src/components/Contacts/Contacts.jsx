const Contacts = ({ options, removeContact }) => {
  return (
    <>
      <ul>
        {options.map(({ id, name, number }) => {
          return (
            <li key={id}>
              <p>
                {name}: {number}
              </p>
              <button type="button" onClick={() => removeContact(id)}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Contacts;
