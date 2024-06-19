document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('.container').classList.add('visible');
  });
  
  const quizData = {
    "HTML": [
        {question: "1) Which HTML5 feature is used to store data on the client side that persists even after the browser is closed?", options: ["LocalStorage", "SessionStorage", "Cookies", "WebSQL"], answer: "LocalStorage"},
        {question: "2) Which HTML attribute is used to define inline styles?", options: ["class", "style", "Font", "styles"], answer: "style"},
        {question: "3) Which HTML5 element is used for specifying the footer of a document or section?", options: ["&lt;bottom&gt;", "&lt;footer&gt;", "&lt;foot&gt;", "&lt;end&gt;"], answer: "&lt;footer&gt;"},
        {question: "4) What is the purpose of the HTML &lt;canvas&gt; element?", options: ["To draw graphics via scripting (usually JavaScript)", "To display tabular data", "To embed multimedia content", "To create form controls"], answer: "To draw graphics via scripting (usually JavaScript)"},
        {question: "5) What does the novalidate attribute do in a form element in HTML5?", options: ["Prevents the form from being submitted", "Disables form validation", "Hides the form", "Resets the form"], answer: "Disables form validation"},
        {question: "6) Which element is used to define navigation links in HTML5?", options: ["&lt;nav&gt;", "&lt;navigate&gt;", "&lt;navigation&gt;", "&lt;link&gt;"], answer: "&lt;nav&gt;"},
        {question: "7) What is the purpose of the autocomplete attribute in HTML5 forms?", options: ["It specifies whether a form field should be auto-filled by the browser.", "It prevents the form from being submitted automatically.", "It disables the input field so that it cannot be edited.", "It specifies the default font size for the input field."], answer: "It specifies whether a form field should be auto-filled by the browser."},
        {question: "8) What is the purpose of the async and defer attributes in &lt;script&gt; tags in HTML5?", options: ["They control the loading order of external scripts.", "They specify whether the script should be executed asynchronously or deferred until after the document has been parsed.", "They disable script execution in the browser.", "They define alternative scripts for older browsers."], answer: "They specify whether the script should be executed asynchronously or deferred until after the document has been parsed."},
        {question: "9) Explain the difference between the `GET` and `POST` methods in HTML forms.", options: ["GET method is used to send sensitive data securely, while POST is used for non-sensitive data.", "GET method appends form data to the URL, while POST sends it as part of the request body.", "GET method is faster than POST for large data, while POST is more efficient for small data.", "GET method is suitable for updating data, while POST is used for retrieving data."], answer: "GET method appends form data to the URL, while POST sends it as part of the request body."},
        {question: "10) What is the purpose of the &lt;template&gt; element in HTML5?", options: ["It defines a template for reusable HTML code that is not displayed until it is called using JavaScript.", "It is used for creating forms with predefined values.", "It is used for linking to external CSS files.", "It is used for embedding videos and audio files."], answer: "It defines a template for reusable HTML code that is not displayed until it is called using JavaScript."},
    ],
    "CSS": [
        {question: "1) Explain the concept of the CSS box model and its components.", options: ["The CSS box model includes only the content and padding.", "The CSS box model is composed of margins, borders, padding, and content.", " The CSS box model consists of only borders and content.", "The CSS box model includes the viewport and the document."], answer: "The CSS box model is composed of margins, borders, padding, and content."},
        {question: "2) What is the purpose of CSS Flexbox and how does it improve layout design?", options: ["Flexbox is used for grid layouts only.", "Flexbox is a one-dimensional layout model that allows easy alignment and distribution of space among items in a container, even when their size is unknown or dynamic.", "Flexbox is used only for text alignment.", "Flexbox is a two-dimensional layout model that works only with images."], answer: "Flexbox is a one-dimensional layout model that allows easy alignment and distribution of space among items in a container, even when their size is unknown or dynamic."},
        {question: "3) What is the purpose of the CSS z-index property and how does it work?", options: [" It sets the opacity of an element.", "It controls the vertical stacking order of elements that overlap.", "It sets the position of an element relative to the top of the page.", "It controls the horizontal alignment of elements."], answer: "It controls the vertical stacking order of elements that overlap."},
        {question: "4) What is the CSS Grid Layout and how does it differ from Flexbox?", options: [" CSS Grid Layout is used for one-dimensional layouts, while Flexbox is used for two-dimensional layouts.", "CSS Grid Layout is used for two-dimensional layouts, while Flexbox is used for one-dimensional layouts.", "CSS Grid Layout and Flexbox are both used for one-dimensional layouts.", "CSS Grid Layout and Flexbox are both used for two-dimensional layouts."], answer: "CSS Grid Layout is used for two-dimensional layouts, while Flexbox is used for one-dimensional layouts."},
        {question: "5) What is the `calc()` function in CSS and how can it be used?", options: [" It is used to calculate the position of an element.", "It is used to perform mathematical calculations to determine CSS property values.", "It is used to set the background color of an element.", "It is used to animate elements."], answer: "It is used to perform mathematical calculations to determine CSS property values."},
        {question: "6) Explain the purpose of the @keyframes rule in CSS animations.", options: ["It is used to define the duration of an animation.", "It is used to define the intermediate steps in a CSS animation sequence.", "It is used to reset an animation.", "It is used to set the opacity of an element."], answer: "It is used to define the intermediate steps in a CSS animation sequence."},
        {question: "7) Explain the purpose of media queries in CSS.", options: ["Media queries are used to import other stylesheets.", "Media queries allow the application of CSS rules based on conditions such as screen size, resolution, orientation, and other device characteristics.", "Media queries are used to add animations to web pages.", "Media queries are used to link JavaScript files to CSS."], answer: "Media queries allow the application of CSS rules based on conditions such as screen size, resolution, orientation, and other device characteristics."},
        {question: "8) What is the purpose of the `nth-child` selector in CSS?", options: ["It selects the first child of an element.", "It selects elements based on their numeric position in a group of siblings.", "It selects elements based on their attribute values.", "It selects elements based on their class names."], answer: "It selects elements based on their numeric position in a group of siblings."},
        {question: "9) What is the `:before` pseudo-element in CSS and how is it typically used?", options: ["It selects an element that comes before another element.", "It inserts content before the content of an element, typically used for decorative purposes.", "It hides an element before it is displayed.s", "It resets the styles of an element to their defaults."], answer: "It inserts content before the content of an element, typically used for decorative purposes."},
        {question: "10) How do you create a responsive navigation menu using CSS?", options: ["Use fixed-width containers and avoid media queries.", "Use media queries to adjust the layout for different screen sizes, and use Flexbox or Grid to structure the navigation items.", "Use tables to layout the navigation items.", "Use JavaScript exclusively to create responsive navigation menus."], answer: "Use media queries to adjust the layout for different screen sizes, and use Flexbox or Grid to structure the navigation items."},
    ],
    "JavaScript": [
        {question: "1) Explain the concept of closures in JavaScript and provide an example?", options: ["Closures are functions that are executed immediately after they are defined.", "Closures are functions that reference variables in the outer scope even after the outer function has finished executing.", " Closures are objects that can be iterated over.", "Closures are functions that are automatically garbage collected."], answer: "Closures are functions that reference variables in the outer scope even after the outer function has finished executing."},
        {question: "2) What is the purpose of the Promise object in JavaScript and how does it work?", options: ["A `Promise` object is used to handle synchronous code.", "A `Promise` object is used to represent the eventual completion (or failure) of an asynchronous operation and its resulting value.", "A `Promise` object is used to iterate over arrays.", "A `Promise` object is used to manage memory allocation."], answer: "A Promise object is used to represent the eventual completion (or failure) of an asynchronous operation and its resulting value."},
        {question: "3) What is event delegation in JavaScript and why is it useful?", options: ["Event delegation is attaching an event listener to multiple elements.", "Event delegation is a technique involving adding a single event listener to a parent element to manage events for its child elements.", "Event delegation is preventing default behavior of events.", "Event delegation is the process of event propagation."], answer: "Event delegation is a technique involving adding a single event listener to a parent element to manage events for its child elements."},
        {question: "4) Explain the difference between synchronous and asynchronous JavaScript?", options: ["Synchronous JavaScript runs in parallel with other operations, while asynchronous JavaScript runs sequentially.", "Synchronous JavaScript runs sequentially, blocking further execution until the current operation completes, while asynchronous JavaScript runs in parallel, allowing other operations to continue.", "Synchronous JavaScript is faster than asynchronous JavaScript.", "Synchronous JavaScript uses callbacks, while asynchronous JavaScript does not."], answer: "Synchronous JavaScript runs sequentially, blocking further execution until the current operation completes, while asynchronous JavaScript runs in parallel, allowing other operations to continue."},
        {question: "5) Explain the concept of prototypal inheritance in JavaScript?", options: ["Prototypal inheritance allows objects to inherit properties and methods from other objects.", "Prototypal inheritance allows functions to inherit variables from their parent scope.", "Prototypal inheritance is used to manage memory allocation.", "Prototypal inheritance is a method of creating private variables."], answer: "Prototypal inheritance allows objects to inherit properties and methods from other objects."},
        {question: "6) What is the purpose of the `bind` method in JavaScript?", options: ["The `bind` method is used to create a new function that, when called, has its `this` keyword set to the provided value.", "The `bind` method is used to combine two functions into one.", "The `bind` method is used to execute a function once after a specified delay.", "The `bind` method is used to convert a string into an array."], answer: "The `bind` method is used to create a new function that, when called, has its `this` keyword set to the provided value."},
        {question: "7) Explain the concept of Object-Oriented Programming (OOP) in JavaScript, including prototypes and inheritance?", options: ["OOP in JavaScript focuses on creating reusable patterns using objects and classes.", "OOP in JavaScript allows for the creation of objects based on prototypes, with inheritance allowing objects to inherit properties and methods from other objects.", "OOP in JavaScript is used for event handling.", "OOP in JavaScript is used for debugging purposes."], answer: "OOP in JavaScript allows for the creation of objects based on prototypes, with inheritance allowing objects to inherit properties and methods from other objects."},
        {question: "8) Explain what the JavaScript strict mode is and how it differs from regular JavaScript execution?", options: ["Strict mode is a way to restrict JavaScript execution to a specific set of rules, improving performance.", "Strict mode is a way to write secure JavaScript code by enabling a stricter parsing and error handling mode.", "Strict mode is a way to enforce variable declarations in JavaScript.", "Strict mode is a way to enable asynchronous operations in JavaScript."], answer: "Strict mode is a way to write secure JavaScript code by enabling a stricter parsing and error handling mode."},
        {question: "9) Explain the concept of hoisting in JavaScript and how it affects variable and function declarations?", options: ["Hoisting is the process of lifting variables and functions to the top of their scope before code execution.", "Hoisting is used to create closures in JavaScript.", "Hoisting is used for error handling.", "Hoisting is the process of defining variables within a function."], answer: "Hoisting is the process of lifting variables and functions to the top of their scope before code execution."},
        {question: "10) What are JavaScript Promises and how do they differ from callbacks?", options: ["Promises are used to handle asynchronous operations and provide better control over callbacks and their results.", "Promises are used to handle synchronous operations and are not related to callbacks.", "Promises are used for error handling in JavaScript.", "Promises are used to define object properties in JavaScript."], answer: "Promises are used to handle asynchronous operations and provide better control over callbacks and their results."},
    ],
    "ReactJS": [
        {question: "1) Explain the concept of Virtual DOM in React.js and why it is used?", options: ["Virtual DOM is an internal data structure used by React to speed up DOM manipulation.", "Virtual DOM is an alternative to the real DOM for server-side rendering.", "Virtual DOM is a feature used to store state outside components.", "Virtual DOM is used for debugging purposes in React."], answer: "Virtual DOM is an internal data structure used by React to speed up DOM manipulation."},
        {question: "2) What are React Hooks and how do they change the way React components are implemented?", options: ["React Hooks are functional components that replace class components in React applications.", "React Hooks are functions that allow functional components to use state and other React features without writing a class.", "React Hooks are used for error handling in React applications.", "React Hooks are used to handle routing in React applications."], answer: "React Hooks are functions that allow functional components to use state and other React features without writing a class."},
        {question: "3) Explain the purpose of `useState` and `useEffect` hooks in React?", options: ["`useState` is used to declare state variables in functional components, while `useEffect` is used to handle side effects in functional components.", "`useState` is used for event handling in React, while `useEffect` is used for conditional rendering.", "`useState` is used for data fetching in React, while `useEffect` is used for rendering components.", "`useState` is used for defining props in React, while `useEffect` is used for defining state."], answer: "`useState` is used to declare state variables in functional components, while `useEffect` is used to handle side effects in functional components."},
        {question: "4) Describe the differences between controlled and uncontrolled components in React?", options: ["Controlled components are used with Redux, while uncontrolled components are used with React Router.", "Controlled components are components that manage their state internally, while uncontrolled components are components that rely on parent components to manage their state.", "Controlled components are components that do not have a state, while uncontrolled components are components that have a state.", "Controlled components are components that manage their state externally, while uncontrolled components are components that manage their state internally."], answer: "Controlled components are components that manage their state internally, while uncontrolled components are components that rely on parent components to manage their state."},
        {question: "5) What is JSX in React and why is it used instead of regular JavaScript?", options: ["JSX is a syntax extension for JavaScript that allows HTML to be written within JavaScript code, which makes it easier to write and understand React components.", "JSX is used for defining CSS styles in React components.", "JSX is used for data manipulation in React components.", "JSX is used for defining event handlers in React components."], answer: "JSX is a syntax extension for JavaScript that allows HTML to be written within JavaScript code, which makes it easier to write and understand React components."},
        {question: "6) Explain the concept of props drilling in React and how it can be avoided.", options: ["Props drilling is passing props from a parent component to nested child components through multiple levels of components, which can make the code harder to maintain.", "Props drilling is used for managing state in React components.", "Props drilling is used for routing in React applications.", "Props drilling is a technique for optimizing performance in React applications."], answer: "Props drilling is passing props from a parent component to nested child components through multiple levels of components, which can make the code harder to maintain."},
        {question: "7) What are Higher-Order Components (HOC) in React and how are they used?", options: ["Higher-Order Components are functions that take a component and return a new component with enhanced functionality.", "Higher-Order Components are components that render other components based on props.", "Higher-Order Components are used for state management in React.", "Higher-Order Components are used for event handling in React."], answer: "Higher-Order Components are functions that take a component and return a new component with enhanced functionality."},
        {question: "8) Explain the concept of React Router and how it facilitates single-page applications (SPAs).", options: ["React Router is a built-in routing library for React that enables navigation and rendering of different components based on the browser URL.", "React Router is used for handling HTTP requests in React applications.", "React Router is used for optimizing performance in React applications.", "React Router is used for data fetching in React applications."], answer: "React Router is a built-in routing library for React that enables navigation and rendering of different components based on the browser URL."},
        {question: "9) Describe the concept of state management in React and compare local state with global state management solutions like Redux.", options: ["State management in React refers to how data is managed and updated within components. Local state refers to managing state within a component, while Redux is a global state management library that allows state to be stored and accessed from any component", "State management in React is used for error handling. Local state refers to managing state within a component, while Redux is a routing library.", "State management in React is used for defining props. Local state refers to managing state within a component, while Redux is a form management library.", "State management in React is used for data manipulation. Local state refers to managing state within a component, while Redux is an API management library."], answer: "State management in React refers to how data is managed and updated within components. Local state refers to managing state within a component, while Redux is a global state management library that allows state to be stored and accessed from any component."},
        {question: "10) What are React Portals and why are they used?", options: ["React Portals are used for routing in React applications.", "React Portals provide a way to render children into a DOM node that exists outside the DOM hierarchy of the parent component. They are useful for scenarios like modals, tooltips, or any UI element that needs to break out of its parent container.", "React Portals are used for event handling in React applications.", "React Portals are used for state management in React applications."], answer: "React Portals provide a way to render children into a DOM node that exists outside the DOM hierarchy of the parent component. They are useful for scenarios like modals, tooltips, or any UI element that needs to break out of its parent container."},
    ],
    "NodeJS": [
        {question: "1) Which of the following modules is commonly used for handling streams in Node.js?", options: ["`http`", "`fs`", "`path`", "`util`"], answer: "`fs`"},
        {question: "2) What is the purpose of the `cluster` module in Node.js?", options: ["To create child processes", "To manage multiple instances of a Node.js application", "To handle file operations", "To perform encryption and decryption tasks"], answer: "To manage multiple instances of a Node.js application"},
        {question: "3) Which of the following is true about Node.js event loop?", options: ["It executes JavaScript asynchronously", "It runs JavaScript code in parallel threads", "It blocks the execution of the main program", "It only handles I/O operations"], answer: "It executes JavaScript asynchronously"},
        {question: "4) What is the role of the `process` object in Node.js?", options: ["To provide information about the current Node.js process", "To handle HTTP requests and responses", "To manage database connections", "To manipulate DOM elements"], answer: "To provide information about the current Node.js process"},
        {question: "5) Which built-in Node.js module is used for cryptography-related tasks?", options: ["`crypto`", "`http`", "`url`", "`path`"], answer: "`crypto`"},
        {question: "6) In Node.js, what does `require()` function do?", options: ["It imports modules written in JavaScript", "It defines a new variable", "It creates a new file", "It sends HTTP requests"], answer: "It imports modules written in JavaScript"},
        {question: "7) Which Node.js module is used for unit testing purposes?", options: ["`assert`", "`fs`", "`http`", "`path`"], answer: "`assert`"},
        {question: "8) What is the purpose of the `os` module in Node.js?", options: ["To manage operating system processes", "To create and manage web servers", "To perform file system operations", "To provide information about the operating system"], answer: "To provide information about the operating system"},
        {question: "9) Which Node.js module is used for handling and manipulating file paths?", options: ["`path`", "`fs`", "`url`", "`querystring`"], answer: "`path`"},
        {question: "10) What is the significance of the npm command in Node.js?", options: ["It installs Node.js packages globally", "It compiles Node.js applications", "It manages Node.js versions", "It installs, manages, and runs Node.js packages and dependencies"], answer: "It installs, manages, and runs Node.js packages and dependencies"},
    ],
    "ExpressJS": [
        {question: "1) Which method in Express.js is used to serve static files?", options: ["`app.use()`", "`app.get()`", "`app.static()`", "`app.staticFiles()`"], answer: "`app.use()`"},
        {question: "2) In Express.js, what is the default scope of middleware when using `app.use()` without specifying a path?", options: ["`/`", "`/api`", "`/public`", "`/home`"], answer: "`/`"},
        {question: "3) How can you set a custom HTTP status code in an Express.js response?", options: ["`res.sendStatus(code)`", "`res.setStatus(code)`", "`res.writeStatus(code)`", "`res.status(code)`"], answer: "`res.status(code)`"},
        {question: "4) Which of the following is true about route parameters in Express.js?", options: ["They are denoted by the `@` symbol", "They are only accessible in the middleware function", "They are used to capture values specified at their position in the URL", "They cannot be optional"], answer: "They are used to capture values specified at their position in the URL"},
        {question: "5) What is the purpose of the `next` function in an Express.js middleware?", options: ["To send the response to the client", "To handle errors in the application", "To pass control to the next middleware function", "To close the server"], answer: "To pass control to the next middleware function"},
        {question: "6) How can you handle errors globally in an Express.js application?", options: ["By using a dedicated error-handling middleware", "By wrapping all routes in try-catch blocks", "By setting a global error variable", "By using the `process.on('error')` event"], answer: "By using a dedicated error-handling middleware"},
        {question: "7) In Express.js, what is the purpose of `app.listen(port, callback)`?", options: ["To create an HTTP server instance", "To start the Express application on a specific port", "To listen for incoming connections on the specified port", "All of the above"], answer: "All of the above"},
        {question: "8) Which middleware is commonly used in Express.js to parse incoming request bodies?", options: ["`body-parser`", "`express-session`", "`cookie-parser`", "`morgan`"], answer: "`body-parser`"},
        {question: "9) How can you define a route that handles all HTTP methods in Express.js?", options: ["`app.all(path, handler)`", "`app.any(path, handler)`", "`app.use(path, handler)`", "`app.handle(path, handler)`"], answer: "`app.all(path, handler)`"},
        {question: "10) In Express.js, how can you serve a JSON response to a client?", options: ["res.send(jsonObject)", "res.json(jsonObject)", "res.send(JSON.stringify(jsonObject))", "All of the above"], answer: "res.json(jsonObject)"},
    ],
  };
  
  let currentQuiz = [];
  let currentQuestionIndex = 0;
  let score = 0;
  let selectedAnswers = [];
  
  function showLanguageOptions() {
    fadeOut(document.getElementById('welcome-screen'), () => {
        fadeIn(document.getElementById('language-options'));
    });
  }
  
  function startQuiz(language) {
    currentQuiz = quizData[language];
    currentQuestionIndex = 0;
    score = 0;
    selectedAnswers = new Array(currentQuiz.length).fill(null);
    fadeOut(document.getElementById('language-options'), () => {
        document.getElementById('quiz-title').innerText = `${language} Quiz`;
        fadeIn(document.getElementById('quiz-container'));
        showQuestion();
    });
  }
  
  function showQuestion() {
    const questionData = currentQuiz[currentQuestionIndex];
    document.getElementById('question-container').innerHTML = `
        <h3>${questionData.question}</h3>
        ${questionData.options.map((option, index) => `
            <div>
                <input type="radio" id="option${index}" name="quiz-option" value="${option}" ${selectedAnswers[currentQuestionIndex] === option ? 'checked' : ''}>
                <label for="option${index}">${option}</label>
            </div>
        `).join('')}
    `;
    
    document.getElementById('prev-btn').disabled = currentQuestionIndex === 0;
    document.getElementById('next-btn').classList.toggle('hidden', currentQuestionIndex === currentQuiz.length - 1);
    document.getElementById('submit-btn').classList.toggle('hidden', currentQuestionIndex !== currentQuiz.length - 1);
  }
  
  function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        fadeOut(document.getElementById('quiz-container'), () => {
            showQuestion();
            fadeIn(document.getElementById('quiz-container'));
        });
    }
  }
  
  function nextQuestion() {
    const selectedOption = document.querySelector('input[name="quiz-option"]:checked');
    if (selectedOption) {
        selectedAnswers[currentQuestionIndex] = selectedOption.value;
        if (selectedOption.value === currentQuiz[currentQuestionIndex].answer) {
            score++;
        }
        currentQuestionIndex++;
        fadeOut(document.getElementById('quiz-container'), () => {
            showQuestion();
            fadeIn(document.getElementById('quiz-container'));
        });
    } else {
        alert('Please First Select An Option');
    }
  }
  
  function submitQuiz() {
    const selectedOption = document.querySelector('input[name="quiz-option"]:checked');
    if (selectedOption) {
        selectedAnswers[currentQuestionIndex] = selectedOption.value;
        if (selectedOption.value === currentQuiz[currentQuestionIndex].answer) {
            score++;
        }
        fadeOut(document.getElementById('quiz-container'), () => {
            const resultMessage = score >= 8 ? "Well done!" : "You need a practice! Best of luck! and TRY AGAIN LATER!";
            document.getElementById('result-message').innerText = resultMessage;
            document.getElementById('score').innerText = `Your score is ${score} out of ${currentQuiz.length}`;
            fadeIn(document.getElementById('result-screen'));
        });
    } else {
        alert('Please select an option');
    }
  }
  
  function fadeOut(element, callback) {
    element.style.opacity = 1;
    const fadeEffect = setInterval(() => {
        if (element.style.opacity > 0) {
            element.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffect);
            element.classList.add('hidden');
            if (callback) callback();
        }
    }, 50);
  }
  
  function fadeIn(element) {
    element.classList.remove('hidden');
    element.style.opacity = 0;
    const fadeEffect = setInterval(() => {
        if (element.style.opacity < 1) {
            element.style.opacity = parseFloat(element.style.opacity) + 0.1;
        } else {
            clearInterval(fadeEffect);
        }
    }, 50);
  }