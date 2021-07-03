import { Row, Col } from 'react-bootstrap';
import Sidebar from './components/sidebar';
import Gallery from './components/gallery';
import Pagination from './components/pagination'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  
  return (
    <div className="App">
      <div><Sidebar /></div>
      <div>
        <Row>
          <Col className="col-1"></Col>
            <Gallery/>
        </Row>
        <Pagination />
      </div>
     


    </div>
  );
}

export default App;
