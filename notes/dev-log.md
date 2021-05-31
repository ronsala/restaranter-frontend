# Restauranter Frontend Dev Log

[https://github.com/ronsala/restauranter-frontend](https://github.com/ronsala/restauranter-frontend)

## *Ron Sala*

## Sun Apr 25 06:57:19 EDT 2021

Separated the dev log into separate files for frontend and backend.

Consulting [https://medium.com/dev-genius/async-api-fetching-with-redux-toolkit-2020-8623ff9da267](https://medium.com/dev-genius/async-api-fetching-with-redux-toolkit-2020-8623ff9da267) for insight into using redux-toolkit.

```zsh
RONALDs-MacBook-Pro-2 restauranter/restauranter-frontend ‹menu*› » yarn start
```

After resolving a couple compiler errors, am able to see text at [http://localhost:3000/](http://localhost:3000/).

The article has a number of differences in setup from the template code I used when setting up the app, but I don't anticipate it will create any major problems.

```zsh
Access to fetch at 'http://localhost:3000/api/v1/menus' from origin 'http://localhost:3001' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
VM835:1 GET http://localhost:3000/api/v1/menus net::ERR_FAILED
(anonymous) @ VM835:1
(anonymous) @ main.chunk.js:415
(anonymous) @ vendors~main.chunk.js:40670
(anonymous) @ vendors~main.chunk.js:727
dispatch @ VM830:1
(anonymous) @ main.chunk.js:61
invokePassiveEffectCreate @ vendors~main.chunk.js:29647
callCallback @ vendors~main.chunk.js:10263
invokeGuardedCallbackDev @ vendors~main.chunk.js:10312
invokeGuardedCallback @ vendors~main.chunk.js:10372
flushPassiveEffectsImpl @ vendors~main.chunk.js:29729
unstable_runWithPriority @ vendors~main.chunk.js:42334
runWithPriority$1 @ vendors~main.chunk.js:17669
flushPassiveEffects @ vendors~main.chunk.js:29606
(anonymous) @ vendors~main.chunk.js:29487
workLoop @ vendors~main.chunk.js:42284
flushWork @ vendors~main.chunk.js:42258
performWorkUntilDeadline @ vendors~main.chunk.js:42024
VM835:1 Fetch failed loading: GET "http://localhost:3000/api/v1/menus".
```

Consulting
[https://gilberttorchon.medium.com/connecting-your-rails-api-with-react-8d9740a20cf3](https://gilberttorchon.medium.com/connecting-your-rails-api-with-react-8d9740a20cf3)

Decided to primarily follow the example at [https://redux.js.org/tutorials/essentials/part-1-overview-concepts](https://redux.js.org/tutorials/essentials/part-1-overview-concepts) so forked and cloned it. Accessed the `rough-final-version` branch with

```zsh
RONALDs-MacBook-Pro-2 dev/redux-essentials-example-app ‹master› » git branch -a                                                    
RONALDs-MacBook-Pro-2 dev/redux-essentials-example-app ‹master› » git co origin/rough-final-version
RONALDs-MacBook-Pro-2 dev/redux-essentials-example-app ‹b4d68e4› » git co rough-final-version
```

Got

```zsh
The TypeScript language service died 5 times right after it got started. The service will not be restarted.
```

Followed advice at

[stack](https://stackoverflow.com/questions/42026496/vscode-typescript-language-service-died-unexpectedly-5-times-in-the-last-5-min)

```zsh
RONALDs-MacBook-Pro-2 dev/redux-essentials-example-app ‹rough-final-version› » sudo npm install -g typescript
RONALDs-MacBook-Pro-2 dev/redux-essentials-example-app ‹rough-final-version› » tsc --version
zsh: correct 'tsc' to 'tac' [nyae]? n
Version 4.2.4
```

## Fri Apr 30 20:23:18 EDT 2021

Trying to get menu data to browser.

Read [https://blog.logrocket.com/building-the-simplest-crud-out-there-with-entity-management/](https://blog.logrocket.com/building-the-simplest-crud-out-there-with-entity-management/), looking at [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) and [https://abhimanyuchauhan-61309.medium.com/createasyncthunk-in-redux-toolkit-4d8d2f0412d3](https://abhimanyuchauhan-61309.medium.com/createasyncthunk-in-redux-toolkit-4d8d2f0412d3).

## Sat May  1 19:45:58 EDT 2021

Am able to see dummy data I put in initialState in menusSlice.js in the Redux Dev Tools.

Can pull data from the backend, but am unsure about how to take it from there. Am looking at [https://redux.js.org/tutorials/essentials/part-5-async-logic](https://redux.js.org/tutorials/essentials/part-5-async-logic).

Getting an action in fetchMenus.fulfilled but without a payload:

```unknown
action: 
{type: "menus/fetchMenus/fulfilled", payload: undefined, meta: {…}}
meta: {arg: undefined, requestId: "qs6CUbfiJt834wurhfPEW", requestStatus: "fulfilled"}
payload: undefined
type: "menus/fetchMenus/fulfilled"
__proto__: Object
```

Found that with this function:

```js
export const fetchMenus = createAsyncThunk(
  'menus/fetchMenus', 
  async () => {
    const response = await fetch('http://localhost:3000/api/v1/menus')
    const menus = await response.json();
    console.log('menus:', menus);
    return response.menus
  }
)
```

Can get this in browser console:

```console
menus: 
{data: Array(2)}
data: Array(2)
0:
attributes: {name: "Imposters Bar & Grill"}
id: "6"
type: "menu"
__proto__: Object
1: {id: "7", type: "menu", attributes: {…}}
```

After having it return `menus` instead, could see this under State in Redux Dev Tools (RDT):

```RDT
{
  menus: {
    menus: [
      {
        id: '6',
        type: 'menu',
        attributes: {
          name: 'Imposters Bar & Grill'
        }
      },
      {
        id: '7',
        type: 'menu',
        attributes: {
          name: 'Phoebe\'s Cafe'
        }
      }
    ],
    status: 'succeeded',
    error: null
  }
}
```

## Mon May  3 12:49:39 EDT 2021

Watching [01 - CRUD example with create entity adapter and create async thunk - redux toolkit](https://www.youtube.com/watch?v=5zmaUSkyE1I&t=519s)

Refactored the function to:

```js
export const fetchMenus = createAsyncThunk(
  'menus/fetchMenus', 
  async () => {
    const menus = await fetch('http://localhost:3000/api/v1/menus')
    .then((res) => res.json());
    return menus
  }
)
```

```zsh
RONALDs-MacBook-Pro-2 restauranter/restauranter-frontend ‹menu› » bcm "select menus from store"
```

I can now display the name of a menu in browser by uncommenting a line of JSX that shows it. When I reload the page, I get an error, presumably since there's not yet data in the store:

```chrome
×
TypeError: Cannot read property 'attributes' of undefined
Menu
src/features/menus/Menu.js:17
  14 |   return (
  15 |     <div>
  16 |       <h1>Menu.js</h1>
> 17 |       <h1>{ menus[0].attributes.name }</h1>
  18 |     </div>
  19 |   );
  20 | }
```

Working around it, at least for now, with:

```js
  useEffect(() => {
    dispatch(fetchMenus())
  }, [dispatch])

  const menus = useSelector(menusSelectors.selectAll);

  return (
    <div>
      { (typeof menus[0] !== 'undefined') ? (
        <h1>{ menus[0].attributes.name }</h1> 
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
```

## Wed May  5 18:39:25 EDT 2021

How shall I structure the files vis-a-vis slices and container components (the latter of which are in the project requirements)?

Looked at [https://blog.logrocket.com/smarter-redux-with-redux-toolkit/](https://blog.logrocket.com/smarter-redux-with-redux-toolkit/) and the accompanying [https://github.com/zsajjad/rtk-demo](https://github.com/zsajjad/rtk-demo).

## Sat May  8 14:23:40 EDT 2021

```zsh
RONALDs-MacBook-Pro-2 restauranter/restauranter-frontend ‹restaurant*› » bcm "experiment with component file structure"
✔ belly committed your work with this message: experiment with component file structure
✔ belly pushed your work to origin
RONALDs-MacBook-Pro-2 restauranter/restauranter-frontend ‹restaurant› » npm install --save react-router-dom

added 10 packages, changed 6 packages, and audited 1760 packages in 4s

130 packages are looking for funding
  run `npm fund` for details

2 moderate severity vulnerabilities

To address all issues, run:
  npm audit fix

Run `npm audit` for details.
RONALDs-MacBook-Pro-2 restauranter/restauranter-frontend ‹restaurant*› » npm audit
# npm audit report

hosted-git-info  <2.8.9 || >=3.0.0 <3.0.8
Severity: moderate
Regular Expression Denial of Service - https://npmjs.com/advisories/1677
fix available via `npm audit fix`
node_modules/hosted-git-info

ssri  5.2.2 - 6.0.1 || 7.0.0 - 8.0.0
Severity: moderate
Regular Expression Denial of Service - https://npmjs.com/advisories/565
fix available via `npm audit fix`
node_modules/webpack/node_modules/ssri

2 moderate severity vulnerabilities

To address all issues, run:
  npm audit fix
RONALDs-MacBook-Pro-2 restauranter/restauranter-frontend ‹restaurant*› » npm audit fix

changed 3 packages, and audited 1760 packages in 3s

130 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

Looking at [https://reacttraining.com/react-router/web/guides/quick-start](https://reacttraining.com/react-router/web/guides/quick-start).

Experimenting with restaurants files. Got this:

```chrome
Unhandled Rejection (TypeError): Cannot convert undefined or null to object
setAllMutably
src/entities/unsorted_state_adapter.ts:42
  39 | 
  40 |  function setAllMutably(entities: T[] | Record<EntityId, T>, state: R): void {
  41 |    if (!Array.isArray(entities)) {
> 42 |      entities = Object.values(entities)
     | ^  43 |    }
  44 | 
  45 |    state.ids = []
  ...
```

until I commented out

```js
import { restaurantsSlice } from './restaurantsSlice';
```

in RestaurantsContainer. Don't know why, yet.

```zsh
RONALDs-MacBook-Pro-2 restauranter/restauranter-frontend ‹master› » git co -b misc
Switched to a new branch 'misc'
RONALDs-MacBook-Pro-2 restauranter/restauranter-frontend ‹misc› » npm i rsuite --save
npm ERR! code ERESOLVE
npm ERR! ERESOLVE unable to resolve dependency tree
npm ERR! 
npm ERR! Found: react@17.0.2
npm ERR! node_modules/react
npm ERR!   peer react@"*" from @testing-library/react@9.5.0
npm ERR!   node_modules/@testing-library/react
npm ERR!     @testing-library/react@"^9.3.2" from the root project
npm ERR!   peer react@"^0.14.0 || ^15.0.0 || ^16.0.0 || ^17.0.0" from mini-create-react-context@0.4.1
npm ERR!   node_modules/mini-create-react-context
npm ERR!     mini-create-react-context@"^0.4.0" from react-router@5.2.0
npm ERR!     node_modules/react-router
npm ERR!       react-router@"5.2.0" from react-router-dom@5.2.0
npm ERR!       node_modules/react-router-dom
npm ERR!         react-router-dom@"^5.2.0" from the root project
npm ERR!   7 more (react-dom, react-redux, react-router, react-router-dom, ...)
npm ERR! 
npm ERR! Could not resolve dependency:
npm ERR! peer react@"^15.3.0 || ^16.0.0-alpha" from react-virtualized@9.22.3
npm ERR! node_modules/rsuite/node_modules/react-virtualized
npm ERR!   react-virtualized@"^9.21.0" from rsuite@4.10.0
npm ERR!   node_modules/rsuite
npm ERR!     rsuite@"*" from the root project
npm ERR! 
npm ERR! Fix the upstream dependency conflict, or retry
npm ERR! this command with --force, or --legacy-peer-deps
npm ERR! to accept an incorrect (and potentially broken) dependency resolution.
npm ERR! 
npm ERR! See /Users/RonSala/.npm/eresolve-report.txt for a full report.

npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/RonSala/.npm/_logs/2021-05-09T11_55_04_518Z-debug.log
RONALDs-MacBook-Pro-2 restauranter/restauranter-frontend ‹misc› » yarn add rsuite                       1 ↵
yarn add v1.22.10
warning package-lock.json found. Your project contains lock files generated by tools other than Yarn. It is advised not to mix package managers in order to avoid resolution inconsistencies caused by unsynchronized lock files. To clear this warning, remove package-lock.json.
[1/4] 🔍  Resolving packages...
warning rsuite > recompose > 
 > core-js@1.2.7: core-js@<3.3 is no longer maintained and not recommended for usage due to the number of issues. Because of the V8 engine whims, feature detection in old core-js versions could cause a slowdown up to 100x even if nothing is polyfilled. Please, upgrade your dependencies to the actual version of core-js.
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
warning " > @testing-library/user-event@7.2.1" has unmet peer dependency "@testing-library/dom@>=5".
warning " > react-redux@7.2.3" has unmet peer dependency "redux@^2.0.0 || ^3.0.0 || ^4.0.0-0".
warning "react-scripts > @typescript-eslint/eslint-plugin > tsutils@3.20.0" has unmet peer dependency "typescript@>=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >= 3.4.0-dev || >= 3.5.0-dev || >= 3.6.0-dev || >= 3.6.0-beta || >= 3.7.0-dev || >= 3.7.0-beta".
warning "rsuite > recompose@0.30.0" has incorrect peer dependency "react@^0.14.0 || ^15.0.0 || ^16.0.0".
warning "rsuite > react-virtualized@9.22.3" has incorrect peer dependency "react@^15.3.0 || ^16.0.0-alpha".
warning "rsuite > react-virtualized@9.22.3" has incorrect peer dependency "react-dom@^15.3.0 || ^16.0.0-alpha".
[4/4] 🔨  Building fresh packages...
success Saved lockfile.
success Saved 16 new dependencies.
info Direct dependencies
└─ rsuite@4.10.0
info All dependencies
├─ change-emitter@0.1.6
├─ classnames@2.3.1
├─ clsx@1.1.1
├─ date-fns@1.30.1
├─ dom-helpers@5.2.1
├─ element-resize-event@3.0.3
├─ encoding@0.1.13
├─ fbjs@0.8.17
├─ isomorphic-fetch@2.2.1
├─ node-fetch@1.7.3
├─ react-virtualized@9.22.3
├─ recompose@0.30.0
├─ rsuite-table@3.15.0
├─ rsuite@4.10.0
├─ schema-typed@1.5.1
└─ ua-parser-js@0.7.28
✨  Done in 44.52s.
RONALDs-MacBook-Pro-2 restauranter/restauranter-frontend ‹misc*› » rm package-lock.json
```

Decided to switch from rsuitejs to tailwindcss. Not enough documentation or examples for the former.

[https://tailwindcss.com/docs/guides/create-react-app](https://tailwindcss.com/docs/guides/create-react-app) doesn't mention yarn, so following [https://tailwindcss.com/docs/guides/create-react-app](https://tailwindcss.com/docs/guides/create-react-app).

```zsh
✔ belly committed your work with this message: rm rsuite and first installation of tailwindcss
✔ belly pushed your work to origin
RONALDs-MacBook-Pro-2 restauranter/restauranter-frontend ‹misc› » yarn add tailwindcss@npm:@tailwindcss/postcss7-compat @tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9 -D
zsh: no matches found: postcss@^7
```

To address this error, following [https://github.com/tailwindlabs/tailwindcss/discussions/3575](https://github.com/tailwindlabs/tailwindcss/discussions/3575).

I think I followed the above strictly, but my tailwind.css file was blank. I copied and pasted the code from the sandbox into it and it works fine with the sample return JSX.

Removed the copied code from tailwind.css. Found this comment on the blog post:

```html
Also, since @tailwind base; @tailwind components; @tailwind utilities; are being imported on the index.css file, index.js must import index.css instead of tailwind.css for the example to work.
```

Made that change and the sample code in App.js shows styled in Chrome. Guess I'll rm tailwind.css, since it doesn't seem necessary.

Following [https://www.smashingmagazine.com/2020/02/tailwindcss-react-project/](https://www.smashingmagazine.com/2020/02/tailwindcss-react-project/) to get started using Tailwind with React. The author's directions differ from the ones I've looked at previously. I'm hesitant to continue lest I break what I have so far. Will continue to assess. I suppose I could make a new branch to experiment safely.

Just found [https://github.com/creativetimofficial/material-tailwind](https://github.com/creativetimofficial/material-tailwind). Woo! It looks like it fits the bill.

Next time, will pick up with [https://material-tailwind.com/documentation/quick-start](https://material-tailwind.com/documentation/quick-start).

## Fri May 14 16:01:36 EDT 2021

Previously got the material-tailwind navbar to show in browser and started playing with it. When I started the server now, though, it only says "NAVBAR" without the other headings. Why?

Ah! It was a responsive design issue. I was running Chrome only in the right half of the screen. Once I add the icons to the nav it should be better.

Looking at [Material Icons Guide](https://developers.google.com/fonts/docs/material_icons). In process set up at Google Developer Profile at [https://developers.google.com/profile/u/104833061811146217919](https://developers.google.com/profile/u/104833061811146217919).

## Mon May 17 17:37:21 EDT 2021

Figured out how to customize material-tailwind somewhat. Now, let me set up a 'restaurants' route.

## Tue May 18 09:10:56 EDT 2021

Want to do some layout I don't see available in material-tailwind. Trying out material-ui/core. I think I can mix and match from them. Switched to a new `layout` branch.

Got select cards to appear side-by-side with material-ui. I see they call a navbar an AppBar. Think I'm going to switch to just using material-ui.

Got rid of material-tailwind. Added more from material-ui. What I have so far is presentable enough. Much room for improvement later.

Wrapped PatronsSelectCard in a React Router Link. Next time, will work on debugging and streamlining fetching and displaying restaurant data.

## Wed May 19 14:31:43 EDT 2021

Troubleshooting as planned. Found I needed to finish some steps in backend. Now able to console.log restaurant data. Along the way, discovered the PatronsCard was throwing warnings in console, since they were wrapped in links with buttons inside and you can't have an `<a>` in an `<a>`. Will just keep the buttons.

## Thu May 20 21:08:17 EDT 2021

Was able to construct a restaurantsSlice and RestaurantsContainer based on menusSlice and Menus. Now able to pull fetched data from both models into store and display it in browser. Next time, will clean up the troubleshooting mess.

## Sat May 22 11:46:08 EDT 2021

Fixed Router syntax.

Well, not quite. Tried to combine Material-UI button with Router's Link. Got the `<a>` in an `<a>` issue again. Took advice from [Stack Overflow](https://stackoverflow.com/questions/38187833/how-to-combine-reactjs-router-link-and-material-ui-components-like-a-button) and did

```jsx
<Button size="large" variant="contained" color="primary" component={Link} to={"/restauants"}>I'm hungry: Show me restaurants!</Button>
```

I'm running into the prob described at [https://stackoverflow.com/questions/43351752/react-router-changes-url-but-not-view](https://stackoverflow.com/questions/43351752/react-router-changes-url-but-not-view). I just restarted the frontend server and refreshed the browser on '/'. I typed in 'restaurants' and got the proper page. When I click the Link/Button the url changes but not the page.

Ha! "restaurants" was misspelled!

I find myself baffled with how to add a border or spacing to the restaurant cards. `makeStyles` won't seem to do it. May ask a question at the next study group.

## Sun May 23 06:54:12 EDT 2021

Going in circles trying to get some kind of ById selector working in Restaurants Container. Many syntaxes I tried prevented the store from being populated. Witness the commented out attempts:

```js
// const restaurants = useSelector(restaurantsSelectors.selectAll);
  const restaurants = useSelector(state => selectAllRestaurants(state));

  // console.log('restaurants[1].attributes.name:', restaurants[1].attributes.name);

  // const restaurant = useSelector(restaurantsSelectors.selectById(state: store.getState(), 1));

  // const restaurant = useSelector(selectRestaurantById);
  const restaurant = useSelector(state => selectRestaurantById(state, 1))
  // const restaurant = useSelector(state => restaurantsSelectors.selectById(state, 1))

  console.log('restaurant:', restaurant);
  // const restaurant = useSelector(state => selectRestaurantById(state, 1));

  // const restaurant = useSelector(selectRestaurantEntities(1));

  // const restaurant = useSelector(selectRestaurantEntities(1));

  // const UserTitle = ({ id }) => {
  //   const { title } = useSelector(state => selectUser(state, id));
  // }

  // var rid = 2;

  // const RestaurantBID = (id = 2) => {
  //   const restaurant = useSelector(state => selectRestaurantById(state, id));
  //   console.log('restaurant:', restaurant);
  //   return restaurant
  // }

```

Now to clean up and attempt to build on what worked.

Now I'm stuck on trying to render props from RestaurantContainer to Restaurant. I'm looking up a restaurant using a hint from [https://flaviocopes.com/react-router-data-from-route/](https://flaviocopes.com/react-router-data-from-route/), like so:

```js
        <Route path="/restaurants/:id" render={({match}) => (
          <Restaurant restaurant={restaurants.find(r => r.id === match.params.id)} />
        )} />
```

Restaurant.js:

```js
import React from 'react'

export default function Restaurant(props) {
  console.log('Restaurant props:', props);

  return (
    <div>
         <p>Restaurant Component</p>
         { props.restaurant.attributes.name }
    </div>
  );
}
```

With the line under "Restaurant Component" commented out I get this in console:

```console
Restaurant props: 
{restaurant: {…}}
restaurant: {id: "1", type: "restaurant", attributes: {…}}
__proto__: Object
```

But with it commented back in, I get `TypeError: Cannot read property 'attributes' of undefined` in the browser and the props are undefined. Perhaps a timing issue.

If I wrap it in a conditional it works:

```js
  return (
    <div>
      { (typeof props.restaurant.attributes.name !== 'undefined') ? 
        (<h1>{ props.restaurant.attributes.name }</h1>) : 
        (<p>Loading...</p>)
      }
    </div>
  );
```

Since I have that working OK, now trying to select a menu based on the restaurant id.

## Fri May 28 14:30:01 EDT 2021

Worked on eliminating problem of not being able to display components when store hasn't been hydrated. In RestaurantContainer used a conditional in a useEffect to determine if the entity exists in the store or if it needs to be fetched, i.e. if the user accesses the restaurant show path via the Link in the RestaurantCard or directly by the URL. All systems nominal.

## Sat May 29 18:42:41 EDT 2021

Overall cleanup of restaurant branch.

## Mon May 31 11:49:09 EDT 2021

Discovered I still had the problem of getting an undef error when navigating straight to a restaurant's url despite having a conditional fetch in a useEffect in the RestaurantContainer. Fixed it with adding conditional rendering in the same.
