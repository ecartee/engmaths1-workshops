var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "worksheet07wks",
  "level": "1",
  "url": "#worksheet07wks",
  "type": "Article",
  "number": "",
  "title": "Engineering Maths 1",
  "body": " Engineering Maths 1   University of Bristol — EMAT10100  Use the printer icon for a copy with working space. Give exact answers unless stated otherwise.    Workshop 7: Polar form, roots and hyperbolic functions    Warm-up  Please work in collaboration with your classmates to complete the following exercises. This means sharing ideas and asking each other questions.      The Argand diagram shows two complex numbers, and . Write each of them in exponential form , with .   An Argand diagram on a square grid. The real axis, labelled Re, and the imaginary axis, labelled Im, are each marked from minus 3 to 3. The point P is on the imaginary axis at minus 2. The point Q is 2 units to the left of the imaginary axis and 2 units below the real axis.              Find the roots of and write them in exponential form.       Analyse: Products and Powers      Let and .    Find in exponential form, with .     Plot and on this Argand diagram.   Blank Argand diagram: a horizontal real axis labelled Re and a vertical imaginary axis labelled Im crossing at the centre, with no scale marked.      Explain in your own words how multiplying by moves a point on the Argand diagram.    Find in the form .       Evaluate: Arguments and Logarithms      Let .    Find all the values of and circle the principal value.     A student works out and , and says that is the principal argument of .  Explain in your own words what the student has got wrong.        Analyse: Roots of Complex Numbers      The number has three cube roots.    Find all three roots in exponential form.     Plot the three roots on this Argand diagram.   Blank Argand diagram: a horizontal real axis labelled Re and a vertical imaginary axis labelled Im crossing at the centre, with no scale marked.      Going anticlockwise round your diagram, each root is the previous root multiplied by the same number. What is that number?       Create: Hyperbolic Functions      Using and , write each as a fraction.             Work with a neighbour on this exercise. If you are working alone, find a way to get your number back from your two fractions.    Choose a whole number bigger than 3 and keep it to yourself. Write and as fractions.    Swap fractions with a neighbour and work out their number . Then swap back and check each other's answers.       Challenge: Mains Electricity      Suppose that mains electricity reaches a factory along three cables, and that the voltages on the cables at time seconds are for some constant . Each voltage is a third of a cycle ahead of the one before.    Let , which is one of the roots from Exercise 2. Show that .    Each voltage is the real part of a complex number. Use part (a) to show that at every time .    When the three cables feed equal loads, the three currents cancel in the same way. This is why the cables on a pylon come in threes, with no return cable.      "
},
{
  "id": "w7-forms-twocol",
  "level": "2",
  "url": "#w7-forms-twocol",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  The Argand diagram shows two complex numbers, and . Write each of them in exponential form , with .   An Argand diagram on a square grid. The real axis, labelled Re, and the imaginary axis, labelled Im, are each marked from minus 3 to 3. The point P is on the imaginary axis at minus 2. The point Q is 2 units to the left of the imaginary axis and 2 units below the real axis.          "
},
{
  "id": "w7-review",
  "level": "2",
  "url": "#w7-review",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "  Find the roots of and write them in exponential form.   "
},
{
  "id": "w7-polar",
  "level": "2",
  "url": "#w7-polar",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "  Let and .    Find in exponential form, with .     Plot and on this Argand diagram.   Blank Argand diagram: a horizontal real axis labelled Re and a vertical imaginary axis labelled Im crossing at the centre, with no scale marked.      Explain in your own words how multiplying by moves a point on the Argand diagram.    Find in the form .   "
},
{
  "id": "w7-logs",
  "level": "2",
  "url": "#w7-logs",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "",
  "body": "  Let .    Find all the values of and circle the principal value.     A student works out and , and says that is the principal argument of .  Explain in your own words what the student has got wrong.    "
},
{
  "id": "w7-roots",
  "level": "2",
  "url": "#w7-roots",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "",
  "body": "  The number has three cube roots.    Find all three roots in exponential form.     Plot the three roots on this Argand diagram.   Blank Argand diagram: a horizontal real axis labelled Re and a vertical imaginary axis labelled Im crossing at the centre, with no scale marked.      Going anticlockwise round your diagram, each root is the previous root multiplied by the same number. What is that number?   "
},
{
  "id": "w7-hyperbolic-twocol",
  "level": "2",
  "url": "#w7-hyperbolic-twocol",
  "type": "Worksheet Exercise",
  "number": "6",
  "title": "",
  "body": "  Using and , write each as a fraction.         "
},
{
  "id": "w7-create",
  "level": "2",
  "url": "#w7-create",
  "type": "Worksheet Exercise",
  "number": "7",
  "title": "",
  "body": "  Work with a neighbour on this exercise. If you are working alone, find a way to get your number back from your two fractions.    Choose a whole number bigger than 3 and keep it to yourself. Write and as fractions.    Swap fractions with a neighbour and work out their number . Then swap back and check each other's answers.   "
},
{
  "id": "w7-challenge",
  "level": "2",
  "url": "#w7-challenge",
  "type": "Worksheet Exercise",
  "number": "8",
  "title": "",
  "body": "  Suppose that mains electricity reaches a factory along three cables, and that the voltages on the cables at time seconds are for some constant . Each voltage is a third of a cycle ahead of the one before.    Let , which is one of the roots from Exercise 2. Show that .    Each voltage is the real part of a complex number. Use part (a) to show that at every time .    When the three cables feed equal loads, the three currents cancel in the same way. This is why the cables on a pylon come in threes, with no return cable.   "
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
