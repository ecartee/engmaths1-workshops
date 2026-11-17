var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "worksheet01wks",
  "level": "1",
  "url": "#worksheet01wks",
  "type": "Article",
  "number": "",
  "title": "Engineering Maths 1",
  "body": " Engineering Maths 1   University of Bristol — EMAT10100  Use the printer icon for a copy with working space. Give exact answers unless stated otherwise.    Workshop 1: Vectors and the dot product    Warm-up  Compare your answers with a neighbour.    A few Week 1 skills:   Complete the square in and find its minimum value.    Find the values of for which .       Warm-up (continued)  Discuss your reasoning with a neighbour.     Let , and be non-zero vectors ( , and in the lecture notes). Is each expression a scalar, a vector, or undefined? Tick one box for each.        Expression Scalar Vector Undefined                          Let and . Three proposed unit vectors from towards are   Which is correct? Justify your choice and explain what is wrong with each of the others.       Practice  Combine forces using vector addition.     Two forces act on a bracket: N, and has magnitude N in the direction .    Find the components of and the sum .    Find the magnitude of and the unit vector in its direction.    Find the angle between the forces, to the nearest degree.    Explain in your own words why .       Practice (continued)  Include units in your answers. The unit vectors , and are the bold , and of the lecture notes.     A force N moves a slider along a straight rail from to , with coordinates in metres.    Find the displacement and the distance the slider moves.    Find the scalar component and vector projection of along .    Find , where is your projection. Check that .    Calculate the work . Check it using part (b). Why does do no work?       Challenge: algebra meets geometry  Connect the sign of a dot product with the angle between two vectors.     For real , let and .    Find all values of for which and are perpendicular.    For which values of is the angle acute? For which is it obtuse?       Extension: closest approach  Use completing the square and the dot product together.     At noon, boats and have position vectors and relative to a harbour, in kilometres. They move with constant velocities and , in kilometres per hour.    Find the vector from to at time hours after noon.    By completing the square in , find when the boats are closest and how far apart they are then.    Show that, at that time, is perpendicular to the velocity of relative to . Explain in your own words why.      "
},
{
  "id": "w1-quadratic",
  "level": "2",
  "url": "#w1-quadratic",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": " A few Week 1 skills:   Complete the square in and find its minimum value.    Find the values of for which .   "
},
{
  "id": "w1-classify",
  "level": "2",
  "url": "#w1-classify",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "  Let , and be non-zero vectors ( , and in the lecture notes). Is each expression a scalar, a vector, or undefined? Tick one box for each.        Expression Scalar Vector Undefined                       "
},
{
  "id": "w1-displacement",
  "level": "2",
  "url": "#w1-displacement",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "  Let and . Three proposed unit vectors from towards are   Which is correct? Justify your choice and explain what is wrong with each of the others.   "
},
{
  "id": "w1-forces",
  "level": "2",
  "url": "#w1-forces",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "",
  "body": "  Two forces act on a bracket: N, and has magnitude N in the direction .    Find the components of and the sum .    Find the magnitude of and the unit vector in its direction.    Find the angle between the forces, to the nearest degree.    Explain in your own words why .   "
},
{
  "id": "w1-work",
  "level": "2",
  "url": "#w1-work",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "",
  "body": "  A force N moves a slider along a straight rail from to , with coordinates in metres.    Find the displacement and the distance the slider moves.    Find the scalar component and vector projection of along .    Find , where is your projection. Check that .    Calculate the work . Check it using part (b). Why does do no work?   "
},
{
  "id": "w1-parameter",
  "level": "2",
  "url": "#w1-parameter",
  "type": "Worksheet Exercise",
  "number": "6",
  "title": "",
  "body": "  For real , let and .    Find all values of for which and are perpendicular.    For which values of is the angle acute? For which is it obtuse?   "
},
{
  "id": "w1-boats",
  "level": "2",
  "url": "#w1-boats",
  "type": "Worksheet Exercise",
  "number": "7",
  "title": "",
  "body": "  At noon, boats and have position vectors and relative to a harbour, in kilometres. They move with constant velocities and , in kilometres per hour.    Find the vector from to at time hours after noon.    By completing the square in , find when the boats are closest and how far apart they are then.    Show that, at that time, is perpendicular to the velocity of relative to . Explain in your own words why.   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
