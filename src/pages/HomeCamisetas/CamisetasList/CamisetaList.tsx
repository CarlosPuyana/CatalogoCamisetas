import React, { useEffect, useState } from "react";
import { Container, Pagination } from "react-bootstrap";
import { useLocation, useParams } from "react-router-dom";
import "./camisetasList.css";
import camisetaService from "../../../utils/apis/camisetaService";
import { ICamiseta } from "../../../interfaz/ICamiseta";
import CamisetaCard from "../CamisetaCard/CamisetaCard";

const CamisetaList: React.FC<{ camisetas: ICamiseta[] }> = ({ camisetas }) => {
  const { busqueda } = useParams();
  const location = useLocation();
  const [camisetasFiltro, setCamisetasFiltro] =
    useState<ICamiseta[]>(camisetas);
  const [camisetasTopFiltro, setCamisetasTopFiltro] = useState<ICamiseta[]>();
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
        const camisetasTop = await camisetaService.getAllCamisetasTop();
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
          <hr />
          {location.pathname === "/"
            ? camisetasTopFiltro?.map((e) =>
                e.destacadaGlobal === true ? (
                  <CamisetaCard key={e.id} camiseta={e} top={true} />
                ) : (
                  ""
                )
              )
            : camisetasFiltro.map((e) =>
                e.destacada === true ? (
                  <CamisetaCard key={e.id} camiseta={e} top={true} />
                ) : (
                  ""
                )
              )}
        </div>
        <hr style={{ width: "85%" }} />
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
              onClick={() => setCurrentPage(number + 1)}
            >
              {number + 1}
            </Pagination.Item>
          ))}
        </Pagination>
      </Container>
    </div>
  );
};

export default CamisetaList;
