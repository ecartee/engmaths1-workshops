var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "worksheet08wks",
  "level": "1",
  "url": "#worksheet08wks",
  "type": "Article",
  "number": "",
  "title": "Engineering Maths 1",
  "body": " Engineering Maths 1   University of Bristol — EMAT10100  Use the printer icon for a copy with working space. Give exact answers unless stated otherwise.    Workshop 8: Complex trigonometry and eigenvalues    Warm-up  Please work in collaboration with your classmates to complete the following exercises. This means sharing ideas and asking each other questions.      Let . For each vector below, decide whether it is an eigenvector of , and if so, give its eigenvalue.                   A student adds to the list in Exercise 1, because . Explain in your own words why the zero vector is never counted as an eigenvector.       Practice: Powers of Sine and Cosine      Write as a constant plus multiples of , in two different ways.    Use and .    Use .       Evaluate: Cosine of a Complex Number      A student says that for every complex number , because the graph of cosine stays between and .    Evaluate exactly.    Do you agree with the student? Explain your answer.       Create: Your Own Eigenvalues      Work with a neighbour on this exercise. If you are working alone, find the eigenvalues and eigenvectors of your own matrix in part (c).    Let . Show that the characteristic equation can be written as for any numbers , , and .    Choose two different whole numbers and keep them to yourself. Use part (a) to write down a matrix with no zero entries whose eigenvalues are your two numbers.    Swap matrices with a neighbour. Find the eigenvalues of their matrix, and an eigenvector for each eigenvalue. Then swap back and check each other's eigenvectors.       Practice: Powers of a Matrix      Let     Show that is an eigenvector of , and find its eigenvalue.    Use part (a) to find .    Find . Explain your reasoning.       Challenge: The Largest Eigenvalue Wins      The matrix from Exercise 1 has eigenvectors with eigenvalue and with eigenvalue . Let .    Write as a sum of multiples of the two eigenvectors.    Find a formula for , and check it when .    Explain in your own words why points almost along when is large.    Google's original PageRank ranked web pages with this idea. Multiplying by one huge matrix again and again picks out the eigenvector with the largest eigenvalue.      "
},
{
  "id": "w8-eigencheck-twocol",
  "level": "2",
  "url": "#w8-eigencheck-twocol",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  Let . For each vector below, decide whether it is an eigenvector of , and if so, give its eigenvalue.               "
},
{
  "id": "w8-zero",
  "level": "2",
  "url": "#w8-zero",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "  A student adds to the list in Exercise 1, because . Explain in your own words why the zero vector is never counted as an eigenvector.   "
},
{
  "id": "w8-powers",
  "level": "2",
  "url": "#w8-powers",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "  Write as a constant plus multiples of , in two different ways.    Use and .    Use .   "
},
{
  "id": "w8-complex-cos",
  "level": "2",
  "url": "#w8-complex-cos",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "",
  "body": "  A student says that for every complex number , because the graph of cosine stays between and .    Evaluate exactly.    Do you agree with the student? Explain your answer.   "
},
{
  "id": "w8-create",
  "level": "2",
  "url": "#w8-create",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "",
  "body": "  Work with a neighbour on this exercise. If you are working alone, find the eigenvalues and eigenvectors of your own matrix in part (c).    Let . Show that the characteristic equation can be written as for any numbers , , and .    Choose two different whole numbers and keep them to yourself. Use part (a) to write down a matrix with no zero entries whose eigenvalues are your two numbers.    Swap matrices with a neighbour. Find the eigenvalues of their matrix, and an eigenvector for each eigenvalue. Then swap back and check each other's eigenvectors.   "
},
{
  "id": "w8-matrix-powers",
  "level": "2",
  "url": "#w8-matrix-powers",
  "type": "Worksheet Exercise",
  "number": "6",
  "title": "",
  "body": "  Let     Show that is an eigenvector of , and find its eigenvalue.    Use part (a) to find .    Find . Explain your reasoning.   "
},
{
  "id": "w8-challenge",
  "level": "2",
  "url": "#w8-challenge",
  "type": "Worksheet Exercise",
  "number": "7",
  "title": "",
  "body": "  The matrix from Exercise 1 has eigenvectors with eigenvalue and with eigenvalue . Let .    Write as a sum of multiples of the two eigenvectors.    Find a formula for , and check it when .    Explain in your own words why points almost along when is large.    Google's original PageRank ranked web pages with this idea. Multiplying by one huge matrix again and again picks out the eigenvector with the largest eigenvalue.   "
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
