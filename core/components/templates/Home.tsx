import { toast } from "sonner";
import Form from "@/templates/Form";
import { SonnerDemo } from "../module/Toast";

const Home = () => {
  return (
    <div className="p-4">
      <Form />
      <SonnerDemo />
    </div>
  );
};

export default Home;
