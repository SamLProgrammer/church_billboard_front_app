import { useResponse } from "./ResponseContext";

export const TablesViewer = () => {
    const { response } = useResponse();
  return (
    <div>{response}</div>
  )
}
