import { Link } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [cliked, setClicked] = useState(false);

  return (
    <div>
      <>
        <div className={cliked ? "dashboard active" : "dashboard"}>
          <span
            className="close-dash"
            onClick={() => {
              setClicked(false);
            }}
          >
            <ion-icon name="close-outline"></ion-icon>
          </span>
          <header className="da-header">
            <span className="co-user-image">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIMAAACDCAMAAACZQ1hUAAAAbFBMVEX///8rLzJ9fn8eIycAAAAlKi0iJyooLC/29vYjJir7+/u8vLwcICTi4uLW1tZaW1vw8PCTk5QTGR2ysrOenp7Ly8xBREcAAAiEhIUKEhfp6elzdXZQUlQiIyUwNDZvb3AOEBKmp6g7Oz1iYmM4P3qDAAADjklEQVR4nO2ai5ajIAyGBxGxFa1ivWDv+v7vuFrPTLutWoPB2XOW7wX8T0j+YMLXl8VisVgsFst6bOMsTUrHSdIs3v6KgMDJ3UIJSqlQhZs7wdoyolJKysgDRqUsoxUVhBcmOHmFC3YJV1Kw3QvxJqDnJG+rSKhyNaKgi8U1r8xLyIQ3LqHFE5lpCenpPRFe0yI1LEF9ktCKUEZFZO5HBR2uweMI+eco3CPBjdXothmryVdoY8o099eZEghRezMSqgFvHD0NYcYmnLkn0SEcExLiAiCBkCI2oCGBhKENRIIvIc7nZ0MHz/EDkU10qkEUvlGVsKMgROIfxpF9/uxfsCO2hOoMS4c2Ic7YFhFN3xqG2GBfLwMJ1qACZA0ptCxaDdjXiBs8DhK7b+3/AQ06ccC+5/8L+aBRFxK7LiKoTbZGie0PcQ32yRq9cYL7hYfeL74SaEIY6JsRWAP+NMIHHgY7+ugaoE6J7pIdvoRUBpcGwgC8WBvIyA5/5h/vPQzMSBhav57fM67YPv2DMzctpZE/vTtxvpklwTPwf/ND5c5JCe4anc1Fp8+RYCfD89ro/EkEPRsfGYf5tE2IeoV5sX8oxpOCFwdDxvBCll+HVXCVGx/SfuPva/neRZms9+sEoSdOcyXpIxp8I1WeGnSFYcLbpXbdQilVuG59uK21unhhG0dBkAZB9DvrLEtUeuXY2YflaYXFWnahggvWpNVrCmyrtOGSC9qY9YiwUf1MyFNekwThtx34YZA0TPWtZKMaczUSl+7TVGojlCtJftwd87N0lWAPt9i4pSGrCMh7t+KMeYy9O7fgJi5zfqIgPzlcJei+He/As+IdsohQUaAEQk4KNTUzBh+BtI2UI1ZpRnQktPWBJyKcsVgdiYREOo6K6kWhg59QrvnxDp6ODyhKdTjwyeQzV4Tfvtv8xeowavG4tgJNPobgcmlKHJYkQw89LJMw87HBNMueIkCHccMsG9FpTOuHWDTBrzHC0AaiXhAG+MJgmAVrhB18oTjMZqcrocIoip5C1yM09mhj6L5E8Hc4GdnBNFtXiBeGNiv1LhJI5tCjaRENVlV00IuOhC3w8ck0PNcZUYTgFw+TGs46CZFBH59Mo/WsEs2oe6ROUiI61F2Dzn4L/BBoGlFqaLgsv8U9o1WcqPZAiNdoaEBr3D1a7dtqsBqeOUqKidR5kpE4uJhZgFssFovFYvk/+QPwvTisU2EioAAAAABJRU5ErkJggg=="
                alt="image"
              />
            </span>
            <span className="user">@User0129</span>
          </header>

          <Link to="/editar" className="edit">
            <span className="icon">
              <ion-icon name="create-outline"></ion-icon>
            </span>

            <span>Editar perfil</span>
          </Link>

          <button className="salir">Salir</button>
        </div>
        <header className="header">
          <nav>
            <div className="site-logo">
              <h1>
                <span
                  className="menu"
                  onClick={() => {
                    setClicked(true);
                  }}
                >
                  <ion-icon name="menu-outline"></ion-icon>
                </span>
              </h1>
            </div>

            <div></div>
          </nav>
        </header>
      </>
    </div>
  );
};

export default Navbar;
