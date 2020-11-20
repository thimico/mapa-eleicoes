import LegendItem from "./LengendItem";

var legendItems = [
  new LegendItem(
    "80,01% +",
    // "rgb(0, 109, 44)",
    "rgb(4, 90, 141)",
    // "#8b0000",
    (cases) => cases >= 1_000_000,
    "white"
  ),

  new LegendItem(
    "60,01% - 80%",
    // "#741f1f",
    // "rgb(44, 162, 95)",
    "rgb(43, 140, 190)",
    (cases) => cases >= 500_000 && cases < 1_000_000,
    "White"
  ),

  new LegendItem(
    "40,01% - 60%",
    // "rgb(102, 194, 164)",
    "rgb(116, 169, 207)",
    (cases) => cases >= 200_000 && cases < 500_000
  ),

  new LegendItem(
    "20,01% - 40%",
    // "rgb(178, 226, 226)",
    "rgb(189, 201, 225)",
    (cases) => cases >= 50_000 && cases < 200_000
  ),

  new LegendItem(
    "0 - 20%",
    // "rgb(237, 248, 251)",
    "rgb(241, 238, 246)",
    (cases) => cases > 0 && cases < 50_000
  ),

  new LegendItem("No Data", "#ffffff", (cases) => true),
];

export default legendItems;

/**
 * 7 > 1 million                        #8b0000
 * 6 >= 500 thousand < 1 million        #9e2a2a
 * 5 >= 200 thousand < 500 thousand     #b15555
 * 4 >= 100 thousand  < 200 Thousand    #c57f7f
 * 3 > 50 thousand < 100 thousand       #d8aaaa
 * 2 >= 0 < 50 thousand                 #ebd4d4
 * 1 NO DATA                            #ffffff
 */

/*

#741f1f // Really red
#9c2929 // more red
#c57f7f // red
#d8aaaa //more pink
#ebd4d4 //pink
#ffffff //white
*/
