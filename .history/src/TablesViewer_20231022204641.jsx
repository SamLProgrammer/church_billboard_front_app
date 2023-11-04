import { useResponse } from "./hooks/useResponse";

export const TablesViewer = () => {
    const { response } = useResponse();
  return (
    <div>{response}</div>
  )
}
