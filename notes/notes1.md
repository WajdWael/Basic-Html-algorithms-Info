# What is an Algorithm in computer science?

In computer systems, an algorithm is basically an instance of logic written in software by software developers, to be effective for the intended "target" computer(s) to produce output from given (perhaps null) input.

Algorithm term is so essential in computer science, cause it's **the way computers process data**, 

> Thus, an algorithm can be considered to be any sequence of operations that can be simulated by a Turing-complete.

---

# What is Algorithm design?
It refers **to a method or a mathematical process for problem-solving and engineering algorithms.** The design of algorithms is part of many solution theories of operation research, such as dynamic programming and divide-and-conquer. Techniques for designing and implementing algorithm designs are also called algorithm design patterns, with examples including the template method pattern and the decorator pattern.

---

# How does the algorithm express?
It can be expressed in many kinds of notation including:
1. Natural languages (Arabic, English, Spain, German...)
2. Pseudocode
3. Flowcharts
4. Programming languages (Js, Python, C, Java ...)
5. Control-tables
6. Darkon-charts


---

# What is big O notation?
Today we’ll look at **algorithms for searching**. To compare their efficiency, we’ll consider running time, or how long an algorithm takes to run given some size of input.

Computer scientists tend to **describe running time with big O notation**, which we can think of as “on the order of” something, as though we want to convey an idea of running time and not an exact number of milliseconds or steps.

In computer science, big O notation **is used to classify algorithms according** to how their run time or space requirements grow as the input size grows.

At all times the algorithm only needs to remember two values: the sum of all the elements so far (O), and its current position in the input list (N). Therefore, it is said to have a space requirement of O(n).

**Notations**:
1. **Big O (O()) describes the upper bound of the complexity.**
2. **Omega (Ω()) describes the lower bound of the complexity.**
3. **Theta (Θ()) describes the exact bound of the complexity.**
4. **Little O (o()) describes the upper bound excluding the exact bound.**

---


# What is an Algorithmic analysis?
It is methods have been developed **for the analysis of algorithms** to obtain such quantitative answers **(estimates)**; for example, an algorithm that adds up the elements of a list of n numbers would have a time requirement of O(n), using big O notation.


   - **There are various ways to classify algorithms:**

      1. **Recursion:** A recursive algorithm is one that invokes or in other words makes reference to itself repeatedly until a certain condition (aka termination condition) matches. long story short, Recursion is the ability for a function to call itself.


      2. **Logical (Algorithm = logic + control):** An algorithm may be viewed as a controlled logical deduction. The logic component expresses the axioms that may be used in the computation and the control component determines the way in which deduction is applied to the axioms. This is the basis for the logic programming paradigm. In pure logic programming languages, the control component is fixed and algorithms are specified by supplying only the logic component. The appeal of this approach is the elegant semantics: a change in the axioms produces a well-defined change in the algorithm.


       3. **Serial, parallel, or distributed:**
          An algorithm designed for such an environment is called a serial algorithm, as opposed to parallel algorithms or distributed algorithms.

             - ### Parallel algorithms:
               Take advantage of **computer architectures** where several processors can work on a problem at the same time.

             - #### Distributed algorithms: 
               Utilize multiple machines connected with a computer network.

---

Parallel or distributed algorithms: divide the problem into more symmetrical or asymmetrical subproblems and collect the results back together. 