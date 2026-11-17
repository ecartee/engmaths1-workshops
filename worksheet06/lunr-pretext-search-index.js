var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "worksheet06wks",
  "level": "1",
  "url": "#worksheet06wks",
  "type": "Article",
  "number": "",
  "title": "Engineering Maths 1",
  "body": " Engineering Maths 1   University of Bristol — EMAT10100  Use the printer icon for a copy with working space. Give exact answers unless stated otherwise.    Workshop 6: Integration techniques and complex numbers    Warm-up  Please work in collaboration with your classmates to complete the following exercises. This means sharing ideas and asking each other questions.      Circle the integrals that are improper, and say what makes each one improper. You do not need to evaluate them.                         Find the roots of .       Analyse: Integration by Parts      Here are two ways to start trying to integrate by parts.       Choice   A  B     Which choice works? Explain in your own words what goes wrong with the other one.    Find the integral.       Evaluate: Improper Integrals      Exercise 1(c) is the improper integral    Evaluate this integral.     Two students express as partial fractions, then argue as follows.   Student A: and do not exist, so the integral above does not exist either.  Student B: those two integrals are both infinite, so the integral above is .   Explain in your own words what each student has got wrong.        Analyse: Complex Roots      This exercise uses the quadratic from Exercise 2.    Find .    How do the real and imaginary parts of the roots from Exercise 2 appear in your answer to part (a)?       Create: Your Own Quadratic      Work with a neighbour on this exercise. If you are working alone, use your own quadratic in part (b) and check your answer by differentiating it.    Choose whole numbers and , with , and keep them to yourself. Find the quadratic whose roots are .    Swap quadratics with a neighbour. Use Exercise 5(b) to write down the integral of one over their quadratic, then swap back and check each other's answers.       Challenge: A Vibrating Beam      Suppose that engineers hit a beam to test it, and that it then vibrates with displacement at time . The factor makes the vibration fade away over time.    Find .    Without integrating, explain why the answer to part (a) should be positive.      "
},
{
  "id": "w6-improper-or-not-twocol",
  "level": "2",
  "url": "#w6-improper-or-not-twocol",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  Circle the integrals that are improper, and say what makes each one improper. You do not need to evaluate them.                     "
},
{
  "id": "w6-roots",
  "level": "2",
  "url": "#w6-roots",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "  Find the roots of .   "
},
{
  "id": "w6-parts",
  "level": "2",
  "url": "#w6-parts",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "  Here are two ways to start trying to integrate by parts.       Choice   A  B     Which choice works? Explain in your own words what goes wrong with the other one.    Find the integral.   "
},
{
  "id": "w6-improper",
  "level": "2",
  "url": "#w6-improper",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "",
  "body": "  Exercise 1(c) is the improper integral    Evaluate this integral.     Two students express as partial fractions, then argue as follows.   Student A: and do not exist, so the integral above does not exist either.  Student B: those two integrals are both infinite, so the integral above is .   Explain in your own words what each student has got wrong.    "
},
{
  "id": "w6-complex",
  "level": "2",
  "url": "#w6-complex",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "",
  "body": "  This exercise uses the quadratic from Exercise 2.    Find .    How do the real and imaginary parts of the roots from Exercise 2 appear in your answer to part (a)?   "
},
{
  "id": "w6-create",
  "level": "2",
  "url": "#w6-create",
  "type": "Worksheet Exercise",
  "number": "6",
  "title": "",
  "body": "  Work with a neighbour on this exercise. If you are working alone, use your own quadratic in part (b) and check your answer by differentiating it.    Choose whole numbers and , with , and keep them to yourself. Find the quadratic whose roots are .    Swap quadratics with a neighbour. Use Exercise 5(b) to write down the integral of one over their quadratic, then swap back and check each other's answers.   "
},
{
  "id": "w6-challenge",
  "level": "2",
  "url": "#w6-challenge",
  "type": "Worksheet Exercise",
  "number": "7",
  "title": "",
  "body": "  Suppose that engineers hit a beam to test it, and that it then vibrates with displacement at time . The factor makes the vibration fade away over time.    Find .    Without integrating, explain why the answer to part (a) should be positive.   "
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
