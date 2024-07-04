const element = React.createElement(
    'h1',
    null,
    'Learn web development'
  );

const para1 = React.createElement(
    'p',
    'null',
    'Welcomw to the MDN learning area. This set of article aims to guide complete beginners to web development with all they ned to start cofing websites '
)
const link = React.createElement(
    'a',
    { href: 'https://reactjs.org', target: '_blank' },
    "laboriosam temporibus minima"
)
const para2 = React.createElement(
    'p',
    'null',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic a consequatur enim aperiam explicabo, cum unde modi quibusdam ut repudiandae incidunt beatae, nisi excepturi, eligendi eos eius! Voluptatem culpa voluptate quaerat',
    link,
    'asperiores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, esse? Necessitatibus, minima dolorem corrupti ipsa reiciendis adipisci nobis aliquid voluptatem! '
)

const para3 = React.createElement(

    'p',
    'null',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui minima quam facere! Perspiciatis quos, minus ducimus dolorum repellat quis animi ad veniam architecto nemo praesentium officia esse illo perferendis obcaecati quia voluptates quo voluptatibus error quaerat maiores asperiores. Ab harum repudiandae ipsam voluptas aliquid sint minima dicta. In est tempora debitis sit unde deserunt rerum eveniet quaerat. Provident, eligendi fuga.'
)
const container = React.createElement(
    'div',
    null,
    element,
    para1,
    para2,
    para3 
)

  
  // Rendering the element with ReactDOM.render
  ReactDOM.render(
    container,
    document.getElementById('root')
  );
//   ReactDOM.render(
//     para1,
//     document.getElementById("root")
//   )