import { Link, useNavigate } from "react-router-dom";
import { OptimizeImage } from "../../../components/ui/Images/OptimizeImage";
import { truncateString } from "../../../utils/utilsStrings";
import { ICamiseta } from "../../../interfaz/ICamiseta";
import { ButtonAppTheme } from "../../../components/ui/Buttons/Buttons";
import { TooltipCursorFollow } from "../../../components/ui/Tooltips/TooltipCursorFollow/TooltipCursorFollow";
import { APP_ROUTES } from "../../../utils/generalConstants/routes";

const CamisetaCard: React.FC<{ camiseta: ICamiseta; top: boolean }> = ({
  camiseta,
  top,
}) => {
  const navigate = useNavigate();

  return (
    <div
      key={camiseta.id}
      className="mb-4 align-items-center"
      style={{ flexBasis: "14%", marginLeft: "10px", marginRight: "10px" }}
    >
      <Link style={{ textDecoration: "none" }} to={APP_ROUTES.routerShirt + camiseta.id}>
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
                {top
                  ? "🔥" + truncateString(camiseta.nombre, 30) + "🔥"
                  : truncateString(camiseta.nombre, 30)}
              </p>
            </TooltipCursorFollow>
          </div>
          <div className="cardi-footer">
            <div className="cardi-price">
              <span>€</span> 25
            </div>
            <ButtonAppTheme
              onClick={() => navigate(APP_ROUTES.routeSearch + camiseta.equipo)}
            >
              {camiseta.equipo}
            </ButtonAppTheme>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CamisetaCard;
