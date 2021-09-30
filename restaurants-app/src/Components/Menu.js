const Menu = ({ menu }) => {
  return (
    <div className="menu">
      {menu.map((item) => (
        <div className = 'item' key = {item.key}>
          <h2>{item.item}</h2>
          <p>{item.price}</p>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Menu;
