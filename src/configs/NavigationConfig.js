import { 
  DashboardOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
  PictureOutlined,
  GiftOutlined,
  ShopOutlined,
  TeamOutlined,
  MailOutlined,
  SettingOutlined,
  MobileOutlined,
  FileTextOutlined,
} from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

const dashBoardNavTree = [{
  key: 'home',
  path: `${APP_PREFIX_PATH}/home`,
  title: 'Основные',
  icon: DashboardOutlined,
  breadcrumb: false,
  submenu: [
    {
      key: 'dashboard',
      path: `${APP_PREFIX_PATH}/home/dashboard`,
      title: 'Дашборд',
      icon: DashboardOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'catalog',
      path: `${APP_PREFIX_PATH}/catalog`,
      title: 'Каталог',
      icon: ShoppingCartOutlined,
      breadcrumb: false,
      submenu: [
        {
          key: 'products',
          path: `${APP_PREFIX_PATH}/catalog/products`,
          title: 'Товары',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'categories',
          path: `${APP_PREFIX_PATH}/catalog/categories`,
          title: 'Категории',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'collection',
          path: `${APP_PREFIX_PATH}/catalog/collection`,
          title: 'Коллекции',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'combo',
          path: `${APP_PREFIX_PATH}/catalog/combo`,
          title: 'Комбо',
          breadcrumb: false,
          submenu: []
        }
      ]
    },
    {
      key: 'orders',
      path: `${APP_PREFIX_PATH}/orders`,
      title: 'Заказы',
      icon: ShoppingOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'clients',
      path: `${APP_PREFIX_PATH}/clients`,
      title: 'Клиенты',
      icon: UserOutlined,
      breadcrumb: false,
      submenu: [
        {
          key: 'clients.list',
          path: `${APP_PREFIX_PATH}/clients/clients-list`,
          title: 'Список клиентов',
          breadcrumb: false,
          submenu: [

          ]
        },
        {
          key: 'clients.group',
          path: `${APP_PREFIX_PATH}/clients/clients-group`,
          title: 'Группы клиентов',
          breadcrumb: false,
          submenu: [

          ]
        },

      ]
    },
    {
      key: 'banners',
      path: `${APP_PREFIX_PATH}/banners`,
      title: 'Баннеры',
      icon: PictureOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'promo',
      path: `${APP_PREFIX_PATH}/promo`,
      title: 'Промокоды',
      icon: GiftOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'offline',
      path: `${APP_PREFIX_PATH}/offline-points`,
      title: 'Оффлайн-точки',
      icon: ShopOutlined,
      breadcrumb: false,
      submenu: [
        {
          key: 'offline.address',
          path: `${APP_PREFIX_PATH}/home/offline-points/address`,
          title: 'Адреса',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'geo.zone',
          path: `${APP_PREFIX_PATH}/home/offline-points/geo-zone`,
          title: 'Гео-зоны',
          breadcrumb: false,
          submenu: []
        },
      ]
    },
    {
      key: 'staff',
      path: `${APP_PREFIX_PATH}/staff`,
      title: 'Сотрудники',
      icon: TeamOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'mail',
      path: `${APP_PREFIX_PATH}/mail`,
      title: 'Рассылки',
      icon: MailOutlined,
      breadcrumb: false,
      submenu: []
    },

  ]

}]

const systemNavTree = [{
  key: 'system',
  path: `${APP_PREFIX_PATH}/home`,
  title: 'Системные',
  breadcrumb: false,
  submenu: [
    {
      key: 'settings',
      path: `${APP_PREFIX_PATH}/settings`,
      title: 'Настройки',
      icon: SettingOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'mobile.app',
      path: `${APP_PREFIX_PATH}/mobile-app`,
      title: 'Мобильное приложение',
      icon: MobileOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'logs',
      path: `${APP_PREFIX_PATH}/logs`,
      title: 'Логи',
      icon: FileTextOutlined ,
      breadcrumb: false,
      submenu: []
    },



  ]

}]

const navigationConfig = [
  ...dashBoardNavTree,
  ...systemNavTree,
]

export default navigationConfig;
