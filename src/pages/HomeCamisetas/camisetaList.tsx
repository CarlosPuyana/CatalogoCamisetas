import React, { useEffect, useState } from "react";
import { Container, Pagination } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import camisetaService from "../../context/services/camisetaService.ts";
import { ICamiseta } from "../../interfaces/ICamiseta.ts";
import { TooltipCursorFollow } from "../../components/ui/tooltipHook.tsx";
import { OptimizeImage } from "../../components/ui/OptimizeImage.tsx";
import {truncateString} from "../../utils/utilsStrings.tsx"
import "../../assets/css/camisetasList.css";

const CamisetaList: React.FC<{ camisetas: ICamiseta[] }> = ({ camisetas }) => {
  const { busqueda } = useParams();
  const [camisetasFiltro, setCamisetasFiltro] =
    useState<ICamiseta[]>(camisetas);
  const [currentPage, setCurrentPage] = useState(1);
  const camisetasPerPage = 20;

  useEffect(() => {
    const fetchData = async (query: string | undefined) => {
      if (query) {
        const buscarCamis = async (q) => {
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
        setCamisetasFiltro(camisetas);
      }
      setCurrentPage(1);
    };

    fetchData(busqueda);
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

  return (
    <div className="d-flex flex-column align-items-end`">
      <Container className="mt-5 mx-5 clasesita" style={{ width: "100%" }}>
        <div className="d-flex flex-wrap align-items-center">
          <hr></hr>
          {camisetasFiltro.map((e) =>
            e.destacada === true ? <CamisetaCard key={e.id} camiseta={e} /> : ""
          )}
        </div>
        <hr style={{ width: "85%" }}></hr>
        <div className="d-flex flex-wrap align-items-center">
          {currentCamisetas.map((camiseta) => (
            <CamisetaCard key={camiseta.id} camiseta={camiseta} />
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



const CamisetaCard: React.FC<{ camiseta: ICamiseta }> = ({ camiseta }) => {
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
                {camiseta.destacada
                  ? "🔥" + truncateString(camiseta.nombre, 30) + "🔥"
                  : truncateString(camiseta.nombre, 30)}
              </p>
            </TooltipCursorFollow>
          </div>
          <div className="cardi-footer">
            <div className="cardi-price">
              <span>€</span> 25
            </div>
            <button className="cardi-btn">{camiseta.equipo}</button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CamisetaList;
