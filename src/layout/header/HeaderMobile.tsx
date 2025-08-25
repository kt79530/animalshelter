import {useState, useEffect, useRef} from 'react';
import {Container, Nav, Navbar, Offcanvas, NavDropdown} from 'react-bootstrap';
import MenusData from "../../data/menu.json";
import styles from './Header.module.css';

import { LuLock, LuUser, LuPenLine } from "react-icons/lu";
import { IoPawOutline, IoHeartOutline, IoChatbubbleOutline } from "react-icons/io5";
import { PiCompassFill, PiHandHeart, PiWarning } from "react-icons/pi";
import { RiSeedlingFill, RiCoinFill } from "react-icons/ri";
import { BsFillBookmarkHeartFill } from "react-icons/bs";


const Lock = LuLock as React.FC<React.SVGProps<SVGSVGElement>>;
const User = LuUser as React.FC<React.SVGProps<SVGSVGElement>>;

const iconMap = {
  Paw: IoPawOutline,
  Compass: PiCompassFill,
  Bookmark: BsFillBookmarkHeartFill,
  Seed: RiSeedlingFill,
  Chat: IoChatbubbleOutline,
  Heart: IoHeartOutline,
  Coin: RiCoinFill,
  HandHeart: PiHandHeart,
  Warning: PiWarning,
  Pen: LuPenLine,
};

type MenuItem = {
  title:string;
  to:string;
  icon:keyof typeof iconMap;
};

type MenuGroup = {
  menuId:string;
  label:string;
  menus:MenuItem[];
}




const HeaderMobile: React.FC = () => {

  return(
    <>
    <Navbar expand="md" className={styles.header}>
      <Container fluid>
        <Navbar.Brand href="/" className={styles.logo}>Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="category"/>
        
        <Navbar.Offcanvas
          id="category"
          aria-labelledby="mobile-category"
          placement="end">

          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="mobile-category">Logo</Offcanvas.Title>
          </Offcanvas.Header>



          <Offcanvas.Body>
            <Nav className="gap-4">

              {(MenusData as MenuGroup[]).map(menuGroup => (
                <NavDropdown
                  id={menuGroup.menuId}
                  key={menuGroup.menuId}
                  title={menuGroup.label}
                  className="nav-default"
                  >

                    {menuGroup.menus.map(menuItem => {
                      const Icon = iconMap[menuItem.icon] as React.FC<React.SVGProps<SVGSVGElement>>;
                      
                      return(
                        <NavDropdown.Item
                          key={menuItem.title}
                          href={menuItem.to}
                          className={styles.dropItem}
                          ><Icon className={styles.iconLeft}/>
                          {menuItem.title}
                        </NavDropdown.Item>
                      )
                     
                    })}
                  </NavDropdown>
              ))}
            </Nav>



            <Nav className={`ms-auto nav-small gap-2 ${styles.login}`}>

              <Nav.Link href="#" className='d-flex align-items-center gap-2'>
                <Lock className={styles.iconRight}/>로그인
              </Nav.Link>

              <Nav.Link href="#" className='d-flex align-items-center gap-2'>
                <User className={styles.iconRight}/>회원가입
              </Nav.Link>

              <Nav.Link href="#">마이페이지</Nav.Link>
            </Nav>

          </Offcanvas.Body>

        </Navbar.Offcanvas>
      </Container>

    </Navbar>
    </>
  )
}

export default HeaderMobile;