import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

interface TopBarProps {
  onSearch: (searchText: string) => void;
}

const TopBar: React.FC<TopBarProps> = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchText);
  };

  return (
    <div style={{ width: '100%' }}>
      <Navbar bg="light" expand="lg" className='d-flex flex-column align-items-end'>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form className='d-flex align-items-center'>
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
