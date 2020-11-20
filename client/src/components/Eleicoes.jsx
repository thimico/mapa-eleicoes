import React, { useState, useEffect } from "react";

import Loading from "./Loading";
import EleicoesMap from "./EleicoesMap";
import LoadEstadoTask from "../tasks/LoadEstadoTask";
import Legend from "./Legend";
import legendItems from "../entities/LegendItems";
import {MenuItem}  from "@material-ui/core";

const Eleicoes = () => {
  const defaultPartido = 'PSB';

  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedPartido, setSelectedPartido] = useState(defaultPartido);
  const partidoItems = getPartidoItems();

  const legendItemsReverse = [...legendItems].reverse();

  const load = (part) => {
    setIsLoading(true);
    const loadEstadoTask = new LoadEstadoTask(part);
    loadEstadoTask.load((countries) => setCountries(countries));
    setTimeout(function(){
      setIsLoading(false);
    },2000);
  };

  useEffect(() => {
    load(selectedPartido);
  }, [countries, selectedPartido]);

  function getPartidoItems() {
    const items = [];
    items.push(<MenuItem value="PSB" key="1">PSB</MenuItem>)
    items.push(<MenuItem value="PT" key="2">PT</MenuItem>)
    items.push(<MenuItem value="PSDB" key="3">PSDB</MenuItem>)
    //TODO
    // for (let i = 1; i <= uniqueLimit; i++) {
    //   items.push(<MenuItem value={i} key={i}>{i}</MenuItem>);
    // }
    return items;
  };


  return (
    <div>
      {countries.length === 0 ? (
        <Loading />
      ) : (
        <div>
          <Legend legendItems={legendItemsReverse} />
          <EleicoesMap countries={countries} handlePartidoChange={setSelectedPartido}
                       partidoItems={partidoItems} selectedPartido={selectedPartido} isLoading={isLoading}/>
        </div>
      )}
    </div>
  );
};

export default Eleicoes;
