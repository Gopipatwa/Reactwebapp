import React from "react";
import { render } from "react-dom";
import { makeData, Logo, Tips } from "./Utils";
import _ from "lodash";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

class Tabler extends React.Component {
  constructor() {
    super();
    this.state = {
      data: makeData()
    };
  }
  render() {
    const { data } = this.state;
    return (
      
        <div>
          <ReactTable
            data={data}
            filterable
            //defaultFilterMethod={(filter, row) =>
            //  String(row[filter.id]) === filter.value
            //}
            columns={[
              {
                Header: "Auswahl",
                columns: [
                  {
                    Header: "Datum",
                    accessor: "date",
                    id: "date",
                    filterMethod: (filter, row) =>
                      row[filter.id].startsWith(filter.value)
                  },
                  {
                    Header: "Produktion",
                    id: "production",
                    accessor: "production",
                    filterMethod: (filter, row) =>
                      row[filter.id].startsWith(filter.value)
                  },
                  {
                    Header: "Produktionsort ID",
                    accessor: "ort_id",
                    id: "ort_id",
                    filterMethod: (filter, row) => {
                      if (filter.value === "alle") {
                        return true;
                      }
                      if (filter.value === "610") {
                        return row[filter.id] === "610";
                      }
                      if (filter.value === "620") {
                        return row[filter.id] === "620";
                      }
                      if (filter.value === "630") {
                        return row[filter.id] === "630";
                      }
                      if (filter.value === "640") {
                        return row[filter.id] === "640";
                      }
                    },
                    Filter: ({ filter, onChange }) => (
                      <select
                        onChange={event => onChange(event.target.value)}
                        style={{ width: "100%" }}
                        value={filter ? filter.value : "alle"}
                      >
                        <option value="alle">Alle Produktionsorte</option>
                        <option value="610">610</option>
                        <option value="620">620</option>
                        <option value="630">630</option>
                        <option value="640">640</option>
                      </select>
                    )
                  },
                  {
                    Header: "Produktionsart",
                    accessor: "art",
                    id: "art",
                    filterMethod: (filter, row) => {
                      if (filter.value === "all") {
                        return true;
                      }
                      if (filter.value === "art1") {
                        return row[filter.id] === "Tagessuppe";
                      }
                      if (filter.value === "art2") {
                        return row[filter.id] === "Salatbuffet";
                      }
                      if (filter.value === "art3") {
                        return row[filter.id] === "Grillstation";
                      }
                      if (filter.value === "art4") {
                        return row[filter.id] === "Hauptkomponente";
                      }
                      if (filter.value === "art5") {
                        return row[filter.id] === "Gut und Günstig";
                      }
                      if (filter.value === "art6") {
                        return row[filter.id] === "Sättigungsbeilage";
                      }
                      //return row[filter.id] < 21;
                    },
                    Filter: ({ filter, onChange }) => (
                      <select
                        onChange={event => onChange(event.target.value)}
                        style={{ width: "100%" }}
                        value={filter ? filter.value : "all"}
                      >
                        <option value="all">Alle Produktionsarten</option>
                        <option value="art1">Tagessuppe</option>
                        <option value="art2">Salatbuffet</option>
                        <option value="art3">Grillstation</option>
                        <option value="art4">Hauptkomponente</option>
                        <option value="art5">Gut und Günstig</option>
                        <option value="art6">Sättigungsbeilage</option>
                      </select>
                    )
                  },
                  {
                    Header: "Verbrauchsort",
                    accessor: "verbrauchsort",
                    id: "verbrauchsort",
                    filterMethod: (filter, row) => {
                      if (filter.value === "all") {
                        return true;
                      }
                      if (filter.value === "loc1") {
                        return row[filter.id] === "Mensa 1";
                      }
                      if (filter.value === "loc2") {
                        return row[filter.id] === "Mensa 2";
                      }
                      if (filter.value === "loc3") {
                        return row[filter.id] === "Ausgabestelle 42";
                      }
                      if (filter.value === "loc4") {
                        return row[filter.id] === "Cafeteria XY";
                      }
                    },
                    Filter: ({ filter, onChange }) => (
                      <select
                        onChange={event => onChange(event.target.value)}
                        style={{ width: "100%" }}
                        value={filter ? filter.value : "all"}
                      >
                        <option value="all">Alle Verbrauchsorte</option>
                        <option value="loc1">Mensa 1</option>
                        <option value="loc2">Mensa 2</option>
                        <option value="loc3">Ausgabestelle 42</option>
                        <option value="loc4">Cafeteria XY</option>
                      </select>
                    )
                  },
                  {
                    Header: "Sollmenge",
                    accessor: "sollmenge",
                    Cell: ({ value }) => (
                      <span style={{ fontWeight: "bold", float: "right" }}>
                        {value}{" "}
                      </span>
                    )
                  }
                ]
              },
              {
                Header: "Prognose",
                columns: [
                  {
                    Header: "Abweichung",
                    accessor: "abweichung",
                    //Cell: ({ value }) => value
                    Cell: ({ value }) => (
                      <span
                        style={{
                          fontWeight: "bold",
                          float: "right",
                          color:
                            value >= 50
                              ? "purple"
                              : value >= 20
                                ? "blue"
                                : value >= -20
                                  ? "green"
                                  : value >= -20 ? "orange" : "red"
                        }}
                      >
                        {value}
                      </span>
                    )
                  },
                  {
                    Header: "Prognose",
                    accessor: "prognosemenge",
                    id: "prognose_id",
                    Cell: ({ value }) => (
                      <span style={{ fontWeight: "bold", float: "right" }}>
                        {value}{" "}
                      </span>
                    )
                    //Cell: ({ value }) => <span class='tm'></span>,
                  },
                  {
                    Header: "Sicherheit",
                    accessor: "sicherheit",
                    id: "sicherheit",
                    Cell: row => (
                      <span>
                        <span
                          style={{
                            color:
                              row.value === "unsicher"
                                ? "#ff2e00"
                                : row.value === "sicher"
                                  ? "#ffbf00"
                                  : "#57d500",
                            transition: "all .3s ease"
                          }}
                        >
                          &#x25cf;
                        </span>{" "}
                        {row.value === "unsicher"
                          ? "unsicher"
                          : row.value === "sicher" ? `sicher` : "sehr sicher"}
                      </span>
                    ),
                    filterMethod: (filter, row) => {
                      if (filter.value === "all") {
                        return true;
                      }
                      if (filter.value === "unsicher") {
                        return row[filter.id] === "unsicher";
                      }
                      if (filter.value === "sicher") {
                        return row[filter.id] === "sicher";
                      }
                      if (filter.value === "sehr sicher") {
                        return row[filter.id] === "sehr sicher";
                      }
                    },
                    Filter: ({ filter, onChange }) => (
                      <select
                        onChange={event => onChange(event.target.value)}
                        style={{ width: "100%" }}
                        value={filter ? filter.value : "all"}
                      >
                        <option value="all">Alle</option>
                        <option value="unsicher">unsicher</option>
                        <option value="sicher">sicher</option>
                        <option value="sehr sicher">sehr sicher</option>
                      </select>
                    )
                  }
                ]
              }
            ]}
            defaultPageSize={25}
            className="-striped -highlight"
            width="20px"
            SubComponent={row => {
              return (
                <div style={{ padding: "20px" }}>
                  <em>
                    <center>
                      <img height={280} src="https://i.imgur.com/98CZFww.png" />
                    </center>
                  </em>
                  
                </div>
              );
            }}
          />
          <br />
        </div>
    );
  }
}

export default Tabler