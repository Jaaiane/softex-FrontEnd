function createPersonNode(name, age) {
    return { name: name, age: age, child: null };
}

function addPerson (list , name , age) {
    const newNode = createPersonNode(name, age)


if (!list) {
    return newNode 
} else {
    if (!list.child){
        list.child = newNode
    } else {
        let currentChild = list.child
        while (currentChild.child) {
            currentChild = currentChild.child
        }
        currentChild.child = newNode
    }
    return list
  }
}

function printPeople(Person) {
    console.log(`${Person.name}, age: ${Person.age}`)
    if (Person.child) {
        printPeople(Person.child)
    }
}

let family = createPersonNode("Ana", 34)

family = addPerson(family, "Paulo", 25)
family = addPerson(family, "Maria", 31)

let Paulo = family.child
addPerson(Paulo, "Felipe", 9)
addPerson(Paulo, "Marcos", 7)

let Maria = Paulo.child
addPerson(Maria, "José", 3)

printPeople(family)

