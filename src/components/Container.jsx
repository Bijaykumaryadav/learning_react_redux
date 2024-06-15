const Container = ({ children }) => {
  return (
    <div className="card" style={{ width: "18rem", margin: "auto" }}>
      <div className="card-body">{children}</div>
    </div>
  );
};

export default Container;
