Part 1 ->
In React you need to install extra package like react router dom i.e in case of library. but in case of framework you don't need to add extra packages.
npx means for single time.
understanded how to include any component in my app.

Part2 ->
JSX -> JAVASCRIPT + HTMl
difference is name of class is changed as classname bcoz there is keyword class in javascript and conflicted happens
understanded the syntax of JSX same as HTML.

# Props & JSX
Here we hv seen components in one page only.

To add multiple things like we hv to add component name Priyam many times to add Priyam mny times in function App.
We need to add different name by passing only one component name in Function App. This can be done by using props.
When You write curly brackets then JS starts 
<div name = {"Priyam"} number = {23} ></div>
this above priyam and number is javascript.

props is like an object and passsed as parameter in function.with the properties defined and the variable javascript properties of the object is accessed by dot(.) operator.
{props.name} <- {"priyam"} or {props.nameforclass} <- {"div1"}
 
Another way to use props is directly pass the name of the element that ou put in the app component i.e Myappcomponent in case of ours.

Destructuring by not using name props we defined directly by function Mycomponent({name ,nameforclass}) <- function Mycomponent(props). Destructuring is done by using curly brackets.

We can pass the default value directly in parameters in function as given in income case.

Same as passing parameters in JS. Now doing familiar with JSX Syntax.
Normal HTML going on, but to acess some variables we need javascript.

# important -> 
YOu need to return the single thing just like as single div is returned from here, you don't have return other any elements from here. Onlt one thing should be returned.

<></> -> We should use this tag(Empty Tag) Now Erro will be removed for retunring the multiple elements.You need to add elements tags in this empty tag.

# Part 3 (Components and Styling)
To import Components From another folder components.
we hv first default export the header component and can be import in App file with any name.


