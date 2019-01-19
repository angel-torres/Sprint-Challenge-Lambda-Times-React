- [ ] What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.
    Prototypes are used to check that every prop passed down to a child component is the correct data type (string, bool, array, etc.). It's important to type check our props because it will prevent errors. If there ever happens where the right type of prop is not being passed down, we will get a warning. 

- [ ] Describe a life-cycle event in React?
    The react life cycle has different stages. The most important stages are when the constructor function is run,then when the component is rendered, and lastly componentDidMount. This lifecycle can be used to our advantage to run certain functions within each stage. For example if we need to make a request to the server we can take advantage of this lifecycle so that even though the data we requested isn't available yet, we can still display something on the page while we wait for the data. 

- [ ] Explain the details of a Higher Order Component?
    Higher order components are simply components that take in other components as parameters and output JSX.

- [ ] What are three different ways to style components in React? Explain some of the benefits of each.
    We can use a css file to style components. This is the most basic and straightforward way. We can also use a compiler like Less or Sass. Compilers make it easier to write Css so that it becomes more organized. Lastly we can use the styled-components library from react. This allows us to compartmentalize our components so that all the styles and component code are in a single file. It keeps styles from leaking to other files that might have the same class names. 
