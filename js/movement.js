function in_move_range(move_index, d, val) {
    move_index = move_index.replace("<= 0.8", "0")
    move_index = move_index.replace("3 >=", "3.2")
    index = parseFloat(move_index)
    var move = move_dict.get(d)
    if (!move) {
        return 0.95;
    }
    move = move[val-1]
    if ((index == 3.0) && (move >= 3.8)) {
      return true
    }
    return ((move > index) && (move < index + 0.8))
  
  }
  
function change_move() {
    var save_fips = selected_fips;
    unhighlight();
  
    var val = document.getElementById("myRange").value;
    //document.getElementById("week").innerHTML = weeks[val-1];
    var t = d3.transition()
        .duration(750);
  
    svg.selectAll("path")
      .transition(t)
        .attr("fill", function(d) {

          if (move_dict.get(d.id)) {
            if (!move_dict.get(d.id)[val-1])
              console.log(names_and_county_dict[d.id]);
            return quantize(move_dict.get(d.id)[val-1])
          }
        });

    save_fips = selected_fips;
    if (selected_fips != null)
      highlight_single(selected_fips);
    else if (selected_state != null)
      makeDonut(toTitleCase(selected_state), 320, 320);
  }
  
  function highlight_single(county) {
    console.log(county);
    var val = document.getElementById("myRange").value;
    console.log("map");
    svg.selectAll(".counties path")
      .transition()
      .duration(500)
      .style("opacity", function(d) {
        return (county == d.id) ? 1.2 : 0.3
      })
      .style("stroke", function(d) {
        return county == d.id ? "black" : "transparent"
      });
    console.log("done");
}
  
  
function highlight_move(move_index) {
    var val = document.getElementById("myRange").value;
    svg.selectAll(".counties path")
      .style("opacity", function(d) {
        return in_move_range(move_index, d.id, val) ? 1.2 : 0.3
      })
      .style("stroke", function(d) {
        return in_move_range(move_index, d.id, val) ? "white" : "transparent"
      });
}
  
function unhighlight() {
    selected_fips = null;
    console.log("testing");
    var val = document.getElementById("myRange").value;
    svg.selectAll(".counties path")
      .transition()
      .duration(500)
      .style("opacity", 0.95)
      .style("stroke", "transparent")
}

function in_move_range(move_index, d, val) {
    move_index = move_index.replace("<= 0.8", "0")
    move_index = move_index.replace("3 >=", "3.2")
    index = parseFloat(move_index)
    var move = move_dict.get(d)
    if (!move) {
        return 0.95;
    }
    move = move[val-1]
    if ((index == 3.0) && (move >= 3.8)) {
      return true
    }
    return ((move > index) && (move < index + 0.8))
  
  }
  
  function change_move() {
    var save_fips = selected_fips;
    unhighlight();
  
    var val = document.getElementById("myRange").value;
    //document.getElementById("week").innerHTML = weeks[val-1];
    var t = d3.transition()
        .duration(750);
  
    svg.selectAll("path")
      .transition(t)
        .attr("fill", function(d) {

          if (move_dict.get(d.id)) {
            if (!move_dict.get(d.id)[val-1])
              console.log(names_and_county_dict[d.id]);
            return quantize(move_dict.get(d.id)[val-1])
          }
        });
    save_fips = selected_fips;
    if (selected_fips != null)
      highlight_single(selected_fips);
    else if (selected_state != null)
      makeDonut(toTitleCase(selected_state), 320, 320);
  }
  