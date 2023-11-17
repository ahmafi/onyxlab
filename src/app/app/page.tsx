import LayoutEditor from "./layout-editor";
import SetupConnection from "./valid-client";

export default function App() {
  return (
    <div className="w-full h-full flex flex-col">
      <div>اپلیکیشن</div>
      <SetupConnection>
        <LayoutEditor />
      </SetupConnection>
    </div>
  );
}
