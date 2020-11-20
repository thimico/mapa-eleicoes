import React, { useState, useEffect } from "react";

import PropTypes from 'prop-types';
import { Map, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./EleicoesMap.css";
import {withStyles, InputLabel, FormControl as MuiFormControl, Select as MuiSelect, TextField as MuiTextField} from "@material-ui/core";
import Loading from "./Loading";


const FormControl = withStyles({
  root: {
    marginLeft: '10%',
    '&.formControlWithPadding': {
      margin: '22px 0'
    }
  }
})(MuiFormControl);

const Select = withStyles({
  root: {
    boxSizing: 'border-box',
    height: '53px',
    width: '244px',
    border: '1px solid #CFD8DC',
    borderRadius: '2px',
    backgroundColor: '#FFF'
  }
})(MuiSelect);

const TextField = withStyles({
  root: {
    boxSizing: 'border-box',
    width: '244px',
    border: '1px solid #CFD8DC',
    borderRadius: '2px',
    backgroundColor: '#FFF'
  }
})(MuiTextField);




const EleicoesMap = (props) => {
  const {
    countries,
    handlePartidoChange,
    selectedPartido,
    partidoItems,
    isLoading
  } = props;

  const mapStyle = {
    fillColor: "white",
    weight: 1,
    color: "black",
    fillOpacity: 1,
  };

  const onEachCountry = (country, layer) => {
    layer.options.fillColor = country.properties.color;
    // const name = country.properties.ADMIN;
    const name = country.properties.codarea;
    const confirmedText = country.properties.confirmedText;
    layer.bindPopup(`${name} ${confirmedText}`);
  };

  return (
      <>
        <div className="eleicoes" style={{"width":"100%","padding":"0 0 20px 0","display":"flex","flexWrap":"wrap"}}>
          <div className="eleicoes__book" style={{"width":"20%"}}>
            <FormControl variant="outlined" margin="normal">
              <InputLabel id="partido-label">Partido</InputLabel>
              <Select
                  labelId="partido-select-label"
                  id="partido-select-id"
                  value={selectedPartido}
                  onChange={(e, value) => { handlePartidoChange(value.props.value) }}
                  label="Partido"
              >
                {partidoItems}
              </Select>
            </FormControl>
          </div>
          <div className="eleicoes__chart" style={{"width":"80%"}}>
            {isLoading ? (
                <Loading />
            ) : (
            <Map style={{ height: "90vh" }} zoom={5} center={[-15, -60]}>
              <GeoJSON
                  style={mapStyle}
                  data={countries}
                  onEachFeature={onEachCountry}
              />
            </Map>
            )}
          </div>
        </div>
    </>
  );
};

EleicoesMap.propTypes = {
  countries: PropTypes.array,
  handlePartidoChange: PropTypes.func,
  partidoItems: PropTypes.array,
  selectedPartido: PropTypes.string
};

export default EleicoesMap;
