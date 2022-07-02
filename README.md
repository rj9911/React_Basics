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
Now if default export is not done, then you hv to export different components from the same file using curly bracket as JS. {Header1 , Header 2} 

We have understand how we export by default things and also without default exports.
With default you can import App by any name.

Without default we should import by using the same name in curly brackets used in both cases while importing and exporting. And Default Component should be one only.

We can write Javascript anywhere but in any file,but we should not  Javascript in return section, there can write only the JSX not Javascript i.e only by using curly brackets just like i initialized the value const a anywhere not in the return section and the value of b is accessed using curly brackets in the return type.

There are two types of Functions class based and function base by using snippet rfce and rc.

Use Css Folder for every component separately to make my folder structure nicely looks.
like for header component we use header.css

By Pressing the CTRL and open the imported file link directly.

We cn directly create the file by ctrl and clk that link & create file.
All the css files are interlinked with each other, you need to import anyone css file in js folder. If changes done in div header.css done that will reflect to all the files div.

We cn give styling directly in element tag using style={{}} inside this is an object.

# Part 4 -> Forms and usestate in ReactJS
If we save the component with jsx file instead of js file then html will be detected as default. else if saved in js file then manually change the extension from down side to react.
Now we'll learn how onchange works in react using e.target.value & and passing e as parameter in arrow function. we return callback function in onchange event handler.

We cann't directly change the counter value i.e increase or decrease. We hv to use the usestate in react.
initialized inputvalue and setinputvalue is fcn to chnge inputvalue.& in usestate we put 0 inside that initialized as default her wehv given 0.
readonly attribute given to not chnge the ip vlue directly from the box.

Page gets render everytimes when value of inputValue gets changed in case of setCounter.

incase when used let inputValue,react doesn't render increment and decrement component.

**usestate and useeffect are hooks that used mostly**
Useeffect is hook that shows callback function and renders the things on page firstly when page loads for the first time.
Any hook should be defined in the component itself before return line.
We can pass dependencies in the object given in usestate, callback funcn will be called when the value in object array gets changed.

onchange event in input attribute gies setinputValue e.target.value shows real time data directly in console. That's why we use useState to show realtime data.


















