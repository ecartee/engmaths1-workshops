var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "worksheet04wks",
  "level": "1",
  "url": "#worksheet04wks",
  "type": "Article",
  "number": "",
  "title": "Engineering Maths 1",
  "body": " Engineering Maths 1   University of Bristol — EMAT10100  Use the printer icon for a copy with working space. Give exact answers unless stated otherwise.    Workshop 4: Linear systems, rank and inverses    Warm-up  Please work in collaboration with your classmates to complete the following exercises. This means sharing ideas and asking each other questions.      Let where is a constant. Find in terms of . For which values of is invertible?      Each row of the table gives the numbers of equations and unknowns in a linear system. Each column describes its solutions: none, exactly one, a line or a plane.         None One Line Plane   2 equations, 2 unknowns  2 equations, 3 unknowns  3 equations, 2 unknowns  3 equations, 3 unknowns     Share out the rows between you and your neighbours. Put a tick in each cell where such a system can exist, and a cross where it cannot. Then compare your answers.    Explain in your own words why a system of 2 equations in 3 unknowns can never have exactly one solution.       Practice: Building Linear Systems     Write down an example of each of these linear systems.    2 equations in 2 unknowns, with no solution.    2 equations in 3 unknowns, with a plane of solutions.    3 equations in 2 unknowns, with exactly one solution.    3 equations in 3 unknowns, with a line of solutions.       Practice: Inverses by Row Operations     Let be the matrix from Exercise 1.    Take . Find by row reducing . If you have time, check that .    Now take . What goes wrong when you row reduce ? Explain how this fits with your answer to Exercise 1.       Practice: Balancing Chemical Equations     Making nitric acid starts with this reaction between ammonia and oxygen: Balancing it means finding positive whole numbers , , and that give the same number of atoms of each element on both sides.    Write down one equation for each of nitrogen, hydrogen and oxygen.    Row reduce the augmented matrix. Find the rank of the coefficient matrix and the number of free parameters.    Find the balanced equation with the smallest possible whole numbers. Explain in your own words what the other solutions mean chemically.       Challenge: Traffic Flow     Suppose that the figure shows the number of cars per hour entering and leaving a network of one-way roads, with , …, cars per hour on the roads between its junctions. Every car that enters a junction must leave it.   A road network with four junctions, drawn as circles at the corners of a rectangle: A at the top left, B at the top right, C at the bottom left and D at the bottom right. 500 cars per hour enter at A and 250 enter at C, both from the left. 550 cars per hour leave at B and 200 leave at D, both to the right. The one-way roads, shown with arrows, are x 1 from A to B along the top, x 2 from C up to A on the left, x 3 diagonally from C up to B, x 4 from B down to D on the right, and x 5 from C to D along the bottom.      Explain why , …, satisfy the linear system     Row reduce the augmented matrix of this system and write down its general solution. How many free parameters are there? Why is there a row of zeros?       Challenge: Roadworks     Suppose that roadworks close some of the roads in Exercise 6, so that no cars use them. Remember that the roads are one-way.    Which single roads could be closed, and which could not?    Which pairs of roads could be closed together? What happens to the other flows?      "
},
{
  "id": "w4-warmup",
  "level": "2",
  "url": "#w4-warmup",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  Let where is a constant. Find in terms of . For which values of is invertible?   "
},
{
  "id": "w4-table",
  "level": "2",
  "url": "#w4-table",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "  Each row of the table gives the numbers of equations and unknowns in a linear system. Each column describes its solutions: none, exactly one, a line or a plane.         None One Line Plane   2 equations, 2 unknowns  2 equations, 3 unknowns  3 equations, 2 unknowns  3 equations, 3 unknowns     Share out the rows between you and your neighbours. Put a tick in each cell where such a system can exist, and a cross where it cannot. Then compare your answers.    Explain in your own words why a system of 2 equations in 3 unknowns can never have exactly one solution.   "
},
{
  "id": "w4-build",
  "level": "2",
  "url": "#w4-build",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "  Write down an example of each of these linear systems.    2 equations in 2 unknowns, with no solution.    2 equations in 3 unknowns, with a plane of solutions.    3 equations in 2 unknowns, with exactly one solution.    3 equations in 3 unknowns, with a line of solutions.   "
},
{
  "id": "w4-inverse",
  "level": "2",
  "url": "#w4-inverse",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "",
  "body": "  Let be the matrix from Exercise 1.    Take . Find by row reducing . If you have time, check that .    Now take . What goes wrong when you row reduce ? Explain how this fits with your answer to Exercise 1.   "
},
{
  "id": "w4-ammonia",
  "level": "2",
  "url": "#w4-ammonia",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "",
  "body": "  Making nitric acid starts with this reaction between ammonia and oxygen: Balancing it means finding positive whole numbers , , and that give the same number of atoms of each element on both sides.    Write down one equation for each of nitrogen, hydrogen and oxygen.    Row reduce the augmented matrix. Find the rank of the coefficient matrix and the number of free parameters.    Find the balanced equation with the smallest possible whole numbers. Explain in your own words what the other solutions mean chemically.   "
},
{
  "id": "w4-traffic",
  "level": "2",
  "url": "#w4-traffic",
  "type": "Worksheet Exercise",
  "number": "6",
  "title": "",
  "body": "  Suppose that the figure shows the number of cars per hour entering and leaving a network of one-way roads, with , …, cars per hour on the roads between its junctions. Every car that enters a junction must leave it.   A road network with four junctions, drawn as circles at the corners of a rectangle: A at the top left, B at the top right, C at the bottom left and D at the bottom right. 500 cars per hour enter at A and 250 enter at C, both from the left. 550 cars per hour leave at B and 200 leave at D, both to the right. The one-way roads, shown with arrows, are x 1 from A to B along the top, x 2 from C up to A on the left, x 3 diagonally from C up to B, x 4 from B down to D on the right, and x 5 from C to D along the bottom.      Explain why , …, satisfy the linear system     Row reduce the augmented matrix of this system and write down its general solution. How many free parameters are there? Why is there a row of zeros?   "
},
{
  "id": "w4-roadworks",
  "level": "2",
  "url": "#w4-roadworks",
  "type": "Worksheet Exercise",
  "number": "7",
  "title": "",
  "body": "  Suppose that roadworks close some of the roads in Exercise 6, so that no cars use them. Remember that the roads are one-way.    Which single roads could be closed, and which could not?    Which pairs of roads could be closed together? What happens to the other flows?   "
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
