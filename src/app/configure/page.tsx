import LayoutEditor from "./layout-editor";
import SetupConnection from "./valid-client";

export default function App() {
  return (
    <div className="w-full flex flex-col">
      <SetupConnection>
        <LayoutEditor />
      </SetupConnection>
    </div>
  );
}
