import Header from '~/components/Layout/component/Header';
function HeaderOnly({ children }) {
  return (
    <div className="defaultLayout">
      <Header />
      <div className="container">
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default HeaderOnly;
