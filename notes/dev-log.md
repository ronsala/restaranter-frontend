# Restauranter Frontend Dev Log

[https://github.com/ronsala/restauranter-frontend](https://github.com/ronsala/restauranter-frontend)

## *Ron Sala*

## Sun Apr 25 06:57:19 EDT 2021

Separated the dev log into separate files for frontend and backend.

Consulting [https://medium.com/dev-genius/async-api-fetching-with-redux-toolkit-2020-8623ff9da267](https://medium.com/dev-genius/async-api-fetching-with-redux-toolkit-2020-8623ff9da267) for insight into using redux-toolkit.

```
RONALDs-MacBook-Pro-2 restauranter/restauranter-frontend ‹menu*› » yarn start
```

After resolving a couple compiler errors, am able to see text at [http://localhost:3000/](http://localhost:3000/).

The article has a number of differences in setup from the template code I used when setting up the app, but I don't anticipate it will create any major problems.

```
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

```
RONALDs-MacBook-Pro-2 dev/redux-essentials-example-app ‹master› » git branch -a                                                    
RONALDs-MacBook-Pro-2 dev/redux-essentials-example-app ‹master› » git co origin/rough-final-version
RONALDs-MacBook-Pro-2 dev/redux-essentials-example-app ‹b4d68e4› » git co rough-final-version
```

Got

```
The TypeScript language service died 5 times right after it got started. The service will not be restarted.
```

Followed advice at

```
https://stackoverflow.com/questions/42026496/vscode-typescript-language-service-died-unexpectedly-5-times-in-the-last-5-min
```

```
RONALDs-MacBook-Pro-2 dev/redux-essentials-example-app ‹rough-final-version› » sudo npm install -g typescript
ONALDs-MacBook-Pro-2 dev/redux-essentials-example-app ‹rough-final-version› » tsc --version
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

```
action: 
{type: "menus/fetchMenus/fulfilled", payload: undefined, meta: {…}}
meta: {arg: undefined, requestId: "qs6CUbfiJt834wurhfPEW", requestStatus: "fulfilled"}
payload: undefined
type: "menus/fetchMenus/fulfilled"
__proto__: Object
```

Found that with this function:

```
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

```
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

```
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

```
export const fetchMenus = createAsyncThunk(
  'menus/fetchMenus', 
  async () => {
    const menus = await fetch('http://localhost:3000/api/v1/menus')
    .then((res) => res.json());
    return menus
  }
)
```

```
RONALDs-MacBook-Pro-2 restauranter/restauranter-frontend ‹menu› » bcm "select menus from store"
```

I can now display the name of a menu in browser by uncommenting a line of JSX that shows it. When I reload the page, I get an error, presumably since there's not yet data in the store:

```
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

```
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

```
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

```
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

```
import { restaurantsSlice } from './restaurantsSlice';
```

in RestaurantsContainer. Don't know why, yet.

