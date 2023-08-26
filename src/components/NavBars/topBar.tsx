import React, { useState } from 'react';
import { Navbar, Form, FormControl, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Importa useHistory

interface TopBarProps {
  // Define props
}

const TopBar: React.FC<TopBarProps> = () => {
  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchText === '') navigate('/')
    else navigate(`/busqueda/${searchText}`);
  };

  return (
    <div style={{ width: '100%' }}>
      <Navbar bg="light" expand="lg" className='d-flex flex-column align-items-end'>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form className='d-flex align-items-center' onSubmit={handleSearch}>
            <FormControl
              type="text"
              placeholder="Buscar"
              className="mr-sm-2"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <div style={{ marginRight: '10px' }}></div>
            <Button variant="outline-success" type="submit" className="ml-2">Buscar</Button>
          </Form>
          <div style={{ marginRight: '35px' }}></div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default TopBar;
