function swimmer({ name }) {
    return {
        swim: () => console.log(`${name} swam`)
    }
}

function swimmingMonsterCreator(name) {
    const monster = { name: name }
    /** const monster = { name: name }
     *  @property name: -> and property()
     * @parameter name -> parameter 
    */

    return {
        ...monster,
        ...swimmer(monster)
    }
}

const obj = swimmingMonsterCreator('Monster')
// const obj = swimmer({ name: 'Eagle' })
obj.swim()

/**
 * @property A JavaScript property is a characteristic of an object, often describing attributes associated with a data structure.
 *  ... Instance properties hold data that are specific to a given object instance. Static properties hold data that are
 * shared among all object instances.
 *
 * defineProperty() defines a new property directly on an object, or modifies an existing property on an object, and
 * returns the object.
 *
 *
 *
 * @parameter In computer programming, a parameter or a formal argument is a special kind of variable
 *  used in a subroutine to refer to one of the pieces of data provided as input to the subroutine
 */