export const adminMenu = [
    { //quản lý người dùng
        name: 'menu.admin.system management',
        menus: [
            {
                // name: 'menu.system.system-administrator.header',
                name: 'menu.admin.manage-user', link: '/system/user-manage'
                // subMenus: [
                //     { name: 'menu.system.system-administrator.user-manage', link: '/system/user-manage' },
                //     { name: 'menu.system.system-administrator.product-manage', link: '/system/product-manage' },
                //     { name: 'menu.system.system-administrator.register-package-group-or-account', link: '/system/register-package-group-or-account' },
                // ]
            },
            // {
            //     name: 'menu.admin.manage-staff', link: '/system/product-manage'
            // },
            {
                name: 'menu.admin.manage-staff', link: '/system/staff-manage'
            },
            {
                name: 'menu.admin.manage-client', link: '/system/manage-client'
            },
        ]
    },
    { //quản lý dịch vụ
        name: 'menu.admin.services',
        menus: [
            {
                name: 'menu.admin.manage-services', link: '/system/manage-services'
            },
        ]
    },
    { //quản lý hợp đồng
        name: 'menu.admin.contracts',
        menus: [
            {
                name: 'menu.admin.manage-contracts', link: '/system/manage-contracts'
            },
        ]
    },
    { //thống kê báo cáo
        name: 'menu.admin.statistical',
        menus: [
            {
                name: 'menu.admin.statistical-report', link: '/system/statistical-report'
            },
        ]
    }

];