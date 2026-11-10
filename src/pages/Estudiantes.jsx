function Estudiantes() {
  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h3 className="fw-bold mb-1">
            <i className="bi bi-people me-2"></i>
            Estudiantes
          </h3>

          <p className="text-muted mb-0">Administración y registro de estudiantes</p>
        </div>

        <button type="button" className="btn btn-primary">
          <i className="bi bi-plus-circle me-2"></i>
          Nuevo estudiante
        </button>
      </div>

      <div className="card border-0 shadow-sm">
        <div className="card-header bg-white py-3">
          <h5 className="mb-0">
            <i className="bi bi-person-plus me-2"></i>
            Registro de estudiantes
          </h5>
        </div>

        <div className="card-body p-4">
          <p className="text-muted">Complete la información del estudiante.</p>

          {/* El formulario se construirá en clase */}
        </div>
      </div>
    </div>
  );
}

export default Estudiantes;
