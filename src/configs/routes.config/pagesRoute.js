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
        path: `/ProductManagement`,
        component: React.lazy(() => import('views/pages/ProductManagement/Productmanagementtable')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'gutter'
        }
    },	
    {
		key: 'page.SupplierM',
        path: `/Suppliertable`,
        component: React.lazy(() => import('views/pages/SupplierManagemennt/Suppliertable')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'gutter'
        }
    },	
    {
		key: 'page.SupplierManagementNew',
        path: `/SupplierManagement/AddNew`,
        component: React.lazy(() => import('views/pages/SupplierManagemennt/Addnewsupplier.js')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'gutter'
        }
    },	
    {
		key: 'page.SupplierM',
        path: `/DispatchNotification`,
        component: React.lazy(() => import('views/pages/DispatchNotification/Dispatchnotificationtable')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'gutter'
        }
    },	
    {
		key: 'page.SupplierM',
        path: `/DeliveryChallanTable`,
        component: React.lazy(() => import('views/pages/DeliveryChallan/Deliverychallan')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'gutter'
        }
    },	
    {
		key: 'page.SupplierM',
        path: `/Supplierpo`,
        component: React.lazy(() => import('views/pages/Supplier_PO/Supplierpo')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'gutter'
        }
    },
    
    {
		key: 'page.SupplierM',
        path: `/Payment`,
        component: React.lazy(() => import('views/pages/Payment/Payment')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'gutter'
        }
    },	
    {
		key: 'page.SupplierM',
        path: `/CustomerOnboarding`,
        component: React.lazy(() => import('views/pages/CustomerOnboarding/Customeronboarding')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'gutter'
        }
    },	
    {
		key: 'page.Supplie',
        path: `/Salesorder`,
        component: React.lazy(() => import('views/pages/SalesOrder/Salesorder')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'gutter'
        }
    },								
]

export default pagesRoute