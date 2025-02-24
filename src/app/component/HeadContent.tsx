import React from 'react'
import Link from 'next/link';

export default function HeadContent() {

  return (
    <div className='d-flex justify-content-between mb-2'>
        <div className='d-flex align-items-end'>
            <h1>Manage</h1>
            <p>Control panel</p>
        </div>
        <div className='p-2'>
            <ul className='nav'>
                <li>
                    <Link href={'/'}>
                        <i className="bi bi-house me-2"></i>
                        home
                    </Link>
                </li>
            </ul>
        </div>
    </div>
  )
}
