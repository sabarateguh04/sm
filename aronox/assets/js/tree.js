
var treeData = [
{
    "name": "Top Level",
    "children": [{
        "name": "Second A",
        "children": [{
            "name": "Third A"
        }, {
            "name": "Third B"
        }]
    }, {
        "name": "Second B",
        "children": [{
            "name": "Third C"
        }, {
            "name": "Third D"
        }]
    }, {
        "name": "Second C",
        "children": [{
            "name": "Third E"
        }, {
            "name": "Third F"
        }]
    }, {
        "name": "Second D",
        "children": [{
            "name": "Third G"
        }, {
            "name": "Third H"
        },]
    },]
}
];


// ************** Generate the tree diagram	 *****************
var margin = {top: 20, right: 120, bottom: 20, left: 120},
	width = 960 - margin.right - margin.left,
	height = 500 - margin.top - margin.bottom;
	
var i = 0,
	duration = 750,
	root;

var tree = d3.layout.tree()
	.size([height, width]);

var diagonal = d3.svg.diagonal()
	.projection(function(d) { return [d.y, d.x]; });

var svg = d3.select("body").append("svg")
	.attr("width", width + margin.right + margin.left)
	.attr("height", height + margin.top + margin.bottom)
  .append("g")
	.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

root = treeData[0];
root.x0 = height / 2;
root.y0 = 0;
  
update(root);

d3.select(self.frameElement).style("height", "500px");


// Collapse after the second level
root.children.forEach(collapse);

update(root);

// Collapse the node and all it's children
function collapse(d) {
  if(d.children) {
    d._children = d.children
    d._children.forEach(collapse)
    d.children = null
  }
}

function update(source) {



  // Compute the new tree layout.
  var nodes = tree.nodes(root).reverse(),
	  links = tree.links(nodes);

  // Normalize for fixed-depth.
  nodes.forEach(function(d) { d.y = d.depth * 180; });

  // Update the nodes…
  var node = svg.selectAll("g.node")
	  .data(nodes, function(d) { return d.id || (d.id = ++i); });

  // Enter any new nodes at the parent's previous position.
  var nodeEnter = node.enter().append("g")
	  .attr("class", "node")
	  .attr("transform", function(d) { return "translate(" + source.y0 + "," + source.x0 + ")"; })
	  .on("click", click);

  nodeEnter.append("circle")
	  .attr("r", 1e-6)
	  .style("fill", function(d) { 
    return d._children ? "#C0C0C0" : "#fff"; 
    });

  nodeEnter.append("text")
	  .attr("x", function(d) { return d.children || d._children ? -13 : 13; })
	  .attr("dy", ".35em")
	  .attr("text-anchor", function(d) { return d.children || d._children ? "end" : "start"; })
	  .text(function(d) { return d.name; })
	  .style("fill-opacity", 1e-6);

  // Transition nodes to their new position.
  var nodeUpdate = node.transition()
	  .duration(duration)
	  .attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; });

  nodeUpdate.select("circle")
	  .attr("r", 10)
	   .style("fill", function(d) { 
     if(d.name == "Top Level") {
      return d._children ? "blue" : "#fff"; 
      }
    if(d.name == "Second A") {
   	 return d._children ? "red" : "#fff"; 
    }
      if(d.name == "Second B") {
      return d._children ? "green" : "#fff"; 
      }
    if(d.name == "Second C") {
      return d._children ? "purple" : "#fff"; 
      }
      if(d.name == "Second D") {
      return d._children ? "gold" : "#fff"; 
      }
    })
     .style("stroke", function(d) { 
     if(d.name == "Top Level") {
      return "blue"; 
      }
    if(d.name == "Second A") {
   	 return "red"; 
    }
      if(d.name == "Second B") {
      return "green"; 
      }
    if(d.name == "Second C") {
      return "purple"; 
      }
      if(d.name == "Second D") {
      return "gold"; 
      }
    });

  nodeUpdate.select("text")
	  .style("fill-opacity", 1);

  // Transition exiting nodes to the parent's new position.
  var nodeExit = node.exit().transition()
	  .duration(duration)
	  .attr("transform", function(d) { return "translate(" + source.y + "," + source.x + ")"; })
	  .remove();

  nodeExit.select("circle")
	  .attr("r", 1e-6);

  nodeExit.select("text")
	  .style("fill-opacity", 1e-6);

  // Update the links…
  var link = svg.selectAll("path.link")
	  .data(links, function(d) { return d.target.id; });

  // Enter any new links at the parent's previous position.
link.enter().insert("path", "g")
      .attr("class", "link")
      .attr("stroke-width", function(d){
      	return 1;
      })
      .attr("d", function(d) {
        var o = {x: source.x0, y: source.y0};
        return diagonal({source: o, target: o});
      })
    .style("stroke", function(d) {
      return linkColor(d.target.name);
    });

  // Transition links to their new position.
  link.transition()
	  .duration(duration)
	  .attr("d", diagonal);

  // Transition exiting nodes to the parent's new position.
  link.exit().transition()
	  .duration(duration)
	  .attr("d", function(d) {
		var o = {x: source.x, y: source.y};
		return diagonal({source: o, target: o});
	  })
	  .remove();

  // Stash the old positions for transition.
  nodes.forEach(function(d) {
	d.x0 = d.x;
	d.y0 = d.y;
  });
}


// Toggle children on click.
function click(d) {
  if (d.children) {
	d._children = d.children;
	d.children = null;
  } else {
	d.children = d._children;
	d._children = null;
  }
  update(d);
}

function linkColor(node_name) {
	switch (node_name)
	{
	  case 'Second A': case 'Third A':  case 'Third B': 
	  	return 'red';
	    break;
	  case 'Second B': case 'Third C':  case 'Third D': 
	  	return 'green';
	  	break;
	  case 'Second C': case 'Third E':  case 'Third F': 
		return 'purple';
		break;
	  case 'Second D': case 'Third G':  case 'Third H': 
		return 'gold';
	}
}