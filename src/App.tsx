import { Resizable } from "re-resizable";
const App = () => {
    // Define an array of context objects
  const contexts = [
    {
      name: "Window-1",
      sub: "component-1",
      htmlContents: <>hi</>,
    },
    {
      name: "Window-2",
      sub: "component-2",
      htmlContents: <>hi</>,
    },
    {
      name: "Window-3",
      sub: "component-3",
      htmlContents: <>hi</>,
    },
  ];
  return (
    <div
      style={{
        display: "grid",
        gridTemplate: "auto auto auto",
        gridGap: "10px",
        placeItems:"center",
        width:"100vh"
        
      }}
    >
      {contexts.map(
        (items: { name: String; sub: String; htmlContents: any }) => (
          <Resizable
            defaultSize={{
              width: 320,
              height: 200,
            }}
            style={{ border: "2px solid black",padding:'5rem',display:"flex",justifyContent:"center",alignItems:"center",flexDirection:'column' }}
          >
            <h1 style={{fontSize:"1.5rem"}}>{items.name}</h1>
            <p>{items.sub}</p>
            <div>{items.htmlContents}</div>
          </Resizable>
        )
      )}
    </div>
  );
};

export default App;
