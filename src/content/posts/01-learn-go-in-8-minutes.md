---
title: "Learn Go in 8 minutes"
publishedAt: 2021-06-01
description: "Learning the basics of Go and how it works. I chose Go as a starting language here because of its ease of use and performance."
slug: "learn-go-in-8-minutes"
isPublish: true
---

Learning the basics of Go and how it works. I chose Go as a starting language here because of its ease of use and performance.

## Why Go

Go is a language that was designed at 2009 at Google by Robert Griesemer, Rob Pike, and Ken Thompson. It was created in order to address performance issues of other languages and to take advantage of the multi-core CPUs by providing concurrency out-of-the-box.

It is used to code backend components that are small, efficient with concurrency in mind. Almost all components in the Cloud-native ecosystem are written in Go (Docker, Kubernetes, Istio, Helm, Prometheus, etcd, Knative to name a few) which makes it a perfect fit for integrating with those components.

## Code Style Formatting

Go language has built-in code style [formatting](https://blog.golang.org/go-fmt-your-code).

VSCode has built-in integration of Go which supports formatting on-save.

## Quick Language Overview

For quick language overview check this [Go Programming Language Tutorial](https://www.youtube.com/watch?v=YS4e4q9oBaU) 6h video that explains all basic concepts of Go.

Below are some of those concepts:

### Hello World

```go
package main

import "fmt"

func main() {
    fmt.Println("Hello World!")
}
```

Type `go run hello.go` to execute.

### Variables & Constants

```go
package main

import "fmt"

func main() {
    // A constant is a variable with a value that can't be changed
    const pi float64 = 3.14159265359
    // You can declare multiple variables like this
    var (
        varA = 2
        varB = 3
    )
    fmt.Println(varA, varB)

    // Strings are a series of characters between " or `
    var Name string = "John Wick"

    // Get string length
    fmt.Println(len(Name))
}
```

### Data Types

- Numeric
- int (uint8, uint16, uint32, uint64, int8, int16, int32, int64)
- float
- String
- Boolean
- true
- false
- Derived
- Pointer
- Array
- Structure
- Map
- Interface

```go
package main

import "fmt"

func main() {
    // Variable assignment with specific type
    var a int = 5
    var b float32 = 4.32
    const pi float64 = 3.1415139475

    // Variable assignment with auto type
    c := 1

    // Variable reassignment (should be same type as first assignment)
    c = 5

    // Multiple variables assignment
    var (
        d="hello"
        e="there"
    )
    f,g:=14,15

    fmt.Println(a)
    fmt.Println(b)
    fmt.Println(pi)
    fmt.Println(c)
    fmt.Println(d)
    fmt.Println(e)
    fmt.Println(f)
    fmt.Println(g)
}
```

### Operators

- Arithmetic
- addition (+)
- subtraction (-)
- multiplication (\*)
- division (/)
- modulus (%)
- Relational
- greater than (>)
- lesser than (<)
- greater than or equal (>=)
- equivalence (==)
- not equals (!=)
- Logical
- and (&&)
- or (||)
- negation (!)

```go
package main

import "fmt"

func main() {
    // Arithmetic
    x,y:=5,6
    fmt.Println("x + y =", x + y)
    fmt.Println("x - y =", x - y)
    fmt.Println("x * y =", x * y)
    fmt.Println("x / y =", x / y)
    fmt.Println("x % y =", x % y)

    isBool := true
    hate := false

    fmt.Println(isBool && hate)
    fmt.Println(isBool || hate)
    fmt.Println(!isBool)
}
```

### Pointers

```go
package main

import "fmt"

func main() {
	x := 5

	fmt.Println(x)
	fmt.Println(&x)
}
```

Pass by value:

```go
package main

import "fmt"

func main() {
	x := 10

    changeValue(x) // pass by value
    fmt.Println(x) // Prints 10
}

func changeValue(x int) {
    x=7
}
```

Pass by reference:

```go
package main

import "fmt"

func main() {
	x := 10

	changeValue(&x) // pass by reference
	fmt.Println(x) // prints 7
}

func changeValue(x *int) {
	*x = 7
}
```

Printf

```go
package main

import "fmt"

func main() {
	var name string = "John Wick"
	const pi float64 = 3.16412732
	x := 5
	isbool := true

	fmt.Printf("%f \n", pi)     // print float: 3.16412732
	fmt.Printf("%.3f \n", pi)   // print float: 3.164
	fmt.Printf("%T \n", name)   // print type: string
	fmt.Printf("%t \n", isbool) // print boolean: true
	fmt.Printf("%d \n", x)      // print int: 5
	fmt.Printf("%b \n", 25)     // print binary: 11001
	fmt.Printf("%c \n", 33)     // print character: !
	fmt.Printf("%x \n", 15)     // print hexcode: f
}
```

### Loops

normal for loop:

```go
package main

import "fmt"

func main() {
	for i := 1; i < 10; i++ {
		fmt.Println(i)
    }
}
```

while style loop:

```go
package main

import "fmt"

func main() {
	i := 1
	for i < 10 {
		fmt.Println(i)
		i++
	}
}
```

nested loops:

```go
package main

import "fmt"

func main() {
	for i := 1; i < 10; i++ {
        for j := 1; j < i; j++ {
            fmt.Printf("*")
        }
        fmt.Println()
	}
}
```

### Decision Making

```go
package main

import "fmt"

func main() {
	age := 18

	if age >= 18 {
		fmt.Println("you can van vote")
	} else {
		fmt.Println("you cannot vote")
	}
}
```

```go
package main

import "fmt"

func main() {
	age := 18

	switch age {
	case 16:
		fmt.Println("Prepare for college")
	case 18:
		fmt.Println("Don't run after girls")
	case 20:
		fmt.Println("Get yourself a job!")
	default:
		fmt.Println("Are you even alive?")
	}
}
```

### Arrays

```go
package main

import "fmt"

func main() {
	var EvenNum [5]int
	EvenNum[0] = 0
	EvenNum[1] = 2
	EvenNum[2] = 4
	EvenNum[3] = 6
	EvenNum[4] = 8

	fmt.Println(EvenNum[2]) // prints: 4
}
```

```go
package main

import "fmt"

func main() {
	EvenNum := [5]int{0, 2, 4, 6, 8}
	fmt.Println(EvenNum[2]) // prints: 4
}
```

```go
package main

import "fmt"

func main() {
	EvenNum := [5]int{0, 2, 4, 6, 8}
	for _, value := range EvenNum {
		fmt.Println(value)
	}
}
```

slices:

```go
package main

import "fmt"

func main() {
	EvenNum := [5]int{0, 2, 4, 6, 8}
	for i, value := range EvenNum {
		fmt.Println(value, i)
	}

	numSlice := []int{5, 4, 3, 2, 1}
	sliced := numSlice[3:5]
	fmt.Println(sliced)        // prints: [2, 1]
	fmt.Println(numSlice[3:])  // prints: [2, 1]
	fmt.Println(numSlice[:])   // prints: [5, 4, 3, 2, 1]
	fmt.Println(numSlice[0:1]) // prints: [5]

	slice2 := make([]int, 5, 10)
	copy(slice2, numSlice) // copies numSlice to slice2
	fmt.Println(slice2)    // prints [5, 4, 3, 2, 1]

	slice3 := append(numSlice, 3, 0, -1)
	fmt.Println(slice3) // prints [5, 4, 3, 2, 1, 3, 0, -1]
}
```

### Maps

```go
package main

import "fmt"

func main() {
	StudentAge := make(map[string]int)

	StudentAge["John"] = 23
	StudentAge["Bob"] = 27
	StudentAge["Anna"] = 21
	StudentAge["Alice"] = 19
	StudentAge["Carl"] = 42
	StudentAge["Maria"] = 22

	fmt.Println(StudentAge["maria"]) // not found (case-sensitive) returns: 0
	fmt.Println(StudentAge["Maria"]) // found returns: 22
	fmt.Println(len(StudentAge))     // returns 6 (number of elements)
}
```

map in a map:

```go
package main

import "fmt"

func main() {
	superhero := map[string]map[string]string{
		"Superman": map[string]string{
			"RealName": "Clar Kent",
			"City":     "Metropolis",
		},
		"Batman": map[string]string{
			"RealName": "Bruce Wayne",
			"City":     "Gotham City",
		},
	}

	if temp, hero := superhero["Superman"]; hero {
		fmt.Println(temp["RealName"], temp["City"], hero)
	}
}
```

### Functions

```go
package main

import "fmt"

func main() {
	x, y := 5, 6
	fmt.Println(add(x, y)) // prints: 11
}

func add(num1, num2 int) int {
	return num1 + num2
}
```

recursion:

```go
package main

import "fmt"

func main() {
	x := 5
	fmt.Println(factorial(x)) // ( factorial(5) = 5x4x3x2x1 ) prints: 120
}

func factorial(num int) int {
	if num == 0 {
		return 1
	}
	return num * factorial(num-1)
}
```

### Defer, Recover, Panic

Control Structure:

- Defer: Defer statement defers the execution of a function until the surrounding function returns. (e.g. cleanup resources)
- Recover: Helps regain ther normal flow of execution after a panic.
- Panic: Panic is similar to throwing exception like other language.

defer:

```go
package main

import "fmt"

func main() {
	defer firstRun() // It will execute last, after secondRun() function
	secondRun()
}

func firstRun() {
	fmt.Println("I executed first")
}

func secondRun() {
	fmt.Println("I executed second")
}
```

panic & recover:

```go
package main

import "fmt"

func main() {
	fmt.Println(div(3, 0))
	fmt.Println(div(5, 3))
	demPanic()
}

func div(num1, num2 int) int {
	defer func() {
		fmt.Println("div Recovered: ", recover())
	}()
	solution := num1 / num2 // (This will panic if num2 is 0)
	return solution
}

func demPanic() {
	defer func() {
		fmt.Println("demPanic Recovered:", recover())
	}()
	panic("Paniced")
}
```

### Structures & Interfaces

structures:

```go
package main

import "fmt"

func main() {
	rect1 := Rectangle{height: 10, width: 5}
	rect2 := Rectangle{10, 5}

	fmt.Println(rect1.height) // returns: 10
	fmt.Println(rect1.width)  // returns: 5
	fmt.Println(rect2)        // returns {10, 5}
	fmt.Println(rect1.area()) // returns: 50
}

// Rectangle a rectangle with dimensions
type Rectangle struct {
	height float64
	width  float64
}

func (rect *Rectangle) area() float64 {
	return rect.height * rect.width
}
```

interfaces:

```go
package main

import (
	"fmt"
	"math"
)

func main() {
	rect1 := Rectangle{50, 60}
	circ := Circle{7}

	fmt.Println(getArea(rect1)) // returns: 3000
	fmt.Println(getArea(circ))  // returns: 52.1415926535898
}

// Shape interface of a shape
type Shape interface {
	area() float64
}

// Rectangle a rectangle with dimensions
type Rectangle struct {
	height float64
	width  float64
}

// Circle a circle
type Circle struct {
	radius float64
}

func (r Rectangle) area() float64 {
	return r.height * r.width
}

func (c Circle) area() float64 {
	return math.Pi + math.Pow(c.radius, 2)
}

func getArea(shape Shape) float64 {
	return shape.area()
}
```

### File I/O

```go
package main

import (
	"fmt"
	"io/ioutil"
	"log"
	"os"
)

func main() {
	file, err := os.Create("sample.txt")
	if err != nil {
		log.Fatal(err)
	}

	file.WriteString("Hi my name is John Wick and this file was created using GO!!")
	file.Close()

	stream, err := ioutil.ReadFile("sample.txt")
	if err != nil {
		log.Fatal(err)
	}
	s1 := string(stream)
	fmt.Println(s1)
}
```

### Webserver

```go
package main

import (
	"fmt"
	"net/http"
)

func main() {
	http.HandleFunc("/", handler)
	http.HandleFunc("/hello", handler2)
	http.ListenAndServe(":8080", nil)
}

func handler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "welcome to my home page")
}

func handler2(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hello world")
}
```
