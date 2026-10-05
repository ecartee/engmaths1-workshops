var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "worksheet02wks",
  "level": "1",
  "url": "#worksheet02wks",
  "type": "Article",
  "number": "",
  "title": "Engineering Maths 1",
  "body": " Engineering Maths 1   University of Bristol — EMAT10100  Use the printer icon for a copy with working space. Give exact answers unless stated otherwise.    Workshop 2: Cross products, lines, planes and matrices    Warm-up  Please work in collaboration with your classmates to complete the following exercises. This means sharing ideas and asking each other questions.     Let and .    Compute .    Use the dot product to check that your answer is perpendicular to both and .      Suppose that is a matrix, is a matrix, is a matrix, and is a matrix.  Write down the size of each expression, or write not defined .      Expression Size, or not defined               Practice: Lines    The equation of a straight line can be written in either vector form or in Cartesian form. It can be useful to convert back and forth between these two forms.   Write the line in Cartesian form.    A second line has Cartesian equation Write down a point on this line and a vector along the line. Use this to write the equation of the line in vector form.       Practice: Planes     Find the equation of the plane that passes through the point and is parallel to both of the vectors        Practice: Matrix Arithmetic     Let Compute each of the following operations, or explain why it is not defined.                   Practice: Matrix Transformations     A linear transformation is given by , where is a matrix. Find , given that        Challenge: italics by matrix  Digital fonts store each letter as the coordinates of points on its outline. When a font has no italic version, software often makes a slanted one by applying a linear transformation to those coordinates.     Suppose a simple block font draws the word LIFT as shown on the left. Multiplying the coordinates of every point by a matrix gives the italic version on the right.   Two grids with unit squares, side by side, each 18 units wide and 6 high with axes labelled 0 to 18 and 0 to 6. The left grid, labelled upright, shows the word LIFT in upright block capitals, 6 units tall, with the L occupying the left column from x equals 0 to 3. The right grid, labelled italic, shows the same word slanted to the right: every horizontal edge is unchanged in height, the base of each letter is in its original place, and the top of each letter has moved 3 units to the right, so the top of the L now spans from x equals 3 to 4.     Write down the coordinates of the six corners of the upright L and of the italic L. Which points have not moved?    The columns of are the images of and . Use the corners from (a) to find these images, and hence .      "
},
{
  "id": "w2-cross",
  "level": "2",
  "url": "#w2-cross",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  Let and .    Compute .    Use the dot product to check that your answer is perpendicular to both and .   "
},
{
  "id": "w2-sizes",
  "level": "2",
  "url": "#w2-sizes",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "  Suppose that is a matrix, is a matrix, is a matrix, and is a matrix.  Write down the size of each expression, or write not defined .      Expression Size, or not defined           "
},
{
  "id": "w2-lines",
  "level": "2",
  "url": "#w2-lines",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": " The equation of a straight line can be written in either vector form or in Cartesian form. It can be useful to convert back and forth between these two forms.   Write the line in Cartesian form.    A second line has Cartesian equation Write down a point on this line and a vector along the line. Use this to write the equation of the line in vector form.   "
},
{
  "id": "w2-plane",
  "level": "2",
  "url": "#w2-plane",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "",
  "body": "  Find the equation of the plane that passes through the point and is parallel to both of the vectors    "
},
{
  "id": "w2-products",
  "level": "2",
  "url": "#w2-products",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "",
  "body": "  Let Compute each of the following operations, or explain why it is not defined.               "
},
{
  "id": "w2-transform",
  "level": "2",
  "url": "#w2-transform",
  "type": "Worksheet Exercise",
  "number": "6",
  "title": "",
  "body": "  A linear transformation is given by , where is a matrix. Find , given that    "
},
{
  "id": "w2-italic",
  "level": "2",
  "url": "#w2-italic",
  "type": "Worksheet Exercise",
  "number": "7",
  "title": "",
  "body": "  Suppose a simple block font draws the word LIFT as shown on the left. Multiplying the coordinates of every point by a matrix gives the italic version on the right.   Two grids with unit squares, side by side, each 18 units wide and 6 high with axes labelled 0 to 18 and 0 to 6. The left grid, labelled upright, shows the word LIFT in upright block capitals, 6 units tall, with the L occupying the left column from x equals 0 to 3. The right grid, labelled italic, shows the same word slanted to the right: every horizontal edge is unchanged in height, the base of each letter is in its original place, and the top of each letter has moved 3 units to the right, so the top of the L now spans from x equals 3 to 4.     Write down the coordinates of the six corners of the upright L and of the italic L. Which points have not moved?    The columns of are the images of and . Use the corners from (a) to find these images, and hence .   "
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
