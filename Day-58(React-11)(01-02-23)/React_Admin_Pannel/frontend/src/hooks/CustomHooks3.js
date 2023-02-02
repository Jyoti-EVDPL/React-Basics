import ReactDOM from "react-dom/client";
import useFetch from "./useFetch";

const CustomHooks3 = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </>
  );
};

export default CustomHooks3;