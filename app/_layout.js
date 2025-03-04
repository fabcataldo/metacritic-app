import { Providers } from "../context/providers";
import Header from "../components/Header";

export default function Layout() {
  console.log("MAIN LAYOUT");

  return (
    <Providers>
      <Header></Header>
    </Providers>
  );
}
