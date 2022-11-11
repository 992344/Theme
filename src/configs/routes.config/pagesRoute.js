import React from 'react'
import { PAGES_PREFIX_PATH } from 'constants/route.constant'
import { ADMIN, USER } from 'constants/roles.constant'

const pagesRoute = [
    {
        key: 'pages.welcome',
        path: `${PAGES_PREFIX_PATH}/welcome`,
        component: React.lazy(() => import('views/pages/Welcome')),
        authority: [ADMIN, USER],
    },
    {
        key: 'pages.accessDenied',
        path: '/access-denied',
        component: React.lazy(() => import('views/pages/AccessDenied')),
        authority: [ADMIN, USER],
    },
    {
		key: 'page.new',
        path: `/new`,
        component: React.lazy(() => import('views/New')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'gutter'
        }
    },		
]

export default pagesRoute