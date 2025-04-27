import { createElement, render, useSignal, useAfter, useAnchor } from "dominoz";

function injectStyles() {
  const style = document.createElement("style");
  style.textContent = `
:root {
  /* Light Theme Variables */
  --background: hsl(0 0% 100%); /* White background */
  --foreground: hsl(222.2 84% 4.9%); /* Dark text */
  --card: hsl(0 0% 100%); /* White cards */
  --card-foreground: hsl(222.2 84% 4.9%); /* Dark text in cards */
  --popover: hsl(0 0% 100%);
  --popover-foreground: hsl(222.2 84% 4.9%);
  --primary: hsl(221.2 83.2% 53.3%); /* Blue primary */
  --primary-foreground: hsl(210 40% 98%); /* Light text on primary */
  --secondary: hsl(210 40% 96.1%); /* Light gray secondary */
  --secondary-foreground: hsl(222.2 47.4% 11.2%); /* Dark text on secondary */
  --muted: hsl(210 40% 96.1%); /* Light gray muted */
  --muted-foreground: hsl(215.4 16.3% 46.9%); /* Gray muted text */
  --accent: hsl(217.2 91.2% 59.8%); /* Blue accent */
  --accent-foreground: hsl(210 40% 98%); /* Light text on accent */
  --destructive: hsl(0 84.2% 60.2%); /* Red destructive */
  --destructive-foreground: hsl(210 40% 98%);
  --border: hsl(214.3 31.8% 91.4%); /* Light gray border */
  --input: hsl(214.3 31.8% 91.4%); /* Light gray input border */
  --ring: hsl(221.2 83.2% 53.3%); /* Blue ring focus */
  --radius: 0.5rem;
  --font-sans: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  --font-mono: 'SFMono-Regular', Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;

  /* Specific override for code blocks in light theme */
  --code-bg: hsl(210 40% 96.1%); /* Light background for code */
  --code-text: hsl(215.4 16.3% 46.9%); /* Darker text for code */
  --code-block-bg: hsl(210 30% 97%); /* Slightly different bg for pre */
  --code-block-text: hsl(222.2 47.4% 11.2%); /* Main text color for pre content */
  --code-block-border: hsl(214.3 31.8% 91.4%);
}

/* Removed [data-theme="dark"] styles */

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid var(--border);
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-sans);
  background-color: var(--background);
  color: var(--foreground);
  line-height: 1.65;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 3rem 1.5rem;
}

/* Header */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--border);
  margin-bottom: 3rem;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--foreground);
  text-decoration: none;
}

.logo img {
  height: 32px;
  width: 32px;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
}

.nav-links a {
  color: var(--muted-foreground);
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.2s ease-in-out;
}

.nav-links a:hover {
  color: var(--foreground);
}

/* Main Content */
h1, h2, h3, h4, h5, h6 {
  margin-top: 2.5em;
  margin-bottom: 1em;
  font-weight: 600;
  line-height: 1.3;
  color: var(--foreground);
}

h1 { font-size: 2.25rem; letter-spacing: -0.02em; }
h2 { font-size: 1.75rem; border-bottom: 1px solid var(--border); padding-bottom: 0.5rem; }
h3 { font-size: 1.25rem; }
h4 { font-size: 1.1rem; }

p, ul, ol {
  margin-bottom: 1.25rem;
  color: var(--foreground);
}

ul, ol {
  padding-left: 1.5rem;
}

li {
  margin-bottom: 0.5rem;
}

a {
  color: var(--primary);
  text-decoration: none;
  transition: opacity 0.2s;
}

a:hover {
  opacity: 0.8;
  text-decoration: underline;
}

/* Code Blocks */
pre {
  background-color: var(--code-block-bg); /* Use light theme variable */
  color: var(--code-block-text); /* Use light theme variable */
  padding: 1.5rem;
  border-radius: var(--radius);
  overflow-x: auto;
  font-family: var(--font-mono);
  font-size: 0.9rem;
  line-height: 1.6;
  margin: 1.5rem 0;
  border: 1px solid var(--code-block-border); /* Use light theme variable */
}

code {
  font-family: var(--font-mono);
  font-size: 0.9em;
  background-color: var(--code-bg); /* Use light theme variable */
  color: var(--code-text); /* Use light theme variable */
  padding: 0.2em 0.4em;
  border-radius: 0.3rem;
}

pre code {
  background-color: transparent;
  padding: 0;
  border-radius: 0;
  color: inherit;
  font-size: inherit;
}

/* Interactive Example Card */
.interactive-card {
  background-color: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.03);
}

.interactive-card h3 {
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  border-bottom: none;
  padding-bottom: 0;
}

/* Buttons */
button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius);
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s, border-color 0.2s, opacity 0.2s;
  background-color: var(--primary);
  color: var(--primary-foreground);
  border: 1px solid var(--primary);
  margin-right: 0.5rem;
}

button:hover {
  opacity: 0.9;
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Input */
input[type="text"],
input[type="email"],
input[type="password"] {
  display: block;
  width: 100%;
  padding: 0.6rem 0.8rem;
  border: 1px solid var(--input);
  border-radius: var(--radius);
  background-color: var(--background);
  color: var(--foreground);
  font-size: 0.9rem;
  margin-bottom: 1rem;
  transition: border-color 0.2s, box-shadow 0.2s;
}

input:focus {
  outline: none;
  border-color: var(--ring);
  box-shadow: 0 0 0 2px hsla(var(--ring), 0.3);
}

/* Footer */
.footer {
  text-align: center;
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border);
  font-size: 0.875rem;
  color: var(--muted-foreground);
}

.footer a {
  color: var(--accent);
}
  `;
  document.head.appendChild(style);

  let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
  if (!link) {
    link = document.createElement("link");
    link.rel = "icon";
    document.head.appendChild(link);
  }
  link.href = "/public/favicon-light.png";
}

