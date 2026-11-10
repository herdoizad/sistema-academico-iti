import { NavLink } from "react-router-dom";

function Sidebar() {
  const opciones = [
    { ruta: "/inicio", icono: "bi-house-door", nombre: "Inicio" },
    { ruta: "/estudiantes", icono: "bi-people", nombre: "Estudiantes" },
    { ruta: "/materias", icono: "bi-book", nombre: "Materias" },
    { ruta: "/matriculas", icono: "bi-journal-check", nombre: "Matrículas" },
  ];

  return (
    <nav className="system-sidebar p-3">
      <div className="text-uppercase text-muted small fw-bold mb-3">Menú principal</div>

      <ul className="nav flex-column">
        {opciones.map((opcion) => (
          <li className="nav-item" key={opcion.ruta}>
            <NavLink
              to={opcion.ruta}
              className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            >
              <i className={`bi ${opcion.icono} me-3`}></i>
              {opcion.nombre}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Sidebar;
