import find from "lodash/find";

export const createReducer = (initialState, handlers) => (state = initialState, action) => {
  const handler = handlers[action.type];
  return handler ? handler(state, action.payload) : state;
};

export const queryParser = (url) => {
  const result = {};
  const query = url.split("?")[1];
  if (query) {
    const vars = query.split("&");
    for (let i = 0; i < vars.length; i++) {
      const pair = vars[i].split("=");
      result[pair[0]] = decodeURIComponent(pair[1]);
    }
  }
  return result;
};

const shallowEqual = (left, right) => {
  const keys = Object.keys(left);
  if (Object.keys(right).length !== keys.length) {
    return false;
  }

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (left[key] !== right[key]) {
      return false;
    }
  }
  return true;
};

export const withMemoMethod = (Component) => {
  return class extends Component {
    memoHooks = [];
    memo(calc, deps) {
      let hook = find(this.memoHooks, hook => hook.called === false);
      if (hook) {
        if (!shallowEqual(hook.deps, deps)) {
          hook.result = calc();
          hook.deps = deps;
        }
      } else {
        hook = {
          deps: deps,
          result: calc(),
        };
        this.memoHooks.push(hook);
      }
      hook.called = true;
      return hook.result;
    }
    render() {
      // Reset hooks called flags
      this.memoHooks = this.memoHooks.map(hook => ({
        ...hook,
        called: false,
      }));
      return super.render();
    }
  };
};