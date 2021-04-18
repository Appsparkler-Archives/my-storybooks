# React Mark JS
<small> 🍬 A React wrapper around the popular [mark.js](https://markjs.io) library. </small>

<img src="https://user-images.githubusercontent.com/12084821/115141060-0c5e3980-a058-11eb-8f6f-ccee78dd3858.png" width="100%" />

<br />


### Contents
- [Docs ↗](https://www.appsparkler.com/docs/react-mark-js/?path=/docs/introduction--single-string)
- [Demo ↗](https://stackblitz.com/edit/react-mark-js?file=src/examples/index.js)
- [Single Page Doc](#single-page-doc)


# Single Page Doc 

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

> NOTE: [`mark-js`](https://npmjs.com/package/mark.js) is a peer dependency

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
<hr />

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
<hr />

# 🎛 Components

## ⚡️ `<Marker />` [Stack Blitz Demo ↗](https://stackblitz.com/edit/react-mark-js?file=src/examples/MarkerExamples/index.js)
> A wrapper component to higlight text-content matching strings.

```jsx
import React from "react";
import Marker from "react-mark.js/Marker"; // or, import {Marker} from 'react-mark.js'

const MarkerExamples = () => {
  return (
    <div>
      <h2>Single String</h2>
      <Marker mark="Ullamco qui deserunt ut reprehenderit">
        Cillum proident eu eiusmod incididunt pariatur. 
        Ullamco qui deserunt ut
        reprehenderit cupidatat cupidatat nisi non 
        occaecat non commodo. Magna
        incididunt eu laboris laboris labore.
      </Marker>
      <h2>Multiple Strings</h2>
      <Marker mark={["eiusmod incididunt", "commodo. Magna"]}>
        Cillum proident eu eiusmod incididunt pariatur. 
        Ullamco qui deserunt ut
        reprehenderit cupidatat cupidatat nisi non occaecat 
        non commodo. Magna
        incididunt eu laboris laboris labore.
      </Marker>
      <h2>Configure Wrapper Element</h2>
      <Marker 
        as="section" 
        mark="Ullamco qui deserunt ut reprehenderit"
      >
        Cillum proident eu eiusmod incididunt pariatur. 
        Ullamco qui deserunt ut reprehenderit cupidatat 
        cupidatat nisi non occaecat non commodo. 
        Magna incididunt eu laboris laboris labore.
      </Marker>
      <h2>With Options</h2>
      <Marker
        as="section"
        mark="nisi non occaecat"
        options={{
          className: "custom-marker-1"
        }}
      >
        Cillum proident eu eiusmod incididunt pariatur. 
        Ullamco qui deserunt ut reprehenderit cupidatat 
        cupidatat nisi non occaecat non commodo. Magna
        incididunt eu laboris laboris labore.
      </Marker>
    </div>
  );
};

export default MarkerExamples;

```
<hr />

## ⚡️ `<RegExpMarker />` [Stack Blitz Demo ↗](https://stackblitz.com/edit/react-mark-js?file=src/examples/RegExpMarkerExamples/index.js)

> A wrapper component to higlight strings matching 
a regular expression.

```jsx
import React from "react";
import { RegExpMarker } from "react-mark.js";

const RegExpMarkerExamples = () => (
  <div>
    <h2>Marking with RegExp</h2>
    <RegExpMarker mark={/qui/}>
      Cillum proident eu eiusmod incididunt pariatur. Ullamco qui deserunt ut
      reprehenderit cupidatat cupidatat nisi non occaecat non commodo. Magna
      incididunt eu laboris laboris labore.{" "}
    </RegExpMarker>
  </div>
);

export default RegExpMarkerExamples;
```
<hr />

## ⚡️ `<RangesMarker />` [Stack Blitz Demo ↗](https://stackblitz.com/edit/react-mark-js?file=src/examples/RangesExample/index.js)

> Sometimes you may want to mark text-content based on the
position in the text content instead of a string. For ex.
you would like to mark 5 letters from the 3rd position of text.

```jsx
import React from "react";
import RangesMarker from "react-mark.js/RangesMarker";
// or import {RangesMarker} from 'react-mark.js'
const blue = { color: "blue" };
export const RangesExample = () => {
  return (
    <div>
      <h2>Single Range</h2>
      <RangesMarker
        style={blue}
        mark={[
          {
            length: 5,
            start: 3
          }
        ]}
      >
        <h3>0123456789</h3>
      </RangesMarker>
      <h2>Multiple Ranges</h2>
      <RangesMarker
        style={blue}
        mark={[
          {
            length: 5,
            start: 3
          },
          {
            length: 15,
            start: 11
          }
        ]}
      >
        <h3>0123456789 123456789 123456789 123456789</h3>
      </RangesMarker>
      <h2>With Options</h2>
      <RangesMarker
        mark={[
          {
            length: 5,
            start: 3
          },
          {
            length: 15,
            start: 11
          }
        ]}
        options={{
          className: "custom-marker-1"
        }}
      >
        <h3 style={blue}>0123456789 123456789 123456789 123456789</h3>
      </RangesMarker>
    </div>
  );
};

export default RangesExample;
```
<hr />

# 🪝 Hooks
##  `useMarker` [Stack Blitz Demo ↗️](https://stackblitz.com/edit/react-mark-js?file=src/examples/HookExample/index.js)


This recipe is for more custom configuration as you can
access the `markerRef` and `marker` (which is a [MarkJS](https://markjs.io) instance).

- `markerRef` - you would pass this to the component wrapping your element.
- `marker` - a [MarkJS](https://markjs.io) instance which has an [API](https://markjs.io/#api)
  for marking and un-marking.

Lets dive into an example which will make things more clearer.

```jsx
import React from "react";
import { useMarker } from "react-mark.js";

const MyContent = () => {
  const { markerRef, marker } = useMarker();

  React.useEffect(() => {
    if (marker) {
      marker.mark("orl");
    }
  }, [marker]);

  const mark = React.useCallback(() => {
    marker.mark("Hello"); // https://markjs.io#mark
  }, [marker]);

  const unmark = React.useCallback(() => {
    marker.unmark(); // https://markjs.io#unmark
  }, [marker]);

  return (
    <div ref={markerRef}>
      Hello World
      <button onClick={mark}>Mark</button>
      &nbsp;
      <button onClick={unmark}>Unmark</button>
    </div>
  );
};

export default MyContent;
```
<hr />

# Options

## ⚡️ `options` (optional prop)
You can pass any of these options to the options props (source - [mark.js](https://markjs.io#mark)):

<table>
    <thead><tr><th>Option</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
    <tbody>
        <tr><td>element</td><td>string</td><td>"mark"</td><td>HTML element to wrap matches, e.g. <code>span</code></td></tr>
        <tr><td>className</td><td>string</td><td>""</td><td>A class name that will be appended to <code>element</code></td></tr>
        <tr><td>exclude</td><td>array</td><td>[ ]</td><td>An array with exclusion selectors. Matches inside these elements will be ignored. Example: <code>"filter": ["h1", ".ignore"]</code></td></tr>
        <tr><td>separateWordSearch</td><td>boolean</td><td>true</td><td>Whether to search for each word separated by a blank instead of the complete term</td></tr>
        <tr><td>accuracy</td><td>string or object</td><td>"partially"</td><td>Either one of the following string values:<ul><li>"partially": When searching for "lor" only "lor" inside "lorem" will be marked</li><li>"complementary": When searching for "lor" the whole word "lorem" will be marked</li><li>"exactly": When searching for "lor" only those exact words with a word boundary will be marked. In this example nothing inside "lorem". This value is equivalent to the previous option <i>wordBoundary</i></li></ul>Or an object containing two properties:<ul><li>"value": One of the above named string values</li><li>"limiters": A custom array of string limiters for accuracy "exactly" or "complementary". Read more about this <a href="#accuracy">in the tutorials section</a></li></ul></td></tr>
        <tr><td>diacritics</td><td>boolean</td><td>true</td><td>If <a href="https://en.wikipedia.org/wiki/Diacritic">diacritic</a> characters should be matched. For example "piękny" would also match "piekny" and "doner" would also match "döner"</td></tr>
        <tr><td>synonyms</td><td>object</td><td>&#123;&#125;</td><td>An object with synonyms. The key will be a synonym for the value and the value for the key. Example: <code>synonyms: &#123;"one": "1"&#125;</code> will add the synonym "1" for "one" and vice versa</td></tr> 
        <tr><td>iframes</td><td>boolean</td><td>false</td><td>Whether to search also inside iframes. If you don't have permissions to some iframes (e.g. because they have a <a href="https://en.wikipedia.org/wiki/Same-origin_policy">different origin</a>) they will be silently skipped. If you don't want to search inside specific iframes (e.g. facebook share), you can pass an <code>exclude</code> selector that matches these iframes</td></tr>
        <tr><td>iframesTimeout</td><td>number</td><td>5000</td><td>The maximum ms to wait for a <code>load</code> event before skipping an iframe. Especially important when there's no internet connection or a browser "offline" mode is enabled and an iframe has an online <code>src</code> – then the <code>load</code> event is never fired</td></tr>
        <tr><td>acrossElements</td><td>boolean</td><td>false</td><td>Whether to search for matches across elements</td></tr>
        <tr><td>caseSensitive</td><td>boolean</td><td>false</td><td>Whether to search case sensitive</td></tr>
        <tr><td>ignoreJoiners</td><td>boolean</td><td>false</td><td>Whether to also find matches that contain soft hyphen, zero width space, zero width non-joiner and zero width joiner. They're used to indicate a point for a line break where there isn't enough space to show the full word</td></tr>
        <tr><td>ignorePunctuation</td><td>array</td><td>[ ]</td><td>An array of punctuation mark strings. These punctuation marks can be between any characters, e.g. setting this option to <code>["'"]</code> would match "Worlds", "World's" and "Wo'rlds". One or more apostrophes between the letters would still produce a match (e.g. "W'o''r'l'd's"). A typical setting for this option could be as follows: <code>":;.,-–—‒_(){}[]!'\"+=".split("")</code></td></tr>
        <tr><td>wildcards</td><td>string</td><td>"disabled"</td><td>Set to any of the following string values:<ul><li>"disabled": Disable wildcard usage</li><li>"enabled": When searching for "lor?m", the "?" will match zero or one non-space character (e.g. "lorm", "loram", "lor3m", etc). When searching for "lor*m", the "*" will match zero or more non-space characters (e.g. "lorm", "loram", "lor123m", etc).</li><li>"withSpaces": When searching for "lor?m", the "?" will match zero or one space or non-space character (e.g. "lor m", "loram", etc). When searching for "lor*m", the "*" will match zero or more space or non-space characters (e.g. "lorm", "lore et dolor ipsum", "lor: m", etc).</li></ul></td></tr>
        <tr><td>each</td><td>function</td><td></td><td>A callback for each marked element. Receives the marked DOM element as a parameter</td></tr>
        <tr><td>filter</td><td>function</td><td></td><td>A callback to filter or limit matches. It will be called for each match and receives the following parameters:<ol><li>The text node which includes the match</li><li>The term that has been found</li><li>A counter indicating the total number of all marks at the time of the function call</li><li>A counter indicating the number of marks for the term</li></ol>The function must return false if the mark should be stopped, otherwise true</td></tr>
        <tr><td>noMatch</td><td>function</td><td></td><td>A callback function that will be called when there are no matches. Receives the not found term as a parameter</td></tr>
        <tr><td>done</td><td>function</td><td></td><td>A callback function after all marks are done. Receives the total number of marks as a parameter</td></tr>
        <tr><td>debug</td><td>boolean</td><td>false</td><td>Set this option to <code>true</code> if you want to log messages</td></tr>
        <tr><td>log</td><td>object</td><td>console</td><td>Log messages to a specific object (only if <code>debug</code> is true)</td></tr>
    </tbody>
</table>

<hr />

## ⚡️ `unmarkOptions` (optional prop)

Any of the following options can be passed
to the `unmarkOptions prop` in the available components
or hook (source - [mark.js](https://markjs.io#unmark)):.

<br />
<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th>Option</th>
      <th>Type</th>
      <th>Default</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>element</td>
      <td>string</td>
      <td>""</td>
      <td>Will remove only marked elements with this specific element</td>
    </tr>
    <tr>
      <td>className</td>
      <td>string</td>
      <td>""</td>
      <td>Will remove only marked elements with this specific class name</td>
    </tr>
    <tr>
      <td>exclude</td>
      <td>array</td>
      <td>[ ]</td>
      <td>
        An array with exclusion selectors. These elements will be ignored.
        Example: <code>"filter": ["h1", ".ignore"]</code>
      </td>
    </tr>
    <tr>
      <td>iframes</td>
      <td>boolean</td>
      <td>false</td>
      <td>
        Whether to search also inside iframes. If you don't have permissions to
        some iframes (e.g. because they have a{" "}
        <a href="https://en.wikipedia.org/wiki/Same-origin_policy">
          different origin
        </a>
        ) they will be silently skipped. If you don't want to search inside specific
        iframes (e.g. facebook share), you can pass an <code>exclude</code> selector
        that matches these iframes
      </td>
    </tr>
    <tr>
      <td>iframesTimeout</td>
      <td>number</td>
      <td>5000</td>
      <td>
        The maximum ms to wait for a <code>load</code> event before skipping an
        iframe. Especially important when there's no internet connection or a
        browser "offline" mode is enabled and an iframe has an online{" "}
        <code>src</code> – then the <code>load</code> event is never fired
      </td>
    </tr>
    <tr>
      <td>done</td>
      <td>function</td>
      <td></td>
      <td>A callback function after all marked elements were removed</td>
    </tr>
    <tr>
      <td>debug</td>
      <td>boolean</td>
      <td>false</td>
      <td>
        Set this option to <code>true</code> if you want to log messages
      </td>
    </tr>
    <tr>
      <td>log</td>
      <td>object</td>
      <td>console</td>
      <td>
        Log messages to a specific object (only if <code>debug</code> is true)
      </td>
    </tr>
  </tbody>
</table>
