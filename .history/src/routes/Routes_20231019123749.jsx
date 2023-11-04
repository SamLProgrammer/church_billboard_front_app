import { Route } from 'react-router-dom';
import { Test } from './test'; // Assuming 'Test' component is in the same directory

function Routes() {
  return (
    <Routes>
            <Route path="/" element={<Test/>} />
    </Routes>
  );
}

export default Routes;
