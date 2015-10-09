## Passing a value to a function

```
a = 1
```
a is pointing to a memory location storing the primitive value 1

```
b = a 
```
 A copy of primitive value is created. b points to a memory location storing a copy of primitive value 1.
 
 _This is called passing by value._ This is the default Javascript behaviour.
 
 -----------------------------
 
 ```
 a = object value
 
 b = a
 ```
 
 In this case `a` is pointing to a memory location holding the object.
 now `b` is also pointing to the same memory location holding the value of object.
 So if object is changed, it change for both `a` and `b`
 
 _This is called pass by reference._

This is how modules work. If an object is passed to a module. The changes to this object inside the module are also reflected outside the module.

