Button component example:

```js
<Button>Push Me</Button>
```

```js { "props": { "className": "checks" } }
<Button>I’m transparent!</Button>
```

Button that goes to a link:
```js
<Button tag='a href= https://reactjs.org/'>Click Me</Button>
```

Counter:
```js
initialState = { count: 0 }
;<Button onClick={() => setState({ count: state.count + 1 })}> 
  Number of Clicks: {state.count}
</Button>
``` 