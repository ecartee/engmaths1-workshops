var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "worksheet03wks",
  "level": "1",
  "url": "#worksheet03wks",
  "type": "Article",
  "number": "",
  "title": "Engineering Maths 1",
  "body": " Engineering Maths 1   University of Bristol — EMAT10100  Use the printer icon for a copy with working space. Give exact answers unless stated otherwise.    Workshop 3: Determinants, inverses and linear systems    Warm-up  Please work in collaboration with your classmates to complete the following exercises. This means sharing ideas and asking each other questions.      Let    Find .    Find .      Suppose that and are matrices. Decide whether each statement is true or false.       Statement True False       If the columns of are linearly dependent, then .  If , then has a row of zeros or two equal rows.        Practice: Triple Products     Let and .    Show that and are perpendicular and have the same length.    Find a vector such that the parallelepiped with edges , and is a cube. Is there more than one choice?    What volume should this cube have? Check your answer using a triple product.       Practice: Inverses     The matrix rotates vectors anticlockwise through an angle about the origin.    Show that for every . What does this tell you about areas?    Find . Explain geometrically why your answer is .    Notice that , so . Suppose that is a square matrix with . Use the properties of the determinant to show that .       Practice: Linear Systems     Let be the matrix from Exercise 1, and let .    Solve by row reducing the augmented matrix .    Solve again, this time as , using your answer to Exercise 1(b).    Now solve . Which method did you use, and why?    Explain in your own words why row reduction is the better choice for solving a system (or larger).       Practice: Gaussian Elimination     Suppose that a workshop makes frames, gates and panels, using a cutting machine, a welding machine and a paint booth. This week the cutting machine is available for 65 hours, the welding machine for 40 hours and the paint booth for 50 hours. The table shows how many hours each item needs on each machine.        Hours per item Frame Gate Panel   Cutting 1 2 1  Welding 2 1 0  Painting 0 1 2     The workshop wants to use all of these hours exactly. Write this problem as , where is the matrix from Exercise 1. Use your answer to Exercise 1(a) to explain why it has exactly one solution.    Use Gaussian elimination to find how many of each item the workshop should make.       Challenge: Locating a Phone     Suppose that a phone is 5 km from a mast at , 3 km from a mast at and 2 km from a mast at , with coordinates in kilometres. Let the phone be at .    For each mast, write down an equation that and must satisfy.    Subtract the first equation from each of the other two to get a linear system. Solve it to find the position of the phone.    Explain in your own words why this method fails if the three masts lie on a straight line.      "
},
{
  "id": "w3-warmup",
  "level": "2",
  "url": "#w3-warmup",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  Let    Find .    Find .   "
},
{
  "id": "w3-truefalse",
  "level": "2",
  "url": "#w3-truefalse",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "  Suppose that and are matrices. Decide whether each statement is true or false.       Statement True False       If the columns of are linearly dependent, then .  If , then has a row of zeros or two equal rows.    "
},
{
  "id": "w3-cube",
  "level": "2",
  "url": "#w3-cube",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "  Let and .    Show that and are perpendicular and have the same length.    Find a vector such that the parallelepiped with edges , and is a cube. Is there more than one choice?    What volume should this cube have? Check your answer using a triple product.   "
},
{
  "id": "w3-rotation",
  "level": "2",
  "url": "#w3-rotation",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "",
  "body": "  The matrix rotates vectors anticlockwise through an angle about the origin.    Show that for every . What does this tell you about areas?    Find . Explain geometrically why your answer is .    Notice that , so . Suppose that is a square matrix with . Use the properties of the determinant to show that .   "
},
{
  "id": "w3-compare",
  "level": "2",
  "url": "#w3-compare",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "",
  "body": "  Let be the matrix from Exercise 1, and let .    Solve by row reducing the augmented matrix .    Solve again, this time as , using your answer to Exercise 1(b).    Now solve . Which method did you use, and why?    Explain in your own words why row reduction is the better choice for solving a system (or larger).   "
},
{
  "id": "w3-machines",
  "level": "2",
  "url": "#w3-machines",
  "type": "Worksheet Exercise",
  "number": "6",
  "title": "",
  "body": "  Suppose that a workshop makes frames, gates and panels, using a cutting machine, a welding machine and a paint booth. This week the cutting machine is available for 65 hours, the welding machine for 40 hours and the paint booth for 50 hours. The table shows how many hours each item needs on each machine.        Hours per item Frame Gate Panel   Cutting 1 2 1  Welding 2 1 0  Painting 0 1 2     The workshop wants to use all of these hours exactly. Write this problem as , where is the matrix from Exercise 1. Use your answer to Exercise 1(a) to explain why it has exactly one solution.    Use Gaussian elimination to find how many of each item the workshop should make.   "
},
{
  "id": "w3-masts",
  "level": "2",
  "url": "#w3-masts",
  "type": "Worksheet Exercise",
  "number": "7",
  "title": "",
  "body": "  Suppose that a phone is 5 km from a mast at , 3 km from a mast at and 2 km from a mast at , with coordinates in kilometres. Let the phone be at .    For each mast, write down an equation that and must satisfy.    Subtract the first equation from each of the other two to get a linear system. Solve it to find the position of the phone.    Explain in your own words why this method fails if the three masts lie on a straight line.   "
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
