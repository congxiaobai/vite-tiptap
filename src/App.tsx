
// 1. import `NextUIProvider` component
import { NextUIProvider } from "@nextui-org/react";
import Tree from './components/Tree';
function App() {
  // 2. Wrap NextUIProvider at the root of your app
  return (
    <NextUIProvider>
      <main className="mytheme text-primary ">
        <div style={{ width: 1000, height: 1000 }}>
          <Tree></Tree>
        </div>

      </main>

    </NextUIProvider>
  );
}
export default App