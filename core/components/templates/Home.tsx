import Form from "@/templates/Form";
import { SonnerDemo } from "@/module/Toast";
import { ModeToggle } from "@/module/ThemeToggle";
import { SidebarTrigger } from "@/ui/sidebar";

const Home = () => {
  return (
    <div className="w-full flex  justify-between p-4">
      <div className="w-full flex flex-col gap-2">
        <SidebarTrigger />
        <Form />
        <SonnerDemo />
      </div>
      <ModeToggle />
    </div>
  );
};

export default Home;
