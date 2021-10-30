import { useReducer } from "react";

function reducer(state, action) {
  switch (action) {
    case "TANG":
      return state + 1;
	case "GIAM":
		return state - 1;
	default:
		return state;
  }
}

function reducer2(state, action) {
	switch (action.type) {
		case "GAN_GIA_TRI":
			return action.data;
		default:
			return state;
	}
	
}

export default function UseReducer() {
  const [count, dispatch] = useReducer(reducer, 0);
  const [count2, dispatch2] = useReducer(reducer2, 0);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => dispatch("TANG")}>Tang</button>
      <button onClick={() => dispatch("GIAM")}>Giam</button>
	  <p>{count2}</p>
	  <button onClick={() => dispatch2({
		  type: "GAN_GIA_TRI",
		  data: 10,
	  })}>gan gia tri</button>
    </div>
  );
}
