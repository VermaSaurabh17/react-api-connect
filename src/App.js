import { QueryClient, QueryClientProvider } from "react-query";
import BasicQuery from "./view/BasicQuery";
function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BasicQuery />
    </QueryClientProvider>
  );
}

export default App;
