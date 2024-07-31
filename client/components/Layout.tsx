import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
      <div id="page-container">
        <div id="content-wrap">
          <h1>Header</h1>
          <Outlet />
        </div>
        <h1>Footer</h1>
      </div>
    </>
  )
}
