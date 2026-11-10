function Header() {
  return (
    <header className="system-header px-4 py-3">
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center gap-3">
          <i className="bi bi-mortarboard-fill fs-3"></i>

          <div>
            <h5 className="mb-0 fw-bold">Sistema Académico ITI</h5>
            <small className="text-white-50">Plataforma de gestión académica</small>
          </div>
        </div>

        <div className="d-flex align-items-center gap-2">
          <i className="bi bi-person-circle fs-4"></i>
          <span className="d-none d-md-inline">Administrador</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
