import React, { useEffect, useState } from "react";
import { Container, Pagination } from "react-bootstrap";
import { Link, useLocation, useParams } from "react-router-dom";
import "../../assets/css/camisetasList.css";
import camisetaService from "../../context/services/camisetaService";
import { ICamiseta } from "../../interfaz/ICamiseta";
import { OptimizeImage } from "../../components/ui/OptimizeImage";
import { TooltipCursorFollow } from "../../components/ui/tooltipHook";
import { truncateString } from "../../utils/utilsStrings";

const CamisetaList: React.FC<{ camisetas: ICamiseta[] }> = ({ camisetas }) => {
  const { busqueda } = useParams();
  const [camisetasFiltro, setCamisetasFiltro] =
    useState<ICamiseta[]>(camisetas);
  const [camisetasTopFiltro, setCamisetasTopFiltro] =
    useState<ICamiseta[]>();
  const [currentPage, setCurrentPage] = useState(1);
  const camisetasPerPage = 20;

  useEffect(() => {
    const fetchData = async (query: string | undefined) => {
      if (query) {
        const buscarCamis = async (q: any) => {
          const camisetasde20al25 =
            await camisetaService.searchCamisetasByNombre(q);
          const camisetasde70al99 =
            await camisetaService.searchCamisetasByNombre2(q);
          const camisetasde00a19 =
            await camisetaService.searchCamisetasByNombre3(q);

          setCamisetasFiltro(
            camisetasde20al25.concat(camisetasde70al99).concat(camisetasde00a19)
          );
          console.log(camisetasFiltro);
        };

        buscarCamis(query);
      } else {
        const camisetasTop = await camisetaService.getAllCamisetasTop()
        console.log(camisetasTop);
        setCamisetasTopFiltro(camisetasTop);
        console.log(camisetasTopFiltro);
        setCamisetasFiltro(camisetas);
      }
      setCurrentPage(1);
    };

    fetchData(busqueda);
    // eslint-disable-next-line
  }, [busqueda, camisetas]);

  const pageNumbers = Array.from({
    length: Math.ceil(camisetasFiltro.length / camisetasPerPage),
  });

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastCamiseta = currentPage * camisetasPerPage;
  const indexOfFirstCamiseta = indexOfLastCamiseta - camisetasPerPage;
  const currentCamisetas = camisetasFiltro.slice(
    indexOfFirstCamiseta,
    indexOfLastCamiseta
  );

  const location = useLocation();

  return (
    <div className="d-flex flex-column align-items-end`">
      <Container className="mt-5 mx-5 clasesita" style={{ width: "100%" }}>
        <div className="d-flex flex-wrap align-items-center">
          <hr></hr>
          {
          location.pathname === '/' ? 
          camisetasTopFiltro?.map((e) =>
            e.destacadaGlobal === true ? <CamisetaCard key={e.id} camiseta={e} top={true} /> : ""
          )
          :
          camisetasFiltro.map((e) =>
            e.destacada === true ? <CamisetaCard key={e.id} camiseta={e} top={true} /> : ""
          )}
        </div>
        <hr style={{ width: "85%" }}></hr>
        <div className="d-flex flex-wrap align-items-center">
          {currentCamisetas.map((camiseta) => (
            <CamisetaCard key={camiseta.id} camiseta={camiseta} top={false} />
          ))}
        </div>
        <Pagination className="paginator d-flex justify-content-center">
          {pageNumbers.map((_, number) => (
            <Pagination.Item
              key={number + 1}
              active={number + 1 === currentPage}
              onClick={() => paginate(number + 1)}
            >
              {number + 1}
            </Pagination.Item>
          ))}
        </Pagination>
      </Container>
    </div>
  );
};



const CamisetaCard: React.FC<{ camiseta: ICamiseta, top: boolean }> = ({ camiseta, top }) => {
  return (
    <div
      key={camiseta.id}
      className="mb-4 align-items-center"
      style={{ flexBasis: "14%", marginLeft: "10px", marginRight: "10px" }}
    >
      <Link style={{ textDecoration: "none" }} to={`/camiseta/${camiseta.id}`}>
        <div className="cardi p-2 d-flex flex-column">
          <OptimizeImage
            src={camiseta.imagen}
            alt={camiseta.nombre}
            clasNameImg="cardi-img"
            classNameContainer="cardi-img-container"
          />
          <div className="card-body mt-auto">
            <TooltipCursorFollow text={camiseta.nombre}>
              <p
                className="card-text mb-0 cardi-title"
                style={{ fontSize: "0.8rem" }}
              >
                {
                top === true ? "🔥" + truncateString(camiseta.nombre, 30) + "🔥" : truncateString(camiseta.nombre, 30)
                }
              </p>
            </TooltipCursorFollow>
          </div>
          <div className="cardi-footer">
            <div className="cardi-price">
              <span>€</span> 25
            </div>
            <Link to={`/busqueda/${camiseta.equipo}`}>
               <button className="cardi-btn">{camiseta.equipo}</button>
            </Link>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CamisetaList;
