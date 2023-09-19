const LayoutWrite = () => {
  return (
    <div>
      <label htmlFor="frutas">Selecciona una fruta:</label>
      <select
        id="frutas"
        name="frutas"
        value={this.state.frutaSeleccionada}
        onChange={this.handleChange}
      >
        <option value="manzana">Manzana</option>
        <option value="banana">Banana</option>
        <option value="uva">Uva</option>
        <option value="naranja">Naranja</option>
        <option value="pera">Pera</option>
      </select>
    </div>
  );
};

export default LayoutWrite;
