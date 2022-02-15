import React from 'react'
import MasterLayout from '../components/Layout';
function NotFoundPage() {
  return (
    <MasterLayout >
    <h3>Đây là trang 404</h3>
    </MasterLayout>
  )
}

export default React.memo(NotFoundPage);