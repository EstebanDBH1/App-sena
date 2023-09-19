import "./EditPage.css";
import { Link } from "react-router-dom";

const EditPage = () => {
  return (
    <div>
      <div className="header-page-edit">
        <Link to="/" className="arrow-back">
          <ion-icon name="arrow-back-outline"></ion-icon>
        </Link>
        <h1 className="profile">Perfil</h1>
      </div>

      <form>
        <div className="edit-image">
          <div className="box-image-edit-page">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIMAAACDCAMAAACZQ1hUAAAAbFBMVEX///8rLzJ9fn8eIycAAAAlKi0iJyooLC/29vYjJir7+/u8vLwcICTi4uLW1tZaW1vw8PCTk5QTGR2ysrOenp7Ly8xBREcAAAiEhIUKEhfp6elzdXZQUlQiIyUwNDZvb3AOEBKmp6g7Oz1iYmM4P3qDAAADjklEQVR4nO2ai5ajIAyGBxGxFa1ivWDv+v7vuFrPTLutWoPB2XOW7wX8T0j+YMLXl8VisVgsFst6bOMsTUrHSdIs3v6KgMDJ3UIJSqlQhZs7wdoyolJKysgDRqUsoxUVhBcmOHmFC3YJV1Kw3QvxJqDnJG+rSKhyNaKgi8U1r8xLyIQ3LqHFE5lpCenpPRFe0yI1LEF9ktCKUEZFZO5HBR2uweMI+eco3CPBjdXothmryVdoY8o099eZEghRezMSqgFvHD0NYcYmnLkn0SEcExLiAiCBkCI2oCGBhKENRIIvIc7nZ0MHz/EDkU10qkEUvlGVsKMgROIfxpF9/uxfsCO2hOoMS4c2Ic7YFhFN3xqG2GBfLwMJ1qACZA0ptCxaDdjXiBs8DhK7b+3/AQ06ccC+5/8L+aBRFxK7LiKoTbZGie0PcQ32yRq9cYL7hYfeL74SaEIY6JsRWAP+NMIHHgY7+ugaoE6J7pIdvoRUBpcGwgC8WBvIyA5/5h/vPQzMSBhav57fM67YPv2DMzctpZE/vTtxvpklwTPwf/ND5c5JCe4anc1Fp8+RYCfD89ro/EkEPRsfGYf5tE2IeoV5sX8oxpOCFwdDxvBCll+HVXCVGx/SfuPva/neRZms9+sEoSdOcyXpIxp8I1WeGnSFYcLbpXbdQilVuG59uK21unhhG0dBkAZB9DvrLEtUeuXY2YflaYXFWnahggvWpNVrCmyrtOGSC9qY9YiwUf1MyFNekwThtx34YZA0TPWtZKMaczUSl+7TVGojlCtJftwd87N0lWAPt9i4pSGrCMh7t+KMeYy9O7fgJi5zfqIgPzlcJei+He/As+IdsohQUaAEQk4KNTUzBh+BtI2UI1ZpRnQktPWBJyKcsVgdiYREOo6K6kWhg59QrvnxDp6ODyhKdTjwyeQzV4Tfvtv8xeowavG4tgJNPobgcmlKHJYkQw89LJMw87HBNMueIkCHccMsG9FpTOuHWDTBrzHC0AaiXhAG+MJgmAVrhB18oTjMZqcrocIoip5C1yM09mhj6L5E8Hc4GdnBNFtXiBeGNiv1LhJI5tCjaRENVlV00IuOhC3w8ck0PNcZUYTgFw+TGs46CZFBH59Mo/WsEs2oe6ROUiI61F2Dzn4L/BBoGlFqaLgsv8U9o1WcqPZAiNdoaEBr3D1a7dtqsBqeOUqKidR5kpE4uJhZgFssFovFYvk/+QPwvTisU2EioAAAAABJRU5ErkJggg=="
              alt=""
            />
          </div>
          <p className="txt-edit">@User01927.</p>
        </div>

        <div className="co-inputs">
          <label htmlFor="nick">Nick</label>
          <input type="text" placeholder="Apodo" /> <br />
          <label htmlFor="about">Sobre</label>
          <input type="text" placeholder="" className="input2" />
        </div>

        <button type="submit" className="btn-save">
          GUARDAR
        </button>
      </form>
    </div>
  );
};

export default EditPage;
