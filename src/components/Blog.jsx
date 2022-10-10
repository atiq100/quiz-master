import React from "react";

const Blog = () => {
  return (
    <div className="text-center mt-14">
      <h2 className="text-xl font-bold">
        What is the perpose of React Router?
      </h2>
      <br></br>
      <p>
        React Router is a standard library for routing in React.<br></br>
        It enables the navigation among views of various <br></br>
        components in a React Application, allows changing<br></br>
        the browser URL, and keeps the UI in sync with the URL.
      </p>
      <br></br>
      <h2 className="text-xl font-bold">How does context API works?</h2>
      <br></br>
      <p>
        The React Context API is a way for a React app to effectively produce
        global variables<br></br>
        that can be passed around. This is the alternative to "prop drilling" or
        moving props<br></br>
        from grandparent to child to parent, and so on. Context is also touted
        as an easier, <br></br>
        lighter approach to state management using Redux.<br></br>
        React.createContext() is all you need. It returns a consumer and a
        provider.<br></br>
        Provider is a component that as it's names suggests provides the state
        to its children.<br></br>
        It will hold the "store" and be the parent of all the components that
        might need that store.<br></br>
        Consumer as it so happens is a component that consumes and uses the
        state
      </p>
      <br></br>
      <h2 className="text-xl font-bold">What is useRef?</h2>
      <br></br>
      <p>
        The useRef Hook allows you to persist values between renders.<br></br>
        It can be used to store a mutable value that does not cause a re-render
        when updated.<br></br>
        It can be used to access a DOM element directly.<br></br>
        If we tried to count how many times our application renders using
        <br></br>
        the useState Hook, we would be caught in an infinite loop since this
        Hook<br></br>
        itself causes a re-render.
      </p>
    </div>
  );
};

export default Blog;
