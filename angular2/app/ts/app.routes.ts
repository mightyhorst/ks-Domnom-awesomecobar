import { provideRouter, RouterConfig } from '@angular/router'; 
import { Homepage19 } from '/app/js/pages/Homepage/homepage19.component';
import { Menu20 } from '/app/js/pages/Menu/menu20.component';
import { OrdersPayments21 } from '/app/js/pages/OrdersPayments/orderspayments21.component';
import { Rewards22 } from '/app/js/pages/Rewards/rewards22.component';
import { Campaigns23 } from '/app/js/pages/Campaigns/campaigns23.component';
import { ReservationsWaitlist24 } from '/app/js/pages/ReservationsWaitlist/reservationswaitlist24.component';


export const routes: RouterConfig = [
	{
		path: '',
		component: Homepage19
	},
	{
		path: 'menu',
		component: Menu20
	},
	{
		path: 'orders',
		component: OrdersPayments21
	},
	{
		path: 'rewards',
		component: Rewards22
	},
	{
		path: 'campaigns',
		component: Campaigns23
	},
	{
		path: 'reservations',
		component: ReservationsWaitlist24
	},
];

export const APP_ROUTER_PROVIDERS = [
	provideRouter(routes)
];