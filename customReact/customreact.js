function customRender(ReactElement, container) {
  const domElement = document.createElement(ReactElement.type);
  domElement.innerHTML = ReactElement.children;
  for (const prop in ReactElement.props) {
    if (prop === "children") continue;
    domElement.setAttribute(prop, ReactElement.props[prop]);
  }
  container.appendChild(domElement);
}

const ReactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit Google",
};

const mainContainer = document.querySelector("#root");
customRender(ReactElement, mainContainer);