function Paragraph({ text }: { text: string }) {
  const parts = text.split(/(\[.*?\]\(.*?\))/g);
  return createElement(
    "p",
    {},
    ...parts
      .map((part) => {
        const match = part.match(/\[(.*?)\]\((.*?)\)/);
        if (match) {
          return createElement(
            "a",
            { href: match[2], target: "_blank", rel: "noopener noreferrer" },
            match[1]
          );
        }
        // Handle inline code `...`
        const codeParts = part.split(/(`[^`]+`)/g);
        return codeParts.map((codePart) => {
          if (codePart.startsWith("`") && codePart.endsWith("`")) {
            return createElement("code", {}, codePart.slice(1, -1));
          }
          return codePart;
        });
      })
      .flat()
  );
}

function CodeBlock({
  code,
  language = "typescript",
}: {
  code: string;
  language?: string;
}) {
  return createElement(
    "pre",
    {},
    createElement("code", { class: `language-${language}` }, code.trim())
  );
}

function DocSection({
  id,
  title,
  children = [],
}: {
  id: string;
  title: string;
  children?: any[];
}) {
  return createElement(
    "section",
    { id: id },
    createElement("h2", {}, title),
    ...children
  );
}

function InteractiveExample({
  title,
  code,
  children,
}: {
  title: string;
  code: string;
  children: any;
}) {
  return createElement(
    "div",
    {},
    createElement("h3", {}, title),
    createElement(CodeBlock, { code: code }),
    createElement("div", { class: "interactive-card" }, children)
  );
}

function CounterExample() {
  const [count, setCount] = useSignal(0);
  const buttonRef = useAnchor<HTMLButtonElement | null>(null);

  return createElement(
    "div",
    {},
    createElement("p", {}, `Current Count: ${count}`),
    createElement(
      "button",
      { ref: buttonRef, onclick: () => setCount(count + 1) },
      "Increment"
    ),
    createElement(
      "button",
      { onclick: () => setCount(count - 1), style: { marginLeft: "8px" } },
      "Decrement"
    )
  );
}

const counterExampleCode = `
function CounterExample() {
  const [count, setCount] = useSignal(0);
  const buttonRef = useAnchor<HTMLButtonElement | null>(null);

  return createElement(
    'div',
    {},
    createElement('p', {}, \`Current Count: \${count}\`),
    createElement('button', { ref: buttonRef, onclick: () => setCount(count + 1) }, 'Increment'),
    createElement('button', { onclick: () => setCount(count - 1) }, 'Decrement')
  );
}`;

function ToggleExample() {
  const [isOn, setIsOn] = useSignal(false);
  const toggle = () => setIsOn(!isOn);

  return createElement(
    "div",
    {},
    createElement("p", {}, `The toggle is currently: ${isOn ? "ON" : "OFF"}`),
    createElement("button", { onclick: toggle }, `Turn ${isOn ? "OFF" : "ON"}`)
  );
}

const toggleExampleCode = `
function ToggleExample() {
  const [isOn, setIsOn] = useSignal(false);
  const toggle = () => setIsOn(!isOn);

  return createElement(
    'div',
    {},
    createElement('p', {}, \`The toggle is currently: \${isOn ? 'ON' : 'OFF'}\`),
    createElement('button', { onclick: toggle }, \`Turn \${isOn ? 'OFF' : 'ON'}\`)
  );
}`;

function InputExample() {
  const [text, setText] = useSignal("");

  return createElement(
    "div",
    {},
    createElement("input", {
      type: "text",
      value: text,
      placeholder: "Type something...",
      oninput: (e: Event) => setText((e.target as HTMLInputElement).value),
    }),
    createElement("p", {}, `You typed: ${text}`)
  );
}

const inputExampleCode = `
function InputExample() {
    const [text, setText] = useSignal('');

    return createElement(
        'div',
        {},
        createElement('input', {
            type: 'text',
            value: text,
            placeholder: 'Type something...',
            oninput: (e: Event) => setText((e.target as HTMLInputElement).value)
        }),
        createElement('p', {}, \`You typed: \${text}\`)
    );
}`;

function DocumentTitleExample() {
  const [count, setCount] = useSignal(0);

  useAfter(() => {
    document.title = `DOMinoz Counter: ${count}`;
    console.log(`useAfter: Document title updated to 'DOMinoz Counter: ${count}'`);

    return () => {
      document.title = "DOMinoz";
      console.log("useAfter cleanup: Reset document title");
    };
  }, [count]);

  return createElement(
    "div",
    {},
    createElement("p", {}, `Current Count (Check Tab Title): ${count}`),
    createElement(
      "button",
      { onclick: () => setCount(count + 1) },
      "Increment Count"
    )
  );
}

const documentTitleExampleCode = `
function DocumentTitleExample() {
  const [count, setCount] = useSignal(0);

  useAfter(() => {
    document.title = \`DOMinoz Counter: \${count}\`;
    console.log(\`useAfter: Document title updated to 'DOMinoz Counter: \${count}'\`);

    return () => {
      document.title = "DOMinoz Docs";
      console.log("useAfter cleanup: Reset document title");
    };
  }, [count]);

  return createElement(
    'div',
    {},
    createElement('p', {}, \`Current Count (Check Tab Title): \${count}\`),
    createElement('button', { onclick: () => setCount(count + 1) }, 'Increment Count')
  );
}`;


function InputFocusExample() {
  const inputRef = useAnchor<HTMLInputElement | null>(null);

  useAfter(() => {
    if (inputRef.current) {
      inputRef.current.focus({ preventScroll: true });
      console.log("useAfter (mount): Focused input element without scrolling.");
    }
  }, []);

  const handleFocusClick = () => {
    inputRef.current?.focus();
    console.log("Button Click: Re-focused input element.");
  };

  return createElement(
    "div",
    {},
    createElement("input", {
      ref: inputRef,
      type: "text",
      placeholder: "I should be focused (no scroll)!",
    }),
    createElement(
      "button",
      { onclick: handleFocusClick, style: { marginTop: "8px" } },
      "Re-focus Input"
    )
  );
}

const inputFocusExampleCode = `
function InputFocusExample() {
  const inputRef = useAnchor<HTMLInputElement | null>(null);

  useAfter(() => {
    if (inputRef.current) {
      inputRef.current.focus({ preventScroll: true });
      console.log("useAfter (mount): Focused input element without scrolling.");
    }
  }, []);

  const handleFocusClick = () => {
    inputRef.current?.focus();
    console.log("Button Click: Re-focused input element.");
  };

  return createElement(
    'div',
    {},
    createElement('input', {
      ref: inputRef,
      type: 'text',
      placeholder: 'I should be focused (no scroll)!'
    }),
    createElement(
      'button',
      { onclick: handleFocusClick, style: { marginTop: '8px' } },
      'Re-focus Input'
    )
  );
}`;

function AppHeader() {
  return createElement(
    "header",
    { class: "header" },
    createElement(
      "a",
      { href: "#", class: "logo" },
      createElement("img", {
        src: "/public/favicon-dark.png",
        alt: "DOMinoz Logo",
      }),
      "DOMinoz Docs"
    ),
    createElement(
      "nav",
      { class: "nav-links" },
      createElement("a", { href: "#introduction" }, "Intro"),
      createElement("a", { href: "#core-concepts" }, "Concepts"),
      createElement("a", { href: "#api-reference" }, "API"),
      createElement("a", { href: "#examples" }, "Examples"),
      createElement(
        "a",
        {
          href: "https://github.com/rudrodip/DOMinoz",
          target: "_blank",
          rel: "noopener noreferrer",
        },
        "GitHub"
      ),
      createElement(
        "a",
        {
          href: "https://www.npmjs.com/package/dominoz",
          target: "_blank",
          rel: "noopener noreferrer",
        },
        "npm"
      )
    )
  );
}

function AppFooter() {
  return createElement(
    "footer",
    { class: "footer" },
    "Built with ",
    createElement(
      "a",
      {
        href: "https://github.com/rudrodip/DOMinoz",
        target: "_blank",
        rel: "noopener noreferrer",
      },
      "DOMinoz"
    ),
  );
}

function App() {
  return createElement(
    "div",
    { class: "container" },
    createElement(AppHeader),

    createElement(
      DocSection,
      { id: "introduction", title: "Introduction to DOMinoz" },
      createElement(Paragraph, {
        text: 'DOMinoz is a minimal DOM reconciliation engine featuring a synchronous "dominoz cascade" architecture.',
      }),
      createElement(Paragraph, {
        text: "It aims for explicit, predictable updates without hidden schedulers, while using a familiar Component/Element model.",
      }),
      createElement("h3", {}, "Philosophy & Goals"),
      createElement(
        "ul",
        {},
        createElement(
          "li",
          {},
          createElement("strong", {}, "Explicit, predictable updates:"),
          " No hidden schedulers or batching."
        ),
        createElement(
          "li",
          {},
          createElement("strong", {}, "Familiar surface:"),
          " Uses Component/Element terms similar to React."
        ),
        createElement(
          "li",
          {},
          createElement("strong", {}, "Dominoz cascade:"),
          " Controlled propagation of changes."
        )
      ),
      createElement("h3", {}, "Quick Start"),
      createElement(Paragraph, { text: "Install via npm:" }),
      createElement(CodeBlock, {
        code: "npm install dominoz",
        language: "bash",
      }),
      createElement(Paragraph, { text: "Or using bun:" }),
      createElement(CodeBlock, { code: "bun add dominoz", language: "bash" }),
      createElement(Paragraph, { text: "Basic setup:" }),
      createElement(CodeBlock, {
        code: `
import { createElement, render, useSignal } from 'dominoz';

function MyComponent() {
  const [msg, setMsg] = useSignal('Hello DOMinoz!');
  return createElement('div', {},
    createElement('h1', {}, msg),
    createElement('button', { onclick: () => setMsg('Updated!') }, 'Click Me')
  );
}

const root = document.getElementById('root');
if (root) render(createElement(MyComponent), root);
      `,
      })
    ),

    createElement(
      DocSection,
      { id: "core-concepts", title: "Core Concepts" },
      createElement("h3", {}, "Core Architecture"),
      createElement(Paragraph, {
        text: "DOMinoz has three primary subsystems:",
      }),
      createElement(
        "ol",
        {},
        createElement(
          "li",
          {},
          createElement("strong", {}, "VDOM Model:"),
          " Defines virtual DOM structure."
        ),
        createElement(
          "li",
          {},
          createElement("strong", {}, "Cascade System:"),
          " Handles diffing and reconciliation synchronously."
        ),
        createElement(
          "li",
          {},
          createElement("strong", {}, "Hook System:"),
          " Manages component state and lifecycle."
        )
      ),
      createElement("h3", {}, "VDOM Model (Virtual DOM)"),
      createElement(Paragraph, {
        text: "Plain JavaScript objects representing the desired DOM state.",
      }),
      createElement(CodeBlock, {
        code: `
interface VNode {
  type: string | ComponentFunction; // e.g., 'div' or MyComponent
  props: Record<string, any>;      // Attributes, event listeners, etc.
  children: (VNode | string)[];    // Child nodes or text (as received by component)
  key?: string | number;           // Optional key for list reconciliation
}`,
      }),
      createElement(Paragraph, {
        text: "Use `createElement(type, props, ...children)` to create VNodes. `createElement` handles flattening arrays passed as children arguments.",
      }),
      createElement("h3", {}, "Tiles & the Cascade System"),
      createElement(Paragraph, {
        text: "`Tile`: The internal unit tracking a component's render context (props, state, hooks, DOM node). Simpler than React's Fiber.",
      }),
      createElement(Paragraph, {
        text: "`Cascade`: The synchronous diffing process. When state changes, DOMinoz re-renders the affected subtree, compares the new VDOM with the old, and identifies differences.",
      }),
      createElement(Paragraph, {
        text: "`Dispatch`: Applying the identified changes (Create, Update, Remove operations) to the actual DOM.",
      }),
      createElement("h3", {}, "Reconciliation"),
      createElement(Paragraph, { text: "DOMinoz compares VNodes:" }),
      createElement(
        "ul",
        {},
        createElement("li", {}, "If types differ, the old node is replaced."),
        createElement(
          "li",
          {},
          "For HTML elements, props and attributes are updated."
        ),
        createElement(
          "li",
          {},
          "Children are reconciled, using keys if provided for efficient list updates."
        ),
        createElement(
          "li",
          {},
          "For components, the function is re-run, and the process recurses."
        )
      )
    ),

    createElement(
      DocSection,
      { id: "api-reference", title: "API Reference" },
      createElement("h3", {}, "Core API"),
      createElement("h4", {}, "`createElement(type, props?, ...children)`"),
      createElement(Paragraph, {
        text: "Creates a VNode representing an element or component.",
      }),
      createElement(CodeBlock, {
        code: `createElement('div', { id: 'main' }, 'Hello', createElement('span', {}, ' World'))`,
      }),
      createElement("h4", {}, "`render(vnode, container)`"),
      createElement(Paragraph, {
        text: "Renders a VNode tree into a DOM container element.",
      }),
      createElement(CodeBlock, {
        code: `render(createElement(App), document.getElementById('root'))`,
      }),
      createElement("h3", {}, "Hooks API"),
      createElement(Paragraph, {
        text: "Hooks provide state and lifecycle features to function components. They must be called at the top level of your component function.",
      }),
      createElement("h4", {}, "`useSignal<T>(initialValue)`"),
      createElement(Paragraph, {
        text: "Manages local component state. Returns an array `[value, setValue]`. Calling `setValue` triggers a synchronous re-render.",
      }),
      createElement(CodeBlock, {
        code: `const [count, setCount] = useSignal(0);`,
      }),
      createElement("h4", {}, "`useAfter(effect, deps?)`"),
      createElement(Paragraph, {
        text: "Runs side effects synchronously *after* the DOM has been updated. Similar to React's `useEffect`.",
      }),
      createElement(Paragraph, {
        text: "The `effect` function is executed after the render and DOM commit phase. It can optionally return a cleanup function which runs before the next effect execution or when the component unmounts.",
      }),
      createElement(Paragraph, {
        text: "The optional `deps` array controls when the effect re-runs. \n- If omitted, the effect runs after every render.\n- If `[]` (empty array), the effect runs only once after the initial mount.\n- If `[dep1, dep2]`, the effect runs after the initial mount and whenever any dependency in the array changes.",
      }),
      createElement(CodeBlock, {
        code: `useAfter(() => {\n  // Effect runs after DOM update\n  console.log('Component updated or mounted');\n  document.title = \`Count: \${count}\`;\n\n  // Optional cleanup function\n  return () => {\n     console.log('Cleanup effect'); \n  };\n}, [count]); // Only re-run if count changes`,
      }),
      createElement("h4", {}, "`useAnchor<T>(initialValue?)`"),
      createElement(Paragraph, {
        text: "Provides a persistent, mutable reference object (`{ current: T }`). Similar to React's `useRef`. Does *not* trigger re-renders when `.current` is mutated.",
      }),
      createElement(Paragraph, {
        text: "Useful for accessing underlying DOM elements directly (assign it to the `ref` prop on an element) or storing mutable values that don't need to cause updates.",
      }),
      createElement(CodeBlock, {
        code: `// 1. Create the anchor\nconst inputRef = useAnchor<HTMLInputElement>(null);\n\n// 2. Assign it in createElement\ncreateElement('input', { ref: inputRef, type: 'text' })\n\n// 3. Access the element later (e.g., in an event handler or useAfter)\ninputRef.current?.focus();`,
      })
    ),

    createElement(
      DocSection,
      { id: "examples", title: "Interactive Examples" },
      createElement(
        InteractiveExample,
        { title: "Counter (useSignal)", code: counterExampleCode },
        createElement(CounterExample)
      ),
      createElement(
        InteractiveExample,
        { title: "Toggle Switch (useSignal)", code: toggleExampleCode },
        createElement(ToggleExample)
      ),
      createElement(
        InteractiveExample,
        { title: "Live Input (useSignal)", code: inputExampleCode },
        createElement(InputExample)
      ),
      createElement(
        InteractiveExample,
        { title: "Side Effect (useAfter - Document Title)", code: documentTitleExampleCode },
        createElement(DocumentTitleExample)
      ),
      createElement(
        InteractiveExample,
        { title: "DOM Reference (useAnchor - Input Focus)", code: inputFocusExampleCode },
        createElement(InputFocusExample)
      )
    ),

    createElement(AppFooter)
  );
}

document.addEventListener("DOMContentLoaded", () => {
  injectStyles();
  const root = document.getElementById("root");
  if (root) {
    render(createElement(App), root);
  } else {
    console.error("Root element #root not found in the DOM.");
  }
});