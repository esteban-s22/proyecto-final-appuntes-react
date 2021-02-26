import { useContext, useEffect, useState } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import { StoreContext } from 'store/Store';

import { Section } from 'components/Section';
import Breadcrumbs from 'components/Breadcrumbs';
import SortNav from 'components/SortNav';

import Newest from './Newest';
import Old from './Old';
import Online from './Online';

const Users = ({ history }) => {
  document.title = 'Forum | Users'
  const { setPostType, setFabVisible } = useContext(StoreContext)
  const { path } = useRouteMatch()
  const [init, setInit] = useState(true)
  const [sort, setSort] = useState('default')

  useEffect(() => {
    if (init) {
      setFabVisible(true)
      setPostType({
        type: 'thread',
        id: null
      })
    }
    setInit(false)
  }, [setInit, init, setPostType, setFabVisible])

  useEffect(() => {
    let route
    if (sort === 'old') {
      route = path + '/oldest'
    } else if (sort === 'online') {
      route = path + '/online'
    } else {
      route = path + '/'
    }

    history.push(route)
  }, [sort])

  return (
    <Section>
      <Breadcrumbs current="Users" links={[
        { title: 'Home', link: '/' }
      ]} />

      <SortNav links={[
        { title: 'Newest', sort: 'default' },
        { title: 'Oldest', sort: 'old' },
        { title: 'Online', sort: 'online' }
      ]} setSort={setSort} state={sort} />

      <Switch>
        <Route path={path + '/oldest'} exact component={Old} />
        <Route path={path + '/online'} exact component={Online} />
        <Route path={path} exact component={Newest} />
      </Switch>
    </Section>
  )
}

export default Users;
