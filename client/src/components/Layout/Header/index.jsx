import { Fragment, useEffect, useContext, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { StoreContext } from 'store/Store';
import { useHistory } from 'react-router-dom';

import { useForm } from 'hooks/useForm';

import Socket from 'support/Socket';
import { Strings } from 'support/Constants';

import Dropdown from './Dropdown';
import Notifications from './Notifications';
import './style.css';

const Header = ({ setMenuState }) => {
  const { user, lang } = useContext(StoreContext)
  const searchField = useRef()
  const history = useHistory()
  const [searchActive, setSearchActive] = useState(false)
  const [adminNotification, setAdminNotification] = useState(false)

  useEffect(() => {
    Socket.on('newAdminNotification', (data) => {
      setAdminNotification(true)
    })
  }, [])

  useEffect(() => {
    if (searchActive) {
      searchField.current?.focus()
      document.addEventListener('click', handleClickOutside)
    }
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [searchActive])

  const handleClickOutside = ({ target }) => {
    if (searchField.current?.contains(target)) return

    setSearchActive(false)
  }

  const formCallback = () => {
    history.push('/search/' + values.query)
  }

  const { onChange, onSubmit, values } = useForm(formCallback, {
    query: ''
  })

  const openNav = () => {
    setAdminNotification(false)
    setMenuState()
  }

  return (
    <header className="app_head">
      <div className="head_inner">
        <div className="head_left">
          <div className="open_nav" onClick={openNav}>
            <i className={adminNotification ? 'bx bx-menu with_notif' : 'bx bx-menu'} />
          </div>
          <h1 className="app_name">Forum</h1>
        </div>

        <ul className="head_act">
          <li className={searchActive ? 'head_search open' : 'head_search'}>
            <form className="head_search_form" onSubmit={onSubmit}>
              <input
                ref={searchField}
                className="head_search_field"
                type="search"
                name="query"
                value={values.query}
                placeholder={Strings.enterForSearch[lang] + '...'}
                onChange={onChange}
              />
            </form>
            <i className="head_search_ic bx bx-search" onClick={() => setSearchActive(!searchActive)} />
          </li>

          {user ? (
            <Fragment>
              <Notifications />

              <Dropdown />
            </Fragment>
          ) : (
           <Fragment>
              <li className="head_auth">
                <Link to="/signup" className="btn media_hide">
                  <i className="bx bx-user-plus" />
                  <span>{Strings.signUp[lang]}</span>
                </Link>
              </li>

              <li className="head_auth">
                <Link to="/signin" className="btn media_hide hollow">
                  <i className="bx bx-log-in" />
                  <span>{Strings.signIn[lang]}</span>
                </Link>
              </li>
            </Fragment>
          )}
        </ul>
      </div>
    </header>
  )
}

export default Header;
