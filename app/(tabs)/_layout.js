import TabsComponent from "../../components/TabsComponent";
import { Providers } from "../../context/providers";

export default function TabsLayout() {
  return (
    <Providers>
      <TabsComponent></TabsComponent>
    </Providers>
  );
}
