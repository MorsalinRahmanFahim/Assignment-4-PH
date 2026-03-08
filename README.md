
#Questions Answers :

                    ***Answer to the Question No 1***
**Here Is the Differences :**
getElementById grabs one element by its ID. If it can’t find anything, we just get null. It only works with IDs, but it’s the quickest method out there.

getElementsByClassName finds every element with a certain class and gives us a live HTMLCollection. So, if the page changes, this collection updates automatically. Just we have to remember, it only looks at class names.

querySelector is more flexible. You can pass in any CSS selector—ID, class, attribute, whatever—and it’ll give you the first match it finds. If there’s nothing, it returns null.

querySelectorAll is similar, but instead of stopping at the first match, it grabs everything that fits your selector and gives you a static NodeList. That means you get a snapshot of the elements at that moment, and it won’t change even if the DOM does.


                    ***Answer to the Question No 2***

 First, we create a new element using document.createElement(). After creating the element, we can add text, attributes, or classes to it. Finally, we insert the element into the webpage using methods like appendChild() or append().

         const newDiv = document.createElement("div");
         newDiv.textContent = "Hello World"
         document.body.appendChild(newDiv);

                    ***Answer to the Question No 3***

Event Bubbling in JavaScript is pretty much what it sounds like—when we click on something, like a button, the event doesn’t just stay there. It starts at the spot we clicked and then travels up through all the parent elements in the DOM.

If  we’ve got a button sitting inside a div. Both have click event listeners. When we click the button, JavaScript fires off the button’s event first. Then, almost instantly, it moves up to the div and triggers that event too. The event keeps moving up until it hits the top of the page.

 example:

document.getElementById("child").addEventListener("click", function() {
    console.log("Button clicked");
});

document.getElementById("parent").addEventListener("click", function() {
    console.log("Div clicked");
});

So if we click the button, you’ll see this in the console:
Button clicked  
Div clicked
 
                  ***Answer to the Question No 4***

Event Delegation is a JavaScript technique where we add an event listener to the parent element instead of the child element. Due to the event bubbling property, the event propagates from the child element to the parent element. As a result, the parent element can handle the event triggered by the child element.

In other words, instead of using many event listeners for different child elements, we use a single event listener for the parent element. Then, we identify the child element that triggered the event.

Why it is useful

1. Performance
Suppose we are working on a web application that has a large number of elements, such as button elements or list item elements. Using the event delegation technique, we use a single event listener. As a consequence, the application is more efficient.

2. Dynamic Elements
Suppose we add more elements to the page later using JavaScript. In this case, the event delegation technique works well. We do not need to add more event listeners for the dynamically added elements.

3. Simpler Code
Instead of using the same event listener for different child elements, we can handle the code from a single point. 


                                ***Answer to the Question No 5***

preventDefault — "Don't do what you'd normally do"
So let's say we have a link on the page. Normally clicking it navigates somewhere, right? With preventDefault, we're basically telling the browser — "Hey, I've got this. Don't do your thing."
The click still travels up the page though. We're only stopping the browser's action, nothing else.

js code example: 
link.addEventListener("click", function(event) {
  event.preventDefault(); // Browser won't follow the link
});

stopPropagation — "Stop here, don't tell anyone else"
Now imagine we have a button sitting inside a div. When we click that button, the click doesn't just stay there — it bubbles up. The div hears it, then the div's parent hears it, and so on.
stopPropagation is how we say "this click stays here, don't pass it up." The browser still does its default action, we're just keeping the event isolated.

js code example : 
button.addEventListener("click", function(event) {
  event.stopPropagation(); // Parent elements won't hear this click
});