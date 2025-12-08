import Form from "@/templates/Form";
import { SonnerDemo } from "@/module/Toast";
import { ModeToggle } from "@/module/ThemeToggle";

const Home = () => {
  return (
    <div className="w-full flex  justify-between p-4">
      <div>
        <Form />
        <SonnerDemo />
      </div>
      <ModeToggle />
    </div>
  );
};

export default Home;
