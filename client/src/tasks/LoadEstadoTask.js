import escala from "../entities/LegendItems";
import { features } from "../data/estados.json";
import partidoResults from "../data/mock_por-partido.json";

class LoadEstadoTask {
  constructor (args) {
    this.partido = args
  }
  setState = null;

  load = (setState) => {
    this.setState = setState;

    this.#processPartidoData(partidoResults, this.partido)

  };

  #processPartidoData = (eleicoesEstados, partido) => {
    const filtrado = eleicoesEstados.filter(item => item.partido === partido)
    let names = [];
    filtrado.map(testResult => {
      testResult.resultado.map((res) => {names.push(res)})
    })
    if (!!names && names.length > 0) {
      for (let j = 0; j < names.length; j++) {
        const resultadoPartido = names[j]
        this.#processEstadoData(features, resultadoPartido);
      }
    }
    this.setState(features);
  };

  #processEstadoData = (data, resultadoPartido) => {
    for (let i = 0; i < data.length; i++) {
      const estado = data[i];

      estado.properties.confirmed = 0;
      estado.properties.confirmedText = 0;

      if (estado.properties.codarea == resultadoPartido.codarea) {
        let confirmed = Number(resultadoPartido.votos);
        estado.properties.confirmed = confirmed;
        estado.properties.confirmedText = this.#formatNumberWithCommas(
            confirmed
        );
        this.#setEstadoColor(estado);
      }
    }
  }

  #setEstadoColor = (estado) => {
    const legendItem = escala.find((item) =>
      item.isFor(estado.properties.confirmed)
    );

    if (legendItem != null) estado.properties.color = legendItem.color;
  };

  #formatNumberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
}

export default LoadEstadoTask;
