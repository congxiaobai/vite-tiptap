
// 1. import `NextUIProvider` component
import { NextUIProvider } from "@nextui-org/react";
import Tree from './components/Tree';
function App() {
  // 2. Wrap NextUIProvider at the root of your app
  return (
    <NextUIProvider>
      <main className="mytheme text-textColor ">
        <div style={{ width: 1000, height: 1000 }}>
          <Tree title='root' open={true}>

            <Tree title='hello'>
            <Tree title='myworld'>
            </Tree>
            </Tree>
            <Tree title='world'>
            </Tree>
          </Tree>
        </div>

      </main>

    </NextUIProvider>
  );
}
export default App