# React Mark JS

## [Stack Blitz Demo ↗](https://stackblitz.com/edit/react-mark-js?file=src/examples/index.js)

> 🍬 A React wrapper around the popular [mark.js](https://markjs.io) library.

# ⚡️ Installation

The best way to install `react-mark.js` is via the
`npm` package which you can install with `npm` (or `yarn` if you prefer)

## 📦 NPM

```sh
npm install -S mark.js react-mark.js
```

## 📦 Yarn

```sh
yarn add mark.js react-mark.js
```

# ↘️ Importing Components

You can choose to import single components like `react-mark.js/Marker` rather
than the entire component library.

```jsx
import Marker from "react-mark.js/Marker";
// or; if you prefer
import { Marker } from "react-marker.js";
```

# 🖌 Basic Example

```jsx
import Marker from "react-mark.js/Marker";
// or; if you prefer
import { Marker } from "react-mark.js";

export default () => (
  <Marker mark="reprehenderit">
    Cillum proident eu eiusmod incididunt pariatur. 
    Ullamco qui deserunt ut reprehenderit cupidatat cupidatat 
    nisi non occaecat non commodo. Magna 
    incididunt eu laboris laboris labore. Sit duis 
    ullamco qui nostrud aliqua do
    consectetur do incididunt eiusmod nulla consectetur. 
    Sint reprehenderit culpa consectetur irure commodo magna. 
    Officia Lorem veniam est cillum.
  </Marker>
);
```

# 💇‍♂️ Styling

When you wrap a component with `<Marker />`; the text-content
that you are trying to highlight will automatically be wrapped
with `<mark /> HTML Element`.

<mark>Mark Elements usual</mark>ly comes with default styles and that may be
enough for some use cases.

Custom configuration for this inline `<mark />` element depends on
the style-framework that is integrated in your application.

## CSS - Single Element [(demo ↗)](https://stackblitz.com/edit/react-mark-js?file=src/examples/CSSExample/index.js)

If you have your styles in a CSS file; you can simply add styles for
the `mark element` in your CSS stylesheet:


```CSS
mark {
    background-color: deeppink;
}
```

If you multiple markers on your page and want to style each one
differently that too is possible.

## CSS - Multiple Elements [(demo ↗)](https://stackblitz.com/edit/react-mark-js?file=src/examples/CSSExample/index.js)

If you want to mark each element differently you need
to pass a `className` in the options object to
`<Marker />` element and then add the styles for
each class.

<div id="react-mark-js-css-example"></div>

```jsx
<Marker
    options={{className: 'custom-marker-1'}}
    mark="hello"
>
    Hello World
</Marker>

<Marker
    options={{className: 'custom-marker-2'}}
    mark="hello"
>
    Hello World
</Marker>
```

Now, add the CSS styles for each class

```css
mark.custom-marker-1 {
  background-color: orange;
  padding: 2px;
}

mark.custom-marker-2 {
  background-color: lightgreen;
  padding: 2px;
}
```

## Styled Components [(demo ↗)](https://stackblitz.com/edit/react-mark-js?file=src/examples/StyledComponentsExample/index.js)

You can simply pass the `Marker` to the styled component
and style it. For ex:

```jsx
import styled from "styled-components";

export const OrangeMarker = styled(Marker)`
  mark {
    background-color: orange !important;
  }
`;

export const LightGreenMarker = styled(Marker)`
  mark {
    background-color: lightgreen;
  }
`;
```
