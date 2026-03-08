
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



 
